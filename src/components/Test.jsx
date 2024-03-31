import React from 'react'

const Test = () => {
  return (
    <div>
          <div class="flex justify-center items-center min-h-screen">
        <div class="grid grid-cols-3 grid-rows-3 gap-4">
            {/* <!-- Room 1 --> */}
            <div class="row-span-2 bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Deluxe Room</h2>
                <p class="text-gray-600">Enjoy the spaciousness and comfort of our Deluxe Room with a stunning view.</p>
            </div>
            {/* <!-- Room 2 --> */}
            <div class="col-span-2 bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Executive Suite</h2>
                <p class="text-gray-600">Indulge in luxury and relaxation with our Executive Suite, equipped with premium amenities.</p>
            </div>
            {/* <!-- Room 3 --> */}
            <div class="bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Presidential Suite</h2>
                <p class="text-gray-600">Experience ultimate luxury and elegance in our Presidential Suite, designed for VIPs.</p>
            </div>
            {/* <!-- Room 4 --> */}
            <div class="bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Standard Room</h2>
                <p class="text-gray-600">Relax in our cozy Standard Room with all the essential amenities for a comfortable stay.</p>
            </div>
            {/* <!-- Room 5 --> */}
            <div class="col-span-2 bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Family Suite</h2>
                <p class="text-gray-600">Enjoy a family getaway in our spacious Family Suite, perfect for bonding moments.</p>
            </div>
            {/* <!-- Room 6 --> */}
            <div class="bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-lg font-bold mb-2">Luxury Villa</h2>
                <p class="text-gray-600">Escape to our luxurious Villa and experience unparalleled comfort and privacy.</p>
            </div>



        </div>
    </div>
    </div>
  )
}

export default Test