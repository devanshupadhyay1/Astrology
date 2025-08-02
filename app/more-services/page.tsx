'use client';

import Navigation from '../components/Navigation';
import HeroService from './HeroService';
import ServiceContact from './ServiceContact';




export default function MoreServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      <HeroService />
      <ServiceContact />
     
    </div>
  );
}