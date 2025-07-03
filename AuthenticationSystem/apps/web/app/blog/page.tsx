'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, GraduationCap, BookText, Landmark } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Choosing Your Study Destination: A Comprehensive Guide',
    date: 'October 26, 2023',
    excerpt: 'Explore top countries for international students, considering factors like quality of education, cost of living, and post-study work opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Landmark className="w-20 h-20 text-gray-400" />
  },
  {
    id: 2,
    title: 'Navigating the Student Visa Process: Tips for Success',
    date: 'October 22, 2023',
    excerpt: 'A step-by-step guide to preparing your visa application, from required documents to acing your visa interview.',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <BookText className="w-20 h-20 text-gray-400" />
  },
  {
    id: 3,
    title: 'Top Scholarships for International Students and How to Apply',
    date: 'October 18, 2023',
    excerpt: 'Discover a range of scholarship opportunities that can make your dream of studying abroad a reality, and learn how to craft a winning application.',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180844d15339?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <GraduationCap className="w-20 h-20 text-gray-400" />
  },
];

export default function Blog() {
  return (
    <main className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight">OrisGate Blog</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted resource for insights on studying abroad, visa applications, and international student life.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-48">
                  <div className="hidden md:block w-full h-full">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:hidden flex items-center justify-center h-full bg-gray-100">
                    {post.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 flex-grow">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  <a href="#" className="font-semibold text-primary hover:text-primary-dark flex items-center mt-auto">
                    Read More <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert counselors are here to guide you. Get in touch for a free consultation and take the first step towards your international education.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
