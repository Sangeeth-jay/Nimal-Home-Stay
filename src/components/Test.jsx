import React from 'react'
import Nimal from '../assets/Nimal.jpg'

const Test = () => {
  return (
    <>
      <div className='h-screen flex lg:flex-row md:flex-row flex-col justify-center items-center'>
        <div>
          <img src={Nimal} alt="" />
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='lg:text-left md:text-center text-center'>
          <h1 className='md:text-4xl text-2xl font-bold font-istok text-title'>👋 Ayubowan, lovely people!</h1>
          <p className='lg:text-xl md:text-lg text-md font-serif text-common lg:ml-10 mt-4 p-2 lg:w-96'> I am Nimal, and I welcome you to<br />
            Sri Lanka🫶!
            Let me host your 🏡stay and help
            you make your time in our beautiful 🏝
            country unforgettable <br /> 🐘🌴🐢🥥🏵</p>
        </div>
      </div>
    </>
  )
}

export default Test