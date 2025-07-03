import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@repo/auth';
import ContactMessage from '@repo/cms/src/models/ContactMessage';

export async function POST(request: NextRequest) {
  await connectDB(process.env.MONGODB_URI!);

  try {
    const data = await request.json();

    // Basic validation to ensure required fields are present
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const newContactMessage = new ContactMessage(data);
    await newContactMessage.save();

    return NextResponse.json({ message: 'Contact message submitted successfully.' }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact message:', error);
    // Check for Mongoose validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ message: 'Invalid data provided.', details: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}
