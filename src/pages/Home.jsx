import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import ExpeditionCard from '../components/ui/ExpeditionCard';
import { expeditions } from '../data/mockData';
import { Play } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const featured = expeditions.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary-dark"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <motion.div 
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Custom Luxury Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(198,167,94,0.25))' }}
          ></div>
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover pointer-events-none"
            poster="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop"
          >
            <source src="/videos/tiger.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, tracking: '0' }}
            animate={{ opacity: 1, tracking: '0.25em' }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-gold tracking-widest uppercase text-sm mb-6 block"
          >
            Welcome to Solvara
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary mb-8 drop-shadow-2xl"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
          >
            Journey Into the Wild
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-light"
          >
            Discover ultra-luxury, bespoke safari experiences across pristine African landscapes. Where untamed wilderness meets unparalleled refinement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button to="/expeditions" size="lg" className="hover:shadow-[0_0_20px_rgba(198,167,94,0.5)] hover:brightness-110">Plan Your Safari</Button>
            <Button to="/journal" variant="outline" size="lg" className="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:brightness-110">Explore Journal</Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="text-xs tracking-widest text-text-muted mb-4 uppercase">Scroll to Explore</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64, 64] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Expeditions */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">Curated Journeys</h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6"></div>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our most sought-after signature expeditions, meticulously crafted to balance raw adventure with uncompromising luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((expedition, index) => (
              <ExpeditionCard 
                key={expedition.id}
                index={index}
                {...expedition}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/expeditions" variant="ghost" className="border-b border-gold pb-1 px-0 hover:px-0">
              View All Expeditions
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial / Storytelling */}
      <section className="py-16 md:py-24 bg-primary px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/luxury-camp.jpg" 
                alt="Luxury Camp" 
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="px-4 md:pl-12"
            >
              <span className="text-gold tracking-widest uppercase text-xs mb-4 block">The Solvara Standard</span>
              <h2 className="text-4xl font-serif text-text-primary mb-8 leading-tight">
                Redefining the <br/>Art of Safaris
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We believe that true luxury lies in exclusivity and access. Our relationships with private conservancies ensure that you experience Africa's most breathtaking wildlife moments away from the crowds.
              </p>
              <p className="text-text-secondary mb-10 leading-relaxed">
                From Michelin-trained bush chefs creating culinary masterpieces under the starlit sky, to hand-picked specialist guides who read the bush like a book, every detail is considered.
              </p>
              <Button to="/about" variant="outline">Our Philosophy</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Jet Teaser */}
      <section className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-primary-dark/80 z-10 backdrop-blur-[2px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2670&auto=format&fit=crop" 
            alt="Private Jet" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-widest uppercase text-xs mb-6 block drop-shadow-md">Solvara Aviation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-8 font-light text-glow">
              Arrive Beyond Expectations
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Bypass commercial terminals entirely. Our private aviation fleet ensures your journey begins the moment you leave home, flying directly into remote bush airstrips in unparalleled comfort.
            </p>
            <Button to="/private-jets">Explore Jet Fleet</Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-primary-dark">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl font-serif text-text-primary mb-8 leading-relaxed italic">
              "An otherworldly experience. Solvara didn't just plan a trip; they orchestrated a masterpiece of adventure and absolute luxury. Waking up to the sounds of the delta with coffee brought to our private deck is a memory forever etched in my mind."
            </p>
            <div>
              <p className="text-gold tracking-widest uppercase text-xs">E. Rothschild</p>
              <p className="text-text-muted text-xs mt-1">Okavango Delta Expedition</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-[#0e0e0e] text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif text-text-primary mb-6">Ready to Answer the Call?</h2>
          <Button to="/expeditions">Begin Your Journey</Button>
        </motion.div>
      </section>

    </motion.div>
  );
}
