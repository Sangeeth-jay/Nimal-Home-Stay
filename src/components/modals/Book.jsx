import React from 'react'
import Bico from '../../assets/bookingcom-1.svg';
import GHC from '../../assets/ghc.svg';
import Rl from '../../assets/rl.svg';
import BluePillow from '../../assets/Logo_Bluepillow.png';

const Book = ({visible, onClose}) => {

  if(!visible) return null;

  return (
    <div id='modal' className='fixed inset-0 z-30 bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-hidden' onClick={onClose}>
      <div className='flex flex-col justify-center items-center gap-7 bg-white rounded-3xl shadow-md lg:w-1/4 lg:h-5/6 md:w-4/6 w-5/6 h-4/6 '>
        <div className=' bg-[#1A447D] flex flex-row justify-center items-center pr-2 rounded-md lg:w-9/12 md:w-1/2 w-5/6 h-14 shadow-md cursor-pointer hover:scale-110 ease-in-out duration-200 hover:shadow-lg' onClick={() => window.open('https://www.booking.com/searchresults.en-gb.html?aid=2127705&label=metagha-link-LULK-hotel-2570229_dev-desktop_los-1_bw-0_dow-Monday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20240401_ppt-&hca=m&no_rooms=1&show_room=257022901_366344710_2_2_0&edgtid=VQPFbF78QN-ft3H3g0Nb7A&ext_price_total=5405.20&efpc=GLAKGLAKLw&ts=1711894944&highlighted_hotels=2570229&checkin=2024-04-01&redirected=1&city=-2219694&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-04-02&keep_landing=1&sid=79a772a87aeca78b8b0f9c2019ed9343')}>
          <img src={Bico} alt="booking.com" className='w-10' />
          <h1 className='text-white text-xl font-bold'>Booking<span className='text-[#159EDA]'>.com</span></h1>
        </div>
        <div className=' bg-[#FF8E3D] flex flex-row justify-center items-center gap-2 p-2 rounded-md  lg:w-9/12 md:w-1/2 w-5/6 h-14 shadow-md cursor-pointer hover:scale-110 ease-in-out duration-200 hover:shadow-lg' onClick={() => window.open('https://www.goodhotelclub.com/hotel/1002570229/?check_in=2024-04-01&check_out=2024-04-02&rate_rule_id=&custom2=91000000000_17118696786333144_408495639684_0_0&custom3=PUBLIC&site=localuniversal&verification=&ad_click=&base_rate=&rate=5405.20&tax=0.00&click_source=gha--hotel-default-desktop-1002570229-localuniversal-91000000000_17118696786333144_408495639684_0_0')}>
          <img src={GHC} alt="booking.com" className='w-10' />
          <h1 className='text-white text-lg font-bold'>Good Hotel Club</h1>
        </div>
        <div className=' bg-[#FF543D] flex flex-row justify-center items-center p-2 rounded-md  lg:w-9/12 md:w-1/2 w-5/6 h-14 shadow-md cursor-pointer hover:scale-110 ease-in-out duration-200 hover:shadow-lg' onClick={() => window.open('https://www.reservationlodge.com/hotel/1002570229/?check_in=2024-04-01&check_out=2024-04-02&rate_rule_id=&custom2=91000000000_17119361720484102_408810618846_0_0&custom3=PUBLIC&site=localuniversal&verification=&ad_click=&base_rate=&rate=5405.20&tax=0.00&click_source=gha--hotel-default-desktop-1002570229-localuniversal-91000000000_17119361720484102_408810618846_0_0')}>
          <img src={Rl} alt="booking.com" className='w-10' />
          <h1 className='text-white text-lg font-bold'>Reservation Lodge</h1>
        </div>
        <div className=' bg-white flex flex-row justify-center items-center p-2 rounded-md  lg:w-9/12 md:w-1/2 w-5/6 h-14 shadow-md cursor-pointer hover:scale-110 ease-in-out duration-200 hover:shadow-lg' onClick={() => window.open('https://www.bluepillow.com/checkout/61eee3a0113b0ba9fb93c801?begin=2024-04-01&end=2024-04-02&currency=LKR&language=en&block_id=-b,rArw9RaAh1bOZwFzWwYYu25AZmn2tn6RKySm_JcTWQ1KqplC6zSWBtSbCdb4CMdV,-bkng-Apartment&country=LK')}>
          <img src={BluePillow} alt="booking.com" className='w-10' />
          <h1 className='text-[#E7AA72] text-lg font-bold'>Blue Pillow</h1>

        </div>
      </div>
    </div>
  )
}

export default Book