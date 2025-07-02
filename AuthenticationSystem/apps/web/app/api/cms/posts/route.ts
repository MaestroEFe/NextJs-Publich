import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import { Post, Category, Tag } from '@repo/cms';

// Create a new post
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const body = await req.json();
    const { title, content, postType, status, categories, tags, metadata } = body;

    if (!title || !postType) {
      return NextResponse.json({ message: 'Title and Post Type are required' }, { status: 400 });
    }

    const newPost = new Post({
      title,
      content,
      postType,
      status,
      author: session.user.id,
      categories, // Assumes these are arrays of ObjectIds
      tags,       // Assumes these are arrays of ObjectIds
      metadata,
    });

    await newPost.save();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Get all posts
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const posts = await Post.find()
      .populate('author', 'name email') // Populate author with specific fields
      .populate('categories', 'name slug') // Populate categories
      .populate('tags', 'name slug')       // Populate tags
      .sort({ createdAt: -1 });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
