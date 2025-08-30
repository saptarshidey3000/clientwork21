import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Award, Phone } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. H. S. Pathak",
      qualification: "MD (Medicine)",
      specialty: "Internal Medicine",
      availability: "By Appointment",
      experience: "15+ Years",
      description: "Specialist in internal medicine with extensive experience in treating complex medical conditions."
    },
    {
      name: "Dr. S. Gupta",
      qualification: "M.S (Gen+Lap Surgeon)",
      specialty: "General & Laparoscopic Surgery",
      availability: "Monday & Friday, 4:30 PM",
      experience: "12+ Years",
      description: "Expert in general and laparoscopic surgery with advanced minimally invasive techniques."
    },
    {
      name: "Dr. Abhay Sarkar",
      qualification: "M.S (Ortho)",
      specialty: "Orthopedics",
      availability: "Sunday 8:00 PM & Wednesday 6:30 PM",
      experience: "14+ Years",
      description: "Orthopedic specialist focusing on bone, joint, and musculoskeletal disorders."
    },
    {
      name: "Dr. Gourab Kundu",
      qualification: "MS, MCH (Uro Surgeon)",
      specialty: "Urology",
      availability: "Monday 7:30 PM",
      experience: "10+ Years",
      description: "Urological surgeon specializing in minimally invasive urological procedures."
    },
    {
      name: "Dr. D. Chowdhury",
      qualification: "DGO, MS (Gynaecologist; Gen + Lap Surgeon)",
      specialty: "Gynecology & Obstetrics",
      availability: "Everyday (By Appointment)",
      experience: "16+ Years",
      description: "Gynecologist and obstetrician with expertise in women's health and reproductive medicine."
    },
    {
      name: "Dr. Koustav Biswas",
      qualification: "MBBS, MD (Consultant Clinical Oncologist)",
      specialty: "Clinical Oncology",
      availability: "Friday 6:00 PM",
      experience: "8+ Years",
      description: "Clinical oncologist specializing in cancer diagnosis, treatment, and patient care."
    },
    // {
    //   name: "Dr. Avijit Mitra",
    //   qualification: "DNB, MCH (Gen+Paediatric Surgeon)",
    //   specialty: "General & Pediatric Surgery",
    //   availability: "Monday, Friday, Saturday 4:00 PM",
    //   experience: "11+ Years",
    //   description: "Surgeon specializing in general and pediatric surgical procedures."
    // },
    {
      name: "Dr. Abhishek Chakraborty",
      qualification: "M.D, D.M (Nephrologist)",
      specialty: "Nephrology",
      availability: "Every 1st & 3rd Tuesday, 4:00 PM",
      experience: "9+ Years",
      description: "Nephrologist specializing in kidney diseases and renal care."
    },
    {
      name: "Dr. Avik Kumar Das",
      qualification: "MBBS, MS (ENT)",
      specialty: "ENT (Ear, Nose, Throat)",
      availability: "By Appointment",
      experience: "13+ Years",
      description: "ENT specialist with expertise in disorders of ear, nose, throat, and head-neck region."
    },
    // {
    //   name: "Dr. Shuva Bhattacharya",
    //   qualification: "MBBS (WBUHS) (General Physician)",
    //   specialty: "General Medicine",
    //   availability: "By Appointment",
    //   experience: "7+ Years",
    //   description: "General physician providing comprehensive primary healthcare services."
    // },
    {
      name: "Dr. Goutam Kumar Ray",
      qualification: "MBBS, DGO (Obstetrician + Gynecologist)",
      specialty: "Obstetrics & Gynecology",
      availability: "By Appointment",
      experience: "18+ Years",
      description: "Experienced obstetrician and gynecologist specializing in women's health."
    },
    {
      name: "Dr. Suchira Majumder",
      qualification: "MS (Obstetrician + Gynaecologist)",
      specialty: "Obstetrics & Gynecology",
      availability: "By Appointment",
      experience: "12+ Years",
      description: "Specialist in obstetrics and gynecology with focus on maternal and fetal medicine."
    }
  ];

  const specialties = [
    "Internal Medicine",
    "General Surgery", 
    "Orthopedics",
    "Urology",
    "Gynecology & Obstetrics",
    "Clinical Oncology",
    "Pediatric Surgery",
    "Nephrology",
    "ENT",
    "General Medicine"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Our Medical Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Experienced Doctors
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Meet our team of highly qualified and experienced medical professionals 
              dedicated to providing exceptional healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Medical Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple medical specialties
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highly qualified doctors with years of experience in their respective fields
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-medical transition-smooth group h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-smooth">
                    <User className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {doctor.name}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {doctor.specialty}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{doctor.qualification}</p>
                        <p className="text-sm text-muted-foreground">{doctor.experience} Experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{doctor.availability}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/contact">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our experienced doctors for personalized medical care. 
              We're here to provide the best healthcare services for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:03325812429">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (033) 2581-2429
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Emergency Medical Services
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              For medical emergencies, our doctors and medical team are available 24x7. 
              Don't hesitate to contact us immediately in case of any emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-medical">
                <a href="tel:03325812429">
                  Emergency: (033) 2581-2429
                </a>
              </Button>
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-medical">
                <a href="tel:9433048997">
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

export default Doctors;