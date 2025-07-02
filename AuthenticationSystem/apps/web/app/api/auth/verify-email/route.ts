import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import crypto from 'crypto';

export async function POST(req: Request) {
  await connectDB();

  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ message: 'Token is required.' }, { status: 400 });
    }

    // Hash the token that was sent in the email to match the one in the database
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpires: { $gt: Date.now() }, // Check if token is not expired
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired verification token.' },
        { status: 400 }
      );
    }

    // Mark user as verified and remove token fields
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    await user.save();

    return NextResponse.json(
      { message: 'Email verified successfully! You can now log in.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { message: 'An error occurred during email verification.' },
      { status: 500 }
    );
  }
}
