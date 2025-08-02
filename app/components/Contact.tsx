'use client';

import { useState } from 'react';

export default function RitualContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ritual: '',
    date: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setSubmitStatus(result.message || 'Submitted!');
    } catch (err) {
      setSubmitStatus('Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-4xl mb-4 animate-pulse">📞</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-600">Sacred Ceremony</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience divine blessings? Contact us to schedule your personalized Vedic ritual ceremony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Schedule Your Ritual
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'Enter your email' },
                { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
                { label: 'Ritual Type', name: 'ritual', type: 'text', placeholder: 'e.g. Navchandi Yagna' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    required={label.includes('*')}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Special Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Any special requirements or questions..."
                />
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book Sacred Ceremony'}
              </button>

              {submitStatus && <p className="text-center mt-4 text-sm text-gray-600">{submitStatus}</p>}
            </form>
          </div>

          {/* Contact Info & Pricing */}
          <div className="space-y-6">
            {/* Visit Info */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 sm:p-8">
              <div className="text-orange-500 text-3xl mb-4 text-center">🏛️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Visiting Address</h3>

              {[
                { icon: '📍', title: 'Address', desc: <>Aling Char Rasta<br />Opp Kolampado<br />Khmabhat, Gujarat -388620</> },
                { icon: '📞', title: 'Phone', desc: '+91 97348 40572' },
                { icon: '✉️', title: 'Email', desc: 'pareshupadhyay07@gmail.com' },
                { icon: '🕘', title: 'Visiting Hours', desc: <>Mon - Sun: 6:00 AM - 8:00 PM<br />Special ceremonies: By appointment</> },
              ].map(({ icon, title, desc }, idx) => (
                <div className="flex items-start gap-3" key={idx}>
                  <div className="text-orange-500 text-xl">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-orange-500 text-3xl mb-4 text-center">💰</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Pricing & Packages</h3>

              {[
                { title: 'Individual Ceremonies', desc: 'Starting from ₹5,100' },
                { title: 'Group Ceremonies', desc: 'Special rates for families' },
                { title: 'Annual Packages', desc: 'Discounted rates available' },
                { title: 'Payment Options', desc: 'Cash, Card, UPI accepted' },
              ].map(({ title, desc }, idx) => (
                <div className={`${idx < 3 ? 'border-b border-gray-200 pb-4 mb-4' : ''}`} key={idx}>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

