import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './section-hero';

gsap.registerPlugin(ScrollTrigger);

function IntroSection() {
    useLayoutEffect(() => {
        console.log("gsap", gsap);

        const handleLoad = () => {
            console.log("Page loaded, initializing GSAP");

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top top",
                    end: "+=200%",
                    pin: true,
                    scrub: true,
                    markers: true
                }
            })
                .to("img", {
                    scale: 6,
                    z: 550,
                    transformOrigin: "center center",
                    ease: "power1.inOut"
                })
                .to(
                    ".section.hero",
                    {
                        scale: 3,
                        transformOrigin: "center center",
                        ease: "power1.inOut"
                    },
                    "<"
                );
        };

        // Directly call handleLoad to ensure GSAP initializes
        handleLoad();

        return () => {
            // No need to remove event listener since we directly call handleLoad
        };
    }, []);

    return (
        <div className="wrapper relative w-full z-1">
            <div className="content relative w-full z-1 overflow-x-hidden">
                <section className="section hero w-full h-screen bg-[url('https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat bg-cover"></section>
                <section className="section w-full h-screen bg-red-500"></section>
                <section className="section w-full h-screen bg-blue-500"></section>
            </div>
            <div className="image-container absolute top-0 left-0 right-0 w-full h-screen z-2 perspective-500 overflow-hidden">
                <HeroSection />
                <img className="w-full h-full object-cover object-center" src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" alt="image" />
            </div>
        </div>
    );
}

export default IntroSection;