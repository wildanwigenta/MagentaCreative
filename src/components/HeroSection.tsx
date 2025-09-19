import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="gradient-primary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Naikkan Level Bisnis Anda dengan{' '}
              <span className="text-yellow-300">Kreativitas Digital</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Kami membantu UMKM membangun brand, website, dan social media agar lebih profesional dan dipercaya pelanggan.
            </p>
            <Link
              href="#kontak"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Hero Image/Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Creative Digital Illustration using SVG */}
              <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-64 h-64 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M12 7v10l-4-4 1.41-1.41L12 14.17l6.59-6.58L20 9l-8 8z" fill="#FFD700" />
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue-300 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Stats or Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-gray-200">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3+</div>
            <div className="text-gray-200">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-200">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;