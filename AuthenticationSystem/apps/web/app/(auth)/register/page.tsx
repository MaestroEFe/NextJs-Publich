'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerSchema } from '@repo/auth';
import AuthForm from '@/components/AuthForm';

const RegisterPage = () => {
  const [apiError, setApiError] = useState('');
  const router = useRouter();

  const handleRegister = async (data: any) => {
    setApiError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/login');
      } else {
        const result = await res.json();
        setApiError(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setApiError('Something went wrong!');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
      <AuthForm
        formType="register"
        onSubmit={handleRegister}
        schema={registerSchema}
        apiError={apiError}
      />
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
