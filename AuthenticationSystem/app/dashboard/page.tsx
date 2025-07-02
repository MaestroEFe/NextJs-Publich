'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Extend the session type to include our custom properties
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      group: string;
    };
  }
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [userGroup, setUserGroup] = useState<string>('user');
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      // The group should be available in session.user.group
      // If it's not, we might need to refresh the session
      if (session.user.group) {
        setUserGroup(session.user.group);
      } else {
        // Force a session update to get the latest data
        const updateSession = async () => {
          await fetch('/api/auth/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ update: true })
          });
          // Refresh the page to get updated session
          router.refresh();
        };
        updateSession();
      }
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">You need to be logged in to view this page.</div>
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
        <div className="space-y-4">
          <p className="text-lg">Welcome, <span className="font-semibold">{session?.user?.name || 'User'}</span>!</p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Your account details:</p>
            <ul className="mt-2 space-y-1">
              <li>Email: <span className="font-medium">{session?.user?.email}</span></li>
              <li>Role: <span className="font-medium">{userGroup || 'user'}</span></li>
            </ul>
          </div>
        </div>

        {userGroup === 'admin' && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Admin Panel</h3>
            <Link 
              href="/admin/dashboard"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
            >
              Go to Admin Dashboard →
            </Link>
          </div>
        )}

        {/* Debug section - can be removed in production */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <h4 className="font-medium mb-2">Session Debug Info:</h4>
          <pre className="text-xs overflow-x-auto p-2 bg-gray-100 rounded">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
