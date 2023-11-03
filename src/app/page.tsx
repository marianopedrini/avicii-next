'use client';

import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

import Splashart from '@/components/Splashart';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroNameLogo from '@/components/HeroNameLogo';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Discography from '@/components/Discography';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeline, setTimeline] = useState<any>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.05,
        onComplete: () => {
          setIsLoading(false);
        },
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {/* <Splashart timeline={timeline} /> */}

      {isLoading ? (
        <Splashart timeline={timeline} />
      ) : (
        <>
          <Header />
          <Hero />
          <HeroNameLogo />
          <Quote />
          <About />
          <Discography />
          <Footer />
        </>
      )}
    </main>
  );
}
