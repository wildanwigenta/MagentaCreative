const Services = () => {
  const services = [
    {
      title: "Branding & Desain Kreatif",
      description: "Membangun identitas brand yang kuat dengan logo, desain grafis, dan materi promosi yang menarik dan profesional.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      features: ["Logo Design", "Brand Identity", "Desain Grafis", "Materi Promosi"]
    },
    {
      title: "Website & Toko Online Profesional",
      description: "Membangun website dan toko online yang responsif, cepat, dan user-friendly untuk meningkatkan kredibilitas bisnis Anda.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      features: ["Website Responsif", "Toko Online", "SEO Optimized", "Mobile Friendly"]
    },
    {
      title: "Social Media Management & Digital Ads",
      description: "Mengelola media sosial dan iklan digital untuk meningkatkan engagement, followers, dan penjualan online Anda.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4l-4 4-4-4-4 4v12h16V8l-4-4zm-4 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      features: ["Content Creation", "Social Media Ads", "Analytics & Report", "Community Management"]
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-primary">Unggulan</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solusi digital terpadu untuk mengembangkan bisnis UMKM Anda dengan strategi yang tepat dan hasil yang terukur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl duration-300 p-8 group hover:-translate-y-2 transform transition-transform"
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;