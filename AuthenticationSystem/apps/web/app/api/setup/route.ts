import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/User';
import connectDB from '@/lib/connectDB';
import { getSeedData } from '@/lib/seed';

export async function POST() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ message: 'This endpoint is only available in development mode.' }, { status: 403 });
  }

  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    console.log('Cleared existing user data.');

    // Get seed data
    const seedData = await getSeedData();

    // Insert new data
    await User.insertMany(seedData.users);
    console.log('Seeded new user data.');

    return NextResponse.json({ message: 'Database setup and seeded successfully!' });
  } catch (error) {
    console.error('Error during database setup:', error);
    return NextResponse.json({ message: 'Something went wrong during database setup.' }, { status: 500 });
  } finally {
    // Disconnect after a short delay to ensure all operations are complete
    setTimeout(() => {
      mongoose.disconnect();
      console.log('MongoDB disconnected.');
    }, 1500);
  }
}
