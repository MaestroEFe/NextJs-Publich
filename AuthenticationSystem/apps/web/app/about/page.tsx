import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, CheckCircle, Linkedin, Twitter, UserCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Maria Garcia',
    role: 'Head of Visa Operations',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'David Chen',
    role: 'Lead Education Consultant',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
];

export default function About() {
  return (
    <main className="bg-white">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-800">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About OrisGate" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-poppins">
            About OrisGate
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Opening doors to global education and empowering students to achieve their academic dreams.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, OrisGate was born from a passion for education and a desire to simplify the complex journey of studying abroad. We saw the challenges students faced and created a service dedicated to providing clear, reliable, and personalized guidance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are a trusted partner for students worldwide, known for our commitment to success, integrity, and building a global community of learners.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Story" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that drive our commitment to students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 bg-primary-green rounded-full mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">Our Mission</h3>
              <p className="text-gray-600">To provide seamless and transparent pathways for students to access world-class international education.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 bg-secondary-green rounded-full mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted and student-centric education consultancy in the world.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 bg-accent-gold rounded-full mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li><CheckCircle className="inline-block mr-2 text-primary-green" size={16}/>Student Success</li>
                <li><CheckCircle className="inline-block mr-2 text-primary-green" size={16}/>Integrity & Transparency</li>
                <li><CheckCircle className="inline-block mr-2 text-primary-green" size={16}/>Global Connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated experts behind your success story.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative inline-block mb-4">
                  <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto shadow-md"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1 font-poppins">{member.name}</h3>
                <p className="text-primary-green font-semibold mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-green">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-green">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Our Impact in Numbers</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Demonstrating our commitment to growth and excellence through measurable results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold font-poppins">₦100M+</div>
              <p className="text-green-200 mt-2">Daily Trading Volume</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-poppins">500+</div>
              <p className="text-green-200 mt-2">Active Suppliers</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-poppins">15+</div>
              <p className="text-green-200 mt-2">Export Countries</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-poppins">8</div>
              <p className="text-green-200 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

