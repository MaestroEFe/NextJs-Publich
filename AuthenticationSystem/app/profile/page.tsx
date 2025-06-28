'use client';

import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        {session ? (
          <div>
            <p><strong>Name:</strong> {session.user?.name}</p>
            <p><strong>Email:</strong> {session.user?.email}</p>
            <p><strong>Role:</strong> {session.user?.role}</p>
          </div>
        ) : (
          <p>Loading session...</p>
        )}
      </div>
    </div>
  );
}
