'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Janma Kundali Reading",
      description: "Complete birth chart analysis based on ancient Vedic astrology revealing your karmic path and spiritual purpose",
      price: "₹1,100",
      duration: "30 minutes",
      icon: "🪐",
      image: "/images/janm-kundli.jpg",
    },
    {
      title: "Relationship Compatibility",
      description: "Vedic synastry analysis to understand karmic connections and spiritual compatibility between souls",
      price: "₹501",
      duration: "30 minutes",
      icon: "💕",
      image: "/images/relationship.jpg",
    },
    {
      title: "Career & Dharma Guidance",
      description: "Discover your life purpose and ideal career path aligned with your dharma through Vedic wisdom",
      price: "₹1,100",
      duration: "30 minutes",
      icon: "🙏",
      image: "/images/dharm.jpg",
    },
    {
      title: "Dasha & Transit Forecast",
      description: "Planetary periods and transit analysis providing insights for spiritual growth and life events",
      price: "₹2,000",
      duration: "30 minutes",
      icon: "🌙",
      image: "/images/dasha.jpg",
    },
    {
      title: "Ganesh Puja",
      description: "Remove obstacles and invoke divine blessings for new beginnings with sacred Ganesh worship ceremony",
      price: "₹5,100",
      duration: "2 hours , 2 brahmins",
      icon: "🍀",
      benefits: "Success, Prosperity, Obstacle Removal",
      image: "/images/ganesh-puja.jpg"
    },
    {
      title: "Lakshmi Puja",
      description: "Invite wealth, prosperity and abundance into your life through sacred worship of Goddess Lakshmi",
      price: "₹11,000",
      duration: "5 hours,2 brahmins",
      icon: "🪷",
      benefits: "Wealth, Prosperity, Abundance",
      image: "/images/lakshmi-puja.jpg"
    },
    {
      title: "Shiva Puja",
      description: "Seek divine transformation and spiritual awakening through sacred worship of Lord Shiva",
      price: "₹11,000",
      duration: "5 hours, 2 brahmins",
      icon: "🔱",
      benefits: "Spiritual Growth, Peace, Transformation",
      image: "/images/shiv-puja.jpg"
    },
    {
      title: "Navchandi Yagna",
      description: "Invoke divine protection and strength through worship of the powerful goddess Durga",
      price: "₹35,000",
      duration: "7 hours, 9 brahmins",
      icon: "⚔️",
      benefits: "Protection, Strength, Victory",
      image: "/images/navchandi.jpg"
    },
    {
      title: "Saraswati Puja",
      description: "Enhance knowledge, wisdom and creative abilities through worship of Goddess Saraswati",
      price: "₹5,100",
      duration: "5 hours, 2 brahmins",
      icon: "📚",
      benefits: "Knowledge, Wisdom, Creativity",
      image: "/images/saraswati-puja.jpg"
    },
    {
      title: "Navgrah Shanti",
      description: "Gain courage, strength and divine protection through worship of the mighty Hanuman",
      price: "₹11,000",
      duration: "5 hours, 2 brahmins",
      icon: "🪐",
      benefits: "Courage, Strength, Protection",
      image: "/images/navgrah-shanti.jpg",
    }
  ];

  const handleBookingClick = (serviceTitle: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-select the service in the form
      const serviceSelect = document.getElementById('service') as HTMLSelectElement;
      if (serviceSelect) {
        setTimeout(() => {
          if (serviceTitle.includes('Janma Kundali')) {
            serviceSelect.value = 'janma-kundali';
          } else if (serviceTitle.includes('Relationship')) {
            serviceSelect.value = 'relationship';
          } else if (serviceTitle.includes('Career')) {
            serviceSelect.value = 'dharma';
          } else if (serviceTitle.includes('Dasha')) {
            serviceSelect.value = 'dasha';
          }
        }, 500);
      }
    }
  };

  return (
    <section id = "service-form" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 text-3xl mb-4 animate-pulse">🪔</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            All Sacred <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the divine wisdom of Vedic astrology through personalized consultations rooted in ancient Hindu traditions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${hoveredCard === index ? 'border-2 border-orange-200' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${hoveredCard === index ? 'scale-110' : ''}`}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="text-2xl">{service.icon}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-orange-600">{service.price}</span>
                <span className="text-gray-500">{service.duration}</span>
              </div>
              
              <button 
                onClick={() => handleBookingClick(service.title)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 shadow-lg"
              >
                Consult for more details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}