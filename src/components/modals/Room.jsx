import React from 'react'
import Bedpic from '../../assets/108202288.jpg';
import Bathroom from '../../assets/107312855.jpg';
import Furniture from '../../assets/108202292.jpg';
import Balcony from '../../assets/nimal-s-homestay.jpg';
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { useState } from 'react';

const Room = ({visibleRoomP, onCloseRoomP}) => {

    if (!visibleRoomP) return null;

    const handleCloseRoomP = (event) => {
        if (event.target.id === 'modal') {
            onCloseRoomP();
        }
    }

    const roomFacilities = [
        {
            title: 'Bed',
            description: 'We Offer King size bed for you and your family to enjoy relaxation.',
            image: Bedpic
        },
        {
            title: 'Sanitary Facilities',
            description: 'Our Standard Sanitary Facilities will make your stay comfortable.',
            image: Bathroom
        },
        {
            title: 'Furniture',
            description: 'Your all stuff will be arranged here.',
            image: Furniture
        },
        {
            title: 'Balcony & Reading Area',
            description: 'Balcony is where you can enjoy your stay.',
            image: Balcony
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(currentIndex => currentIndex > 0 ? currentIndex - 1 : roomFacilities.length - 1);
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex => currentIndex < roomFacilities.length - 1 ? currentIndex + 1 : 0);
    }

    return (
        <div id='modal' className='fixed inset-0 z-30 bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-hidden' onClick={handleCloseRoomP}>

            <div className='bg-white lg:w-8/12 md:w-10/12 w-10/12 lg:h-5/6 md:h-5/6 h-fit p-4 rounded-3xl flex flex-col gap-2 justify-center items-center '>
                <h1 className='text-2xl font-semibold text-[#833796] font-istok'>Beyond the Luxry</h1>
                <div className='flex justify-center items-center w-full'>
                    <BsCaretLeftFill className='text-[#C2B1E5] hover:text-[#7b58c1] duration-200 cursor-pointer text-2xl hidden sm:block md:block lg:block' onClick={handlePrev} />
                    <div className='lg:w-9/12 md:w-10/12  lg:h-96 md:h-80 h-72 bg-slate-400 relative rounded-md'>
                        <img src={roomFacilities[currentIndex].image} alt="" className='object-cover w-full h-full rounded-md' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                            <div className='bg-[#ffffff96] text-[#52215E] p-2'>
                                <h1 className=' font-semibold'>{roomFacilities[currentIndex].title}</h1>
                                <p className='text-xs'>{roomFacilities[currentIndex].description}</p>
                            </div>
                        </div>
                    </div>
                    <BsCaretRightFill className='text-[#C2B1E5] hover:text-[#7b58c1] duration-200 cursor-pointer text-2xl hidden sm:block md:block lg:block' onClick={handleNext} />
                </div>
                <div className='flex flex-row'>
                    <BsCaretLeftFill className='text-[#C2B1E5] hover:text-[#7b58c1] cursor-pointer text-2xl lg:hidden md:hidden' onClick={handlePrev} />
                    <BsCaretRightFill className='text-[#C2B1E5] hover:text-[#7b58c1] cursor-pointer text-2xl lg:hidden md:hidden' onClick={handleNext} />
                </div>
                <div className='lg:flex md:flex hidden gap-4'>
                    <div className='w-32 h-32 bg-slate-500 overflow-hidden relative rounded-md'>
                        <img src={roomFacilities[(currentIndex + 1) % 4].image} alt="" className='object-cover w-full h-full' />
                        <p className='text-sm font-semibold absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#ffffffb6] text-[#52215E] p-2 text-center'>
                            {roomFacilities[(currentIndex + 1) % 4].title}</p>
                    </div>
                    <div className='w-32 h-32 bg-slate-500 overflow-hidden relative rounded-md'>
                        <img src={roomFacilities[(currentIndex + 2) % 4].image} alt="" className='object-cover w-full h-full' />
                        <p className='text-sm font-semibold absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#ffffffb6] text-[#52215E] p-2 text-center'>
                            {roomFacilities[(currentIndex + 2) % 4].title}</p>
                    </div>
                    <div className='w-32 h-32 bg-slate-500 overflow-hidden relative rounded-md'>
                        <img src={roomFacilities[(currentIndex + 3) % 4].image} alt="" className='object-cover w-full h-full' />
                        <p className='text-sm font-semibold absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#ffffffb6] text-[#52215E] p-2 text-center'>
                            {roomFacilities[(currentIndex + 3) % 4].title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room