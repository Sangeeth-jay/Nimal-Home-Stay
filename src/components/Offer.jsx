import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Room from "../assets/room.json";
import Wallet from "../assets/wallet.json";
import Inbox from "../assets/inbox.json";
import Arrow from "../assets/arrow.json";
import Gallery from "../assets/gallery.json";
import Joy from "../assets/joy.json";
import Wifi from "../assets/wifi.json";
import Fork from "../assets/fork.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PackagesPortal from "../components/modals/Packages";
import ContactPortal from "./modals/Contact";
import BookPortal from "./modals/Book";
import FacilitiesPortal from "./modals/Facilities";
import FacilitiesMobilePortal from "./modals/FacilitiesMobile";
import RoomTour from './modals/Room';

const Offer = () => {

    //Package portal
    const [openPackageP, setOpenPackageP] = useState(false);
    const handlePackageP = () => setOpenPackageP(false);

    //Contact portal
    const [openContactP, setOpenContactP] = useState(false);
    const handleContactP = () => setOpenContactP(false);

    //Booking portal
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    //Facilities portal
    const [openFacilitiesP, setOpenFacilitiesP] = useState(false);
    const handleFacilitiesP = () => setOpenFacilitiesP(false);

    //Facilities mobile portal
    const [openFacilitiesM, setOpenFacilitiesM] = useState(false);
    const handleFacilitiesM = () => setOpenFacilitiesM(false);

    //Room tour portal
    const [openRoomP, setOpenRoomP] = useState(false);
    const handleRoomP = () => setOpenRoomP(false);

    return (
        <>
            <section id="offer">
                <div className="lg:pl-60 lg:pr-60 md:pl-20 md:pr-20 pl-4 pr-4 pt-20" data-aos="fade-up" data-aos-duration="2000">

                    {/* desktop & tablet view */}
                    <div class="lg:flex md:flex justify-center items-center min-h-screen sm: hidden">
                        <div class="lg:grid md:grid grid-cols-3 grid-rows-3 gap-4">

                            <div class="row-span-2 bg-[#C2B1E5] p-4 shadow-md rounded-2xl flex flex-col justify-between lg:gap-20 md:gap-10 cursor-pointer hover:scale-105 duration-300 ease-in-out" onClick={() => setOpenRoomP(true)}>
                                <div>
                                    <h2 class="lg:text-2xl md:text-xl font-bold mb-2 font-domine text-[#52215E]">Room Tour</h2>
                                    <p class="font-domine md:text-sm text-[#52215E]">We offer luxury room facilities,
                                        you can relax your soul and enjoy your stay.</p>
                                </div>
                                <Lottie animationData={Room} loop={true} className="lg:pb-10 md:pb-16" />
                            </div>


                            <div class="col-span-2 bg-[#F381A2] p-4 shadow-md rounded-2xl flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ease-in-out" onClick={() => setOpenFacilitiesP(true)}>
                                <div className="flex justify-end">
                                    <div className="flex flex-row gap-6 lg:w-60 md:w-40">
                                        <Lottie animationData={Wifi} loop={true} className="lg:w-20 md:w-16" />
                                        <Lottie animationData={Fork} loop={true} />
                                        <Lottie animationData={Joy} loop={true} />
                                    </div>
                                </div>
                                <div>
                                    <h2 class="lg:text-2xl md:text-xl font-bold mb-2 font-domine text-[#582A64]">What we offer</h2>
                                    <p class="font-domine md:text-sm text-[#582A64]">We offer everything you want unconditionally
                                        to enjoy your tour, especially we
                                        offer few common things for every one.</p>
                                </div>
                            </div>

                            <div class="bg-[#C3D58C] p-4 shadow-md rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out" onClick={() => setOpenPackageP(true)}>
                                <div className="flex justify-center">
                                    <Lottie animationData={Wallet} loop={true} className="lg:w-40 md:w-24" />
                                </div>
                                <div>
                                    <h2 class="lg:text-2xl md:text-xl font-bold mb-2 font-domine text-[#4B5F0F]">Pricing</h2>
                                    <p class="font-domine md:text-sm text-[#4B5F0F]">As we offer good service
                                        we have good pricing
                                        packages</p>
                                </div>
                            </div>

                            <div class="bg-[#FDDE6E] p-4 shadow-md rounded-2xl flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ease-in-out" onClick={() => setOpenContactP(true)}>
                                <div>
                                    <h2 class="lg:text-2xl md:text-xl font-bold mb-2 font-domine text-[#443D28]">Inbox</h2>
                                    <p class="font-domine text-[#443D28] md:text-sm">If you have any doubts,
                                        don’t hesitate to
                                        contact me...</p>
                                </div>
                                <div className="flex justify-center">
                                    <Lottie animationData={Inbox} loop={true} className="lg:w-32 md:w-20" />
                                </div>
                            </div>

                            <div class="col-span-2 bg-[#FCA684] p-4 shadow-md rounded-2xl flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ease-in-out">
                                <Link to="/gallery">
                                    <div className="flex justify-end">
                                        <Lottie animationData={Gallery} loop={true} className="lg:w-40 md:w-20" />
                                    </div>
                                    <div>
                                        <h2 class="lg:text-2xl md:text-xl font-bold mb-2 font-domine text-[#8E481F]">Gallery</h2>
                                        <p class="font-domine md:text-sm text-[#8E481F]">You have no idea really what’s going on here!
                                            Let me show you some snaps.</p>
                                    </div>
                                </Link>
                            </div>

                            <div class="bg-[#B6CEDA] p-4 shadow-md rounded-2xl flex flex-col items-center justify-evenly cursor-pointer hover:scale-105 duration-300 ease-in-out" onClick={() => setOpen(true)}>
                                <div>
                                    <h2 class="text-4xl font-bold mb-2 font-domine text-[#044C70]">Book Now</h2>
                                </div>
                                <div className="flex justify-center">
                                    <Lottie animationData={Arrow} loop={true} className="lg:w-52 md:40" />
                                </div>

                            </div>



                        </div>
                    </div>

                    {/* mobile view */}

                    <div className="lg:hidden md:hidden flex flex-col gap-6 justify-center items-center">
                        <div className="bg-[#C2B1E5] p-4 shadow-md rounded-2xl w-11/12 h-80 flex  flex-col justify-between cursor-pointer transform hover:scale-105 duration-500 ease-in-out" onClick={() => setOpenRoomP(true)}>
                            <div>
                                <h1 className="text-xl font-semibold text-[#52215E] font-domine">Room Tour</h1>
                                <p class="font-domine text-xs text-[#52215E] text-justify pt-1">We offer luxury room facilities,
                                    you can relax your soul and enjoy your stay.</p>
                            </div>
                            <div className="flex justify-center">
                                <Lottie animationData={Room} loop={true} className="w-60" />
                            </div>
                        </div>
                        <div className="bg-[#F381A2] p-4 shadow-md rounded-2xl w-11/12 h-80 flex flex-col justify-between cursor-pointer transform hover:scale-105 duration-500 ease-in-out" onClick={() => setOpenFacilitiesM(true)}>
                            <div>
                                <h1 className="text-xl font-semibold text-[#582A64] font-domine">What we offer</h1>
                                <p class="font-domine text-xs text-[#582A64] text-justify pt-1">We offer everything you want unconditionally
                                    to enjoy your tour, especially we
                                    offer few common things for every one.</p>
                            </div>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 gap-6 w-40">
                                    <Lottie animationData={Wifi} loop={true} className="" />
                                    <Lottie animationData={Fork} loop={true} />
                                    <Lottie animationData={Joy} loop={true} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#C3D58C] p-4 shadow-md rounded-2xl w-11/12 h-80 flex  flex-col justify-between cursor-pointer transform hover:scale-105 duration-500 ease-in-out" onClick={() => setOpenPackageP(true)}>
                            <div>
                                <h1 className="text-xl font-semibold text-[#4B5F0F] font-domine">Pricing</h1>
                                <p class="font-domine text-xs text-[#4B5F0F] text-justify pt-1">As we offer good service
                                    we have good pricing
                                    packages</p>
                            </div>
                            <div className="flex justify-center">
                                <Lottie animationData={Wallet} loop={true} className="w-60" />
                            </div>
                        </div>
                        <div className="bg-[#FDDE6E] p-4 shadow-md rounded-2xl w-11/12 h-80 flex  flex-col justify-between cursor-pointer transform hover:scale-105 duration-500 ease-in-out" onClick={() => setOpenContactP(true)}>
                            <div>
                                <h1 className="text-xl font-semibold text-[#443D28] font-domine">Inbox</h1>
                                <p class="font-domine text-xs text-[#443D28] text-justify pt-1">If you have any doubts,
                                    don’t hesitate to
                                    contact me...</p>
                            </div>
                            <div className="flex justify-center">
                                <Lottie animationData={Inbox} loop={true} className="w-40" />
                            </div>
                        </div>
                        <div className="bg-[#FCA684] p-4 shadow-md rounded-2xl w-11/12 h-80 flex  flex-col justify-between cursor-pointer transform hover:scale-105 duration-500 ease-in-out">
                            <Link to="/gallery">
                                <div>
                                    <h1 className="text-xl font-semibold text-[#8E481F] font-domine">Gallery</h1>
                                    <p class="font-domine text-xs text-[#8E481F] text-justify pt-1">You have no idea really what’s going on here!
                                        Let me show you some snaps.</p>
                                </div>
                                <div className="flex justify-center">
                                    <Lottie animationData={Gallery} loop={true} className="w-60" />
                                </div>
                            </Link>
                        </div>
                        <div className="bg-[#B6CEDA] p-4 shadow-md rounded-2xl w-11/12 h-80 flex  flex-col justify-center cursor-pointer transform hover:scale-105 duration-500 ease-in-out" onClick={() => setOpen(true)}>                    <div>
                            <h1 className="text-3xl text-center font-semibold text-[#52215E] font-domine">Book Now</h1>

                        </div>
                            <div className="flex justify-center">
                                <Lottie animationData={Arrow} loop={true} className="w-40" />
                            </div>
                        </div>
                    </div>
                </div>
                <PackagesPortal visiblePackageP={openPackageP} onClosePackageP={handlePackageP} />
                <ContactPortal visibleContactP={openContactP} onCloseContactP={handleContactP} />
                <BookPortal visible={open} onClose={handleClose} />
                <FacilitiesPortal visibleFacilitiesP={openFacilitiesP} onCloseFaclitiesP={handleFacilitiesP} />
                <FacilitiesMobilePortal visibleFacilitiesM={openFacilitiesM} onCloseFaclitiesM={handleFacilitiesM} />
                <RoomTour visibleRoomP={openRoomP} onCloseRoomP={handleRoomP} />
            </section>
        </>
    )
};

AOS.init();
export default Offer;
