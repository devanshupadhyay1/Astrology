
'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="text-orange-500 text-3xl mb-4 animate-pulse">🙏</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              With over 25 years of dedicated study in Vedic astrology and Hindu scriptures, I have guided countless souls on their spiritual journey. My passion lies in helping devotees understand their karmic path and fulfill their dharma.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="text-orange-600 text-xl">✨</div>
                </div>
                <span className="ml-3 text-gray-700">Astrologer & Kramakandi Brahmin</span>
              </div>
              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="text-orange-600 text-xl">🔥</div>
                </div>
                <span className="ml-3 text-gray-700">Disciple of Traditional Jyotish Lineage</span>
              </div>
              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="text-orange-600 text-xl">🪔</div>
                </div>
                <span className="ml-3 text-gray-700">Specialized in Spiritual Remedies & Mantras</span>
              </div>
            </div>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Paresh <span className="text-orange-600">Upadhyay</span>
            </h1>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <img 
                src="/images/paresh-upadhyay.jpg"
                alt="Paresh Upadhyay - Astrologer"
                className="w-full rounded-2xl shadow-2xl object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg animate-bounce">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 left-4 text-orange-400/30 text-2xl animate-pulse">🪔</div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
