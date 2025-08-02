'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('धन्यवाद! Your message has been sent successfully. May divine blessings be with you.');
        setFormData({
          name: '', email: '', phone: '', service: '', message: ''
        });
      } else {
        setSubmitStatus('Something went wrong. Please try again with devotion.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again with devotion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-orange-500 text-2xl sm:text-3xl mb-3 animate-pulse">🙏</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Book Sacred <span className="text-orange-600">Consultation</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with divine wisdom and begin your spiritual journey through personalized Vedic guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {/* Contact Info */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Sacred Contact</h3>

              <div className="space-y-6">
                {[
                  { icon: 'ri-phone-line', label: 'Phone', value: '+91 97238 40572' },
                  { icon: 'ri-mail-line', label: 'Email', value: 'pareshupadhyay07@gmail.com' },
                  { icon: 'ri-time-line', label: 'Visiting Hours', value: 'Daily: 6am-10pm IST' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-100 rounded-full mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <i className={`${item.icon} text-orange-600 text-lg sm:text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.label}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Follow Sacred Journey</h4>
                <div className="flex flex-wrap gap-3">
                  {['ri-instagram-line', 'ri-facebook-line', 'ri-youtube-line'].map((icon, i) => (
                    <a
                      key={i}
                      href="https://www.facebook.com/paresh.upadhyay.142?rdid=dfOpWgQYbmdoXFXN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Yc4jx5a5g%2F#"
                      className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <i className={`${icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute top-3 right-3 text-orange-400/20 text-xl sm:text-2xl animate-pulse">🪔</div>
              
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />

              {[
                { label: 'Full Name *', type: 'text', name: 'name', placeholder: 'Your blessed name' },
                { label: 'Email Address *', type: 'email', name: 'email', placeholder: 'your@email.com' },
                { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: '+91 98765 43210' }
              ].map(({ label, type, name, placeholder }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{label}</label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    required={label.includes('*')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-300 ${
                      focusedField === name ? 'border-orange-300 transform scale-105' : 'border-gray-300'
                    }`}
                    placeholder={placeholder}
                  />
                </div>
              ))}

              {/* Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Sacred Service *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8 appearance-none transition-all duration-300 ${
                      focusedField === 'service' ? 'border-orange-300 transform scale-105' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select divine service</option>
                    {[
                      "Janma Kundali Reading", "Relationship Compatibility", "Career & Dharma Guidance",
                      "Dasha & Transit Forecast", "Ganesh Puja", "Lakshmi Puja", "Shiv Puja", "Navchandi Yagna  ",
                      "Saraswati Puja", "Navgrah Shanti"
                    ].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-500"></i>
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  maxLength={500}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none transition-all duration-300 ${
                    focusedField === 'message' ? 'border-orange-300 transform scale-105' : 'border-gray-300'
                  }`}
                  placeholder="Share your spiritual questions and what divine guidance you seek..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Sending Sacred Message...' : 'Send Divine Message 🙏'}
              </button>

              {submitStatus && (
                <div className={`text-center p-3 rounded-lg animate-pulse ${
                  submitStatus.includes('successfully') || submitStatus.includes('धन्यवाद')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
