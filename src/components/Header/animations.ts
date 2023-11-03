import gsap from 'gsap';

export const animateHeader = (
  logoRef: React.RefObject<HTMLAnchorElement | null>
) => {
  const tl = gsap.timeline();

  tl.to(logoRef.current, {
    opacity: 1,
    duration: 2,
  });

  return tl;
};
