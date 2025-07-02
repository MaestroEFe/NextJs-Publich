import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { Tag } from '@repo/cms';
import { hasAdminAccess } from '@repo/auth';

// Create a new tag
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const { name, postType } = await req.json();

    if (!name || !postType) {
      return NextResponse.json({ message: 'Tag name and post type are required' }, { status: 400 });
    }

    const existingTag = await Tag.findOne({ name, postType });
    if (existingTag) {
      return NextResponse.json({ message: 'A tag with this name already exists for this post type.' }, { status: 409 });
    }

    const newTag = new Tag({ name, postType });
    await newTag.save();

    return NextResponse.json(newTag, { status: 201 });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Get all tags
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url); 
  const postType = searchParams.get('postType');
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const filter = postType ? { postType } : {};
    const tags = await Tag.find(filter).sort({ name: 1 });
    return NextResponse.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
