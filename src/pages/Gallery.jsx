import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import Logo from "../assets/Nimal's logo.png";
import Img1 from "../assets/406661879.jpg";
import Img2 from "../assets/picture-298.jpg";
import Img3 from "../assets/406662419.jpg";
import Img4 from "../assets/scuba-diving4.webp";
import Img5 from "../assets/img_9232.jpg";
import Img6 from "../assets/053.jpg";
import Img7 from "../assets/108194519.jpg";

const Gallery = () => {

  const gallery = [
    {
      id: 1,
      img: Img1,
      title: "Simple Breakfast with unforgettable taste",
    },
    {
      id: 2,
      img: Img2,
      title: "View of Rathgama Lake near to the Stay ",
    },
    {
      id: 3,
      img: Img3,
      title: "Welcome Drink made 100% natural ingridents",
    },
    {
      id: 4,
      img: Img4,
      title: "Discover Natural Coral - Hikkaduwa",
    },
    {
      id: 5,
      img: Img5,
      title: "Local Market",
    },
    {
      id: 6,
      img: Img6,
      title: "Snorkeling Lessons ",
    },
    {
      id: 7,
      img: Img7,
      title: "Cooking Lessons",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setCurrentIndex(null);
      setModalOpen(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex => currentIndex > 0 ? currentIndex - 1 : gallery.length - 1);
  }
  const handleNext = () => {
    setCurrentIndex(currentIndex => currentIndex < gallery.length - 1 ? currentIndex + 1 : 0);
  }


  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div data-aos="fade-down" data-aos-duration="1200">
          <Link to={"/"}>
            <img src={Logo} alt="" className='w-32 mt-2' />
          </Link>
        </div>
        <div className='text-center'>
          <h1 className='text-3xl text-title font-semibold font-istok' data-aos="fade-down" data-aos-duration="1600">What happen here?</h1>
          <p className='text-common font-serif' data-aos="fade-down" data-aos-duration="2000">Get some ideas through the gallery</p>
        </div>
        <div className='w-full px-4'>
          <hr className='border-t-2 border-[#D3D3D3] my-4' data-aos="fade-up" data-aos-duration="2000" />
        </div>

        <div className='w-full'>

          <div data-aos="fade-up" data-aos-duration="3000" className="lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-4 md:grid md:grid-cols-3 md:grid-rows-4 md:gap-4 flex flex-col gap-3 px-6">
            <div onClick={() => openModal(0)} className="row-span-2 relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[0].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[0].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(1)} className="relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[1].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[1].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(4)} className="col-start-2 row-start-2 relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[4].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[4].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(2)} className="col-start-3 row-start-1 relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[2].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[2].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(3)} className="relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[3].img} alt="" className='object-cover w-full h-full rounded' />
              <div>
                <p className='text-common font-serif bg-white'>{gallery[3].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(5)} className="col-start-2 row-start-3 relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[5].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[5].title}</p>
              </div>
            </div>
            <div onClick={() => openModal(6)} className="row-span-2 col-start-3 row-start-2 relative cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out hover:brightness-110">
              <img src={gallery[6].img} alt="" className='object-cover w-full h-full rounded' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end'>
                <p className='text-common font-serif bg-white'>{gallery[6].title}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {modalOpen && (
        <div id='modal' className='fixed inset-0 z-30 bg-black/70 backdrop-blur-sm flex justify-center items-center p-1' onClick={closeModal}>
          <div className='relative'>
            <img src={gallery[currentIndex].img} alt="" className='lg:max-w-4xl h-auto rounded-sm' onClick={(e) => e.stopPropagation()} />
            <div className='absolute top-1/2 transform -translate-y-1/2 left-0 pl-2'>
              <BsArrowLeftCircleFill className='cursor-pointer text-white text-4xl opacity-45 hover:opacity-90 ease-in-out duration-200' onClick={handlePrev} />
            </div>
            <div className='absolute top-1/2 transform -translate-y-1/2 right-0 pr-2'>
              <BsArrowRightCircleFill className='cursor-pointer text-white text-4xl opacity-45 hover:opacity-90 ease-in-out duration-200' onClick={handleNext} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

AOS.init();

export default Gallery