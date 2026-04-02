import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expeditions } from '../data/mockData';
import ExpeditionCard from '../components/ui/ExpeditionCard';
import { clsx } from 'clsx';

const regions = ['All', 'Tanzania', 'Botswana', 'Rwanda', 'Namibia'];

export default function Expeditions() {
  const [activeRegion, setActiveRegion] = useState('All');

  const filteredExpeditions = expeditions.filter(
    exp => activeRegion === 'All' || exp.region === activeRegion
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary-dark min-h-screen pb-24"
    >
      {/* Hero Video Header */}
      <section className="relative h-[65vh] w-full flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(11,11,11,0.2) 0%, rgba(11,11,11,1) 100%)' }}></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover pointer-events-none"
            poster="https://images.unsplash.com/photo-1547471080-7cb2ac647a52?q=80&w=2670&auto=format&fit=crop"
          >
            <source src="/videos/expedition-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold tracking-widest uppercase text-xs mb-4 block"
            >
              Curated Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-6 drop-shadow-lg"
            >
              The Ultimate Safari Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg drop-shadow-md"
            >
              Filter through our meticulously designed expeditions spanning the continent's most pristine and exclusive wilderness areas.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-6"
        >
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={clsx(
                "uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors duration-300",
                activeRegion === region 
                  ? "text-primary-dark bg-gold"
                  : "text-text-secondary hover:text-gold hover:bg-white/5 border border-transparent hover:border-gold/30"
              )}
            >
              {region}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredExpeditions.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ExpeditionCard {...exp} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredExpeditions.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>No expeditions found for the selected criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
