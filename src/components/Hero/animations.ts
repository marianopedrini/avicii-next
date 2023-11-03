import gsap from "gsap";

export const panelsAnimation = () => {
    const tl = gsap.timeline({})

    tl.to('[data-left-panel]', {
        scaleY: 0,
        ease: "power2",
        duration: 1.5
    }).to('[data-right-panel]', {
        scaleY: 0,
        ease: "power2",
        duration: 1.5
    }, '<')

    return tl;
}

export const animateText = () => {
    const tl = gsap.timeline();

    tl.fromTo('[data-memory-text] p', {
        opacity: 0
    }, {
        opacity: 1,
        stagger: 0.1
    })
    

    return tl;
}