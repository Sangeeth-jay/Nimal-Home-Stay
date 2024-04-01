import React from 'react'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';
import AboutNimal from './AboutNimal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookNow from '../components/modals/Book';
import SL from '../assets/reshot-icon-sri-lanka.svg';

const Hero = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const heading = headingRef.current;

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const moveAmountY = 20;
            const moveAmountX = 20;

            const translateX = (mouseX - window.innerWidth / 2) / moveAmountX;
            const translateY = (mouseY - window.innerHeight / 2) / moveAmountY;

            gsap.to(heading, {
                x: translateX,
                y: translateY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        heading.addEventListener('mousemove', handleMouseMove);

        return () => {
            heading.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen text-center overflow-hidden'>
                <div ref={headingRef} style={{ position: 'relative' }} data-aos="zoom-in-up" data-aos-duration="1000">
                    <h1 className="text-8xl font-bold font-istok text-title hidden lg:block">Nimal's Home-Stay</h1>
                </div>
                <h1 className='lg:hidden p-2' data-aos="zoom-in-up" data-aos-duration="1000"><span className="md:text-7xl text-6xl font-bold font-istok text-title">Nimal's</span><br /><span className='text-4xl font-bold font-istok text-title'>Home-Stay</span></h1>
                <p className=" font-serif text-common text-xl  px-3" data-aos="zoom-in-up" data-aos-duration="1100">Ayubowan 👋 Welcome to your home away from home!<br />
                    Let's make the most of your stay in Sri Lanka! 🇱🇰🐘🌴🐢🥥🏵</p>
                <img src={SL} alt="" className='w-10' data-aos="zoom-in-up" data-aos-duration="1100" />
                <br />
                <button data-aos="zoom-in-up" data-aos-duration="1200" onClick={() => setOpen(true)} className="font-istok  text-common  relative px-3 py-1 rounded-md bg-transparent isolation-auto border-[3px]  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-400 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    Book Now
                </button>
            </div>
            <AboutNimal />
            <BookNow visible={open} onClose={handleClose}/>
        </>
    )
}

AOS.init();
export default Hero