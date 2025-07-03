'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare, Building, Globe } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  interestArea: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // This is a mock API call. Replace with your actual API endpoint.
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', data);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      reset();
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-800">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-poppins">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Have questions? We're here to help you on your journey to studying abroad.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" {...register('name')} className="input-field" placeholder="John Doe" />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" {...register('email')} className="input-field" placeholder="your.email@example.com" />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="interestArea" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                  <select id="interestArea" {...register('interestArea')} className="input-field">
                    <option value="">Select a service...</option>
                    <option value="university-application">University Application</option>
                    <option value="visa-guidance">Visa Guidance</option>
                    <option value="test-preparation">Test Preparation</option>
                    <option value="career-counseling">Career Counseling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" rows={5} {...register('message')} className="input-field" placeholder="Tell us how we can help..." />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary flex items-center justify-center disabled:opacity-60">
                  <MessageSquare size={20} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <div className={`text-center p-3 rounded-lg mt-4 ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center"><Building className="mr-3 text-primary"/> Our Office</h3>
                <p className="text-lg text-gray-600">123 Education Lane, Suite 456, New York, NY 10001, USA</p>
                <p className="text-gray-500 flex items-center mt-2"><Clock size={16} className="mr-2"/> Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center"><Mail className="mr-3 text-primary"/> Email Us</h3>
                <a href="mailto:contact@orisgate.com" className="text-lg text-primary hover:underline">contact@orisgate.com</a>
                <p className="text-gray-500">For general inquiries and support</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center"><Phone className="mr-3 text-primary"/> Call Us</h3>
                <a href="tel:+18001234567" className="text-lg text-primary hover:underline">+1 (800) 123-4567</a>
                <p className="text-gray-500">Speak with our team directly</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center"><Globe className="mr-3 text-primary"/> Global Connections</h3>
                 <p className="text-lg text-gray-600">We partner with universities in over 20 countries to offer you the best opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[450px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617325983804!2d-73.98785368459393!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678886755321!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
