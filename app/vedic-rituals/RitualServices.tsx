'use client';

import { useState } from 'react';

export default function RitualServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const rituals = [
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

  const handleBookingClick = (ritualTitle: string) => {
    // Scroll to contact form
    const contactSection = document.querySelector('section:last-child');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-select the ritual in the form
      const ritualSelect = document.getElementById('ritual') as HTMLSelectElement;
      if (ritualSelect) {
        setTimeout(() => {
          if (ritualTitle.includes('Ganesh')) {
            ritualSelect.value = 'ganesh';
          } else if (ritualTitle.includes('Lakshmi')) {
            ritualSelect.value = 'lakshmi';
          } else if (ritualTitle.includes('Shiva')) {
            ritualSelect.value = 'shiva';
          } else if (ritualTitle.includes('Durga')) {
            ritualSelect.value = 'durga';
          } else if (ritualTitle.includes('Saraswati')) {
            ritualSelect.value = 'saraswati';
          } else if (ritualTitle.includes('Hanuman')) {
            ritualSelect.value = 'hanuman';
          }
        }, 500);
      }
    }
  };

  return (
    <section id = "service-form" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 text-3xl mb-4 animate-pulse">🕉️</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-orange-600">Ceremonies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our authentic Vedic rituals and pujas, each performed with traditional Sanskrit mantras and sacred offerings
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rituals.map((ritual, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${hoveredCard === index ? 'border-2 border-orange-200' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={ritual.image} 
                  alt={ritual.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${hoveredCard === index ? 'scale-110' : ''}`}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="text-2xl">{ritual.icon}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{ritual.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{ritual.description}</p>
              
              <div className="mb-4">
                <span className="text-xs text-orange-600 font-semibold bg-orange-100 px-2 py-1 rounded-full">
                  {ritual.benefits}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-orange-600">{ritual.price}</span>
                <span className="text-gray-500 text-sm">{ritual.duration}</span>
              </div>
              
              <button 
                onClick={() => handleBookingClick(ritual.title)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 shadow-lg"
              >
                Book Ceremony
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}