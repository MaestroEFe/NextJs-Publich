import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@repo/auth';
import ServiceInquiry from '@repo/cms/src/models/ServiceInquiry';

export async function POST(request: NextRequest) {
  await connectDB(process.env.MONGODB_URI!);

  try {
    const data = await request.json();

    // Basic validation to ensure required fields are present
    const { fullName, email, phone, nationality, destination, studyLevel, services } = data;
    if (!fullName || !email || !phone || !nationality || !destination || !studyLevel || !services) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const newInquiry = new ServiceInquiry(data);
    await newInquiry.save();

    return NextResponse.json({ message: 'Inquiry submitted successfully.' }, { status: 201 });
  } catch (error) {
    console.error('Error saving service inquiry:', error);
    // Check for Mongoose validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ message: 'Invalid data provided.', details: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}
