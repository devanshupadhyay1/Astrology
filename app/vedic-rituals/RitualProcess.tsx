'use client';

export default function RitualProcess() {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "Discuss your spiritual needs and select the appropriate ritual for your divine purpose",
      icon: "🙏"
    },
    {
      number: "2", 
      title: "Preparation",
      description: "We prepare all sacred materials, offerings, and arrange the ceremonial space according to Vedic traditions",
      icon: "🪔"
    },
    {
      number: "3",
      title: "Ritual Performance",
      description: "Experience the divine ceremony with authentic Sanskrit mantras and sacred fire offerings",
      icon: "🔥"
    },
    {
      number: "4",
      title: "Blessings",
      description: "Receive divine blessings to carry the divine energy with you",
      icon: "🌺"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 text-3xl mb-4 animate-pulse">🔥</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-orange-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our authentic Vedic rituals follow traditional procedures to ensure maximum spiritual benefit and divine grace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-orange-500 text-3xl mb-4">🕉️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Authentic Vedic Traditions
            </h3>
            <p className="text-gray-600 mb-6">
              All our ceremonies are performed by experienced priests following ancient Sanskrit texts and traditional methods passed down through generations
            </p>
            <button 
            onClick={() => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }}
            className="w-full md:w-auto text-sm bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 shadow-lg">
              Schedule Ceremony
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}