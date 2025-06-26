
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Search, Award, ArrowRight, Check, Target, BarChart3, Users, Clock, Zap, Star, ChevronRight, CheckCircle } from 'lucide-react';

const ITAssurance = () => {
  const services = [
    'Implementasi & Sertifikasi ISO 27001:2022',
    'Security Risk Assessments',
    'Vulnerability Testing & Analysis',
    'Compliance Gap Analysis',
    'Data Protection Impact Assessments (DPIA)',
    'Business Continuity Planning',
    'Incident Response Planning',
    'Pengembangan Kebijakan Keamanan'
  ];

  const coreServices = [
    {
      icon: Shield,
      title: 'IT Audit',
      description: 'Audit komprehensif sistem IT untuk memastikan keamanan, compliance, dan efisiensi operasional sesuai standar industri terkini.',
      features: ['Security Assessment', 'System Analysis', 'Risk Evaluation', 'Compliance Review'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Assessment Tata Kelola TI',
      description: 'Evaluasi mendalam terhadap tata kelola teknologi informasi untuk meningkatkan efektivitas dan alignment dengan tujuan bisnis.',
      features: ['COBIT Framework', 'IT Strategy Review', 'Process Optimization', 'Performance Metrics'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const complianceStandards = [
    { 
      name: 'ISO 27001', 
      description: 'Information Security Management Systems',
      icon: Shield,
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      name: 'GDPR', 
      description: 'General Data Protection Regulation',
      icon: FileText,
      color: 'from-purple-600 to-indigo-500' 
    },
    { 
      name: 'SOC 2', 
      description: 'Service Organization Control 2',
      icon: Award,
      color: 'from-indigo-600 to-purple-600' 
    },
    { 
      name: 'PCI DSS', 
      description: 'Payment Card Industry Data Security',
      icon: Target,
      color: 'from-purple-500 to-indigo-600' 
    }
  ];

  const auditProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Evaluasi komprehensif kondisi keamanan IT saat ini dan identifikasi area kritis yang memerlukan perhatian khusus.',
      icon: Search,
      duration: '1-2 Minggu'
    },
    {
      step: 2,
      title: 'Gap Analysis',
      description: 'Analisis mendalam untuk mengidentifikasi kesenjangan antara kondisi saat ini dengan standar compliance yang diperlukan.',
      icon: Target,
      duration: '1-2 Minggu'
    },
    {
      step: 3,
      title: 'Risk Assessment',
      description: 'Penilaian risiko keamanan dan business impact untuk memprioritaskan tindakan perbaikan yang diperlukan.',
      icon: Shield,
      duration: '1 Minggu'
    },
    {
      step: 4,
      title: 'Implementation Plan',
      description: 'Penyusunan roadmap detail dengan timeline dan resource allocation untuk implementasi perbaikan sistem.',
      icon: FileText,
      duration: '1 Minggu'
    },
    {
      step: 5,
      title: 'Monitoring & Support',
      description: 'Pendampingan implementasi dan monitoring berkelanjutan untuk memastikan compliance dan keamanan optimal.',
      icon: BarChart3,
      duration: 'Ongoing'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Tim Expert Bersertifikat',
      description: 'Tim auditor berpengalaman dengan sertifikasi internasional dan pemahaman mendalam tentang standar compliance.'
    },
    {
      icon: Zap,
      title: 'Metodologi Terbukti',
      description: 'Pendekatan audit yang telah teruji dengan ratusan klien dari berbagai industri, dari startup hingga enterprise.'
    },
    {
      icon: Clock,
      title: 'Efisiensi Waktu',
      description: 'Proses audit yang efisien dengan timeline yang jelas dan deliverable yang terukur untuk ROI maksimal.'
    },
    {
      icon: Star,
      title: 'Post-Audit Support',
      description: 'Dukungan berkelanjutan pasca audit untuk memastikan implementasi berjalan lancar dan tujuan tercapai.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-400 to-indigo-400 w-14 h-14 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <span className="text-purple-200 font-semibold text-lg">IT Assurance & Security</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Lindungi Aset Digital 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Startup</span> Anda
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Solusi IT Assurance komprehensif untuk startup dan scale-up. Audit keamanan profesional, 
                assessment tata kelola TI, dan compliance regulasi untuk melindungi bisnis digital Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Mulai Security Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center border-2 border-purple-400 text-purple-100 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Tentang Tim Kami
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
                  alt="IT Security Auditing"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl"></div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-2xl shadow-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">IT Assurance</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dua pillar utama layanan IT Assurance untuk memastikan keamanan, tata kelola, dan compliance teknologi informasi yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Compliance</span> & Regulasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami membantu startup mencapai dan mempertahankan compliance dengan standar internasional dan regulasi yang berlaku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className={`bg-gradient-to-r ${standard.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <standard.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Alur <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Audit TI</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Metodologi audit yang terstruktur dan proven untuk memberikan hasil maksimal dengan efisiensi waktu dan biaya.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-indigo-300 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {auditProcess.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start mb-4">
                        <div className={`bg-gradient-to-r ${step.step % 2 === 1 ? 'from-purple-500 to-indigo-500' : 'from-indigo-500 to-purple-500'} w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                              Step {step.step}
                            </span>
                            <span className="text-sm text-gray-500 ml-3">{step.duration}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot for timeline */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kenapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Kami?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pengalaman, metodologi terbukti, dan komitmen untuk memberikan solusi IT Assurance terbaik untuk startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <reason.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Komprehensif</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Portfolio lengkap layanan IT Assurance yang dirancang khusus untuk kebutuhan startup dan scale-up companies.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300 font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Layanan audit keamanan"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-xl">
                  <div className="text-white text-center">
                    <div className="font-bold text-2xl">99%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Mengamankan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Startup</span> Anda?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Jangan biarkan kerentanan keamanan menghambat pertumbuhan bisnis. Mari bersama membangun fondasi IT yang aman dan compliant untuk masa depan startup Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border-2 border-purple-400 text-purple-100 px-10 py-5 rounded-xl font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Lihat Portfolio Kami
              <ChevronRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAssurance;
