import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

import Section from '@/components/Section';
import gsap from 'gsap';
import { imgAnimation, animateText } from './animations';

const Hero = () => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline());
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = timeline.current;

      tl.add(imgAnimation()).add(animateText());
    });

    return () => ctx.revert();
  }, []);
  return (
    <Section centerContent={true} fullViewport={true}>
      <section className="container h-screen flex flex-col items-center justify-center">
        <Image
          className="hero-img opacity-0 mx-auto pt-20"
          src={'/images/hero.png'}
          width={1015}
          height={459}
          alt="Avicii sitting on a ladder"
          data-main-img
        />

        <div
          className="text-center uppercase flex flex-col gap-1 mt-12"
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
