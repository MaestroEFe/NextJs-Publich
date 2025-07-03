import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold font-poppins">OrisGate</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your gateway to international education. We help students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>University Application</li>
              <li>Visa Guidance</li>
              <li>Test Preparation</li>
              <li>Career Counseling</li>
              <li>Pre-Departure Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contact@orisgate.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300">
                  123 Education Lane, Suite 456<br />
                  New York, NY 10001, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 OrisGate. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

