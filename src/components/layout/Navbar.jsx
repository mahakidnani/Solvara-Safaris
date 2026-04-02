import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'Expeditions', path: '/expeditions' },
  { name: 'Private Jets', path: '/private-jets' },
  { name: 'Journal', path: '/journal' },
  { name: 'Concierge', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={clsx(
          'fixed w-full top-0 z-50 transition-all duration-500',
          isScrolled ? 'bg-primary-dark/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold tracking-tight font-serif text-text-primary group">
            Solvara <span className="text-gold group-hover:text-gold-rich transition-colors font-serif">Safaris</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'transition-all duration-300 hover:text-gold pb-1',
                  location.pathname === link.path ? 'text-gold border-b-2 border-gold' : 'text-text-primary border-b-2 border-transparent'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-sm tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors">
              My Trips
            </Link>
            <Link
              to="/expeditions"
              className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 tracking-widest text-sm uppercase rounded-full"
            >
              Plan Safari
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            <nav className="flex flex-col items-center space-y-6 text-lg tracking-widest uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'transition-all duration-300 pb-1',
                    location.pathname === link.path ? 'text-gold border-b-2 border-gold' : 'text-text-primary border-b-2 border-transparent'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-12 bg-white/20 my-4"></div>
              <Link to="/dashboard" className="text-text-secondary">
                My Trips
              </Link>
              <Link
                to="/expeditions"
                className="mt-6 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 rounded-full"
              >
                Plan Safari
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
