import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-border">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">G</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">GreenView</h3>
                <p className="text-sm text-muted-foreground">Nursing Home</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing quality healthcare services with modern facilities and experienced medical professionals. 
              NABH and ISO 9001:2015 certified for your trust and safety.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook size={16} />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter size={16} />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Services
              </Link>
              <Link to="/doctors" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Our Doctors
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Modern Operation Theatre</p>
              <p>24x7 ICU Services</p>
              <p>Cardiac Monitoring</p>
              <p>BI-PAP Ventilation</p>
              <p>Emergency Services</p>
              <p>Pharmacy Support</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  231/1, r.b.c. road<br />
                  naihati, pin -743165<br />
                  north 24 pgs, West Bengal
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>(033) 2581-2429</p>
                  <p>9433048997</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">nursinghomegreenview@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">24x7 Emergency Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
  <h4 className="text-lg font-semibold text-foreground mb-4">Find Us</h4>
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

      <Separator />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 GreenView Nursing Home. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
