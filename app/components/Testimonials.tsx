
'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Panditji's Vedic reading transformed my understanding of my dharma. His insights about my karmic path helped me make spiritual decisions with complete faith and devotion.",
      service: "Janma Kundali Reading",
      image: "/images/priya.jpg"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "The compatibility reading revealed our karmic connection beautifully. Panditji helped us understand our spiritual bond and strengthen our relationship through proper understanding.",
      service: "Relationship Compatibility",
      image: "/images/rajesh.jpg"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Panditji's guidance on my career dharma was divine. His predictions about my spiritual growth and professional path came true exactly as foretold. Truly blessed experience.",
      service: "Career & Dharma Guidance",
      image: "/images/meera.jpg"
    },
    {
      name: "Amit Gupta",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The Dasha analysis was incredibly accurate and detailed. Panditji's remedies and mantras helped me navigate through challenging planetary periods with strength and wisdom.",
      service: "Dasha & Transit Forecast",
      image: "/images/amit.jpg"
    }
  ];

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 text-3xl mb-4 animate-pulse">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Devotee <span className="text-orange-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from blessed souls who have experienced the transformative power of Vedic wisdom and divine guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
            <div className={`text-center mb-8 transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <div key={i} className="text-orange-400 text-2xl mx-1 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>⭐</div>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>

            <div className={`flex items-center justify-center transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="relative">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-200"
                />
                
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                <p className="text-orange-600 text-sm">{testimonials[currentTestimonial].service}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg"
              >
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-125 ${
                    index === currentTestimonial ? 'bg-orange-500 shadow-lg' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
