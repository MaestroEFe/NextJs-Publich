import bcrypt from 'bcryptjs';

const saltRounds = 10;

export const getSeedData = async () => {
  const hashedPassword = await bcrypt.hash('adminpassword', saltRounds);

  return {
    users: [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        group: 'admin',
      },
      {
        name: 'Regular User',
        email: 'user@example.com',
        password: hashedPassword, // Using the same hashed password for simplicity
        group: 'user',
      },
    ],
    // Add other models here in the future
    // e.g., posts: [ ... ],
  };
};
