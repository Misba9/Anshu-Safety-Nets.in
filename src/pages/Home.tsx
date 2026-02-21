// import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CallbackForm from '../components/CallbackForm';
import AnimatedSection from '../components/AnimatedSection';
import { Shield, Baby, Building, Wind, Factory, Bird, Grid3X3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';



const Home = () => {
  const services = [
    {
      title: 'Balcony Safety Nets',
      description: 'Premium quality balcony safety nets to prevent accidents and ensure child safety. Durable, weather-resistant, and professionally installed.',
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      imageUrl: '/images/2.jpeg',
      link: '/balcony-safety-nets',
      features: ['Weather resistant', 'Child-safe installation', 'Durable materials']
    },
    {
      title: 'Children Safety Nets',
      description: 'Specialized safety nets designed specifically for child protection. Soft, non-toxic materials that provide maximum safety.',
      icon: <Baby className="h-6 w-6 text-green-600" />,
      imageUrl: '/images/6.jpeg',
      link: '/children-safety-nets',
      features: ['Non-toxic materials', 'Child-friendly design', 'Extra strong mesh']
    },
    {
      title: 'Pigeon Safety Nets',
      description: 'Effective bird protection nets that prevent pigeons and other birds from nesting while being humane and safe.',
      icon: <Bird className="h-6 w-6 text-purple-600" />,
      imageUrl: '/images/Pigeon-Safety-Nets.jpg',
      link: '/pigeon-safety-nets',
      features: ['Humane bird deterrent', 'UV resistant', 'Easy maintenance']
    },
    {
      title: 'Construction Safety Nets',
      description: 'Heavy-duty construction safety nets for building sites and industrial applications. Meets all safety standards.',
      icon: <Building className="h-6 w-6 text-orange-600" />,
      imageUrl: '/images/Construction-Safety-Nets.jpg',
      link: '/construction-safety-nets',
      features: ['Industry standard', 'Heavy-duty material', 'Professional grade']
    },
    {
      title: 'Industrial Safety Nets',
      description: 'Robust industrial safety solutions for warehouses, factories, and commercial spaces. Custom sizes available.',
      icon: <Factory className="h-6 w-6 text-red-600" />,
      imageUrl: '/images/Industrial-Safety-Nets.jpg',
      link: '/industrial-safety-nets',
      features: ['Custom sizing', 'Industrial grade', 'Fire resistant options']
    },
    {
      title: 'Balcony Invisible Grill',
      description: 'Invisible grills that provide safety without compromising the aesthetic appeal of your balcony view.',
      icon: <Grid3X3 className="h-6 w-6 text-cyan-600" />,
      imageUrl: '/images/9.jpeg',
      link: '/balcony-invisible-grid',
      features: ['Nearly invisible', 'Modern design', 'Unobstructed view']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Premium materials and professional installation with quality guarantee'
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      title: 'Expert Installation',
      description: 'Experienced technicians with years of safety net installation expertise'
    },
    {
      icon: <Wind className="h-8 w-8 text-purple-600" />,
      title: 'Weather Resistant',
      description: 'All our nets are designed to withstand harsh weather conditions'
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: 'Custom Solutions',
      description: 'Tailored safety solutions to meet your specific requirements'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Safety Nets in Bengaluru | Balcony, Pigeon, Children Nets Installation Experts</title>
        <meta
          name="description"
          content="Top Safety Nets Services in Bengaluru for Balcony, Pigeon, Children & Construction Protection. 100% durable material & expert installation. Call now."
        />
      </Helmet>
      <Hero />

      {/* Why Choose Pigeon Safety Nets Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Pigeon Safety Nets in Bengaluru?
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
              <p className="mb-4 leading-relaxed">
                Bengaluru's high-rise apartments and commercial buildings face increasing challenges from pigeon infestations. Pigeon droppings not only create unsightly stains on balconies and windows but also carry over 60 different types of diseases that can affect human health. Our <strong>pigeon safety nets in Bengaluru</strong> offer a humane, effective, and long-lasting solution to keep birds away from your property.
              </p>
              <p className="mb-4 leading-relaxed">
                Unlike traditional methods that harm birds, our nets are designed to be completely humane while providing 100% protection. Made from UV-stabilized, high-density polyethylene (HDPE), these nets withstand Bengaluru's tropical climate, including heavy monsoons and intense sunlight. The nearly invisible mesh ensures your balcony's aesthetic appeal remains intact while keeping pigeons, crows, and other birds at bay.
              </p>
              <p className="mb-6 leading-relaxed">
                With over 5 years of experience serving Bengaluru residents, we've installed pigeon safety nets in more than 500 properties across the city. Our quick installation process takes just 2-4 hours, and we offer a comprehensive 5-year warranty on all materials and workmanship. Whether you live in a compact apartment in Whitefield or a spacious villa in Jayanagar, our pigeon nets are customized to fit your exact requirements while maintaining the highest safety standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Call for Free Inspection
                </a>
                <Link
                  to="/pigeon-safety-nets"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Net Services in Bengaluru
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive safety solutions for residential, commercial, and industrial needs across all areas of Bengaluru
            </p>
            
            {/* Detailed Services Description */}
            <div className="prose prose-lg max-w-5xl mx-auto text-left text-gray-600 mb-12">
              <p className="mb-6 leading-relaxed">
                At Anshu Safety Nets, we provide a complete range of safety net installation services designed to protect lives and property throughout Bengaluru. Our <strong>balcony safety nets in Bengaluru</strong> are the most popular choice for apartment dwellers, offering robust protection against falls while maintaining the aesthetic appeal of your home. These nets are particularly essential for families with children and pets, providing an invisible barrier that prevents accidents without obstructing your view.
              </p>
              <p className="mb-6 leading-relaxed">
                Our <strong>children safety nets in Bengaluru</strong> are specifically engineered with child safety in mind. Made from non-toxic, soft-touch materials, these nets feature an extra-strong mesh that can withstand significant pressure while being gentle enough to prevent any injury. Parents across Bengaluru trust our child safety nets for balconies, staircases, windows, and terrace areas in high-rise apartments. The installation is completely child-safe with no sharp edges or protrusions, giving you complete peace of mind.
              </p>
              <p className="mb-6 leading-relaxed">
                For those dealing with bird-related problems, our <strong>pigeon safety nets in Bengaluru</strong> offer the perfect solution. Pigeon droppings carry harmful bacteria and cause property damage, making prevention crucial. Our humane bird deterrent nets are UV-resistant, virtually invisible, and require minimal maintenance. They effectively prevent pigeons, crows, and other birds from nesting on your balcony, A/C units, or terrace without causing any harm to the birds themselves.
              </p>
              <p className="mb-6 leading-relaxed">
                Construction companies throughout Bengaluru rely on our <strong>construction safety nets</strong> to protect workers and passersby at building sites. These heavy-duty, professional-grade nets meet all industry safety standards and regulations. Available in various mesh sizes and configurations, our construction nets are designed to catch falling debris and prevent accidents. We also offer <strong>monkey safety nets</strong> for areas prone to monkey disturbances, <strong>industrial safety nets</strong> for warehouses and factories, and <strong>duct area safety nets</strong> for HVAC protection. Every service comes with expert installation, competitive pricing, and our signature 5-year warranty that covers both materials and workmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="https://wa.me/919900077665?text=I need safety nets installation in Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  WhatsApp for Instant Quote
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.link}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Anshu Safety Nets?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by hundreds of customers across Bengaluru
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection 
                key={item.title}
                animation="fadeUp"
                delay={index * 0.1}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Balcony Safety Nets in Bengaluru */}
            <AnimatedSection animation="fadeUp">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Balcony Safety Nets in Bengaluru
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our <strong>balcony safety nets in Bengaluru</strong> provide comprehensive protection for families with children and pets. Made from high-quality, UV-resistant materials, these nets are designed to withstand harsh weather conditions while maintaining their strength and appearance. We offer professional installation services across all areas of Bengaluru, ensuring your balcony is secure and safe. With over 500+ satisfied customers, we guarantee durability and peace of mind.
                </p>
                <Link
                  to="/balcony-safety-nets"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More About Balcony Safety Nets
                </Link>
              </div>
            </AnimatedSection>

            {/* Pigeon Safety Nets in Bengaluru */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Pigeon Safety Nets in Bengaluru
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Keep your home clean and hygienic with our <strong>pigeon safety nets in Bengaluru</strong>. These specialized nets prevent pigeons and other birds from nesting on your balcony, windows, or terrace without harming them. Our bird protection solutions are humane, effective, and virtually invisible. Perfect for residential apartments and commercial buildings, these nets are easy to maintain and provide long-lasting protection against bird-related issues.
                </p>
                <Link
                  to="/pigeon-safety-nets"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Get Pigeon Safety Nets Installed
                </Link>
              </div>
            </AnimatedSection>

            {/* Children Safety Nets */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Children Safety Nets for Complete Protection
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ensure your child's safety with our specially designed <strong>children safety nets</strong>. These nets are made from non-toxic, soft materials that provide maximum protection without compromising comfort. Ideal for balconies, staircases, and windows in high-rise apartments, our child safety nets give parents peace of mind. The extra-strong mesh can withstand significant pressure while being gentle to touch, making them perfect for homes with young children.
                </p>
                <Link
                  to="/children-safety-nets"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Children Safety Solutions
                </Link>
              </div>
            </AnimatedSection>

            {/* Construction Safety Nets */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Construction Safety Nets for Building Sites
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our heavy-duty <strong>construction safety nets</strong> are essential for building sites and construction projects in Bengaluru. Meeting all industry safety standards, these professional-grade nets protect workers from falls and debris. Available in various sizes and configurations, our construction safety solutions are trusted by leading builders and contractors. We provide quick installation and comply with all safety regulations for commercial and residential construction projects.
                </p>
                <Link
                  to="/construction-safety-nets"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Request Construction Safety Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Service Areas */}
          <AnimatedSection animation="fadeUp" delay={0.4} className="mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Serving All Areas of Bengaluru
              </h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                We provide professional safety net installation services across Bengaluru including Whitefield, HSR Layout, Koramangala, Indiranagar, Jayanagar, Marathahalli, Electronic City, Yelahanka, Hebbal, and all other localities. Our expert team is available for same-day consultation and quick installation services. Contact us for a <strong>free inspection and affordable quote</strong>.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Areas We Serve in Bengaluru - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Bengaluru
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Professional safety nets installation services across all major localities in Bengaluru with same-day service availability
            </p>
            
            <div className="prose prose-lg max-w-5xl mx-auto text-gray-600 text-left mb-12">
              <p className="mb-6 leading-relaxed">
                Our service network covers every corner of Bengaluru, ensuring that residents across the city have access to top-quality safety net installation. In <strong>Whitefield</strong>, one of Bengaluru's most prominent IT hubs, we serve hundreds of apartment complexes with balcony safety nets and pigeon protection solutions. The area's high concentration of high-rise buildings makes our services particularly essential for family safety. Similarly, in <strong>Electronic City</strong>, both Phase 1 and Phase 2, we provide rapid installation services for the booming residential communities that house thousands of tech professionals and their families.
              </p>
              <p className="mb-6 leading-relaxed">
                <strong>Marathahalli</strong>, known for its dense apartment clusters, sees high demand for our children safety nets and pigeon nets. Our team in <strong>BTM Layout</strong> and <strong>JP Nagar</strong> handles installations for both established residential areas and new constructions, offering customized solutions for independent houses and apartment complexes alike. In <strong>Hebbal</strong> and <strong>Yelahanka</strong>, areas experiencing rapid urbanization, our construction safety nets are widely used in ongoing building projects, while residential properties opt for our comprehensive balcony and bird protection systems.
              </p>
              <p className="mb-6 leading-relaxed">
                The upscale neighborhoods of <strong>Indiranagar</strong>, <strong>Koramangala</strong>, and <strong>HSR Layout</strong> prefer our invisible grill systems and premium balcony safety nets that complement their modern architecture. We also actively serve Jayanagar, Basavanagudi, Banashankari, Malleshwaram, Rajajinagar, Bellandur, Sarjapur Road, Hennur, and all other areas of Bengaluru. Our mobile installation teams ensure we can reach any location within 24 hours of your call, providing free inspection, instant quotes, and same-day installation for most requirements. With local service centers strategically positioned across the city, Anshu Safety Nets guarantees the fastest response times and most reliable service in Bengaluru's safety nets industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Call +91 99000 77665
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Schedule Free Inspection
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits of Installing Pigeon Safety Nets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Benefits of Installing Pigeon Safety Nets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Health Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pigeon droppings contain bacteria, fungi, and parasites that cause respiratory diseases, histoplasmosis, and cryptococcosis. Installing pigeon safety nets eliminates these health hazards, protecting your family from airborne diseases and contamination.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Value Maintenance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bird droppings cause permanent staining and corrosion on balconies, railings, and AC units. Our nets prevent this damage, maintaining your property's aesthetic appeal and resale value while saving thousands in cleaning and repair costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Noise Reduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pigeons create constant noise with their cooing, flapping, and nesting activities, especially during breeding seasons. Safety nets keep birds away, ensuring peaceful mornings and undisturbed sleep for you and your family.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Humane & Long-Lasting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike spikes or chemicals that harm birds, our nets are 100% humane and eco-friendly. Made from UV-resistant materials, they last 5-7 years without maintenance, providing cost-effective and ethical bird control for Bengaluru homes.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://wa.me/919900077665?text=I want to install pigeon safety nets in Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Get Pigeon Nets - WhatsApp Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We Are the Best */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why We Are the Best Safety Nets Company in Bengaluru
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 mb-8">
              <p className="mb-4 leading-relaxed">
                With over 5 years of dedicated service in Bengaluru, Anshu Safety Nets has established itself as the most trusted name in safety net installations. We've successfully completed 500+ projects across residential, commercial, and industrial sectors, earning a 4.9/5 rating from satisfied customers. Our commitment to quality begins with sourcing only ISO-certified materials from reputable manufacturers who meet international safety standards.
              </p>
              <p className="mb-4 leading-relaxed">
                What sets us apart is our team of experienced installation technicians who undergo regular training in the latest safety protocols and installation techniques. We don't just install nets; we conduct thorough site inspections, provide expert recommendations, and ensure every installation meets structural safety requirements. Our transparent pricing policy means you receive detailed quotations with no hidden charges, and our 5-year comprehensive warranty covers both materials and workmanship—the longest in the industry.
              </p>
              <p className="mb-6 leading-relaxed">
                Customer satisfaction drives everything we do. Our same-day installation service for most Bengaluru areas, 24/7 customer support, and post-installation follow-ups ensure you receive ongoing support long after the nets are in place. We offer flexible payment options, free maintenance checks during the warranty period, and a customer-first approach that has made us Bengaluru's preferred choice for safety net solutions. Choose Anshu Safety Nets for reliability, quality, and peace of mind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919900077665"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Call for Expert Consultation
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What is the cost of safety nets installation in Bengaluru?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The cost of safety nets in Bengaluru varies based on the type and area coverage. Balcony safety nets typically range from ₹35-70 per square foot, pigeon nets from ₹30-60 per sq ft, and children safety nets from ₹40-75 per sq ft. We provide transparent pricing with free site inspection and instant quotes. Final costs depend on material quality, installation complexity, and area size. Call +91 99000 77665 for an accurate estimate tailored to your specific requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does safety net installation take in Bengaluru?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most safety net installations in Bengaluru are completed within 2-4 hours, depending on the area size and complexity. Single balcony installations typically take 2 hours, while multiple balconies or large terrace areas may require 4-6 hours. We offer same-day installation service for most areas in Bengaluru. Our team arrives on time with all necessary equipment and ensures minimal disruption to your daily routine. Emergency installations can be arranged within 24 hours of your call.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are pigeon safety nets safe for children and pets?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, our pigeon safety nets are completely safe for children and pets. Made from non-toxic, UV-stabilized materials, these nets have smooth edges with no sharp components. The mesh size is designed to prevent birds from entering while being safe for children to touch. All our nets undergo rigorous safety testing and meet international standards. For added child safety, we recommend our specialized children safety nets with extra-strong mesh specifically engineered for maximum protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do safety nets come with a warranty in Bengaluru?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! We provide a comprehensive 5-year warranty on all safety net installations in Bengaluru. This warranty covers manufacturing defects, material degradation, and installation workmanship. If any issues arise during the warranty period, we offer free repairs or replacements. Our nets are designed to withstand Bengaluru's climate, including heavy monsoons and intense summer heat. We also provide free maintenance checks during the warranty period to ensure optimal performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Which areas in Bengaluru do you provide safety nets installation?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide safety nets installation services across all areas of Bengaluru including Whitefield, Electronic City, Marathahalli, BTM Layout, JP Nagar, Hebbal, Yelahanka, Indiranagar, Koramangala, HSR Layout, Jayanagar, Banashankari, Basavanagudi, Malleshwaram, Rajajinagar, Bellandur, Sarjapur Road, Hennur, and all other localities. Our mobile teams ensure same-day service availability for most areas. Contact us at +91 99000 77665 to check service availability in your specific location.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">
                Have more questions? Our safety experts are ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Call Now for Answers
                </a>
                <a
                  href="https://wa.me/919900077665?text=I have questions about safety nets in Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  WhatsApp Your Query
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location-Based Landing Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Safety Nets Installation Across Bengaluru
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional balcony, pigeon, and children safety nets service in all major areas of Bengaluru
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitefield */}
            <AnimatedSection animation="fadeUp">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Whitefield
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Get premium <strong>safety nets installation in Whitefield</strong> for your balconies, windows, and terraces. We serve all parts of Whitefield including Whitefield Main Road, ITPL, Brookefield, and surrounding areas. Our expert team provides same-day installation with 100% customer satisfaction. Protect your family with high-quality balcony safety nets, pigeon nets, and children safety nets designed for Whitefield's high-rise apartments. Affordable pricing with lifetime durability guarantee. Call now for free inspection and instant quote for safety nets in Whitefield, Bengaluru.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Call Now - Whitefield Service
                </a>
              </div>
            </AnimatedSection>

            {/* Electronic City */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Electronic City
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Professional <strong>safety nets in Electronic City</strong> with quick installation and affordable rates. We cover Electronic City Phase 1, Phase 2, and all nearby localities. Specializing in balcony safety nets for apartment complexes, pigeon protection nets, and construction safety nets for ongoing projects. Our Electronic City team ensures ISO-certified materials and professional installation within 24 hours. Trusted by 100+ families in Electronic City for reliable bird net installation and children safety solutions. Get the best safety nets service in Electronic City, Bengaluru today.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                >
                  Call Now - Electronic City
                </a>
              </div>
            </AnimatedSection>

            {/* Marathahalli */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Marathahalli
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Top-rated <strong>balcony safety nets in Marathahalli</strong> for residential and commercial properties. Serving Marathahalli Bridge, Varthur Road, Kadubeesanahalli, and nearby areas with expert safety net installation. We offer comprehensive solutions including pigeon safety nets, children protection nets, duct area safety nets, and monkey safety nets. Our Marathahalli service team provides free site inspection, transparent pricing, and same-day installation. Protect your loved ones with weather-resistant, UV-protected safety nets. Best safety nets near Marathahalli with 5-year warranty.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  Call Now - Marathahalli
                </a>
              </div>
            </AnimatedSection>

            {/* Yelahanka */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Yelahanka
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Reliable <strong>safety nets installation in Yelahanka</strong> covering Yelahanka New Town, Old Town, and Kogilu areas. We provide premium quality balcony safety nets, bird protection nets, and children safety solutions for Yelahanka residents. Our specialized team handles both residential apartments and independent houses with customized safety net solutions. Get durable, weather-proof safety nets that withstand Bengaluru's climate. Serving Yelahanka for over 5 years with 500+ happy customers. Affordable balcony net installation cost in Yelahanka with transparent pricing. Free quote available.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
                >
                  Call Now - Yelahanka
                </a>
              </div>
            </AnimatedSection>

            {/* Hebbal */}
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Hebbal
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expert <strong>safety nets in Hebbal</strong> with professional installation and quality materials. Serving Hebbal, Nagawara, RT Nagar, and surrounding localities with comprehensive safety solutions. We specialize in balcony protection nets, pigeon deterrent nets, construction safety nets, and invisible grills for Hebbal apartments. Our team ensures child-safe installation with non-toxic materials and extra-strong mesh. Get immediate service for safety nets near Hebbal with experienced technicians and certified materials. Trusted by leading apartment complexes in Hebbal for reliable bird net installation and balcony safety.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                >
                  Call Now - Hebbal Service
                </a>
              </div>
            </AnimatedSection>

            {/* JP Nagar */}
            <AnimatedSection animation="fadeUp" delay={0.5}>
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in JP Nagar
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium <strong>balcony safety nets in JP Nagar</strong> for complete home protection. We cover JP Nagar 1st to 9th Phase with fast installation and affordable pricing. Our JP Nagar service includes children safety nets, pigeon safety nets, balcony invisible grills, and duct area protection. Using high-tensile, UV-resistant materials that last for years. Perfect for JP Nagar's residential towers and gated communities. Get expert safety nets installation with same-day service availability. Top-rated safety nets service in JP Nagar with transparent costs and no hidden charges. Free consultation available.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-sm"
                >
                  Call Now - JP Nagar
                </a>
              </div>
            </AnimatedSection>

            {/* BTM Layout */}
            <AnimatedSection animation="fadeUp" delay={0.6}>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in BTM Layout
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Affordable <strong>safety nets in BTM Layout</strong> with guaranteed quality and quick service. Covering BTM 1st Stage, 2nd Stage, and nearby Silk Board, Bommanahalli areas. We provide comprehensive safety solutions including balcony nets, bird protection, children safety nets, and monkey safety nets for BTM residents. Our experienced team ensures professional installation with minimal disruption. Get weather-resistant, durable safety nets that handle BTM's environmental conditions. Best safety nets near BTM Layout with competitive pricing and 5-year warranty. Instant quote and same-day installation available.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-sm"
                >
                  Call Now - BTM Service
                </a>
              </div>
            </AnimatedSection>

            {/* Indiranagar */}
            <AnimatedSection animation="fadeUp" delay={0.7}>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Nets in Indiranagar
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Trusted <strong>safety nets installation in Indiranagar</strong> for both old and new constructions. Serving Indiranagar 1st Stage, 2nd Stage, HAL 2nd Stage, and surrounding areas with expert safety solutions. We offer premium balcony safety nets, pigeon nets, invisible grills, and construction safety nets for Indiranagar properties. Our team specializes in heritage building installations with aesthetic solutions. Get the best bird net installation service in Indiranagar with materials that blend with your property's architecture. Professional installation with clean work and customer satisfaction guarantee. Free inspection for Indiranagar residents.
                </p>
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-sm"
                >
                  Call Now - Indiranagar
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Locations */}
          <AnimatedSection animation="fadeUp" delay={0.8} className="mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Also Serving: Koramangala, HSR Layout, Jayanagar, Banashankari, Basavanagudi, Malleshwaram & More
              </h3>
              <p className="text-blue-100 mb-6 max-w-4xl mx-auto">
                We provide safety nets installation across all areas of Bengaluru. No matter where you are located, our expert team is ready to serve you with professional safety solutions. Same-day service available for most localities in Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+919900077665"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +91 99000 77665
                </a>
                <a
                  href="https://wa.me/919900077665?text=I need safety nets installation in Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  WhatsApp for Instant Quote
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Secure Your Space?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get professional safety net installation with quality guarantee. 
                  Free consultation and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919900077665"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 99000 77665
                  </a>
                  <a
                    href="https://wa.me/919900077665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <CallbackForm 
                title="Get Free Quote"
                subtitle="Fill in your details for a free consultation and quote"
                className="bg-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;