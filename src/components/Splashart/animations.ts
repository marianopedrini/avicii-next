import gsap from 'gsap';

export const logoAnimation = (splashartContainerRef: any) => {
  const tl = gsap.timeline();

  tl.fromTo(
    '[data-splashart-logo]',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    }
  )
    .to('[data-splashart-logo]', {
      scale: 25,
      duration: 1.5,
    })
    .to(
      splashartContainerRef.current,
      {
        autoAlpha: 0,
        duration: 0.5
      },
      '<'
    );

  return tl;
};
