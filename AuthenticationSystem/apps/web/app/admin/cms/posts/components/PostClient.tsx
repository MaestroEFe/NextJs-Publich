'use client';

import { useState } from 'react';
import { IPost, ICategory, ITag } from '@repo/cms';

interface PostClientProps {
  initialPosts: IPost[];
  initialCategories: ICategory[];
  initialTags: ITag[];
}

export default function PostClient({ initialPosts, initialCategories, initialTags }: PostClientProps) {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('blog');
  const [status, setStatus] = useState('draft');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/cms/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          postType,
          status,
          categories: selectedCategories,
          tags: selectedTags,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create post');
      }

      const newPost = await response.json();
      // To display the new post correctly, we'd need to re-fetch or get populated data back
      // For simplicity, we'll just alert the user and they can refresh.
      alert('Post created successfully!');
      // Reset form
      setTitle('');
      setContent('');
      setPostType('blog');
      setStatus('draft');
      setSelectedCategories([]);
      setSelectedTags([]);
      // Ideally, you would re-fetch the posts list here to show the new post
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Manage Posts</h1>
      
      {/* Create Post Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleCreatePost}>
          {/* Title, Content, PostType, Status fields... */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Content</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={5} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="postType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Post Type</label>
              <select id="postType" value={postType} onChange={(e) => setPostType(e.target.value)} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option value="blog">Blog</option>
                <option value="product">Product</option>
                <option value="service">Service</option>
                <option value="page">Page</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Status</label>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Categories</label>
            <select multiple value={selectedCategories} onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, option => option.value))} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              {initialCategories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Tags</label>
            <select multiple value={selectedTags} onChange={(e) => setSelectedTags(Array.from(e.target.selectedOptions, option => option.value))} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              {initialTags.map(tag => <option key={tag._id} value={tag._id}>{tag.name}</option>)}
            </select>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50">
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </div>

      {/* Existing Posts Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Existing Posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Author</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.postType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.author?.name || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
