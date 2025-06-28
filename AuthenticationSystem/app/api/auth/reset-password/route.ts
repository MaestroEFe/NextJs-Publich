import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import PasswordResetToken from '@/models/PasswordResetToken';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    const user = await User.findOne({ email });

    // Always return a success message to prevent email enumeration
    if (!user) {
      return NextResponse.json({ message: 'If a user with that email exists, a password reset link has been sent.' });
    }

    // Generate a secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

    // Store the token in the database
    await new PasswordResetToken({
      email,
      token,
      expiresAt,
    }).save();

    // In a real application, you would send an email here
    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/${token}`;
    console.log(`Password reset link for ${email}: ${resetLink}`);

    return NextResponse.json({ message: 'If a user with that email exists, a password reset link has been sent.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
