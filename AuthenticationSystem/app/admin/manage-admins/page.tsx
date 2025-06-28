"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserCard from '@/components/UserCard';

interface Admin {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const ManageAdminsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (session?.user?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await fetch('/api/admin/admins');
        if (res.ok) {
          const data = await res.json();
          setAdmins(data);
        } else {
          console.error('Failed to fetch admins');
        }
      } catch (error) {
        console.error('An error occurred while fetching admins:', error);
      }
      setLoading(false);
    };

    if (session?.user?.role === 'admin') {
      fetchAdmins();
    }
  }, [session]);

  const handleUpdate = (updatedAdmin: Admin) => {
    setAdmins(admins.map(admin => admin._id === updatedAdmin._id ? updatedAdmin : admin));
  };

  const handleDelete = (adminId: string) => {
    setAdmins(admins.filter(admin => admin._id !== adminId));
  };

  if (loading || status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Admins</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {admins.map(admin => (
          <UserCard key={admin._id} user={admin} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ManageAdminsPage;
