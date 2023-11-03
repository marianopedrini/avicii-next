import React from 'react';

type FullViewportComponentProps = {
  children: React.ReactElement;
  centerContent: boolean;
  bgColor?: 'white' | null;
  extraClasses?: string;
};

const FullViewportComponent = ({
  children,
  centerContent,
  bgColor,
  extraClasses,
}: FullViewportComponentProps) => {
  return (
    <div
      className={`w-full min-h-screen ${centerContent ? 'flex items-center justify-center' : ''} ${bgColor === 'white' ? 'bg-white text-black' : ''} ${extraClasses ? extraClasses : ''}`}
    >
      {children}
    </div>
  );
};

export default FullViewportComponent;
