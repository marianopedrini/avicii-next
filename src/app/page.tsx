import { useLayoutEffect } from 'react';

import Splashart from '@/components/Splashart';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroNameLogo from '@/components/HeroNameLogo';
import Quote from '@/components/Quote';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Splashart />
      <Header />
      <Hero />
      <HeroNameLogo />
      <Quote />
      <About />

    </main>
  );
}
