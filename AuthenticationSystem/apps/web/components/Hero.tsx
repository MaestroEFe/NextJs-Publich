'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Students celebrating graduation at a university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Gateway to{' '}
            <span className="text-secondary-green">International Education</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OrisGate helps students study abroad and provides seamless visa processing services. Your journey to international education starts here.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services" className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Explore Our Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
              <span>Contact Us</span>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <CheckCircle className="text-primary-green" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg text-gray-900">1,000+</div>
                <div className="text-sm text-gray-600">Successful Visas</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <Users className="text-primary-green" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Partner Universities</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <Star className="text-primary-green" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

