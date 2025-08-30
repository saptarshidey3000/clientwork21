import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface AppointmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentPopup: React.FC<AppointmentPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-primary">Book Appointment</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Contact us to book your appointment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Phone Numbers */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Call Us
            </h3>
            <div className="space-y-1 pl-5">
              <div className="flex items-center justify-between p-2 rounded bg-white/30 backdrop-blur-sm border border-white/20">
                <span className="text-sm text-foreground">(033) 2581-2429</span>
                <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-xs px-2 py-1">
                  <a href="tel:03325812429">Call</a>
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/30 backdrop-blur-sm border border-white/20">
                <span className="text-sm text-foreground">9433048997</span>
                <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-xs px-2 py-1">
                  <a href="tel:9433048997">Call</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email Us
            </h3>
            <div className="pl-5">
              <div className="flex items-center justify-between p-2 rounded bg-white/30 backdrop-blur-sm border border-white/20">
                <span className="text-xs text-foreground">nursinghomegreenview@gmail.com</span>
                <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-xs px-2 py-1">
                  <a href="mailto:nursinghomegreenview@gmail.com">Email</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Visit Us
            </h3>
            <div className="pl-5 p-2 rounded bg-white/30 backdrop-blur-sm border border-white/20">
              <p className="text-xs text-foreground">231/1, r.b.c. road, naihati</p>
              <p className="text-xs text-foreground">pin -743165, north 24 pgs</p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/20">
            <Button onClick={onClose} className="w-full bg-primary/80 backdrop-blur-sm hover:bg-primary-dark border border-white/20 text-sm py-2">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
