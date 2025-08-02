'use client';

import Navigation from '../components/Navigation';
import RitualHero from './RitualHero';
import RitualServices from './RitualServices';
import RitualProcess from './RitualProcess';
import RitualContact from './RitualContact';

export default function VedicRituals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      <RitualHero />
      <RitualServices />
      <RitualProcess />
      <RitualContact />
    </div>
  );
}