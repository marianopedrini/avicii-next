import React from 'react';

type SectionProps = {
  children: React.ReactElement;
  fullViewport: boolean;
  centerContent: boolean;
  bgColor?: 'white' | null;
  extraClasses?: string;
};

const Section = ({
  children,
  fullViewport,
  centerContent,
  bgColor,
  extraClasses,
}: SectionProps) => {
  return (
    <div
      className={`${fullViewport? 'w-full min-h-screen' : '' } ${centerContent ? 'flex items-center justify-center' : ''} ${bgColor === 'white' ? 'bg-white text-black' : ''} ${extraClasses ? extraClasses : ''}`}
    >
      {children}
    </div>
  );
};

export default Section;
