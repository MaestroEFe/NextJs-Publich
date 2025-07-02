'use client';

import { useState, useEffect } from 'react';

const CrmForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    jobTitle: '',
    phone: '',
    tags: '', // Storing tags as a comma-separated string for easy input
  });
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch('/api/crm/contacts');
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setFormData({
              company: data.company || '',
              jobTitle: data.jobTitle || '',
              phone: data.phone || '',
              tags: (data.tags || []).join(', '),
            });
          }
        }
      } catch (error) {
        setApiError('Failed to load CRM data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    setSuccess('');

    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    try {
      const res = await fetch('/api/crm/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess('CRM details updated successfully!');
      } else {
        const data = await res.json();
        setApiError(data.message || 'Failed to update CRM details.');
      }
    } catch (error) {
      setApiError('Something went wrong!');
    }
  };

  if (isLoading) {
    return <p>Loading CRM details...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">CRM Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        {apiError && <p className="text-red-500">{apiError}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Update CRM Details
        </button>
      </form>
    </div>
  );
};

export default CrmForm;
