import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-primary-dark min-h-screen pt-32 pb-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-16 mt-10">
          
          {/* Informational Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <span className="text-gold tracking-widest uppercase text-xs mb-4 block">Dedicated Services</span>
            <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-8 leading-tight">
              Solvara Concierge
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-12">
              For bespoke itineraries, private aviation charters, or press inquiries, our global concierge desk is at your disposal 24/7.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="text-text-primary uppercase tracking-widest text-xs mb-1">Email</h4>
                  <a href="mailto:concierge@solvarasafaris.com" className="text-text-secondary hover:text-gold transition-colors text-sm">concierge@solvarasafaris.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="text-text-primary uppercase tracking-widest text-xs mb-1">Global Desk</h4>
                  <a href="tel:+18001234567" className="text-text-secondary hover:text-gold transition-colors text-sm">+1 (800) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="text-text-primary uppercase tracking-widest text-xs mb-1">Headquarters</h4>
                  <p className="text-text-secondary text-sm">1400 Savile Row, Suite 400<br/>London, UK W1S 3PR</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <form className="glass-panel p-8 md:p-12 space-y-8 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] pointer-events-none rounded-full" />
              
              <h3 className="text-2xl font-serif text-text-primary mb-2 relative z-10">Initiate a Conversation</h3>
              <p className="text-text-muted text-sm mb-8 relative z-10">All information is kept strictly confidential.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-muted">First Name</label>
                  <input type="text" className="w-full bg-transparent border border-white/20 text-text-primary py-3 px-4 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-sm" placeholder="e.g. James" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-muted">Last Name</label>
                  <input type="text" className="w-full bg-transparent border border-white/20 text-text-primary py-3 px-4 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-sm" placeholder="e.g. Bond" />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-[10px] uppercase tracking-widest text-text-muted">Email Address</label>
                <input type="email" className="w-full bg-transparent border border-white/20 text-text-primary py-3 px-4 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-sm" placeholder="james@example.com" />
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-[10px] uppercase tracking-widest text-text-muted">Nature of Inquiry</label>
                <select className="w-full bg-transparent border border-white/20 text-text-primary py-3 px-4 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-sm appearance-none">
                  <option className="bg-primary-dark">New Safari Reservation</option>
                  <option className="bg-primary-dark">Private Jet Charter</option>
                  <option className="bg-primary-dark">Press / Media</option>
                  <option className="bg-primary-dark">Other</option>
                </select>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-[10px] uppercase tracking-widest text-text-muted">Your Vision</label>
                <textarea 
                  className="w-full bg-transparent border border-white/20 text-text-primary py-3 px-4 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors text-sm resize-none" 
                  rows="4" 
                  placeholder="Tell us about the experience you wish to create..."
                ></textarea>
              </div>

              <div className="pt-4 relative z-10">
                <Button type="button" className="w-full sm:w-auto">Submit Inquiry</Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
