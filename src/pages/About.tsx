import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Shield, Target, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Client provided images
  const clientImages = [
    {
      src: "/p1.jpg", // This will be replaced with the actual building image
      alt: "GreenView Clinic & Nursing Home Building",
      title: "Our Modern Facility"
    },
    {
      src: "/p2.jpg", // This will be replaced with the founders image
      alt: "Founders of GreenView Clinic",
      title: "Our Founding Team"
    },
    {
      src: "/p3.jpg", // This will be replaced with the Sai Baba image
      alt: "Sai Baba Shrine",
      title: "Spiritual Corner"
    },
    {
      src: "/p4.jpg", // This will be replaced with the certificate image
      alt: "NABH Accreditation Certificate",
      title: "Quality Certification"
    }
  ];

  // All facility images for the gallery
  const facilityImages = [
    ...clientImages,
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F883be094dd9645debc3cfdee9f665ed3?format=webp&width=800",
      alt: "Clinic facility",
      title: "Medical Equipment"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F935832a0d7e04a29b8a0999d65d9ec67?format=webp&width=800",
      alt: "Clinic facility",
      title: "Treatment Room"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F72ce55b66d734941ac4670aafb6a0562?format=webp&width=800",
      alt: "Clinic facility",
      title: "Patient Care Area"
    },
    // {
    //   src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F81b2f6f49c464674b84b3f5c70c7f072?format=webp&width=800",
    //   alt: "Clinic facility",
    //   title: "Consultation Room"
    // },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F14092889bb0e4f05877fe79ac0dec063?format=webp&width=800",
      alt: "Clinic facility",
      title: "Reception Area"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fd19205190f5c4311ac1ff3ace2d565f2?format=webp&width=800",
      alt: "Clinic facility",
      title: "Laboratory"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F1898e3bf37a74c0fb137749c1b2550d5?format=webp&width=800",
      alt: "Clinic facility",
      title: "Pharmacy"
    },
    // {
    //   src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fb2e783bb7b0548fe8e1410e5c87ef026?format=webp&width=800",
    //   alt: "Clinic facility",
    //   title: "Emergency Ward"
    // },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fba81d03916c9458aaf9ca7a239680aeb?format=webp&width=800",
      alt: "Clinic facility",
      title: "ICU Unit"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F231c3ae153894580bce38ae94e25c621?format=webp&width=800",
      alt: "Clinic facility",
      title: "Patient Room"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fca29ecd6538f45699c71b5aea3eda63b?format=webp&width=800",
      alt: "Clinic facility",
      title: "Diagnostic Center"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fcdc314b2a96f4e9db5e5900ad81df65f?format=webp&width=800",
      alt: "Clinic facility",
      title: "Surgery Suite"
    },
     {
      src: "/p5.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p6.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p7.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p8.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p9.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p11.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p13.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p16.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p17.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
        {
      src: "/p19.jpg",
      alt: "Clinic facility",
      title: "Surgery Suite"
    } ,
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "We believe in treating every patient with love, dignity, and respect, following our motto 'Where There Is Love, There Is Life'."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Standards", 
      description: "NABH and ISO 9001:2015 certified facility ensuring the highest standards of medical care and patient safety."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Highly qualified doctors and experienced nursing staff providing comprehensive healthcare services."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Modern Technology",
      description: "State-of-the-art medical equipment and modern facilities for accurate diagnosis and effective treatment."
    }
  ];

  const milestones = [
    { year: "1986", title: "Founded", description: "GreenView Nursing Home established on 1st March 1986 by Late Dr. Tarun Kumar Adhikary" },
    { year: "2015", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2021", title: "NABH Accredited", description: "Received NABH accreditation for healthcare quality standards" },
    { year: "2024", title: "Modern Expansion", description: "Upgraded facilities with latest medical equipment and technology" }
  ];

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % facilityImages.length
      : (currentImageIndex - 1 + facilityImages.length) % facilityImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(facilityImages[newIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Where There Is Love, There Is Life
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              GreenView Nursing Home has been serving the Naihati community with 
              compassionate healthcare services, modern facilities, and experienced medical professionals since 1986.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story with Building Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GreenView Nursing Home was established on <strong>1st March 1986</strong> by the visionary 
                <strong> Late Dr. Tarun Kumar Adhikary</strong> with a simple yet profound mission: 
                to provide quality healthcare services in a compassionate environment. 
                Located in the heart of Naihati, West Bengal, we have been serving our 
                community with dedication and excellence for over four decades.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with the vision of creating a healthcare facility that 
                combines modern medical technology with human compassion. Over the years, 
                we have grown to become a trusted name in healthcare, earning certifications 
                from NABH and ISO 9001:2015.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to uphold our founding principles while embracing 
                the latest advancements in medical science to provide comprehensive 
                care to our patients.
              </p>
            </div>
            <div className="cursor-pointer" onClick={() => openImageModal(clientImages[0], 0)}>
              <img
                src={clientImages[0].src}
                alt={clientImages[0].alt}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-2 text-gray-600 font-medium">{clientImages[0].title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="cursor-pointer" onClick={() => openImageModal(clientImages[1], 1)}>
              <img
                src={clientImages[1].src}
                alt={clientImages[1].alt}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-700 font-medium text-lg">{clientImages[1].title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sai Baba Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="cursor-pointer" onClick={() => openImageModal(clientImages[2], 2)}>
              <img
                src={clientImages[2].src}
                alt={clientImages[2].alt}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-700 font-medium text-lg">{clientImages[2].title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certified by leading healthcare quality organizations
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="cursor-pointer" onClick={() => openImageModal(clientImages[3], 3)}>
              <img
                src={clientImages[3].src}
                alt={clientImages[3].alt}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-700 font-medium text-lg">{clientImages[3].title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-lg p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, affordable, and quality healthcare services to our community 
                  with compassion, integrity, and excellence. We strive to create a healing environment 
                  where patients feel cared for, respected, and supported throughout their healthcare journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our clinical excellence, 
                  innovative treatments, and patient-centered care. We envision a future where quality 
                  healthcare is accessible to all, delivered with compassion and powered by technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to exceptional healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to healthcare excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Facilities Images Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Modern Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art medical equipment and comfortable facilities for your care
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {facilityImages.slice(4).map((image, index) => (
              <div 
                key={index + 4} 
                className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openImageModal(image, index + 4)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={40} />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-sm opacity-75">
                {currentImageIndex + 1} of {facilityImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;