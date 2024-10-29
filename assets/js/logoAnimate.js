import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function logoAnimate() {
    console.log('LOGO ANIMATE')
    ScrollTrigger.create({
        //trigger: "#content",
        animation: gsap.from('#logo', {
            //y: "50vh",
            scale: 6,
            //yPercent: -50,
        }),
        scrub: true,
        trigger: '#content',
        start: 'top bottom',
        endTrigger: '#content',
        end: 'top center',
    })
}
