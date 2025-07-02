import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { Tag } from '@repo/cms';
import TagClient from './components/TagClient';
import { connectDB } from '@/lib/auth';

async function getTags() {
  await connectDB();
  try {
    const tags = await Tag.find().sort({ name: 1 }).lean();
    return JSON.parse(JSON.stringify(tags));
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

export default async function TagsPage() {
  const session = await getServerSession(authOptions);
  const initialTags = await getTags();

  return <TagClient initialTags={initialTags} />;
}
