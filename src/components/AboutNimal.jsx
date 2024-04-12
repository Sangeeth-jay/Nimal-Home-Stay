import React from 'react'
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Nimal from '../assets/Nimal.jpg'


const AboutNimal = () => {

    // out class move when mouse hover on img

    const [out, setOut] = useState({ top: '3', left: '3' });

    const handleWrapperHover = () => {
        setOut({ top: '8', left: '8' })
    }

    const handleWrapperLeave = () => {
        setOut({ top: '3', left: '3' })
    }

    return (
        <>
            <div className='mb-10'>
                <div className='image flex lg:flex-row md:flex-col flex-col items-center gap-10 justify-center h-fit'>
                    <div data-aos="fade-right" data-aos-duration="2000" className='relative right-2' onMouseEnter={handleWrapperHover} onMouseLeave={handleWrapperLeave}>
                        <img src={Nimal} alt="logo" className="md:w-80 w-60 z-10 relative rounded" />
                        <div className='out rounded absolute border-4 border-yellow-400 left-3 top-3 md:w-80 md:h-80 w-60 h-60 z-0 transition-transform duration-300' style={{
                            transform: `translate(${out.left}px, ${out.top}px)`
                        }}></div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='description lg:text-left md:text-center text-center'>
                        <h1 className='md:text-4xl text-2xl font-bold font-istok text-title'>👋 Ayubowan, lovely people!</h1>
                        <p className='lg:text-xl md:text-lg text-md font-serif text-common lg:ml-10 mt-4 p-2 lg:w-96'> I am Nimal, and I welcome you to<br />
                            Sri Lanka🫶!
                            Let me host your 🏡stay and help
                            you make your time in our beautiful 🏝
                            country unforgettable <br /> 🐘🌴🐢🥥🏵</p>
                    </div>
                </div>
            </div>
        </>
    )
}

AOS.init();

export default AboutNimal