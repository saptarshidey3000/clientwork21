import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Zap, 
  Droplet, 
  Clock, 
  Users, 
  ShieldCheck,
  Pill,
  Monitor,
  Wind,
  TestTube
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Modern OT",
      description: "State-of-the-art operation theatre equipped with advanced surgical instruments, modern lighting systems, and infection control measures for safe surgical procedures.",
      features: ["Advanced Surgical Equipment", "Infection Control", "Modern Lighting", "Emergency Ready"]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "ABG Analysis",
      description: "Arterial Blood Gas analysis for accurate assessment of respiratory and metabolic status, crucial for critical care and surgical patients.",
      features: ["Rapid Results", "Accurate Measurements", "Critical Care Support", "Expert Interpretation"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Defibrillator",
      description: "Advanced cardiac defibrillation equipment for emergency cardiac care and life-saving interventions during cardiac arrests.",
      features: ["Emergency Response", "Life-Saving Technology", "Trained Operators", "24x7 Availability"]
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Infusion Pump",
      description: "Precision infusion pumps for accurate medication delivery, ensuring patient safety and optimal therapeutic outcomes.",
      features: ["Precise Dosing", "Safety Features", "Multiple Channels", "Alarm Systems"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "BI-PAP Ventilation",
      description: "Non-invasive ventilation support for patients with respiratory difficulties, providing comfort and effective treatment.",
      features: ["Non-Invasive", "Comfortable", "Effective Treatment", "Respiratory Support"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Centralized Oxygen",
      description: "Hospital-wide centralized oxygen supply system ensuring continuous and reliable oxygen delivery to all patient areas.",
      features: ["Continuous Supply", "Reliable System", "All Patient Areas", "Emergency Backup"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24x7 Doctor",
      description: "Round-the-clock availability of qualified doctors for emergency consultations, treatments, and medical decision-making.",
      features: ["Emergency Consultation", "Immediate Response", "Qualified Doctors", "Always Available"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Highly Experience Nurse",
      description: "Skilled and experienced nursing staff providing compassionate patient care, medication administration, and continuous monitoring.",
      features: ["Experienced Staff", "Compassionate Care", "Professional Training", "Patient Monitoring"]
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "24x7 Pharmacy Support",
      description: "In-house pharmacy services available round-the-clock for immediate medication availability and emergency drug requirements.",
      features: ["In-House Pharmacy", "Emergency Medications", "Quality Drugs", "Immediate Availability"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "24x7 ICU Trained Technician",
      description: "Specialized ICU technicians available 24x7 for critical care support, equipment operation, and patient monitoring.",
      features: ["ICU Specialists", "Equipment Expertise", "Patient Monitoring", "Critical Care Support"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "24x7 ICU Trained RMO",
      description: "Resident Medical Officers with ICU training available round-the-clock for intensive care management and emergency response.",
      features: ["ICU Training", "Intensive Care", "Emergency Response", "Continuous Coverage"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cardiac Monitoring Support",
      description: "Advanced cardiac monitoring systems for continuous heart rhythm monitoring, early detection of cardiac events, and timely intervention.",
      features: ["Continuous Monitoring", "Early Detection", "Advanced Technology", "Timely Intervention"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Medical Services
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              State-of-the-art medical facilities and services designed to provide 
              the highest quality healthcare with modern equipment and experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of medical services with modern technology and expert care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth group h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-grow">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              24x7 Emergency Services
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our emergency department is fully equipped and staffed 24 hours a day, 7 days a week 
              with experienced doctors, nurses, and support staff ready to handle any medical emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:03325812429">Emergency: (033) 2581-2429</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quality Assured Healthcare
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                All our services are backed by NABH and ISO 9001:2015 certifications, 
                ensuring that you receive the highest quality of medical care with 
                international standards of safety and excellence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">NABH Accredited Hospital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Experienced Medical Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Modern Medical Equipment</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-medical">
                <Link to="/doctors">Meet Our Doctors</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground p-6 text-center shadow-soft">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p>Emergency Care</p>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-6 text-center shadow-soft">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">12+</h3>
                <p>Expert Doctors</p>
              </Card>
              <Card className="bg-card p-6 text-center shadow-soft">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">NABH</h3>
                <p className="text-sm text-muted-foreground">Accredited</p>
              </Card>
              <Card className="bg-card p-6 text-center shadow-soft">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Modern</h3>
                <p className="text-sm text-muted-foreground">Equipment</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;