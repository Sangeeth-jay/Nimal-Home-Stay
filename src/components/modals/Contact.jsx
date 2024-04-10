import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = ({ visibleContactP, onCloseContactP }) => {

    if (!visibleContactP) return null;

    const handleEmail = () => {
        const email = 'nimalsembakuttige@hotmail.com';
        const subject = 'Hello Nimal';
        const mailToLink = `mailto:${email}?subject=${subject}`;
        window.location.href = mailToLink;
    }


    const copyText = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
    }

    //control this modal
    const handleCloseContactP = (event) => {
        if (event.target.id === 'modal') {
            onCloseContactP();
        }
    }

    return (
        <div id='modal' className='fixed inset-0 z-30 bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-hidden' onClick={handleCloseContactP}>
            <div className='bg-white lg:w-80 md:w-72 w-60 lg:h-80 md:h-72 h-60 rounded-3xl flex  justify-center items-center'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <a href="https://www.instagram.com/nimal.homestay/">
                        <div className='flex flex-row justify-center items-center gap-2 text-common cursor-pointer lg:text-lg font-serif hover:text-yellow-500  duration-300 ease-in-out'>
                            <FaInstagramSquare />
                            <p>@nimal.homestay</p>
                        </div>
                    </a>
                    <div className='flex flex-row justify-center items-center gap-2 text-common cursor-pointer lg:text-lg font-serif hover:text-yellow-500  duration-300 ease-in-out' onClick={handleEmail}>
                        <MdEmail />
                        <p>E-mail me</p>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2 text-common cursor-pointer lg:text-lg font-sans hover:text-yellow-500  duration-300 ease-in-out'>
                        <IoCall />
                        <p onClick={() => copyText('+94 77 113 6997')}>+94 77 113 6997</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact