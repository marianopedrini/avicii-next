import FullViewportComponent from '@/components/FullViewportComponent';
import Image from 'next/image';

const Quote = () => {
  return (
    <FullViewportComponent centerContent={true}>
      <section className="container relative flex flex-col">
        <blockquote className="bg-black/30 z-10 md:bg-none">
            <div className="p-4 relative max-w-[840px]">
                <Image
                    className="absolute left-0 top-0"
                    src={'/images/start-quote.png'}
                    alt="Start quote"
                    width={95}
                    height={98}
                />
                <p className="text-2xl md:text-3xl leading-[2.32rem] w-5/6">
                    &quot;I discovered when I started earning money that I didn&apos;t really need
                    them. When you have such a surplus of money you don&apos;t need, the most
                    sensible, most human and most obvious thing to do is to give to
                    people in need&quot;
                </p>
                <Image
                    className="absolute right-0 bottom-0"
                    src={'/images/end-quote.png'}
                    alt="End quote"
                    width={82}
                    height={86}
                />
            </div>
        </blockquote>
        <h5 className="text-3xl md:text-6xl text-end z-10">- Tim &quot;Avicii&quot; Bergling</h5>
        <Image
          className="absolute right-0 -top-1/4"
          src={'/images/tim-quote.webp'}
          alt="End quote"
          width={355}
          height={492}
        />
      </section>
    </FullViewportComponent>
  );
};

export default Quote;
