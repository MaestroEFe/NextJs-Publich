import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { Category } from '@repo/cms';
import CategoryClient from './components/CategoryClient';

async function getCategories() {
  await connectDB();
  try {
    const categories = await Category.find().sort({ name: 1 }).lean();
    // Mongoose documents are not plain objects, so we need to convert them
    // The .lean() method above does this, but if you can't use it, you must serialize
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export default async function CategoriesPage() {
  // Although the layout protects the route, we can still have checks here if needed
  const session = await getServerSession(authOptions);
  const initialCategories = await getCategories();

  return <CategoryClient initialCategories={initialCategories} />;
}
