"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserCard from '@/components/UserCard';

interface User {
  _id: string;
  name: string;
  email: string;
  group: string;
}

const ManageAdminsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (session?.user?.group !== 'admin') {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/admins');
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch admins');
        }
      } catch (error) {
        console.error('An error occurred while fetching admins:', error);
      }
      setLoading(false);
    };

    if (session?.user?.group === 'admin') {
      fetchUsers();
    }
  }, [session]);

  const handleUpdate = (updatedUser: User) => {
    setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
  };

  const handleDelete = (userId: string) => {
    setUsers(users.filter(user => user._id !== userId));
  };

  if (loading || status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Admins</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <UserCard key={user._id} user={user} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ManageAdminsPage;
