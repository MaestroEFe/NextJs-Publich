'use client';

import { useState } from 'react';

export default function SeedButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSeed = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/cms/seed-demo', {
        method: 'POST',
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to seed content');
      }
      setMessage(data.message);
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Developer Actions</h3>
      <div className="mt-2 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Quickly populate the database with sample posts, categories, and tags. This will delete all existing CMS content.</p>
        <button
          onClick={handleSeed}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Seeding...' : 'Seed Demo Content'}
        </button>
        {message && <p className={`mt-3 text-sm ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
      </div>
    </div>
  );
}
