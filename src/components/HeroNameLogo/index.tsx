import FullViewportComponent from '@/components/FullViewportComponent';
import Image from 'next/image';

const HeroNameLogo = () => {
  return (
    <FullViewportComponent centerContent={true}>
        <section className='relative flex justify-center overflow-hidden'>
            <h1 className='text-8xl uppercase'>Tim Bergling</h1>
            <Image className='absolute -bottom-full' src={'/avicii.svg'} width={380} height={88} alt="Avicii"/>
        </section>
    </FullViewportComponent>
  )
}

export default HeroNameLogo