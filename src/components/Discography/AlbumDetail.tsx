import Image from 'next/image';
import React from 'react';
import ParallaxImage from './ParallaxImage';

type AlbumDetailProps = {
  album: {
    id: number;
    title: string;
    img: {
      url: string;
      alt: string;
    };
    spotify: string;
    totalDuration: string;
    songs: { title: string; duration: string }[];
  };
};

const AlbumDetail = ({ album }: AlbumDetailProps) => {
  const { id, title, img, spotify, totalDuration, songs } = album;
  return (
    <>
      <section className="grid grid-cols-1 w-full gap-10 md:py-12 md:grid-cols-6">
        <ParallaxImage img={img} />

        {/* Left section */}
        <div className="flex flex-col items-center gap-6 z-20 md:col-span-4 md:px-12">
          <figure>
            <Image
              className="shadow-md rounded-md"
              src={img.url}
              alt={img.alt}
              width={348}
              height={348}
            />
          </figure>
          <div
            className="w-full lg:w-4/5"
            dangerouslySetInnerHTML={{ __html: spotify }}
          ></div>
        </div>

        {/* Right section */}
        <div className="flex flex-col z-20 px-4 w-full md:col-span-2 md:px-0 md:mt-12">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <p className="text-lg text-westar/70">
            Album - {songs.length} songs - {totalDuration}
          </p>

          <ul className="mt-6 text-md flex flex-col gap-1">
            {songs.map((song) => (
              <li key={song.title}>{`• ${song.title}`}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AlbumDetail;
