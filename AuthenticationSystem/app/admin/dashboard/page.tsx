'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  if (session?.user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Access Denied. You are not an admin.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-6">Welcome, Admin {session.user.name}!</p>

        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">Management</h2>
          <Link href="/admin/manage-users" className="text-blue-600 hover:underline block mb-2">
            Manage Users
          </Link>
          <Link href="/admin/manage-admins" className="text-blue-600 hover:underline block">
            Manage Admins
          </Link>
        </div>
      </div>
    </div>
  );
}
