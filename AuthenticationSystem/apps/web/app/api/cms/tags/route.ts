import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { Tag } from '@repo/cms';
import { hasAdminAccess } from '@repo/auth';

// Create a new tag
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ message: 'Tag name is required' }, { status: 400 });
    }

    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return NextResponse.json({ message: 'Tag already exists' }, { status: 409 });
    }

    const newTag = new Tag({ name });
    await newTag.save();

    return NextResponse.json(newTag, { status: 201 });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Get all tags
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const tags = await Tag.find().sort({ name: 1 });
    return NextResponse.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
