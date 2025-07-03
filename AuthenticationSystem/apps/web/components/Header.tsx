'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="text-2xl font-bold text-primary font-poppins">Origate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/get-started" className="btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone size={16} />
              <span>+234 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Mail size={16} />
              <span>info@uratlimited.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/get-started" className="btn-primary inline-block text-center">
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

