import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import { Category, Tag, Post } from '@repo/cms';

// Demo data for each post type
const demoData = {
  blog: {
    categories: [
      { name: 'Announcements', description: 'Official updates', postType: 'blog' },
      { name: 'Tech', description: 'Tech news', postType: 'blog' },
    ],
    tags: [
      { name: 'launch', postType: 'blog' },
      { name: 'update', postType: 'blog' },
    ],
    posts: [
      {
        title: 'Welcome to Our Blog!',
        content: 'This is our very first announcement.',
        postType: 'blog',
        categoryName: 'Announcements',
        tagNames: ['launch'],
      },
    ],
  },
  product: {
    categories: [
      { name: 'Electronics', description: 'Gadgets and devices', postType: 'product' },
      { name: 'Apparel', description: 'Clothing and accessories', postType: 'product' },
    ],
    tags: [
      { name: 'sale', postType: 'product' },
      { name: 'new', postType: 'product' },
    ],
    posts: [
      {
        title: 'Introducing SmartWatch X',
        content: 'Meet our latest wearable device.',
        postType: 'product',
        categoryName: 'Electronics',
        tagNames: ['new', 'sale'],
      },
    ],
  },
  service: {
    categories: [
      { name: 'Consulting', description: 'Expert advice', postType: 'service' },
      { name: 'Support', description: 'Customer support', postType: 'service' },
    ],
    tags: [
      { name: 'premium', postType: 'service' },
    ],
    posts: [
      {
        title: 'Premium Consulting Launched',
        content: 'Our new consulting service is live.',
        postType: 'service',
        categoryName: 'Consulting',
        tagNames: ['premium'],
      },
    ],
  },
  page: {
    categories: [
      { name: 'About', description: 'About us page', postType: 'page' },
      { name: 'Contact', description: 'Contact info', postType: 'page' },
    ],
    tags: [
      { name: 'info', postType: 'page' },
    ],
    posts: [
      {
        title: 'About Our Company',
        content: 'Learn more about us.',
        postType: 'page',
        categoryName: 'About',
        tagNames: ['info'],
      },
    ],
  },
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    await connectDB();

    const summary: Record<string, any> = {};
    for (const [postType, { categories, tags, posts }] of Object.entries(demoData)) {
      // Seed categories
      const catResults = [];
      for (const cat of categories) {
        let category = await Category.findOne({ name: cat.name, postType });
        if (!category) {
          category = await Category.create(cat);
          catResults.push(category.name);
        }
      }
      // Seed tags
      const tagResults = [];
      for (const tag of tags) {
        let tagDoc = await Tag.findOne({ name: tag.name, postType });
        if (!tagDoc) {
          tagDoc = await Tag.create(tag);
          tagResults.push(tagDoc.name);
        }
      }
      // Seed posts
      const postResults = [];
      for (const p of posts) {
        let exists = await Post.findOne({ title: p.title, postType });
        if (!exists) {
          const category = await Category.findOne({ name: p.categoryName, postType });
          const tagDocs = await Tag.find({ name: { $in: p.tagNames }, postType });
          // Generate slug from title (mimic the Post model's slug generation)
          const slug = p.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');
            
          const post = await Post.create({
            title: p.title,
            slug,
            content: p.content,
            postType,
            category: category ? category._id : undefined,
            tags: tagDocs.map(t => t._id),
          });
          postResults.push(post.title);
        }
      }
      summary[postType] = {
        categories: catResults,
        tags: tagResults,
        posts: postResults,
      };
    }
    return NextResponse.json({ message: 'Demo content seeded', summary });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error seeding demo content', error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to seed demo content.' }, { status: 405 });
}
