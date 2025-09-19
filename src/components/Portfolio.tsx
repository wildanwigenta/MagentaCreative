const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Warung Makan Sederhana",
      category: "Branding & Website",
      description: "Rebranding lengkap untuk warung makan tradisional dengan website pemesanan online.",
      image: "/api/placeholder/400/300",
      tags: ["Branding", "Website", "F&B"]
    },
    {
      title: "Toko Fashion Lokal",
      category: "E-commerce & Social Media",
      description: "Pembuatan toko online dan pengelolaan media sosial untuk brand fashion lokal.",
      image: "/api/placeholder/400/300",
      tags: ["E-commerce", "Social Media", "Fashion"]
    },
    {
      title: "Klinik Kesehatan",
      category: "Website & Digital Marketing",
      description: "Website profesional dan kampanye digital marketing untuk klinik kesehatan.",
      image: "/api/placeholder/400/300",
      tags: ["Website", "Healthcare", "Digital Ads"]
    },
    {
      title: "Bengkel Motor",
      category: "Branding & Digital Presence",
      description: "Identitas brand baru dan kehadiran digital untuk bengkel motor lokal.",
      image: "/api/placeholder/400/300",
      tags: ["Branding", "Automotive", "Digital"]
    },
    {
      title: "Salon Kecantikan",
      category: "Social Media & Content",
      description: "Strategi konten dan pengelolaan media sosial untuk salon kecantikan.",
      image: "/api/placeholder/400/300",
      tags: ["Social Media", "Beauty", "Content"]
    },
    {
      title: "Toko Elektronik",
      category: "E-commerce & SEO",
      description: "Platform e-commerce dan optimasi SEO untuk toko elektronik.",
      image: "/api/placeholder/400/300",
      tags: ["E-commerce", "SEO", "Electronics"]
    }
  ];

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Portofolio</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai project yang telah kami kerjakan untuk membantu UMKM berkembang dan sukses di era digital.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 transform"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                  Lihat Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
            Lihat Semua Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;