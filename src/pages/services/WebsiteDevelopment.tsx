
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Search, Zap, ArrowRight, Check, Globe, Settings, Wrench, Star, Users, Award, Clock } from 'lucide-react';

const WebsiteDevelopment = () => {
  const features = [
    'Desain Responsif untuk Semua Perangkat',
    'Optimasi SEO & Performa Tinggi',
    'Sistem Manajemen Konten Kustom',
    'Integrasi E-commerce Lengkap',
    'Desain UI/UX Modern & Intuitif',
    'Progressive Web App Development',
    'Integrasi API & Sistem Pihak Ketiga',
    'Setup Analytics & Tracking Komprehensif'
  ];

  const services = [
    {
      icon: Globe,
      title: 'Company Profile',
      description: 'Website profil perusahaan yang profesional dan menarik untuk membangun kredibilitas bisnis Anda di era digital.',
      color: 'from-green-500 to-green-600',
      features: ['Domain & Hosting', 'SSL Certificate', 'Content Management']
    },
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Aplikasi web kustom yang powerful dan scalable untuk mendukung dan mengotomatisasi operasional bisnis Anda.',
      color: 'from-purple-500 to-purple-600',
      features: ['Custom Development', 'Database Design', 'API Integration']
    },
    {
      icon: Wrench,
      title: 'Web Maintenance',
      description: 'Layanan pemeliharaan website berkelanjutan untuk memastikan performa optimal, keamanan, dan update terkini.',
      color: 'from-green-600 to-purple-500',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization']
    }
  ];

  const technologies = [
    { name: 'React', color: 'text-green-600', level: 'Expert' },
    { name: 'Next.js', color: 'text-purple-600', level: 'Expert' },
    { name: 'Node.js', color: 'text-green-600', level: 'Advanced' },
    { name: 'TypeScript', color: 'text-purple-500', level: 'Expert' },
    { name: 'Tailwind CSS', color: 'text-green-500', level: 'Expert' },
    { name: 'MongoDB', color: 'text-purple-600', level: 'Advanced' }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Kami menganalisis kebutuhan bisnis, target audiens, dan tujuan proyek untuk membuat strategi pengembangan yang komprehensif dan tepat sasaran.',
      duration: '1-2 minggu'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Tim desain kami membuat wireframe dan prototype interaktif, memastikan pengalaman pengguna selaras dengan brand dan tujuan bisnis Anda.',
      duration: '2-3 minggu'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Kami membangun website menggunakan teknologi modern terdepan, menerapkan testing ketat untuk memastikan kualitas dan performa optimal.',
      duration: '4-8 minggu'
    },
    {
      step: 4,
      title: 'Launch & Optimization',
      description: 'Setelah deployment berhasil, kami menyediakan dukungan berkelanjutan dan optimasi untuk menjaga performa puncak website Anda.',
      duration: 'Ongoing'
    }
  ];

  const stats = [
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Code, number: '200+', label: 'Projects Completed' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-green-600 font-semibold text-lg">Website Development</span>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">5.0 (50+ reviews)</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Solusi Website
                <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent"> Modern</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ciptakan website yang menakjubkan dan berperforma tinggi yang mendorong engagement dan konversi. 
                Tim ahli kami membangun solusi responsif dan scalable yang disesuaikan dengan DNA bisnis Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Mulai Proyek Anda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300"
                >
                  Lihat Portfolio
                </Link>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <stat.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="font-bold text-lg text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&h=500&fit=crop"
                  alt="Pengembangan Website"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold">Live Website</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold">Fast Loading</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Layanan yang Kami Berikan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Layanan pengembangan website komprehensif yang mencakup setiap aspek kehadiran online Anda 
              dengan teknologi terdepan dan pendekatan yang user-centric.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:bg-gray-50 transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${service.color} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: 'Fully Responsive', description: 'Pengalaman sempurna di semua perangkat dan ukuran layar dengan desain mobile-first' },
              { icon: Search, title: 'SEO Optimized', description: 'Dibangun dengan praktik SEO terbaik untuk ranking pencarian yang lebih tinggi' },
              { icon: Zap, title: 'Lightning Fast', description: 'Dioptimalkan untuk kecepatan loading yang sangat cepat dengan teknologi modern' },
              { icon: Settings, title: 'Easy Management', description: 'Panel admin yang user-friendly untuk mengelola konten website dengan mudah' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Teknologi Terdepan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami memanfaatkan stack teknologi modern dan terbukti untuk membangun website yang 
              scalable, maintainable, dan future-proof.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-300 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                <div className={`font-bold text-lg ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name}
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proses Pengembangan Terpercaya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Metodologi terbukti dengan pendekatan agile yang memastikan pengiriman proyek 
              yang sukses, tepat waktu, dan sesuai ekspektasi klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start group">
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fitur Website Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Setiap website yang kami bangun mencakup serangkaian fitur komprehensif yang dirancang untuk 
                memaksimalkan performa, usability, dan hasil bisnis yang terukur.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&h=500&fit=crop"
                  alt="Fitur website"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">Mobile Optimized</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center">
                  <Search className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm font-semibold">SEO Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Membangun Website Impian Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mari ciptakan website yang menakjubkan dan menghasilkan hasil nyata untuk bisnis Anda. 
            Hubungi kami hari ini untuk konsultasi gratis dan dapatkan proposal yang disesuaikan dengan kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Portfolio Kami
            </Link>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-yellow-300 fill-current mr-2" />
              <span className="text-white font-medium">Trusted by 100+ businesses</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
