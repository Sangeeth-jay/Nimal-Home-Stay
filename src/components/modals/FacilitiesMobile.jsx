import React from 'react'
import { IoBed } from "react-icons/io5";
import { MdDone, MdOutlineScubaDiving } from "react-icons/md";
import { FaWifi, FaBath } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const FacilitiesMobile = ({ visibleFacilitiesM, onCloseFaclitiesM }) => {
    if (!visibleFacilitiesM) return null;

    // const handleClose = (event) => {
    //     if (event.target.id === 'closeBtn') {
    //         onCloseFaclitiesM();
    //     }
    // }
    return (
        <>
            <div className='fixed inset-0 z-30 bg-white flex lg:hidden md:hidden overflow-y-scroll p-4 pl-8'>
                <div className='flex flex-col gap-4 pb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <IoBed />
                            <h1>Bedroom & Room Amenities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>King Size Bed (2 people + 1 child)</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Socket near the bed</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Drying rack for clothing</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <PiForkKnifeFill />
                            <h1>Foods & Drinks</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Kitchen access</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Special diet menus (on request)</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Restaurant</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <FaBath />
                            <h1>Sanitary Facilities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Private bathroom</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Shower</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Toilet</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Towels</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <MdOutlineWorkspacePremium />
                            <h1>Services</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Shuttle service</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Shared lounge/TV area</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Luggage storage</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Laundry</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Room service</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <MdOutlineScubaDiving />
                            <h1>Activities</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Bicycle rental</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Cooking class</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Tour or class about local culture</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Snorkeling</p>
                            <p className='bg-slate-200 rounded-lg text-xs p-1'>Additional Charge</p>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Cycling</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row items-center gap-1 text-lg'>
                            <FaWifi />
                            <h1>Internet</h1>
                        </div>
                        <div className='flex flex-row items-center gap-1 pl-1'>
                            <MdDone />
                            <p>Free WiFi is available</p>
                        </div>
                    </div>
                    <div className='flex justify-center pb-4'>
                        <button id='closeBtn' className="cursor-pointer duration-200 hover:scale-125 active:scale-90 ring-2 ring-common flex justify-center items-center w-10 h-10 rounded-full" title="Go Back" onClick={onCloseFaclitiesM}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-common">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilitiesMobile