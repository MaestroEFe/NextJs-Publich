import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const userUpdateSchema = z.object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});
