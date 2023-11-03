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
      scale: 40,
      duration: 1.5,
      autoAlpha: 0,
      ease: "power1.in",
    })

  return tl;
};
