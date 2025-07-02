import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import User from '@/models/User';
import Post from '@/models/Post';
import Contact from '@/models/Contact';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await connectToDatabase();

    // Check if admin already exists
    const adminEmail = 'admin@example.com';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin user already exists.' },
        { status: 409 }
      );
    }

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    const adminUser = new User({
      name: 'Admin User',
      email: adminEmail,
      password: hashedPassword,
      group: 'admin',
    });

    await adminUser.save();

    // Create regular users
    const regularUsers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('password123', salt),
        group: 'user'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: await bcrypt.hash('password123', salt),
        group: 'user'
      }
    ];

    await User.insertMany(regularUsers);

    // Create sample posts
    const posts = [
      {
        title: 'Getting Started with Next.js',
        slug: 'getting-started-with-nextjs',
        content: 'This is a comprehensive guide to getting started with Next.js...',
        summary: 'Learn the basics of Next.js and build your first application.',
        type: 'blog',
        published: true,
        tags: ['nextjs', 'react', 'javascript'],
        author: adminUser._id
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
        author: adminUser._id
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
        author: adminUser._id
      }
    ];

    await Post.insertMany(posts);

    // Create sample contacts
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

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      users: 3, // admin + 2 regular users
      posts: 3,
      contacts: 2
    });

  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error seeding database',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
