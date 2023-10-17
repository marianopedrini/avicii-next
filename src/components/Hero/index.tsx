import Image from 'next/image';
import FullViewportComponent from '../FullViewportComponent';

const Hero = () => {
  return (
    <FullViewportComponent centerContent={true}>
      <section className="container">
        <div className="hero-bg w-full relative">
          <Image
            className="mx-auto"
            src={'/images/avicii-ladder.webp'}
            width={1024}
            height={1024}
            alt="avicii"
          />
          <Image
            className="absolute bottom-0"
            src={'/logo-border.svg'}
            width={1024}
            height={1024}
            alt="avicii"
          />
        </div>

        <div className='text-center uppercase flex flex-col gap-1 mt-12'>
          <p className='text-xl'>In loving memory</p>
          <p className='text-xs tracking-[2px]'>1989.09.08 - 2018.04.20</p>
        </div>
      </section>
    </FullViewportComponent>
  );
};

export default Hero;
