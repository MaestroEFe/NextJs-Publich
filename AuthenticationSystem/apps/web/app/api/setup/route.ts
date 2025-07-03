import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB, User } from '@repo/auth';

export async function POST() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ message: 'This endpoint is only available in development mode.' }, { status: 403 });
  }

  try {
    await connectDB(process.env.MONGODB_URI!);

    const adminEmail = 'admin@example.com';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      await User.create({
        name: 'Admin User',
        email: adminEmail,
        password: 'password123', // Remember to change this
        role: 'admin',
        isVerified: true,
      });
      console.log('Admin user created.');
      return new NextResponse('Admin user created successfully.', { status: 200 });
    } else {
      console.log('Admin user already exists.');
      return new NextResponse('Admin user already exists.', { status: 200 });
    }
  } catch (error) {
    console.error('Error in setup route:', error);
    return new NextResponse('Internal server error', { status: 500 });
  } finally {
    // Disconnect after a short delay to ensure all operations are complete
    setTimeout(() => {
      mongoose.disconnect();
      console.log('MongoDB disconnected.');
    }, 1500);
  }
}
