import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { expeditions } from '../data/mockData';
import Button from '../components/ui/Button';
import { MapPin, Clock, Calendar, Check } from 'lucide-react';

const highlights = [
  "Private bespoke 4x4 game viewer with dedicated senior tracker",
  "Daily culinary experiences prepared by a private camp chef",
  "Exclusive use of concession lands, avoiding all tourist crowds",
  "Night drives and walking safaris permitted",
  "Complimentary Leica binoculars provided during the trip",
];

export default function ExpeditionDetail() {
  const { id } = useParams();
  const expedition = expeditions.find(e => e.id === id) || expeditions[0]; // Fallback for unmatched
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-dark min-h-screen pb-32"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-hero-overlay z-10" />
          <img 
            src={expedition.image} 
            alt={expedition.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center space-x-6 mb-6 text-sm tracking-widest uppercase text-gold">
                <span className="flex items-center"><MapPin size={16} className="mr-2" /> {expedition.region}</span>
                <span className="flex items-center"><Clock size={16} className="mr-2" /> {expedition.duration}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-text-primary leading-tight">
                {expedition.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-6">The Experience</h2>
              <div className="h-px w-12 bg-gold mb-6"></div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {expedition.description}
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our meticulous attention to detail ensures your journey is entirely seamless. From the tactile luxury of your tented suite to the thrilling unpredictability of the wilderness, this is Africa at its most awe-inspiring.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-6">Signature Highlights</h2>
              <div className="h-px w-12 bg-gold mb-6"></div>
              <ul className="space-y-4">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-text-secondary">
                    <Check className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Gallery placeholder */}
            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-6">Visual Journey</h2>
              <div className="h-px w-12 bg-gold mb-6"></div>
              <div className="grid grid-cols-2 gap-4">
                <img src={expedition.image} className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Gallery" />
                <img src="/images/luxury-camp.jpg" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Gallery" />
              </div>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass-panel p-8 border border-white/5">
              <h3 className="text-xl font-serif text-text-primary mb-6">Reserve Your Journey</h3>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                  <span className="text-text-secondary uppercase tracking-widest text-xs">Starting Guide Price</span>
                  <span className="text-text-primary font-medium">{expedition.price === 'Tailored' ? 'TAILORED' : `$${expedition.price}`}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                  <span className="text-text-secondary uppercase tracking-widest text-xs">Season</span>
                  <span className="text-text-primary font-medium flex items-center">
                    <Calendar size={14} className="mr-2 text-gold"/> Year-round
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Prices are per person sharing. International flights and private jet charters are quoted separately during the tailoring process.
                </p>
              </div>
              
              <Button to={`/booking/${expedition.id}`} className="w-full" size="lg">
                Begin Reservation
              </Button>
              <p className="text-center text-xs text-gold uppercase tracking-widest mt-6 cursor-pointer hover:text-gold-rich">
                Speak to Concierge
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
