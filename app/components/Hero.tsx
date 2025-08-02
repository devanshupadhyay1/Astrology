
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/herobg.jpg')`,
      }}

    >
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-orange-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-yellow-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-orange-500/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <div className="text-orange-400 text-xl mb-2 animate-pulse">🕉️</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bahuchar <span className="text-orange-400">Jyotish</span>
            </h1>
          
          </div>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover your dharma through ancient Vedic wisdom and sacred astrological guidance from the timeless tradition of Jyotish
          </p>
     
     
  

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
            <button
  onClick={() => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 shadow-lg"
>
  Book Jyotish Reading
</button>
            <Link href="/vedic-rituals" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105">
              Book Sacred Rituals
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Om symbol */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-orange-400/20 text-6xl animate-spin" style={{ animationDuration: '20s' }}>
        🕉️
      </div>
    </section>
  );
}
