import { useSwiper } from 'swiper/react';

const SliderNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="border border-white absolute top-0 z-50 md:hidden">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};

export default SliderNavButtons;
