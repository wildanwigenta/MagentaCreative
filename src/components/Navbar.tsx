'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Magenta Creative Digital
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#layanan" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Layanan
              </Link>
              <Link href="#portofolio" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Portofolio
              </Link>
              <Link href="#tentang" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Tentang
              </Link>
              <Link href="#kontak" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Kontak
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#kontak"
              className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="#home" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="#layanan" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Layanan
            </Link>
            <Link href="#portofolio" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Portofolio
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Tentang
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Kontak
            </Link>
            <Link
              href="#kontak"
              className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-4 text-center hover:bg-secondary transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;