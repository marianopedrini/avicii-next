import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

import Section from '@/components/Section';
import gsap from 'gsap';
import { panelsAnimation, animateText } from './animations';

const Hero = () => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline());
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = timeline.current;

      tl.add(panelsAnimation()).add(animateText(), '-=0.5');
    });

    return () => ctx.revert();
  }, []);
  return (
    <Section centerContent={true} fullViewport={true}>
      <section className="container h-screen flex flex-col items-center justify-center">
        <div
          className="w-1/2 h-full bg-black absolute left-0 origin-top z-0"
          data-left-panel
        ></div>
        <div
          className="w-1/2 h-full bg-black absolute right-0 origin-bottom z-0"
          data-right-panel
        ></div>

        <Image
          className="hero-img mx-auto pt-20"
          src={'/images/hero.png'}
          width={1015}
          height={459}
          alt="Avicii sitting on a ladder"
        />

        <div
          className="text-center uppercase flex flex-col gap-1 mt-12 z-10"
          data-memory-text
        >
          <p className="text-xl">In loving memory</p>
          <p className="text-xs tracking-[2px]">1989.09.08 - 2018.04.20</p>
        </div>
      </section>
    </Section>
  );
};

export default Hero;
