import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'consultation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully",
      description: "We'll contact you soon to confirm your appointment.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      appointmentType: 'consultation'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["(033) 2581-2429", "9433048997"],
      action: "tel:03325812429"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["nursinghomegreenview@gmail.com"],
      action: "mailto:nursinghomegreenview@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hospital Address",
      details: ["231/1, r.b.c. road", "naihati, pin -743165", "north 24 pgs, West Bengal"],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Emergency Services",
      details: ["24x7 Available", "Emergency Helpline", "Immediate Response"],
      action: "tel:9433048997"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Contact GreenView Nursing Home for appointments, emergency services, 
              or any healthcare-related inquiries. We're here to help you 24x7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for your healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-smooth">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <a href={info.action}>Contact</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-none shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  Book Appointment
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="appointmentType">Appointment Type</Label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    >
                      <option value="consultation">General Consultation</option>
                      <option value="emergency">Emergency</option>
                      <option value="specialist">Specialist Consultation</option>
                      <option value="follow-up">Follow-up Visit</option>
                      <option value="surgery">Surgery Consultation</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject of your inquiry"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your medical concern or appointment requirements..."
                      rows={4}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-medical">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Location Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-none shadow-medical">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Find Us
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Located in the heart of Naihati, easily accessible by all modes of transport.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-card rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.456!2d88.4234!3d22.9045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sNaihati%2C%20West%20Bengal%20743165!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GreenView Nursing Home Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-none shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Hospital Address</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>231/1, r.b.c. road</p>
                    <p>naihati, pin -743165</p>
                    <p>north 24 pgs, West Bengal</p>
                    <p className="font-medium text-foreground mt-4">Landmarks:</p>
                    <p>Near Naihati Railway Station</p>
                    <p>Close to R.B.C. Road Market</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Medical Emergency?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              For immediate medical assistance, contact our 24x7 emergency helpline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:03325812429">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: (033) 2581-2429
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:9433048997">
                  <Phone className="w-5 h-5 mr-2" />
                  Mobile: 9433048997
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
