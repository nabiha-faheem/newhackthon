


import React from 'react'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { MdLocalGasStation } from 'react-icons/md'
import { GiAbstract013 } from 'react-icons/gi'
import { IoPerson } from 'react-icons/io5'

function Recommended() {
  return (
    <div className="bg-[#F6F7F9] p-10">
      <div>
        <div>
          <h1 className="ml-10 text-gray-500">Recomendation Cars</h1>
        </div>

        {/* Grid container for the car cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">

          {/* Car Card 1 */}
          <div className="bg-white p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">All new rush</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Suv</h3>
            <Image src="/car (7).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

            {/* Information section */}
            <div className="flex mt-10 ml-3 justify-between">
              <div className="flex items-center">
                <MdLocalGasStation className="text-gray-500" />
                <h1 className="text-gray-500 ml-2">90L</h1>
              </div>
              <div className="flex items-center">
                <GiAbstract013 className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">Manual</h2>
              </div>
              <div className="flex items-center">
                <IoPerson className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">2 Person</h2>
              </div>
            </div>

            {/* Pricing and Rent Now */}
            <div className="flex items-center mt-8 justify-between">
              <div className="flex items-center">
                <h3 className="mt-10 ml-5">$90.00</h3>
                <p className="ml-5 mt-10 text-gray-500">/day</p>
              </div>

              <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
                Rent Now
              </button>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-white p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">CR-V</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Suv</h3>
            <Image src="/car (4).png" alt="" height={200} width={200} className="mt-20 ml-[25%]" />

            {/* Information section */}
            <div className="flex mt-10 ml-3 justify-between">
              <div className="flex items-center">
                <MdLocalGasStation className="text-gray-500" />
                <h1 className="text-gray-500 ml-2">90L</h1>
              </div>
              <div className="flex items-center">
                <GiAbstract013 className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">Manual</h2>
              </div>
              <div className="flex items-center">
                <IoPerson className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">2 Person</h2>
              </div>
            </div>

            {/* Pricing and Rent Now */}
            <div className="flex items-center mt-8 justify-between">
              <div className="flex items-center">
                <h3 className="mt-10 ml-5">$96.00</h3>
                <p className="ml-5 mt-10 text-gray-500">/day</p>
              </div>

              <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
                Rent Now
              </button>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-white p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">All new Terios</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Suv</h3>
            <Image src="/car (6).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

            {/* Information section */}
            <div className="flex mt-5 ml-3 justify-between">
              <div className="flex items-center">
                <MdLocalGasStation className="text-gray-500" />
                <h1 className="text-gray-500 ml-2">90L</h1>
              </div>
              <div className="flex items-center">
                <GiAbstract013 className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">Manual</h2>
              </div>
              <div className="flex items-center">
                <IoPerson className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">2 Person</h2>
              </div>
            </div>

            {/* Pricing and Rent Now */}
            <div className="flex items-center mt-8 justify-between">
              <div className="flex items-center">
                <h3 className="mt-10 ml-5">$9.00</h3>
                <p className="ml-5 mt-10 text-gray-500">/day</p>
              </div>

              <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
                Rent Now
              </button>
            </div>
          </div>

          {/* Car Card 4 */}
          <div className="bg-white p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">all new terios</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">SUV</h3>
            <Image src="/car (4).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

            {/* Information section */}
            <div className="flex mt-6 ml-3 justify-between">
              <div className="flex items-center">
                <MdLocalGasStation className="text-gray-500" />
                <h1 className="text-gray-500 ml-2">90L</h1>
              </div>
              <div className="flex items-center">
                <GiAbstract013 className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">Automatic</h2>
              </div>
              <div className="flex items-center">
                <IoPerson className="text-gray-500" />
                <h2 className="text-gray-500 ml-2">4 Person</h2>
              </div>
            </div>

            {/* Pricing and Rent Now */}
            <div className="flex items-center mt-1 justify-between">
              <div className="flex items-center">
                <h3 className="mt-10 ml-5">$110.00</h3>
                <p className="ml-5 mt-10 text-gray-500">/day</p>
              </div>

              <button className="mt-9 ml-2 bg-[#3563E9] text-white px-6 rounded-md py-2">
                Rent Now
              </button>
            </div>
          </div>

        </div>
      </div>









      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">

{/* Car Card 1 */}
<div className="bg-white p-5">
  <div className="flex mt-7">
    <h1 className="mt-8 ml-5 font-bold text-xl">MGXX Exclusice</h1>
    <FaHeart className="text-red-600 ml-44 mt-8" />
  </div>
  <h3 className="text-gray-500 ml-5">Hatchback</h3>
  <Image src="/car (8).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

  {/* Information section */}
  <div className="flex mt-10 ml-3 justify-between">
    <div className="flex items-center">
      <MdLocalGasStation className="text-gray-500" />
      <h1 className="text-gray-500 ml-2">70L</h1>
    </div>
    <div className="flex items-center">
      <GiAbstract013 className="text-gray-500" />
      <h2 className="text-gray-500 ml-2">Manual</h2>
    </div>
    <div className="flex items-center">
      <IoPerson className="text-gray-500" />
      <h2 className="text-gray-500 ml-2">4 Person</h2>
    </div>
  </div>

  {/* Pricing and Rent Now */}
  <div className="flex items-center mt-8 justify-between">
    <div className="flex items-center">
      <h3 className="mt-10 ml-5">$76.00</h3>
      <p className="ml-5 mt-10 text-gray-500">/day</p>
    </div>

    <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
      Rent Now
    </button>
  </div>
</div>

{/* Car Card 2 */}
<div className="bg-white p-5">
  <div className="flex mt-7">
    <h1 className="mt-8 ml-5 font-bold text-xl">new MGZS</h1>
    <FaHeart className="text-red-600 ml-44 mt-8" />
  </div>
  <h3 className="text-gray-500 ml-5">Suv</h3>
  <Image src="/car (9).png" alt="" height={200} width={200} className="mt-20 ml-[25%]" />

  {/* Information section */}
  <div className="flex mt-10 ml-3 justify-between">
    <div className="flex items-center">
      <MdLocalGasStation className="text-gray-500" />
      <h1 className="text-gray-500 ml-2">80L</h1>
    </div>
    <div className="flex items-center">
      <GiAbstract013 className="text-gray-500" />
      <h2 className="text-gray-500 ml-2">Manual</h2>
    </div>
    <div className="flex items-center">
      <IoPerson className="text-gray-500" />
      <h2 className="text-gray-500 ml-2">6 Person</h2>
    </div>
  </div>

  {/* Pricing and Rent Now */}
  <div className="flex items-center mt-8 justify-between">
    <div className="flex items-center">
      <h3 className="mt-10 ml-5">$80.00</h3>
      <p className="ml-5 mt-10 text-gray-500">/day</p>
    </div>

    <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
      Rent Now
    </button>
  </div>
</div>

{/* Car Card 3 */}
<div className="bg-white p-5">
  <div className="flex mt-7">
    <h1 className="mt-8 ml-5 font-bold text-xl">MGZX excite</h1>
    <FaHeart className="text-red-600 ml-44 mt-8" />
  </div>
  <h3 className="text-gray-500 ml-5">Suv</h3>
  <Image src="/car (8).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

  {/* Information section */}
  <div className="flex mt-5 ml-3 justify-between">
    <div className="flex items-center mt-7">
      <MdLocalGasStation className="text-gray-500" />
      <h1 className="text-gray-500 ml-2">90L</h1>
    </div>
    <div className="flex items-center">
      <GiAbstract013 className="text-gray-500 mt-6" />
      <h2 className="text-gray-500 ml-2 mt-6">Manual</h2>
    </div>
    <div className="flex items-center">
      <IoPerson className="text-gray-500 mt-6" />
      <h2 className="text-gray-500 ml-2 mt-6">4 Person</h2>
    </div>
  </div>

  {/* Pricing and Rent Now */}
  <div className="flex items-center mt-8 justify-between">
    <div className="flex items-center">
      <h3 className="mt-10 ml-5">$74.00</h3>
      <p className="ml-5 mt-10 text-gray-500">/day</p>
    </div>

    <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
      Rent Now
    </button>
  </div>
</div>

{/* Car Card 4 */}
<div className="bg-white p-5">
  <div className="flex mt-7">
    <h1 className="mt-8 ml-5 font-bold text-xl">New MGZs</h1>
    <FaHeart className="text-red-600 ml-44 mt-8" />
  </div>
  <h3 className="text-gray-500 ml-5">SUV</h3>
  <Image src="/car (10).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

  {/* Information section */}
  <div className="flex mt-6 ml-3 justify-between">
    <div className="flex items-center">
      <MdLocalGasStation className="text-gray-500" />
      <h1 className="text-gray-500 ml-2">80L</h1>
    </div>
    <div className="flex items-center">
      <GiAbstract013 className="text-gray-500" />
      <h2 className="text-gray-500 ml-2">Automatic</h2>
    </div>
    <div className="flex items-center">
      <IoPerson className="text-gray-500" />
      <h2 className="text-gray-500 ml-4 flex">6 Person</h2>
    </div>
  </div>

  {/* Pricing and Rent Now */}
  <div className="flex items-center mt-1 justify-between">
    <div className="flex items-center">
      <h3 className="mt-10 ml-5">$80.00</h3>
      <p className="ml-5 mt-10 text-gray-500">/day</p>
    </div>

    <button className="mt-14 ml-2 bg-[#3563E9] text-white px-6 rounded-md py-">
      Rent Now
    </button>
  </div>
</div>

</div>
</div>









    
  )
}

export default Recommended



















































