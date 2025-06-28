'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('All fields are necessary.');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push('/login');
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
}
