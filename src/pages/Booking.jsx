import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import { expeditions, fleet } from '../data/mockData';
import { Check, ChevronRight } from 'lucide-react';

const steps = [
  "Destination", "Dates & Guests", "Sanctuary", "Aviation", "Review"
];

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  // Form State
  const [bookingData, setBookingData] = useState({
    expeditionId: id || '',
    month: '',
    guests: 2,
    accommodation: 'classic', // classic, premier, exclusive
    jetAddon: false,
    jetId: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Animation variants
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      processBooking();
    }
  };

  const processBooking = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate('/confirmation', { state: { bookingData } });
    }, 2500); // Simulate processing time
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-16 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-white/10 z-0"></div>
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-gold z-0 transition-all duration-700"
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      ></div>
      
      {steps.map((step, idx) => (
        <div key={idx} className="relative z-10 flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 mb-4
            ${idx < currentStep ? 'bg-gold text-primary-dark' : idx === currentStep ? 'bg-primary-dark border-2 border-gold text-gold' : 'bg-primary border border-white/20 text-text-muted'}
          `}>
            {idx < currentStep ? <Check size={14} /> : <span className="text-xs font-serif">{idx + 1}</span>}
          </div>
          <span className={`text-[10px] tracking-widest uppercase hidden md:block transition-colors duration-500
            ${idx <= currentStep ? 'text-text-primary uppercase' : 'text-text-muted'}
          `}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );

  const renderSummary = () => {
    const selectedExpedition = expeditions.find(e => e.id === bookingData.expeditionId);
    return (
      <div className="sticky top-32 glass-panel p-8">
        <h3 className="text-xl font-serif text-text-primary mb-6">Reservation Summary</h3>
        
        {selectedExpedition ? (
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/10">
              <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">Journey</span>
              <span className="text-text-primary font-medium">{selectedExpedition.title}</span>
            </div>
            
            {(bookingData.month || bookingData.guests) && (
              <div className="pb-4 border-b border-white/10 flex justify-between">
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">Timing</span>
                  <span className="text-text-primary font-medium">{bookingData.month || 'TBD'}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">Guests</span>
                  <span className="text-text-primary font-medium">{bookingData.guests}</span>
                </div>
              </div>
            )}

            {bookingData.accommodation && (
              <div className="pb-4 border-b border-white/10">
                <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">Sanctuary Tier</span>
                <span className="text-text-primary font-medium capitalize">{bookingData.accommodation} Collection</span>
              </div>
            )}

            {bookingData.jetAddon && (
              <div className="pb-4 border-b border-white/10">
                <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">Aviation</span>
                <span className="text-gold font-medium text-sm flex items-center">
                  Private Jet Transfer Added
                </span>
              </div>
            )}
            
            <p className="text-xs text-text-muted italic mt-6 leading-relaxed">
              Your dedicated concierge will finalize international flights and bespoke details upon request submitted.
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-secondary">Please select a destination to begin curating your journey.</p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-primary-dark min-h-screen pt-32 pb-24 relative">
      
      {/* Immersive Processing Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-primary-dark flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="w-16 h-16 border-t-2 border-r-2 border-gold rounded-full animate-spin mb-8"></div>
            <h2 className="text-3xl font-serif text-gold mb-4 text-glow">Crafting your safari experience...</h2>
            <p className="text-text-secondary max-w-md tracking-wide">
              Reserving your exclusive lodge, alerting the senior tracker, and preparing your bespoke itinerary.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-serif text-text-primary mb-12 text-center">Curate Your Journey</h1>
        
        {renderStepIndicator()}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 min-h-[400px]">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Destination */}
              {currentStep === 0 && (
                <motion.div key="step1" variants={slideUp} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-serif text-text-primary mb-8">Select Your Destination</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expeditions.map(exp => (
                      <div 
                        key={exp.id}
                        onClick={() => setBookingData({...bookingData, expeditionId: exp.id})}
                        className={`cursor-pointer p-6 border transition-all duration-300 relative overflow-hidden group rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transform
                          ${bookingData.expeditionId === exp.id ? 'border-gold bg-white/5' : 'border-white/10 hover:border-white/30 bg-primary'}
                        `}
                      >
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <img src={exp.image} alt="" className="w-full h-full object-cover grayscale opacity-50 transition-opacity group-hover:opacity-100" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-xl font-serif text-text-primary mb-2">{exp.title}</h3>
                          <p className="text-sm text-text-secondary">{exp.region} &middot; {exp.duration}</p>
                          {bookingData.expeditionId === exp.id && (
                            <motion.div layoutId="destination-check" className="absolute top-6 right-6 text-gold">
                              <Check size={20} />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Dates */}
              {currentStep === 1 && (
                <motion.div key="step2" variants={slideUp} initial="hidden" animate="visible" exit="exit" className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-serif text-text-primary mb-8">When do you wish to travel?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['June 2026', 'July 2026', 'August 2026', 'September 2026', 'October 2026', 'November 2026', 'December 2026'].map(month => (
                        <button
                          key={month}
                          onClick={() => setBookingData({...bookingData, month})}
                          className={`py-4 px-6 rounded-full text-sm tracking-wide transition-all duration-300 border
                            ${bookingData.month === month ? 'border-gold bg-gold/10 text-gold' : 'border-white/10 text-text-secondary hover:border-gold/50'}
                          `}
                        >
                          {month}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-serif text-text-primary mb-8">Number of Guests</h2>
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => setBookingData({...bookingData, guests: Math.max(1, bookingData.guests - 1)})}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-4xl font-serif text-text-primary w-12 text-center">{bookingData.guests}</span>
                      <button 
                        onClick={() => setBookingData({...bookingData, guests: bookingData.guests + 1})}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-text-primary hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Sanctuary */}
              {currentStep === 2 && (
                <motion.div key="step3" variants={slideUp} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-serif text-text-primary mb-8">Select Your Sanctuary Tier</h2>
                  <div className="space-y-6">
                    {[
                      { id: 'classic', name: 'Classic Collection', desc: 'Elegant canvas tents, en-suite bathrooms, highly personalized service.', price: 'Included' },
                      { id: 'premier', name: 'Premier Collection', desc: 'Spacious suites, private plunge pools, priority vehicle allocation.', price: '+ $2,500 pp' },
                      { id: 'exclusive', name: 'Exclusive Use', desc: 'The entire lodge is yours. Private chef, private guide, utter seclusion.', price: '+ $15,000' }
                    ].map(tier => (
                      <div 
                        key={tier.id}
                        onClick={() => setBookingData({...bookingData, accommodation: tier.id})}
                        className={`cursor-pointer p-8 border transition-all duration-300 flex items-center justify-between rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transform
                          ${bookingData.accommodation === tier.id ? 'border-gold bg-white/5' : 'border-white/10 hover:border-white/30'}
                        `}
                      >
                        <div>
                          <h3 className="text-xl font-serif text-text-primary mb-2">{tier.name}</h3>
                          <p className="text-sm text-text-secondary">{tier.desc}</p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="text-gold tracking-widest text-sm block mb-1">{tier.price}</span>
                          {bookingData.accommodation === tier.id && <Check size={20} className="text-gold ml-auto" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Aviation */}
              {currentStep === 3 && (
                <motion.div key="step4" variants={slideUp} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                  <div className="text-center mb-10">
                    <span className="text-gold tracking-widest uppercase text-xs mb-4 block">Bespoke Option</span>
                    <h2 className="text-3xl font-serif text-text-primary mb-4">Arrive by Private Jet</h2>
                    <p className="text-text-secondary max-w-lg mx-auto">Skip commercial transfers. Opt for direct runway access to your lodge via our curated fleet.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fleet.map(jet => (
                      <div 
                        key={jet.id}
                        onClick={() => setBookingData({
                          ...bookingData, 
                          jetAddon: bookingData.jetId === jet.id ? false : true,
                          jetId: bookingData.jetId === jet.id ? '' : jet.id
                        })}
                        className={`cursor-pointer border transition-all duration-300 group rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transform
                          ${bookingData.jetId === jet.id ? 'border-gold bg-white/5' : 'border-white/10 hover:border-white/30 bg-primary'}
                        `}
                      >
                        <div className="h-48 overflow-hidden relative">
                          <img src={jet.image} alt={jet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-hero-overlay transition-opacity duration-500 group-hover:opacity-70" />
                          {bookingData.jetId === jet.id && (
                            <div className="absolute top-4 right-4 bg-gold text-primary-dark w-8 h-8 rounded-full flex items-center justify-center">
                              <Check size={16} />
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-serif text-text-primary mb-2">{jet.name}</h3>
                          <p className="text-xs tracking-widest text-text-secondary uppercase mb-4">{jet.capacity}</p>
                          <p className="text-sm text-text-muted">{jet.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-8">
                    <button 
                      onClick={() => setBookingData({...bookingData, jetAddon: false, jetId: ''})}
                      className="text-text-secondary hover:text-text-primary text-sm uppercase tracking-widest border-b border-white/20 pb-1 font-medium pb-2"
                    >
                      Skip Private Aviation
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Review */}
              {currentStep === 4 && (
                <motion.div key="step5" variants={slideUp} initial="hidden" animate="visible" exit="exit" className="space-y-8 text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-gold/10 text-gold mx-auto flex items-center justify-center mb-6">
                    <Check size={28} />
                  </div>
                  <h2 className="text-3xl font-serif text-text-primary mb-4">Your Safari is Ready for Review</h2>
                  <p className="text-text-secondary text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                    Please review your selections in the summary panel. Upon submission, your personal concierge will contact you within 24 hours to finalize details and secure dates.
                  </p>
                  
                  <div className="p-6 border border-white/10 bg-primary inline-block text-left max-w-md w-full rounded-2xl">
                    <h4 className="text-gold tracking-widest text-xs uppercase mb-4">Concierge Note</h4>
                    <textarea 
                      className="w-full bg-transparent border border-white/20 text-text-primary p-4 placeholder-text-muted text-sm outline-none focus:outline-none focus:border-gold resize-none rounded-xl focus:ring-2 focus:ring-gold" 
                      rows="3" 
                      placeholder="Any special requests or celebrations? (Dietary requirements, anniversaries, etc.)"
                    ></textarea>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            <div className={`mt-12 flex items-center ${currentStep > 0 ? 'justify-between' : 'justify-end'}`}>
              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-text-secondary hover:text-text-primary text-sm uppercase tracking-widest"
                >
                  Previous
                </button>
              )}
              
              <Button 
                onClick={handleNext}
                disabled={currentStep === 0 && !bookingData.expeditionId}
                className={currentStep === 0 && !bookingData.expeditionId ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {currentStep === steps.length - 1 ? 'Submit Request' : 'Continue'} <ChevronRight size={18} className="ml-2" />
              </Button>
            </div>
            
          </div>

          <div className="lg:col-span-1">
            {renderSummary()}
          </div>
        </div>
      </div>
    </div>
  );
}
