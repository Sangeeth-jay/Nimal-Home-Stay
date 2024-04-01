import React from 'react'
import BookNow from '../components/modals/Book'
import { useState } from 'react'

const Test = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-7 h-screen'>
                <button onClick={() => setOpen(true)} className="hidden md:block font-istok text-md text-common relative px-3 py-0.5 rounded-md bg-transparent isolation-auto  border-[3px]  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    Book Now
                </button>
            </div>
            <BookNow visible={open} onClose={handleClose}/>
        </>
    )
}

export default Test