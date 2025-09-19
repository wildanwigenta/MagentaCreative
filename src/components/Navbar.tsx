'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% masuk viewport baru dianggap aktif
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Reusable classes
  const linkClass = (id: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      activeSection === id
        ? "text-primary font-semibold"
        : "text-gray-700 hover:text-primary"
    }`;

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
              <a href="#home" className={linkClass("home")}>Home</a>
              <a href="#layanan" className={linkClass("layanan")}>Layanan</a>
              <a href="#portofolio" className={linkClass("portofolio")}>Portofolio</a>
              <a href="#tentang" className={linkClass("tentang")}>Tentang</a>
              <a href="#kontak" className={linkClass("kontak")}>Kontak</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#kontak"
              className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              Konsultasi Gratis
            </a>
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
            <a href="#home" className={linkClass("home") + " block"}>Home</a>
            <a href="#layanan" className={linkClass("layanan") + " block"}>Layanan</a>
            <a href="#portofolio" className={linkClass("portofolio") + " block"}>Portofolio</a>
            <a href="#tentang" className={linkClass("tentang") + " block"}>Tentang</a>
            <a href="#kontak" className={linkClass("kontak") + " block"}>Kontak</a>
            <a
              href="#kontak"
              className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-4 text-center hover:bg-secondary transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
