import Section from '@/components/Section';
import Image from 'next/image';

const Quote = () => {
  return (
    <Section
      centerContent={true}
      fullViewport={true}
      bgColor={'white'}
      extraClasses={'relative overflow-hidden'}
    >
      <>
        <Image
          className="absolute bottom-0 right-0 w-[80vw] md:left-0 md:max-w-[594px]"
          alt="Tim"
          src={'/images/tim-quote.png'}
          width={594}
          height={542}
        />

        <section className="container relative flex flex-col items-end px-2 py-10 z-10 md:px-6">
          <blockquote className="relative bg-white/60 w-full p-4 rounded-md md:w-4/5 max-w-[840px]">
            <Image
              className="absolute left-0 top-0"
              src={'/images/start-quote.svg'}
              alt="Start quote"
              width={95}
              height={98}
            />
            <p className="text-2xl leading-[2.32rem] md:text-3xl">
              &quot;I discovered when I started earning money that I didn&apos;t
              really need them. When you have such a surplus of money you
              don&apos;t need, the most sensible, most human and most obvious
              thing to do is to give to people in need&quot;
            </p>
            <Image
              className="absolute right-0 bottom-14"
              src={'/images/end-quote.svg'}
              alt="End quote"
              width={82}
              height={86}
            />
            <h5 className="text-3xl text-end  mt-12 md:text-5xl">
              - Tim &quot;Avicii&quot; Bergling
            </h5>
          </blockquote>
        </section>
      </>
    </Section>
  );
};

export default Quote;
