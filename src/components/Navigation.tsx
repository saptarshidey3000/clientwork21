import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AppointmentPopup from './AppointmentPopup';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppointmentPopupOpen, setIsAppointmentPopupOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-background shadow-soft border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-base font-medium">(033) 2581-2429 | 9433048997</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-base font-medium">nursinghomegreenview@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">📍</span>
              <span className="text-base font-medium">231/1, r.b.c. road, naihati, pin -743165, north 24 pgs</span>
            </div>
          </div>
          <div className="text-base font-semibold">24x7 Emergency Services Available</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center relative">
          {/* Logo wrapper - fixed height, bigger logo */}
      <Link to="/" className="flex items-center">
  <img
    src="/greenviewlogo.png"
    alt="GreenView Clinic & Nursing Home Logo"
    className="h-16 md:h-20 w-auto object-contain"
  />
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-smooth hover:text-primary font-medium text-lg ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-medical text-base px-6 py-3"
              onClick={() => setIsAppointmentPopupOpen(true)}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-smooth hover:text-primary font-medium py-2 text-lg ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-gradient-primary mt-4 text-base"
                onClick={() => {
                  setIsOpen(false);
                  setIsAppointmentPopupOpen(true);
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>

      <AppointmentPopup
        isOpen={isAppointmentPopupOpen}
        onClose={() => setIsAppointmentPopupOpen(false)}
      />
    </header>
  );
};

export default Navigation;
