'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>You are not authenticated. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
        <p className="mb-4">Welcome, {session.user?.name}!</p>
        <p>Your role is: <strong>{session.user?.role}</strong></p>

        {session.user?.role === 'admin' && (
          <div className="mt-6">
            <Link href="/admin/dashboard"
              className="text-blue-600 hover:underline">
              Go to Admin Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
