import { getServerSession } from 'next-auth/next';
import { authOptions, connectDB } from '@/lib/auth';
import { Post, Category, Tag } from '@repo/cms';
import PostClient from './components/PostClient';

// Fetch all necessary data in parallel for efficiency
async function getCmsData() {
  await connectDB();
  try {
    const [posts, categories, tags] = await Promise.all([
      Post.find().populate('author', 'name').sort({ createdAt: -1 }).lean(),
      Category.find().sort({ name: 1 }).lean(),
      Tag.find().sort({ name: 1 }).lean(),
    ]);

    // Serialize the data to make it safe to pass from Server to Client Components
    return {
      posts: JSON.parse(JSON.stringify(posts)),
      categories: JSON.parse(JSON.stringify(categories)),
      tags: JSON.parse(JSON.stringify(tags)),
    };
  } catch (error) {
    console.error('Failed to fetch CMS data:', error);
    return { posts: [], categories: [], tags: [] };
  }
}

export default async function PostsPage() {
  const session = await getServerSession(authOptions); // Ensures user is authenticated via layout
  const { posts, categories, tags } = await getCmsData();

  return <PostClient initialPosts={posts} initialCategories={categories} initialTags={tags} />;
}
