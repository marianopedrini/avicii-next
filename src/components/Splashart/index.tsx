'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { logoAnimation } from './animations';

const Splashart = ({ timeline }: any ) => {
  const splashartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timeline && 
    timeline
    .add(logoAnimation(splashartContainerRef));
  }, [timeline]);

  return (
    <div
      className="fixed top-0 h-screen w-full bg-black flex flex-col items-center justify-center z-[100]"
      ref={splashartContainerRef}
    >
      {/* <div className='h-screen w-full bg-grey flex flex-col items-center justify-center'> */}
      <svg
        width="380"
        height="88"
        viewBox="0 0 380 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='opacity-0'
        data-splashart-logo
      >
        <g clipPath="url(#clip0_4_80)">
          <path
            d="M77.0345 0.418162L0 77.8712V88H10.1604L77.0345 20.8152V88H91.3515V0.278774H77.0345V0.418162Z"
            fill="#E0E0E0"
          />
          <path
            d="M120.032 0.278774H105.715V88H105.853H120.032H126.128L192.956 20.8152V0.418162L120.032 73.7825V0.278774Z"
            fill="#E0E0E0"
          />
          <path
            d="M221.59 0.278774H207.273V88.0465H221.59V0.278774Z"
            fill="#E0E0E0"
          />
          <path
            d="M279.55 14.4963C286.101 14.4878 292.464 16.6965 297.616 20.767C302.768 24.8375 306.409 30.5332 307.953 36.9377H322.64C320.838 26.0705 315.041 16.282 306.399 9.51467C297.757 2.74736 286.902 -0.504135 275.988 0.405427C265.074 1.31499 254.899 6.31913 247.482 14.4248C240.064 22.5305 235.947 33.1452 235.947 44.1626C235.947 55.18 240.064 65.7948 247.482 73.9004C254.899 82.0061 265.074 87.0102 275.988 87.9198C286.902 88.8294 297.757 85.5779 306.399 78.8106C315.041 72.0432 320.838 62.2547 322.64 51.3875H307.815C306.425 56.7024 303.584 61.5192 299.612 65.292C295.64 69.0648 290.697 71.6426 285.343 72.733C279.989 73.8235 274.438 73.383 269.32 71.4615C264.203 69.5401 259.722 66.2145 256.387 61.8618C253.053 57.5092 250.997 52.3036 250.453 46.8354C249.909 41.3671 250.899 35.8549 253.31 30.9238C255.722 25.9927 259.458 21.84 264.096 18.9364C268.734 16.0329 274.088 14.4947 279.55 14.4963Z"
            fill="#E0E0E0"
          />
          <path
            d="M351.274 0.278774H336.957V88.0465H351.274V0.278774Z"
            fill="#E0E0E0"
          />
          <path
            d="M379.954 0.278774H365.637V88.0465H379.954V0.278774Z"
            fill="#E0E0E0"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_80">
            <rect width="380" height="88" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Splashart;
