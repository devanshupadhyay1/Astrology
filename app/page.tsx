
'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AskAI from './components/AskAi';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      <Hero />
      <AskAI />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
