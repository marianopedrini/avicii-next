'use client'
import { useEffect, useLayoutEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  useLayoutEffect(() => {
    setScrollPosition(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 px-10 z-50 bg-black/50 backdrop-blur-md transition-all ${scrollPosition > 50? 'py-5':'py-10'}`}>
      <Link
        href={'https://avicii.com/'}
        target="_blank"
        className="flex justify-center group"
      >
        <Image src={'/logo.svg'} width={50} height={23} alt="Avicii logo" />
        <div>
          <Image
            src={'/avicii.svg'}
            width={100}
            height={23}
            alt="Avicii logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
