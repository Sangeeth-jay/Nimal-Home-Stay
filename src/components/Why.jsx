import React from 'react'
import Lottie from 'lottie-react'
import Cooking from '../assets/cooking.json'
import Snorkling from '../assets/snorkling.json'
import RoadTrip from '../assets/road-trip.json'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Why = () => {
  return (
    <>
    <div className='flex flex-col justify-center h-fit items-center '>
      <h2 className='lg:text-4xl text-xl text-title font-bold text-center m-10'>What is so special about Nimal's Homestay? 🏡</h2>
      <div className='flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center lg:pl-40 lg:pr-40'>
        <div className='lg:w-1/2 md:w-1/2 w-full ' data-aos="fade-up" data-aos-duration="2000">
          <p className='font-serif text-common lg:text-lg text-md lg:text-left md:text-left text-center p-4'>🍽 Well, first of all, I am an expert chef!👨‍🍳
            Let me treat you to a most delicious😋 journey through
            our fine🪄 Sri Lankan cuisine. I get all my
            ingredients🍛🍚 fresh from the market 🍌🥭, the lagune 🐟,
            or even from my own garden 🥥🌴! To make sure you
            never have to forget😇 these amazing flavors I offer workshops
            🔪 so I can teach you how to make these
            special dishes yourself </p>
        </div>
        <div className='lg:w-60 md:w-60 w-60' data-aos="fade-up" data-aos-duration="2000">
          <Lottie animationData={Cooking} loop={true} />
        </div>
      </div>
      <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center lg:pl-40 lg:pr-40'>
        <div className='lg:w-60 md:w-60 w-60' data-aos="fade-up" data-aos-duration="2000">
          <Lottie animationData={Snorkling} loop={true} />
        </div>
        <div className='lg:w-1/2 md:w-1/2 w-full ' data-aos="fade-up" data-aos-duration="2000">
          <p className='font-serif text-common lg:text-lg text-md lg:text-right md:text-right text-center p-4 '>🏖 Want to go exploring between meals?
            I've got you! As a snorkeling instructor I know
            the best places to swim with beautiful fish 🐠
            and... turtles 🐢!Can you imagine meeting
            these gentle😎 giants up close? </p>
        </div>
      </div>
      <div className='flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center lg:pl-40 lg:pr-40'>
        <div className='lg:w-1/2 md:w-1/2 w-full ' data-aos="fade-up" data-aos-duration="2000">
          <p className='font-serif text-common lg:text-lg text-md lg:text-left md:text-left text-center p-4'>🌄 Dodanduwa is a very nice place to stay and rest up,
            but Sri Lanka 🇱🇰 has so much more to offer!
            Luckily you're staying with one of
            the best tour guides around. I will tailor an amazing
            road trip 🚗 especially for you - just tell
            me what you like 👍 and don't like , and I will make
            sure you'll never forget this journey! 🌎</p>
        </div>
        <div className='lg:w-60 md:w-60 w-60' data-aos="fade-up" data-aos-duration="2000">
          <Lottie animationData={RoadTrip} loop={true} />
        </div>
      </div>

    </div>
    </>
  )
}

AOS.init();

export default Why