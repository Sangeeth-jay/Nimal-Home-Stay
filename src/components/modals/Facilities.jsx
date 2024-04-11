import React from 'react'
import { IoBed } from "react-icons/io5";
import { MdDone, MdOutlineScubaDiving } from "react-icons/md";
import { FaWifi, FaBath } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Facilities = ({ visibleFacilitiesP, onCloseFaclitiesP }) => {

    if (!visibleFacilitiesP) return null;

    const handleCloseFaclitiesP = (event) => {
        if (event.target.id === 'modal') {
            onCloseFaclitiesP();
        }
    }

    return (
        <>
            {/* desktop view */}
            <div id='modal' className='fixed inset-0 z-30 bg-black/30 backdrop-blur-sm lg:flex md:flex justify-center items-center overflow-hidden hidden sm:flex' onClick={handleCloseFaclitiesP}>

                <div className='bg-white w-ful p-8 rounded-3xl lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 gap-8 '>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <IoBed />
                            <h1 className='hover:underline duration-200 ease-in-out'>Bedroom & Room Amenities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>King Size Bed (2 people + 1 child)</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Socket near the bed</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Drying rack for clothing</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <PiForkKnifeFill />
                            <h1 className='hover:underline duration-200 ease-in-out'>Foods & Drinks</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Kitchen access</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Special diet menus (on request)</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Restaurant</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <FaBath />
                            <h1 className='hover:underline duration-200 ease-in-out'>Sanitary Facilities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Private bathroom</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Shower</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Toilet</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Towels</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <MdOutlineWorkspacePremium />
                            <h1 className='hover:underline duration-200 ease-in-out'>Services</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Shuttle service</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Shared lounge/TV area</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Luggage storage</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Laundry</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Room service</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <MdOutlineScubaDiving />
                            <h1 className='hover:underline duration-200 ease-in-out'>Activities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Bicycle rental</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Cooking class</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Tour or class about local culture</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Snorkeling</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Cycling</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <FaWifi />
                            <h1 className='hover:underline duration-200 ease-in-out'>Internet</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1 hover:text-yellow-400 duration-200 ease-in-out'>
                            <MdDone />
                            <p>Free WiFi is available</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            

        </>
    )
}

export default Facilities