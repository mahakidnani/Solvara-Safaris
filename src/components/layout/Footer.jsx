import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ArrowUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API network request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Beautiful subtle reset
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-12 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to top, #0B0B0B, #111111)' }}
    >
      {/* Soft Gold Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-60"></div>

      {/* Subtle Noise Texture Overlay (Optional High-End Touch) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Newsletter / Exclusive Access */}
        <div className="max-w-3xl mx-auto text-center mb-28 border border-white/5 bg-white/[0.02] backdrop-blur-sm p-12 lg:p-16">
          <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 block">Exclusive Access</span>
          <h3 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 drop-shadow-md">Join the Solvara Circle</h3>
          <p className="text-text-secondary mb-8 font-light text-sm md:text-base">
            Receive curated journeys, private releases, and insider access to our most pristine wilderness sanctuaries.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== 'idle'}
              placeholder="Your Email Address" 
              className="flex-1 bg-transparent border border-white/20 px-6 py-3 text-text-primary placeholder:text-text-muted outline-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-300 rounded-full font-light disabled:opacity-50"
              required
            />
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="bg-gold text-primary-dark uppercase tracking-[0.2em] text-xs px-8 py-3 font-medium hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center group min-w-[150px] disabled:opacity-90 disabled:cursor-not-allowed rounded-full"
            >
              {status === 'idle' && <>Subscribe <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></>}
              {status === 'loading' && <span className="animate-pulse tracking-[0.3em]">Wait...</span>}
              {status === 'success' && <span className="flex items-center">Welcome <Check size={14} className="ml-2" /></span>}
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-20 lg:mb-28">
          
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-5 lg:pr-12 text-center lg:text-left">
            <Link to="/" className="text-3xl lg:text-4xl tracking-[0.2em] font-serif text-text-primary uppercase inline-block mb-6">
              Solvara <span className="text-gold drop-shadow-[0_0_8px_rgba(198,167,94,0.3)]">Safaris</span>
            </Link>
            <p className="text-sm text-text-secondary leading-loose max-w-sm mx-auto lg:mx-0 font-light">
              Curating ultra-luxury, immersive journeys into the heart of the wild. Beyond ordinary, beyond expectations.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-4 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-text-primary mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li>
                <Link to="/expeditions" className="hover:text-white transition-colors duration-300 relative group inline-block">
                  Our Expeditions
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/private-jets" className="hover:text-white transition-colors duration-300 relative group inline-block">
                  Private Aviation
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white transition-colors duration-300 relative group inline-block">
                  The Journal
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-text-primary mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300 relative group inline-block">
                  Concierge
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors duration-300 relative group inline-block">
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-text-primary mb-8">Connect</h4>
            <p className="text-sm text-text-secondary mb-8 flex items-center font-light hover:text-gold transition-colors duration-300 cursor-pointer">
              <Mail className="w-4 h-4 mr-3 text-gold" />
              concierge@solvarasafaris.com
            </p>
            <div className="flex space-x-8 text-sm uppercase tracking-[0.2em] text-text-muted">
              <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,167,94,0.6)]">IG</a>
              <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,167,94,0.6)]">X</a>
              <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,167,94,0.6)]">FB</a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center relative gap-8 text-center md:text-left">
          
          <p className="text-xs text-text-muted font-light tracking-[0.1em] opacity-80">
            &copy; {new Date().getFullYear()} Solvara Safaris.
          </p>
          
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-gold hover:bg-gold hover:text-primary hover:border-gold transition-all duration-500 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>

          <div className="space-x-8 text-xs text-text-muted font-light tracking-[0.1em] opacity-80 flex items-center justify-center">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms</Link>
          </div>

        </div>
      </div>
    </motion.footer>
  );
}
