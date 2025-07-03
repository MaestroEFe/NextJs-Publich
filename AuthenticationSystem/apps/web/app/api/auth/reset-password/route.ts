import { NextResponse } from 'next/server';
import { connectDB, User } from '@repo/auth';
import crypto from 'crypto';

export async function POST(req: Request) {
  await connectDB(process.env.MONGODB_URI!);

  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: 'Token and password are required.' },
        { status: 400 }
      );
    }

    // Hash the incoming token to match the one stored in the database
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetTokenExpires: { $gt: Date.now() }, // Check if the token is still valid
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired password reset token.' },
        { status: 400 }
      );
    }

    // Set the new password
    user.password = password; // The pre-save hook in the User model will hash this

    // Clear the reset token fields
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;

    await user.save();

    return NextResponse.json(
      { message: 'Password has been reset successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { message: 'An error occurred while resetting the password.' },
      { status: 500 }
    );
  }
}