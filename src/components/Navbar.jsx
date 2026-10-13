  'use client';
  import { useState } from 'react';
  import { Menu, X } from 'lucide-react';

  export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-bold tracking-tight text-[#2C3E35]">
            Dr. Maya Reynolds<span className="text-[#C87D55]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4A5568]">
            <a href="#about" className="hover:text-[#2C3E35] transition-colors">About</a>
            <a href="#services" className="hover:text-[#2C3E35] transition-colors">Specialties</a>
            <a href="#office" className="hover:text-[#2C3E35] transition-colors">Our Office</a>
            <a href="#faq" className="hover:text-[#2C3E35] transition-colors">FAQ</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-[#2C3E35] text-[#2C3E35] hover:bg-[#2C3E35] hover:text-white text-sm font-medium transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C3E35]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF9F5] border-b border-[#E8E4DC] px-6 py-4 space-y-4">
            <a href="#about" className="block text-base font-medium text-[#2C3E35]" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block text-base font-medium text-[#2C3E35]" onClick={() => setMobileMenuOpen(false)}>Specialties</a>
            <a href="#office" className="block text-base font-medium text-[#2C3E35]" onClick={() => setMobileMenuOpen(false)}>Our Office</a>
            <a href="#faq" className="block text-base font-medium text-[#2C3E35]" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a
              href="#contact"
              className="block text-center w-full py-2.5 rounded-full bg-[#2C3E35] text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </header>
    );
  }