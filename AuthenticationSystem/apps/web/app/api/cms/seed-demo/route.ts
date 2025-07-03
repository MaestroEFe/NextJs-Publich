import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { connectDB, User } from '@repo/auth';
import { authOptions } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import { Category, Post, Tag } from '@repo/cms';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB(process.env.MONGODB_URI!);

    // Clear existing data
    await Promise.all([
      Post.deleteMany({}),
      Category.deleteMany({}),
      Tag.deleteMany({}),
    ]);

    // --- Create Categories ---
    const blogCat1 = await Category.create({ name: 'Tech News', postType: 'blog' });
    const blogCat2 = await Category.create({ name: 'Tutorials', postType: 'blog' });

    const prodCat1 = await Category.create({ name: 'Electronics', postType: 'product' });
    const prodCat2 = await Category.create({ name: 'Books', postType: 'product' });
    await Category.create({ name: 'Laptops', postType: 'product', parent: prodCat1._id });
    await Category.create({ name: 'Smartphones', postType: 'product', parent: prodCat1._id });

    // --- Create Tags ---
    const blogTag1 = await Tag.create({ name: 'AI', postType: 'blog' });
    const blogTag2 = await Tag.create({ name: 'Next.js', postType: 'blog' });

    const prodTag1 = await Tag.create({ name: 'On Sale', postType: 'product' });
    const prodTag2 = await Tag.create({ name: 'Featured', postType: 'product' });

    // --- Create Posts ---
    await Post.create({
      title: 'The Rise of AI in Web Development',
      content: 'AI is revolutionizing how we build and interact with websites...',
      postType: 'blog',
      author: session.user.id,
      categories: [blogCat1._id],
      tags: [blogTag1._id, blogTag2._id],
      status: 'published',
      publishedAt: new Date(),
    });

    await Post.create({
      title: 'Getting Started with Next.js 14',
      content: 'A comprehensive guide to setting up your first Next.js project...',
      postType: 'blog',
      author: session.user.id,
      categories: [blogCat2._id],
      tags: [blogTag2._id],
      status: 'published',
      publishedAt: new Date(),
    });

    await Post.create({
      title: 'SuperGadget Pro X',
      content: 'The latest and greatest gadget you never knew you needed. Now 20% off!',
      postType: 'product',
      author: session.user.id,
      categories: [prodCat1._id],
      tags: [prodTag1._id, prodTag2._id],
      status: 'published',
      publishedAt: new Date(),
      meta: { price: 999.99, sku: 'SG-PRO-X' },
    });

    return NextResponse.json({ message: 'Demo content seeded successfully!' });

  } catch (error) {
    console.error('Error seeding demo content:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}
