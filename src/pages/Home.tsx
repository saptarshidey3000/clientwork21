import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppointmentPopup from '@/components/AppointmentPopup';
import {
  Heart,
  Shield,
  Clock,
  Users,
  Star,
  Phone,
  MapPin,
  Stethoscope,
  Activity,
  Award,
  CheckCircle,
  UserCheck
} from 'lucide-react';

const Home = () => {
  const [isAppointmentPopupOpen, setIsAppointmentPopupOpen] = useState(false);
  const services = [
    { icon: <Stethoscope className="w-8 h-8" />, title: "Modern OT", description: "State-of-the-art operation theatre with advanced equipment" },
    { icon: <Activity className="w-8 h-8" />, title: "24x7 ICU", description: "Round-the-clock intensive care with trained technicians" },
    { icon: <Heart className="w-8 h-8" />, title: "Cardiac Monitoring", description: "Advanced cardiac monitoring and emergency support" },
    { icon: <Clock className="w-8 h-8" />, title: "Emergency Services", description: "24x7 emergency medical services available" },
  ];

  const whyChooseUs = [
    "NABH and ISO 9001:2015 Certified",
    "24x7 Doctor Availability", 
    "Highly Experienced Nursing Staff",
    "Modern Medical Equipment",
    "Centralized Oxygen Supply",
    "In-house Pharmacy"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              NABH & ISO 9001:2015 Certified
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-primary-light mb-2">GreenView Clinic & Nursing Home</span>
              Quality Healthcare with
              <span className="block text-primary-light">Modern Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Providing comprehensive medical care with experienced doctors, 
              modern equipment, and 24x7 emergency services in Naihati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-medical"
                onClick={() => setIsAppointmentPopupOpen(true)}
              >
                Book Appointment
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
                <Link to="/doctors" className="text-white hover:text-primary flex items-center">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Our Doctors
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
                <Link to="/services" className="text-white hover:text-primary">Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(033) 2581-2429 / 9433048997</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>231/1, r.b.c. road, naihati, pin -743165, north 24 pgsNaihati, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services with modern facilities and experienced medical professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About GreenView Nursing Home
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                GreenView Nursing Home is a premier healthcare facility in Naihati, West Bengal,
                providing quality medical care with modern facilities and experienced medical professionals.
                We are NABH and ISO 9001:2015 certified, ensuring the highest standards of patient care.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our motto "Where There Is Love, There Is Life" reflects our commitment to providing
                compassionate care in a comfortable environment with state-of-the-art medical equipment.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-medical">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                  <Card className="bg-primary text-primary-foreground p-6 text-center shadow-soft">
                    <h3 className="text-3xl font-bold mb-2">24/7</h3>
                    <p>Emergency Services</p>
                  </Card>
                  <Card className="bg-secondary text-secondary-foreground p-6 text-center shadow-soft">
                    <h3 className="text-3xl font-bold mb-2">12+</h3>
                    <p>Specialist Doctors</p>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="bg-card p-6 text-center shadow-soft">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">NABH Certified</h3>
                    <p className="text-sm text-muted-foreground">Quality Assured</p>
                  </Card>
                  <Card className="bg-card p-6 text-center shadow-soft">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                    <p className="text-sm text-muted-foreground">Quality Management</p>
                  </Card>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <div className="aspect-square overflow-hidden rounded-lg shadow-soft">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4e2303e1928f449baa3200dabb2284fa%2F6e24ac3198fd42849f9de20905238bfd?format=webp&width=800"
                    alt="Clinic facility"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose GreenView?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional healthcare services with a patient-first approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 p-6 bg-gradient-card rounded-lg shadow-soft hover:shadow-medical transition-smooth">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find us at our convenient location in Naihati, West Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Address
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg font-medium text-foreground">GreenView Clinic & Nursing Home</p>
                  <p>231/1, r.b.c. road</p>
                  <p>naihati, pin -743165</p>
                  <p>north 24 pgs, West Bengal</p>
                  <p>India</p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone Numbers</p>
                      <p className="text-muted-foreground">(033) 2581-2429 | 9433048997</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Operating Hours</p>
                      <p className="text-muted-foreground">24x7 Emergency Services Available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark"
                    onClick={() => setIsAppointmentPopupOpen(true)}
                  >
                    Get Directions & Book Appointment
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card p-4 rounded-lg shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.6234567890!2d88.4129!3d22.8975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c5234567890%3A0x1234567890abcdef!2s231%2F1%2C%20RBC%20Rd%2C%20Naihati%2C%20West%20Bengal%20743165!5e0!3m2!1sen!2sin!4v1640995200000"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreenView Clinic & Nursing Home - 231/1, r.b.c. road, naihati"
                  className="w-full h-96 rounded-lg"
                ></iframe>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://maps.google.com/?q=231/1+r.b.c.+road+naihati+743165+West+Bengal+GreenView+Clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experienced medical team is available 24x7 for emergency services.
            Contact us for appointments or emergency care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setIsAppointmentPopupOpen(true)}
            >
              Book Appointment
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:03325812429">Call Emergency: (033) 2581-2429</a>
            </Button>
          </div>
        </div>
      </section>
      <AppointmentPopup
        isOpen={isAppointmentPopupOpen}
        onClose={() => setIsAppointmentPopupOpen(false)}
      />
    </div>
  );
};

export default Home;
