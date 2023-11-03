import Section from '@/components/Section';
import Image from 'next/image';

const HeroNameLogo = () => {
  return (
    <Section centerContent={true} bgColor={'white'} fullViewport={true}>
        <div className='relative flex justify-center overflow-hidden'>
            <h1 className='text-[10vw] !leading-[0.8] text-center uppercase sm:text-6xl md:text-8xl'>Tim Bergling</h1>
            <Image className='absolute translate-y-full bottom-0 max-w-[50%]' src={'/avicii.svg'} width={380} height={88} alt="Avicii"/>
        </div>
    </Section>
  )
}

export default HeroNameLogo