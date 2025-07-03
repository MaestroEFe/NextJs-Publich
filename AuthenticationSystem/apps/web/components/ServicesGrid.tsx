'use client';

import { motion } from 'framer-motion';
import { School, FileText, PenSquare, Briefcase } from 'lucide-react';

const services = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'University Application',
    description: 'We handle the entire application process, from shortlisting universities to submitting your application.',
    icon: <School className="w-10 h-10 text-primary-green" />
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1588600958835-e533c3a74a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Visa Guidance',
    description: 'Expert assistance with visa documentation, interview preparation, and submission.',
    icon: <FileText className="w-10 h-10 text-primary-green" />
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Test Preparation',
    description: 'Access to top-quality materials and tutors for exams like IELTS, TOEFL, and GRE.',
    icon: <PenSquare className="w-10 h-10 text-primary-green" />
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Career Counseling',
    description: 'Personalized counseling to help you choose the right course and career path for your future.',
    icon: <Briefcase className="w-10 h-10 text-primary-green" />
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end support for your international education journey. We handle everything, so you can focus on your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:hidden flex items-center justify-center h-32">
                {service.icon}
              </div>
              <div className="hidden md:block overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

