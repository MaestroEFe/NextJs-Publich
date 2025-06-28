"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserCard from '@/components/UserCard';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const ManageUsersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated' && session.user?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'admin') {
      fetchUsers();
    }
  }, [session]);

  const handleUpdateUser = async (user: User) => {
    try {
      const res = await fetch(`/api/admin/users/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        throw new Error('Failed to update user');
      }
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter((u) => u._id !== userId));
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onUpdate={handleUpdateUser}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
