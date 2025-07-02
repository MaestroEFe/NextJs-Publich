"use client";

import { useState } from 'react';
import { z } from 'zod';

interface AuthFormProps {
  formType: 'login' | 'register';
  onSubmit: (data: any) => Promise<void>;
  schema: z.ZodObject<any, any, any>;
  apiError: string;
}

const AuthForm = ({ formType, onSubmit, schema, apiError }: AuthFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<z.ZodError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error);
      return;
    }

    await onSubmit(result.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formType === 'register' && (
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors?.flatten().fieldErrors.name && (
            <p className="text-red-500 text-sm">{errors.flatten().fieldErrors.name}</p>
          )}
        </div>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors?.flatten().fieldErrors.email && (
          <p className="text-red-500 text-sm">{errors.flatten().fieldErrors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors?.flatten().fieldErrors.password && (
          <p className="text-red-500 text-sm">{errors.flatten().fieldErrors.password}</p>
        )}
      </div>
      {apiError && <p className="text-red-500">{apiError}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {formType === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
