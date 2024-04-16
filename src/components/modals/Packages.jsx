import React from 'react'
import { useState } from 'react';
import { IoBed } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import Lottie from 'lottie-react'
import UserPic from "../../assets/user.json";
import BookNow from "./Book";

const Packages = ({ visiblePackageP, onClosePackageP }) => {
  //booking modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //

  //control this modal close
  const handleClosePackageP = (event) => {
    if (event.target.id === 'modal') {
      onClosePackageP();
    }
  }

  if (!visiblePackageP) return null;



  return (

    <div id='modal' className='fixed inset-0 z-20 bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-hidden' onClick={handleClosePackageP}>
      <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center rounded-3xl lg:w-8/12 md:w-10/12 w-5/6 lg:h-4/5 md:h-4/6 h-full'>
        <div className=' h-full w-full flex justify-center items-center '>
          <div className='lg:w-4/5 w-5/6 bg-white rounded-2xl lg:p-4 p-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <div className='border-2  rounded-xl shadow-2xl shadow-blue-500/20 border-[#04caa267] flex flex-col justify-center items-center lg:gap-2 gap-1 lg:py-8 py-4'>
              <div className='lg:w-40 lg:h-40 w-20 h-20 bg-slate-50 rounded-full mb-2'>
                <Lottie animationData={UserPic} loop={true} />
              </div>
              <h1 className='lg:text-xl text-lg font-semibold font-domine text-title'>1 Person</h1>
              <div className='flex flex-col items-start font-istok text-common text-sm'>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <IoBed />
                  <p>King Size Bed</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <MdBathtub />
                  <p className=''>Luxury Sanitary Facilities</p>
                </div>
              </div>
              <h1 className='lg:text-2xl text-xl font-semibold font-domine text-title mb-2'>LKR 4500</h1>
              <button onClick={() => setOpen(true)} className="font-istok z-10 text-common  relative px-3 py-1 rounded-md bg-transparent isolation-auto border-[3px]  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#04CAA3] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                <span className='hover:text-white transition-all duration-300'>Book Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className=' h-full w-full flex justify-center items-center'>
          <div className='bg-white lg:w-4/5 w-5/6 rounded-2xl lg:p-4 p-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <div className='  border-2  rounded-xl shadow-2xl shadow-blue-500/20 border-[#04caa267] flex flex-col justify-center items-center lg:gap-2 gap-1 lg:py-8 py-4'>
              <div className=' bg-slate-50 rounded-full flex flex-row mb-2'>
                <Lottie animationData={UserPic} loop={true} className='lg:w-40 w-20' />
                <Lottie animationData={UserPic} loop={true} className='lg:w-40 w-20' />
              </div>
              <h1 className='lg:text-xl text-lg font-semibold font-domine text-title'>2 People</h1>
              <div className='flex flex-col items-start font-istok text-common text-sm'>
                <div className='flex flex-row justify-center items-center gap-2 '>
                  <IoBed />
                  <p>King Size Bed</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <MdBathtub />
                  <p className=''>Luxury Sanitary Facilities</p>
                </div>
              </div>
              <h1 className='lg:text-2xl text-xl font-semibold font-domine text-title mb-2'>LKR 5400</h1>
              <button onClick={() => setOpen(true)} className="font-istok z-10 text-common  relative px-3 py-1 rounded-md bg-transparent isolation-auto border-[3px]  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#04CAA3] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                <span className='hover:text-white transition-all duration-300'>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookNow visible={open} onClose={handleClose} />
    </div>

  )
}

export default Packages