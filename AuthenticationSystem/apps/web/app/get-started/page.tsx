'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, CheckCircle, Briefcase, ArrowRight } from 'lucide-react';

const getStartedSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  destination: z.string().min(1, 'Preferred study destination is required'),
  studyLevel: z.string().min(1, 'Level of study is required'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().optional(),
});

type GetStartedFormData = z.infer<typeof getStartedSchema>;

const servicesOptions = [
  'University Application',
  'Visa Guidance',
  'Test Preparation',
  'Career Counseling',
  'Scholarship Assistance',
  'Pre-departure Briefing',
];

const studyLevels = [
  'High School',
  'Undergraduate',
  'Postgraduate (Masters)',
  'PhD',
  'Diploma/Certificate',
];

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<GetStartedFormData>({
    resolver: zodResolver(getStartedSchema),
    defaultValues: {
      services: [],
    }
  });

  const handleServiceChange = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(updated);
    setValue('services', updated, { shouldValidate: true });
  };

  const onSubmit = async (data: GetStartedFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Replace with your actual API endpoint for student inquiries
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your interest! Our team will contact you shortly to guide you through the next steps.');
        reset();
        setSelectedServices([]);
      } else {
        const errorData = await response.json();
        setSubmitMessage(errorData.message || 'Sorry, there was an error submitting your request. Please try again or contact us directly.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Start Your Journey to{' '}
              <span className="text-primary">Studying Abroad</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take the first step towards your international education. Fill out the form below, and our expert counselors will guide you personally.
            </p>
          </div>
        </div>
      </section>

      {/* Why OrisGate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Your Success is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end support to ensure your application stands out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced counselors provide personalized advice to match you with the perfect university and program.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">High Success Rate</h3>
              <p className="text-gray-600 leading-relaxed">
                We have a proven track record of successful student placements and visa approvals.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Personalized Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From application to accommodation, we are with you at every step of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section id="get-started-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Tell Us About Your Goals</h2>
              <p className="text-xl text-gray-600">
                This information will help us tailor our guidance for you.
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-2xl shadow-xl space-y-8">
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="fullName" {...register('fullName')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" {...register('email')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="text" id="phone" {...register('phone')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                  <input type="text" id="nationality" {...register('nationality')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.nationality && <p className="mt-1 text-sm text-red-600">{errors.nationality.message}</p>}
                </div>
              </div>

              {/* Academic & Service Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Preferred Study Destination</label>
                  <input type="text" id="destination" {...register('destination')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g., Canada, UK, USA" />
                  {errors.destination && <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>}
                </div>
                <div>
                  <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700 mb-2">Level of Study</label>
                  <select id="studyLevel" {...register('studyLevel')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select level</option>
                    {studyLevels.map(level => <option key={level} value={level}>{level}</option>)}
                  </select>
                  {errors.studyLevel && <p className="mt-1 text-sm text-red-600">{errors.studyLevel.message}</p>}
                </div>
              </div>

              {/* Services of Interest */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4">Services You Are Interested In</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesOptions.map(service => (
                    <div key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service}
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor={service} className="ml-3 text-gray-700">{service}</label>
                    </div>
                  ))}
                </div>
                {errors.services && <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us anything else that might be important, like your academic background or specific questions."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto text-lg font-bold py-4 px-12 rounded-full transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                  {!isSubmitting && <ArrowRight className="ml-3" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
