import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Calendar, MapPin, Users, Download, MessageSquare, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-primary-dark min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <header className="mb-16 border-b border-white/5 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold tracking-widest uppercase text-xs mb-4 block"
            >
              Private Client
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-text-primary"
            >
              My Journeys
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-text-secondary text-sm mb-2">Dedicated Concierge</p>
            <p className="text-gold tracking-widest uppercase text-xs">Elena V.</p>
          </motion.div>
        </header>



        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-serif text-text-primary mb-8"
          >
            Upcoming Expeditions
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border border-gold/30 bg-primary overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl hover:scale-[1.02] transform"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 md:h-96 lg:h-auto overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80" 
                  alt="My Safari Trips" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-md px-3 py-1 text-xs tracking-widest uppercase text-gold border border-white/10">
                  Confirmed
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-serif text-text-primary">The Great Migration</h3>
                    <span className="text-text-muted text-xs uppercase tracking-widest hidden sm:block">Ref: SLV-8942-SF</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-8 border-y border-white/5 py-6">
                    <div>
                      <span className="text-text-muted text-[10px] uppercase tracking-widest block mb-2 flex items-center">
                        <MapPin size={12} className="mr-1" /> Destination
                      </span>
                      <span className="text-text-primary text-sm font-medium">Serengeti, Tanzania</span>
                    </div>
                    <div>
                      <span className="text-text-muted text-[10px] uppercase tracking-widest block mb-2 flex items-center">
                        <Calendar size={12} className="mr-1" /> Dates
                      </span>
                      <span className="text-text-primary text-sm font-medium">Oct 12 - Oct 20, 2026</span>
                    </div>
                    <div>
                      <span className="text-text-muted text-[10px] uppercase tracking-widest block mb-2 flex items-center">
                        <Users size={12} className="mr-1" /> Party Size
                      </span>
                      <span className="text-text-primary text-sm font-medium">2 Guests (Premier Collection)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <Button href="/Solvara_Itinerary.txt" download="Solvara_Itinerary.txt" variant="outline" className="w-full sm:w-auto text-xs" size="sm">
                    <Download size={14} className="mr-2" /> Download Itinerary
                  </Button>
                  <Button variant="ghost" className="w-full sm:w-auto text-xs group/btn" size="sm">
                    <MessageSquare size={14} className="mr-2" /> Request Changes
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-2xl font-serif text-text-primary">Past Journeys</h2>
            <div className="h-px bg-white/10 flex-grow mx-6"></div>
          </motion.div>
          
          <div className="text-center py-20 border border-white/5 bg-white/[0.02]">
            <p className="text-text-secondary text-sm tracking-wide mb-6">No past expeditions recorded in this account.</p>
            <Button to="/expeditions" variant="outline" className="text-xs group/link">
              Explore Our Portfolio <ArrowRight size={14} className="ml-2 transition-transform group-hover/link:translate-x-1" />
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
