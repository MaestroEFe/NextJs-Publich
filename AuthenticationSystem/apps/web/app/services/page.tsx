'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, GraduationCap, Briefcase, BookOpen, Plane } from 'lucide-react';

interface Service {
  _id: string;
  name: string;
  category: string;
  description: string;
  keyFeatures: string[];
  image: string;
  icon: React.ReactNode;
}

const sampleServices: Service[] = [
  {
    _id: '1',
    name: 'University Application',
    category: 'Admissions',
    description: 'Comprehensive guidance through the university application process, from shortlisting to submission.',
    keyFeatures: ['Personalized University Matching', 'Application Strategy', 'Essay & SOP Review'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <GraduationCap className="w-12 h-12 text-primary" />
  },
  {
    _id: '2',
    name: 'Visa Guidance',
    category: 'Visa Services',
    description: 'Expert assistance with student visa applications, including documentation and interview preparation.',
    keyFeatures: ['Document Checklist', 'Mock Interviews', 'Financial Guidance'],
    image: 'https://images.unsplash.com/photo-1589578523433-fd99b60b7383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Plane className="w-12 h-12 text-primary" />
  },
  {
    _id: '3',
    name: 'Test Preparation',
    category: 'Admissions',
    description: 'Prepare for standardized tests like IELTS, TOEFL, GRE, and GMAT with our expert tutors.',
    keyFeatures: ['Diagnostic Tests', 'Personalized Study Plans', 'Full-length Mock Tests'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <BookOpen className="w-12 h-12 text-primary" />
  },
  {
    _id: '4',
    name: 'Career Counseling',
    category: 'Support',
    description: 'Guidance on choosing the right career path and how your international education can help you achieve it.',
    keyFeatures: ['Aptitude Testing', 'Industry Insights', 'Post-Study Work Options'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Briefcase className="w-12 h-12 text-primary" />
  },
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(sampleServices);
  const [filteredServices, setFilteredServices] = useState<Service[]>(sampleServices);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Admissions', 'Visa Services', 'Support'];

  useEffect(() => {
    let filtered = services;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [services, selectedCategory, searchTerm]);

  return (
    <main className="bg-gray-50">
      <Header />
      
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to support you at every step of your journey to studying abroad.
          </p>
        </div>
      </section>

      <section className="py-8 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow shadow-sm hover:shadow-md"
              />
            </div>

            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
              {categories.map(category => (
                <button 
                  key={category} 
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === category ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div key={service._id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-56 bg-gray-200 flex items-center justify-center">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins">{service.name}</h3>
                    <span className="text-primary font-semibold">{service.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-700">
                    <h4 className="font-bold">Key Features:</h4>
                    <ul className="list-disc list-inside">
                      {service.keyFeatures.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a href="/contact" className="btn-primary w-full text-center">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
