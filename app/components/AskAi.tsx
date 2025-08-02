import { useState } from 'react';
import axios from 'axios';

export default function AskAI() {
  const [problem, setProblem] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!problem) return;

    setLoading(true);
    setRecommendation('');

    try {
      const res = await axios.post('https://astrologybck-abhz8n7g7-devanshs-projects-8bce964a.vercel.app//api/recommend-puja', {
        problem,
      });
      setRecommendation(res.data.recommendation);
    } catch (err) {
      setRecommendation("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
  <div
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('images/astrology-bg.jpg')", // You can place a background image in public/images folder
      }}
    >
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-300 p-8">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          <span className="text-black">🔱 Talk to our </span>
          <span className="text-orange-600">Astro AI</span>
        </h2>

        <p className="text-center text-gray-700 italic mb-6">
          Share your worries, and let the divine guide you toward the right Puja 🙏
        </p>

        <textarea
          placeholder="Describe your problem..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={4}
          className="w-full h-32 p-4 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none bg-white/70 shadow-inner"
        />

        <button
          onClick={handleAskAI}
          className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          disabled={loading}
        >
          {loading ? '🔮 Thinking...' : '🔮 Get Puja Suggestion'}
        </button>

        {recommendation && (
          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 text-orange-900 rounded-xl shadow">
            <strong>🌼 Recommended Puja:</strong>
            <p className="mt-1">{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
}


