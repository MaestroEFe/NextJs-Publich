import React from 'react';
import SeedButton from './components/SeedButton';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Welcome to the admin panel. Please use the sidebar to navigate and manage the content.
      </p>
      
      {/* Developer Actions */}
      <SeedButton />
    </div>
  );
}

