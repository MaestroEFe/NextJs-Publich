import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { hasAdminAccess } from '@repo/auth';
import Navbar from '@/components/Navbar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !hasAdminAccess(session.user.group)) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            {/* Sidebar navigation links will go here */}
            <a href="/admin" className="block px-6 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a>
            <a href="/admin/cms/posts" className="block px-6 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Posts</a>
            <a href="/admin/cms/categories" className="block px-6 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Categories</a>
            <a href="/admin/cms/tags" className="block px-6 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Tags</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
