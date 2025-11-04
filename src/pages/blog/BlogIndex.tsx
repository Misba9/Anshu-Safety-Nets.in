import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User } from 'lucide-react';

const BlogIndex = () => {
  const blogPosts = [
    {
      id: 'bengaluru-homeowners-guide-to-balcony-safety',
      title: 'The Bengaluru Homeowner\'s Guide to Balcony Safety: A Definitive Resource for Net Types and Installation',
      excerpt: 'Comprehensive guide for Bengaluru homeowners on balcony safety nets. Compare HDPE vs nylon, understand installation best practices, and make informed decisions for your family\'s safety.',
      date: 'November 5, 2025',
      readTime: '8 min read',
      author: 'Anshu Safety Nets Team',
      image: '/images/blog2.jpeg'
    },
    {
      id: 'why-pigeon-safety-nets-are-a-must-have-for-modern-homes',
      title: 'Why Pigeon Safety Nets are a Must-Have for Modern Home?',
      excerpt: 'Discover why pigeon safety nets are essential for protecting your health, property, and peace of mind.',
      date: 'October 9, 2025',
      readTime: '4 min read',
      author: 'Anshu Safety Nets Team',
      image: '/images/blog1.jpeg'
    }
  ];

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Safety Net Solutions Blog | Expert Tips & Insights</title>
        <meta 
          name="description" 
          content="Learn about safety net solutions, installation tips, and expert insights on protecting your home and family." 
        />
        <link rel="canonical" href="https://www.pegionsafetynets.in/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safety Net Solutions <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and guides on safety net installations, maintenance, and choosing the right solutions for your home or business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <AnimatedSection key={post.id}>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <time>{post.date}</time>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-2xl my-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Professional Safety Net Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get expert advice and installation services for all your safety net needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919900077665"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +91 99000 77665
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;