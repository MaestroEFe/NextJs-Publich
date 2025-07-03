'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Plane, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-10 h-10 text-primary-green" />,
    title: 'Expert University Matching',
    description: 'We help you find the perfect university and program that aligns with your academic goals and career aspirations.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary-green" />,
    title: 'Seamless Visa Processing',
    description: 'Our experienced consultants guide you through the entire visa application process, ensuring a high success rate.',
    imageUrl: 'https://images.unsplash.com/photo-1556742044-538a7c4e9f7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-primary-green" />,
    title: 'Scholarship Assistance',
    description: 'Gain access to exclusive scholarship opportunities to make your international education more affordable.',
    imageUrl: 'https://images.unsplash.com/photo-1616587993599-a198c6354a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <Plane className="w-10 h-10 text-primary-green" />,
    title: 'Pre-Departure Support',
    description: 'From accommodation to travel arrangements, we provide comprehensive support to ensure you\'re ready for your new journey.',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function AboutOrisGate() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Journey to International Education Starts Here
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            OrisGate is dedicated to helping students achieve their dreams of studying abroad. We provide expert guidance, seamless visa processing, and support every step of the way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="hidden md:block flex-shrink-0">
                <img src={feature.imageUrl} alt={feature.title} className="w-32 h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="md:hidden flex-shrink-0 pt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
