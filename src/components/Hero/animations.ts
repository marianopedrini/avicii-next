import gsap from "gsap";

export const imgAnimation = () => {
    const tl = gsap.timeline();

    tl.to('[data-main-img]', {
        opacity: 1,
        duration: 1
    })

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