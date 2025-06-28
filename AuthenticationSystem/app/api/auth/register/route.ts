import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';

export async function POST(req: Request) {
  await connectDB();

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
    await newUser.save();

    return NextResponse.json(
      { message: 'User registered successfully.' },
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
