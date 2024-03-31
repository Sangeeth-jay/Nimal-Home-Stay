import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';

const PeopleThoughts = () => {

    const reviews = [
        {
            title: `Abosolute Joy!`,
            text: `This was a wonderful experience! Dodonduwa has captured our hearts and so have Nimal and his family. We have truly been spoiled by the wonderful food, local knowledge & experience and hospitality.
         Nimal is/was a professional chef and him and his wife make sure you get the most out of your authentic Sri Lankan experience.`,
            reviewer: "Sopa"
        },
        {
            title: `Authentisches Sri Lanka bei tollen Gastgebern`,
            text: `Nimal Ist ein hervorragender Gastgeber und ein toller Guide. Besser hätten wir das "echte" Leben auf Sri Lanka nicht kennenlernen können. Seine Familie ist ebenfalls großartig. Das Frühstück und auch das Abendessen waren sensationell.`,
            reviewer: "Thorsten, Germany"
        },
        {
            title: `Ubytováňí s milým přístupem a kvalitní kuchyní`,
            text: `Hledali jsme ubytování a našli přátelské zázemí pro naše cesty v okolí Hikaduwa. Nimal a Chaina nás velice mile přijali a po celou dobu se o nás starali jako bychom patřili do rodiny. Když nám nebylo dobře, pomohli nám. Nakonec jsme zůstali 4 noci a zúčastnili se i nabízeného kurzu vaření - vaří tu totiž opravdu dobře 👍.
         Děkujeme za starost, přátelský přístup a pečlivé služby 😄`,
            reviewer: "Petr, Czech Republic"
        },
        {
            title: `Authentic Sri Lankan village experience`,
            text: `Nimal's Homestay was the highlight of my trip to Sri Lanka by far. The kindness, generosity and fun of staying with a Sri Lankan family was tops. Nimal, his wife Chani and their children welcome you into their home. You are off the beaten tourist track and in the heart of the village, next to the local school, a tailor just down the street where I had beautiful clothes made, a private haven in the village.`,
            reviewer: `Hobart, Australia`
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    // }

    // const goToPrevious = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    // }

    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen' data-aos="fade-up" data-aos-duration="2000">
                <h1 className='text-3xl font-bold font-istok text-title text-center pl-2 pr-2 pt-6 pb-6'>Lovely people’s Lovely thoughts <br />🫰</h1>
                <div className='flex flex-col items-center '>
                    <div className="text-xl font-semibold text-common text-center">{reviews[currentIndex].title}</div>
                    <div className="text-lg mt-2 text-gray-400 font-indie p-4 lg:w-2/3 lg:h-40 md:h-40 h-80 text-center flex items-center">{reviews[currentIndex].text}</div>
                    <div className="text-sm mt-2 text-gray-500 font-indie text-center">- {reviews[currentIndex].reviewer}</div>
                    {/* <div className="mt-4">
                    <button onClick={goToPrevious}>Previous</button>
                    <button onClick={goToNext}>Next</button>
                </div> */}
                </div>
            </div>
            <Contact/>
        </>
    )
}
AOS.init();
export default PeopleThoughts