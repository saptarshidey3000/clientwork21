import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Shield, Target, Eye } from 'lucide-react';

const About = () => {
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
    { year: "2010", title: "Founded", description: "GreenView Nursing Home established with a vision to provide quality healthcare" },
    { year: "2015", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2018", title: "NABH Accredited", description: "Received NABH accreditation for healthcare quality standards" },
    { year: "2024", title: "Modern Expansion", description: "Upgraded facilities with latest medical equipment and technology" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
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
              compassionate healthcare services, modern facilities, and experienced medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                GreenView Nursing Home was established with a simple yet profound mission: 
                to provide quality healthcare services in a compassionate environment. 
                Located in the heart of Naihati, West Bengal, we have been serving our 
                community with dedication and excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with the vision of creating a healthcare facility that 
                combines modern medical technology with human compassion. Over the years, 
                we have grown to become a trusted name in healthcare, earning certifications 
                from NABH and ISO 9001:2015.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to uphold our founding principles while embracing 
                the latest advancements in medical science to provide comprehensive 
                care to our patients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground p-6 text-center shadow-soft">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">NABH</h3>
                <p>Accredited</p>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-6 text-center shadow-soft">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">ISO</h3>
                <p>9001:2015</p>
              </Card>
              <Card className="bg-card p-6 text-center shadow-soft col-span-2">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">Serving the community with love and dedication</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-none shadow-medical p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and quality healthcare services to our community 
                  with compassion, integrity, and excellence. We strive to create a healing environment 
                  where patients feel cared for, respected, and supported throughout their healthcare journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-none shadow-medical p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to exceptional healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-smooth">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to healthcare excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Facilities Images Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Modern Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art medical equipment and comfortable facilities for your care
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F883be094dd9645debc3cfdee9f665ed3?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F935832a0d7e04a29b8a0999d65d9ec67?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F6e24ac3198fd42849f9de20905238bfd?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div> */}
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F72ce55b66d734941ac4670aafb6a0562?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F81b2f6f49c464674b84b3f5c70c7f072?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F14092889bb0e4f05877fe79ac0dec063?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fd19205190f5c4311ac1ff3ace2d565f2?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F1898e3bf37a74c0fb137749c1b2550d5?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fb2e783bb7b0548fe8e1410e5c87ef026?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fba81d03916c9458aaf9ca7a239680aeb?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F231c3ae153894580bce38ae94e25c621?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fca29ecd6538f45699c71b5aea3eda63b?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fcdc314b2a96f4e9db5e5900ad81df65f?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F967f994f68c34525ac02f5f721e69e1c?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F7f5a1588d83143c9a15701b5dce50226?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Ff7ba40429c424d908ac514bc12810c8d?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fc146af3c99b443a4a0420ca945143bd1?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fba060c81c2314bd9b9d490f4c36bece6?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fe024799e394645ef97c243c541324097?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F97ebdacf85e34933a98ea2f635397ace?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Ffa4d6e3685844f71ba51a3840518c87a?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F899935986bbe49929ccc7458b51a8fc6?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2Fdf02665604ef4224812e07b99451f1f1?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F07edf3dc719d4eaa8441941602efbb8f?format=webp&width=800"
                alt="Clinic facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
