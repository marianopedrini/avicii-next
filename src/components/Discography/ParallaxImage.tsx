import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ParallaxImageProps = {
  img: {
    url: string;
    alt: string;
  };
};
const ParallaxImage = ({ img }: ParallaxImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current) {
    }
    const parallax = (event: any) => {
      const moving_value = 0.01;
      const x = event.clientX * moving_value;
      const y = event.clientY * moving_value;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);
  return (
    <Image
      className="hidden absolute top-12 left-1/4 blur-md opacity-40 z-10 md:block"
      src={img.url}
      alt={img.alt}
      width={500}
      height={500}
      ref={imgRef}
    />
  );
};

export default ParallaxImage;
