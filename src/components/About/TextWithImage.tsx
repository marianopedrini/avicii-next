import Image from 'next/image';

type TextWithImageProps = {
  position: "left" | "right";
  content: { title: string; texts: string[]; img: string };
};

const TextWithImage = ({ position, content }: TextWithImageProps) => {
  const { title, texts, img } = content;
  return (
    <section className="relative py-20 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 container">
        <div className={`col-span-7 z-10 ${position == 'right'? 'col-start-6' : ''} `}>
          <h3 className="text-6xl md:text-7xl font-medium mb-14">{title}</h3>
          <div className="flex flex-col gap-6">
            {texts.map((text) => (
              <p className="text-lg md:text-xl" key={text}>{text}</p>
            ))}
          </div>
        </div>
        <Image
          className={`absolute ${position == 'left'? 'right-0' : 'left-0'} top-0 opacity-20 md:top-40 md:opacity-100`}
          src={img}
          width={380}
          height={88}
          alt=""
        />
      </div>
    </section>
  );
};

export default TextWithImage;
