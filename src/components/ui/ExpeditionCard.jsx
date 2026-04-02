import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpeditionCard({
  id,
  title,
  description,
  region,
  duration,
  image,
  price,
  index = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-primary h-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl hover:scale-[1.02] transform"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-hero-overlay transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-center space-x-4 mb-3 text-xs tracking-widest uppercase text-gold">
            <span className="flex items-center"><MapPin size={12} className="mr-1" /> {region}</span>
            <span className="flex items-center"><Clock size={12} className="mr-1" /> {duration}</span>
          </div>
          
          <h3 className="text-2xl font-serif text-text-primary mb-3">
            {title}
          </h3>
          
          <p className="text-text-secondary text-sm mb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
            <span className="text-sm font-medium text-text-primary">
              {price === 'Tailored' ? 'TAILORED ON REQUEST' : `FROM $${price}`}
            </span>
            <Link
              to={`/expeditions/${id}`}
              className="text-xs uppercase tracking-widest text-gold hover:text-gold-rich border-b border-gold hover:border-gold-rich pb-1 transition-colors"
            >
              Explore Journey
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
