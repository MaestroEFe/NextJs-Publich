import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import { Category } from '@repo/cms';

// Create a new category
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { name, description, parentId, postType } = await req.json();

    if (!name || !postType) {
      return NextResponse.json({ message: 'Category name and post type are required' }, { status: 400 });
    }

    const existingCategory = await Category.findOne({ name, postType });
    if (existingCategory) {
      return NextResponse.json({ message: 'A category with this name already exists for this post type.' }, { status: 409 });
    }

    const newCategory = new Category({ name, description, parent: parentId || null, postType });
    await newCategory.save();

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Get all categories
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  
  const { searchParams } = new URL(req.url);
  const postType = searchParams.get('postType');

  try {
    await connectDB();
    const filter = postType ? { postType } : {};
    const categories = await Category.find(filter).populate('parent', 'name').sort({ name: 1 });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

