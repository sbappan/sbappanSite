// Inspired by: https://www.youtube.com/watch?v=n59u0nIVtp8

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from('.avatar', {
  y: '100%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})

tl.from('.myName', {
  y: '-100%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
}, '-=1')

gsap.from('.transition1', {
  scrollTrigger: {
    trigger: '.transition1',
    start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
})

gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
})

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
})

gsap.from('.transition4', {
  scrollTrigger: {
    trigger: '.transition4',
    start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
})

gsap.from('.transition5', {
  scrollTrigger: {
    trigger: '.transition5',
    start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
})