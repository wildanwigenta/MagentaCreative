const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Kreatif",
      description: "Solusi inovatif dan desain yang out-of-the-box untuk membuat brand Anda tampil beda."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Profesional",
      description: "Kualitas kerja tinggi dengan standar industri dan timeline yang tepat waktu."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" />
        </svg>
      ),
      title: "Fokus UMKM",
      description: "Memahami kebutuhan dan tantangan UMKM dengan solusi yang terjangkau dan efektif."
    }
  ];

  const stats = [
    { number: "100+", label: "Klien Puas" },
    { number: "200+", label: "Project Selesai" },
    { number: "3+", label: "Tahun Pengalaman" },
    { number: "95%", label: "Tingkat Kepuasan" }
  ];

  return (
    <section id="tentang" className="py-20 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-primary">Magenta Creative Digital</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Partner Terpercaya untuk Transformasi Digital UMKM
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Magenta Creative Digital adalah agensi digital yang berfokus membantu UMKM Indonesia 
              berkembang di era digital. Kami memahami bahwa setiap bisnis memiliki cerita unik, 
              dan kami hadir untuk membantu menceritakan kisah tersebut melalui branding yang kuat, 
              website yang profesional, dan strategi digital yang tepat sasaran.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 3 tahun dan telah menangani 200+ project, kami berkomitmen 
              memberikan solusi digital yang tidak hanya menarik secara visual, tetapi juga efektif 
              dalam meningkatkan penjualan dan kredibilitas bisnis Anda.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                Lihat Portfolio
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"></div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nilai-Nilai yang Kami Junjung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;