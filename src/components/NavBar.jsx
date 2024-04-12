import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from "../assets/Nimal's logo.png";
import BookNow from "../components/modals/Book";

const NavBar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <>
        <header className="fixed w-full z-20 p-1.5 px-10 shadow-[rgba(0,_0,_0,_0.1)_0px_0.5px_10px] bg-white">
            {/* desktop navigation */}

            <nav className="flex justify-between items-center" >
                <div className="cursor-pointer md:hidden" data-aos="fade-right" data-aos-duration="1000">
                    <Link to="home" spy="true" smooth="true" duration={500}>
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-10"
                        />
                    </Link>
                </div>
                <div className="cursor-pointer  hidden md:block" data-aos="fade-right" data-aos-duration="700">
                    <Link to="home" spy="true" smooth="true" duration={500}>
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-20"
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex gap-7 text-md text-common font-istok cursor-pointer text-center" data-aos="fade-down" data-aos-duration="1000">
                    <Link
                        to="home"
                        spy="true"
                        smooth="true"
                        duration={500}
                        className="hover:text-yellow-400 hover:underline  transition-all ease-in-out duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="facilities"
                        spy="true"
                        smooth="true"
                        duration={500}
                        className="hover:text-yellow-400 hover:underline transition-all ease-in-out duration-300"
                    >
                        Facilities
                    </Link>
                    <Link
                        to="contact"
                        spy="true"
                        smooth="true"
                        duration={500}
                        className="hover:text-yellow-400 hover:underline transition-all ease-in-out duration-300"
                    >
                        Contact Us
                    </Link>
                </nav>

                <div data-aos="fade-left" data-aos-duration="1000">
                    <button onClick={() => setOpen(true)} className="hidden md:block font-istok text-md text-common relative px-3 py-0.5 rounded-md bg-transparent isolation-auto border-[3px]  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                        Book Now
                    </button>
                </div>

                <div className="md:hidden flex items-center cursor-pointer" data-aos="fade-left" data-aos-duration="1000">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) :
                        (
                            <AiOutlineMenu size={25} onClick={handleChange} />
                        )}
                </div>
            </nav>

            {/* mobile navigation */}
            <div className={`${menu ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col justify-center absolute bg-white left-0  font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen opacity-95 transition-transform ease-in-out duration-300 z-10 text-title`}>
                <Link
                    to="home"
                    spy="true"
                    smooth="true"
                    duration={500}
                    className="hover:text-yellow-400 transition-all ease-in-out duration-300 "
                >
                    Home
                </Link>
                <Link
                    to="facilities"
                    spy="true"
                    smooth="true"
                    duration={500}
                    className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                >
                    Facilities
                </Link>
                <Link
                    to="contact"
                    spy="true"
                    smooth="true"
                    duration={500}
                    className="hover:text-yellow-400 transition-all ease-in-out duration-300"
                >
                    Contact Us
                </Link>

            </div>
        </header>
        <BookNow visible={open} onClose={handleClose}/>
        </>
    );
};
AOS.init();
export default NavBar;
