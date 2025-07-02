import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import { Category } from '@repo/cms';

// Create a new category
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const { name, description } = await req.json();

    if (!name) {
      return NextResponse.json({ message: 'Category name is required' }, { status: 400 });
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json({ message: 'Category already exists' }, { status: 409 });
    }

    const newCategory = new Category({ name, description });
    await newCategory.save();

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Get all categories
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  try {
    const categories = await Category.find().sort({ name: 1 });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
