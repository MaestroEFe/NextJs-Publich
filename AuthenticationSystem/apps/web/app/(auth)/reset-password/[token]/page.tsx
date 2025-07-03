"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { resetPasswordSchema } from '@repo/auth';
import Link from 'next/link';

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setApiError('');
    setSuccessMessage('');

    try {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: data.password }),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMessage(result.message);
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setApiError(result.message || 'Failed to reset password.');
      }
    } catch (error) {
      setApiError('An unexpected error occurred.');
    }
  };

  if (successMessage) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Password Reset Successful</h1>
        <p className="text-green-500">{successMessage}</p>
        <p>You will be redirected to the login page shortly.</p>
        <Link href="/login" className="text-blue-500 hover:underline">
          Or click here to login now.
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Set New Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {apiError && <p className="text-red-500">{apiError}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
