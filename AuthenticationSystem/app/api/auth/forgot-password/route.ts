import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { sendEmail } from '@/lib/email';
import crypto from 'crypto';

export async function POST(req: Request) {
  await connectDB();

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    const user = await User.findOne({ email });

    // To prevent email enumeration, always return a success-like message.
    // The email is only sent if the user actually exists.
    if (user) {
      // Generate password reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
      user.passwordResetTokenExpires = new Date(Date.now() + 3600000); // 1 hour

      await user.save();

      // Send password reset email
      const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

      const emailHtml = `
        <h1>You requested a password reset</h1>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link is valid for 1 hour. If you did not request this, please ignore this email.</p>
      `;

      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        html: emailHtml,
      });
    }

    return NextResponse.json(
      {
        message:
          'If an account with this email exists, a password reset link has been sent.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    // Generic error to avoid leaking information
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
