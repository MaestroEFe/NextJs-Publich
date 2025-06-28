"use client";

import { useState } from 'react';

const RequestResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!email) {
      setError('Email is required.');
      return;
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            </div>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
            Send Password Reset Link
            </button>
        </form>
    </div>
  );
};

export default RequestResetPasswordPage;
