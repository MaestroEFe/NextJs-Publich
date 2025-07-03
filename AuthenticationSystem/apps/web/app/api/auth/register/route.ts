import { NextResponse } from 'next/server';
import { connectDB, User, sendEmail } from '@repo/auth';

import crypto from 'crypto';

export async function POST(req: Request) {
  await connectDB(process.env.MONGODB_URI!);

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists.' },
        { status: 409 }
      );
    }

    const newUser = new User({ name, email, password });

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    newUser.verificationToken = crypto
      .createHash('sha256')
      .update(verificationToken)
      .digest('hex');
    newUser.verificationTokenExpires = new Date(Date.now() + 3600000); // 1 hour from now

    await newUser.save();

    // Send verification email
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`;

    const emailHtml = `
      <h1>Welcome to the App!</h1>
      <p>Thanks for signing up. Please verify your email by clicking the link below:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>This link will expire in 1 hour.</p>
    `;

    await sendEmail({
      to: newUser.email,
      subject: 'Verify Your Email Address',
      html: emailHtml,
    });

    return NextResponse.json(
      {
        message:
          'Registration successful! Please check your email to verify your account.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'An error occurred during registration.' },
      { status: 500 }
    );
  }
}
