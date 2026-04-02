import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Download } from 'lucide-react';

export default function Confirmation() {
  const location = useLocation();
  const bookingData = location.state?.bookingData || {};
  const refCode = "SLV-" + Math.floor(Math.random() * 10000) + "-SF";

  return (
    <div className="bg-primary-dark min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="glass-panel p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle gold glow behind */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-gold/10 blur-[100px] pointer-events-none"></div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
            className="w-20 h-20 rounded-full border border-gold text-gold mx-auto flex items-center justify-center mb-8 bg-gold/5"
          >
            <CheckCircle size={36} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-text-primary mb-6"
          >
            Your Request is Secured
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We have received your expedition request. Your dedicated concierge is now curating your bespoke itinerary and will contact you directly within 24 hours to align on finer details.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="inline-block border border-white/10 p-6 bg-primary-dark/50 w-full max-w-sm mb-12"
          >
            <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">Reservation Reference</span>
            <span className="text-xl text-gold font-mono tracking-wider">{refCode}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button to="/dashboard" size="lg">View in Dashboard</Button>
            <Button href="/Solvara_Itinerary.txt" download="Solvara_Itinerary.txt" variant="outline" size="lg" className="flex items-center">
              <Download size={16} className="mr-3" /> Save Itinerary Outline
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-sm text-text-muted mt-12 tracking-wide"
        >
          Need immediate assistance? <a href="#" className="text-gold border-b border-gold/30 hover:border-gold pb-0.5 ml-1">Contact Concierge</a>
        </motion.p>
      </div>
    </div>
  );
}
