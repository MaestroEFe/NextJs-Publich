import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './User';
import Post from './Post';
import Contact from './Contact';
import PasswordResetToken from './PasswordResetToken';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-system';

const seedUsers = async () => {
  // Clear existing users
  await User.deleteMany({});

  const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      group: 'admin'
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      group: 'user'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password123',
      group: 'user'
    }
  ];

  const createdUsers = await User.insertMany(users);
  console.log('Seeded users');
  return createdUsers;
};

const seedPosts = async (adminId: mongoose.Types.ObjectId) => {
  // Clear existing posts
  await Post.deleteMany({});

  const posts = [
    {
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      content: 'This is a comprehensive guide to getting started with Next.js...',
      summary: 'Learn the basics of Next.js and build your first application.',
      type: 'blog',
      published: true,
      tags: ['nextjs', 'react', 'javascript'],
      author: adminId
    },
    {
      title: 'Premium Web Hosting',
      slug: 'premium-web-hosting',
      content: 'Our premium web hosting includes...',
      summary: 'High-performance web hosting for your business.',
      type: 'service',
      published: true,
      price: 29.99,
      features: ['99.9% Uptime', '24/7 Support', 'Free SSL'],
      category: 'hosting',
      author: adminId
    },
    {
      title: 'Wireless Headphones',
      slug: 'wireless-headphones',
      content: 'Experience crystal clear sound with our premium wireless headphones...',
      summary: 'High-quality wireless headphones with noise cancellation.',
      type: 'product',
      published: true,
      price: 199.99,
      features: ['Noise Cancelling', '30hr Battery', 'Bluetooth 5.0'],
      category: 'electronics',
      author: adminId
    }
  ];

  await Post.insertMany(posts);
  console.log('Seeded posts');
};

const seedContacts = async () => {
  // Clear existing contacts
  await Contact.deleteMany({});

  const contacts = [
    {
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1234567890',
      subject: 'Inquiry about services',
      message: 'I would like to know more about your web development services.'
    },
    {
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      message: 'Just wanted to say I love your blog posts!'
    }
  ];

  await Contact.insertMany(contacts);
  console.log('Seeded contacts');
};

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Seed data
    const users = await seedUsers();
    const adminUser = users.find(user => user.group === 'admin');
    
    if (adminUser) {
      await seedPosts(adminUser._id);
    } else {
      console.warn('No admin user found for post seeding');
    }
    
    await seedContacts();

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
