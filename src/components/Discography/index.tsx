'use client';
import FullViewportComponent from '../FullViewportComponent';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { discography } from '@/data';
import AlbumDetail from './AlbumDetail';
const Discography = () => {
  return (
    <div className="relative container">
      <h3 className="text-5xl font-medium mb-12 md:mb-8 md:text-center md:text-7xl">
        Discography
      </h3>
      <FullViewportComponent centerContent={true}>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="swiper-pagination hidden col-span-1 md:flex flex-col justify-center gap-2 !relative uppercase text-lg font-medium"></div>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<div class="${className} w-fit !h-fit px-2 flex select-none"><p className="h-fit">${discography[index].title}</p></div>`,
            }}
            navigation
            className="h-full col-span-7 w-full"
          >
            {discography.map((album) => (
              <SwiperSlide className="" key={album.id}>
                <AlbumDetail album={album} />
              </SwiperSlide>
            ))}

            {/* {discography.map(album => <p>{album.title}</p>)} */}
          </Swiper>
        </div>
      </FullViewportComponent>
    </div>
  );
};

export default Discography;
