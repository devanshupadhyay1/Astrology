'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RitualHero() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/vedic-rituals.jpg')`,
      }}
    >
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-8 h-8 bg-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-24 w-6 h-6 bg-orange-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-32 w-10 h-10 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-7 h-7 bg-orange-500/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10 pt-20">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <div className="text-orange-400 text-xl mb-2 animate-pulse">🪔</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sacred <span className="text-orange-400">Vedic Rituals</span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience the divine power of ancient Hindu ceremonies and pujas performed with authentic Vedic traditions for spiritual blessings and divine grace
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
            onClick={() => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }}
             className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 shadow-lg">
              Book Sacred Ritual
            </button>
            <button onClick={() => router.push('/more-services')}className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105">
              View All Ceremonies
            </button>
          </div>
        </div>
      </div>

      {/* Animated Diya symbol */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-orange-400/20 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
        🪔
      </div>
    </section>
  );
}