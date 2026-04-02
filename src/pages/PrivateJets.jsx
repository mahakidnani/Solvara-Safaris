import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { fleet } from '../data/mockData';

export default function PrivateJets() {
  return (
    <div className="bg-primary-dark min-h-screen pb-32">
      
      {/* Cinematic Hero */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2670&auto=format&fit=crop" 
            alt="Private Jet" 
            className="w-full h-full object-cover scale-105 grayscale opacity-70"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, tracking: '0' }}
            animate={{ opacity: 1, tracking: '0.25em' }}
            transition={{ duration: 1.5 }}
            className="text-gold tracking-widest uppercase text-sm mb-6 block drop-shadow-lg"
          >
            Solvara Aviation
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary mb-8 font-light"
          >
            Arrive Beyond <br/>Expectations
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed"
          >
            We manage your journey from tarmac to wilderness. Experience seamless intercontinental transfers and bespoke regional flights tailored entirely to your itinerary.
          </motion.p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-px h-16 bg-white/20">
          <motion.div 
            animate={{ y: [0, 64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif text-text-primary mb-10"
          >
            The Ultimate Luxury is Time
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-12 h-px bg-gold mx-auto mb-10"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary text-lg leading-relaxed mb-6"
          >
            Commercial logistics have no place in a true luxury safari. With Solvara Aviation, avoid congested terminals, rigid schedules, and multiple connections. Our private charters fly point-to-point, landing on exclusive bush airstrips mere minutes from your lodge.
          </motion.p>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="text-text-secondary text-lg leading-relaxed"
          >
            Whether flying direct from New York into Kigali, or hopping between the Okavango Delta and the Namib Desert, our curated fleet is at your absolute disposal.
          </motion.p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-gold tracking-widest uppercase text-xs mb-4 block">The Fleet</span>
            <h2 className="text-4xl font-serif text-text-primary">Curated Aircraft</h2>
          </div>

          <div className="space-y-32">
            {fleet.map((jet, idx) => (
              <div key={jet.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={jet.image} alt={jet.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2 md:px-8"
                >
                  <h3 className="text-3xl font-serif text-text-primary mb-4">{jet.name}</h3>
                  <div className="flex space-x-6 mb-8 text-xs tracking-widest uppercase text-gold">
                    <span>Capacity: {jet.capacity}</span>
                    <span>Class: {jet.range}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                    {jet.description}
                  </p>
                  <ul className="space-y-3 mb-10 text-sm text-text-secondary">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span> Dedicated flight crew and host</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span> Bespoke in-flight dining by absolute preference</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span> VIP terminal transit and immigration clearance</li>
                  </ul>
                  <Button to="/contact" variant="outline">Inquire Availability</Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-3xl font-serif text-text-primary mb-6">Elevate Your Arrival</h2>
        <p className="text-text-secondary mb-10 max-w-lg mx-auto">
          Add an aviation charter to any existing itinerary or contact us to arrange standalone VIP flight services.
        </p>
        <Button to="/contact">Speak to Aviation Concierge</Button>
      </section>

    </div>
  );
}
