import { useLayoutEffect } from 'react';

import Splashart from '@/components/Splashart';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroNameLogo from '@/components/HeroNameLogo';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Discography from '@/components/Discography';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Splashart />
      <Header />
      <Hero />
      <HeroNameLogo />
      <Quote />
      <About />
      <Discography />
      <Footer />

    </main>
  );
}
