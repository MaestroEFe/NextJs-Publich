'use client';

import { useSession } from 'next-auth/react';

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
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome, Admin {session.user.name}!</p>
        {/* Admin-specific content goes here */}
      </div>
    </div>
  );
}
