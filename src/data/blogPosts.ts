
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featuredImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Steps for ISO 27001:2022 Compliance',
    excerpt: 'A comprehensive guide to implementing ISO 27001:2022 standards in your organization, covering key requirements and best practices.',
    content: `# Essential Steps for ISO 27001:2022 Compliance

ISO 27001:2022 is the international standard for information security management systems (ISMS). This comprehensive guide will walk you through the essential steps to achieve compliance.

## Understanding ISO 27001:2022

The updated standard emphasizes risk management and continuous improvement. Key changes include enhanced cybersecurity requirements and updated controls.

## Step 1: Leadership Commitment

Management support is crucial for successful implementation. Ensure top-level commitment and resource allocation.

## Step 2: Risk Assessment

Conduct thorough risk assessments to identify vulnerabilities and threats to your information assets.

## Step 3: Implementation Planning

Develop a detailed implementation plan with clear timelines and responsibilities.

## Step 4: Training and Awareness

Ensure all staff understand their roles in maintaining information security.

## Conclusion

Achieving ISO 27001:2022 compliance requires dedication and systematic approach, but the benefits include enhanced security posture and customer trust.`,
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Compliance',
    slug: 'iso-27001-compliance-guide',
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Cybersecurity Trends to Watch in 2024',
    excerpt: 'Explore the latest cybersecurity threats and defense strategies that businesses need to be aware of in the coming year.',
    content: `# Cybersecurity Trends to Watch in 2024

The cybersecurity landscape continues to evolve rapidly. Here are the key trends that will shape 2024.

## AI-Powered Attacks

Cybercriminals are increasingly using AI to enhance their attack strategies, making detection more challenging.

## Zero Trust Architecture

Organizations are adopting zero trust principles to secure their networks and data.

## Cloud Security Focus

With increased cloud adoption, security in cloud environments remains a top priority.

## Supply Chain Security

Third-party risk management becomes more critical as supply chain attacks increase.

## Conclusion

Staying ahead of these trends requires proactive security measures and continuous monitoring.`,
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Security',
    slug: 'cybersecurity-trends-2024',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn the architectural principles and technologies that enable web applications to grow with your business needs.',
    content: `# Building Scalable Web Applications

Scalability is crucial for modern web applications. This guide covers the essential principles and patterns.

## Architecture Patterns

Microservices, serverless, and modular monoliths each offer different scalability benefits.

## Database Design

Proper database design and optimization strategies are fundamental to application scalability.

## Caching Strategies

Implementing effective caching at multiple levels can dramatically improve performance.

## Load Balancing

Distributing traffic across multiple servers ensures better performance and reliability.

## Monitoring and Optimization

Continuous monitoring helps identify bottlenecks before they impact users.

## Conclusion

Building scalable applications requires careful planning and the right architectural decisions from the start.`,
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Development',
    slug: 'building-scalable-web-applications',
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Transformasi Digital untuk UKM Indonesia',
    excerpt: 'Panduan lengkap untuk usaha kecil dan menengah dalam mengadopsi teknologi digital untuk meningkatkan efisiensi dan daya saing.',
    content: `# Transformasi Digital untuk UKM Indonesia

Era digital telah mengubah cara berbisnis di seluruh dunia. UKM Indonesia perlu beradaptasi untuk tetap kompetitif.

## Mengapa Transformasi Digital Penting?

Transformasi digital membantu UKM meningkatkan efisiensi operasional, memperluas jangkauan pasar, dan meningkatkan kepuasan pelanggan.

## Langkah-langkah Implementasi

### 1. Evaluasi Kondisi Saat Ini
Lakukan audit terhadap proses bisnis yang ada dan identifikasi area yang dapat ditingkatkan dengan teknologi.

### 2. Pilih Teknologi yang Tepat
Tidak semua teknologi cocok untuk setiap bisnis. Pilih solusi yang sesuai dengan kebutuhan dan budget.

### 3. Pelatihan Tim
Investasi dalam pelatihan karyawan adalah kunci sukses transformasi digital.

### 4. Implementasi Bertahap
Mulai dengan perubahan kecil dan bertahap untuk mengurangi risiko dan memudahkan adaptasi.

## Manfaat yang Dapat Diperoleh

- Peningkatan efisiensi operasional
- Pengurangan biaya operasional
- Peningkatan kepuasan pelanggan
- Ekspansi pasar yang lebih luas

## Kesimpulan

Transformasi digital bukan lagi pilihan, tetapi keharusan bagi UKM yang ingin berkembang di era modern.`,
    author: 'Andi Pratama',
    date: '2024-02-20',
    readTime: '7 min read',
    category: 'Digital Transformation',
    slug: 'transformasi-digital-ukm-indonesia',
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  }
];

export const getBlogPosts = () => blogPosts;

export const getBlogPostBySlug = (slug: string) => 
  blogPosts.find(post => post.slug === slug);

export const getRecentBlogPosts = (limit: number = 3) => 
  blogPosts.slice(0, limit);
