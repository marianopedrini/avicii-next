import Image from 'next/image';
import FullViewportComponent from '@/components/FullViewportComponent';

const Hero = () => {
  return (
    <FullViewportComponent centerContent={true}>
      <section className="container h-screen">
        <Image
            className="hero-img mx-auto mt-40"
            src={'/images/hero.png'}
            width={1015}
            height={459}
            alt="Avicii sitting on a ladder"
        />

        <div className='text-center uppercase flex flex-col gap-1 mt-12'>
          <p className='text-xl'>In loving memory</p>
          <p className='text-xs tracking-[2px]'>1989.09.08 - 2018.04.20</p>
        </div>
      </section>
    </FullViewportComponent>
  );
};

export default Hero;
