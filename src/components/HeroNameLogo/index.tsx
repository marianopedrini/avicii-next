import FullViewportComponent from '@/components/FullViewportComponent';
import Image from 'next/image';

const HeroNameLogo = () => {
  return (
    <FullViewportComponent centerContent={true} bgColor={'white'}>
        <div className='relative flex justify-center overflow-hidden'>
            <h1 className='text-[10vw] !leading-[0.8] text-center uppercase sm:text-6xl md:text-8xl'>Tim Bergling</h1>
            <Image className='absolute translate-y-full bottom-0 max-w-[50%]' src={'/avicii.svg'} width={380} height={88} alt="Avicii"/>
        </div>
    </FullViewportComponent>
  )
}

export default HeroNameLogo