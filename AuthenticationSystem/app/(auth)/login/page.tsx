'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Invalid credentials. Please try again.');
        return;
      }

      router.replace('/dashboard');
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
