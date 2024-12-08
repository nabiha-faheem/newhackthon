


import React from 'react'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { MdLocalGasStation } from 'react-icons/md'
import { GiAbstract013 } from 'react-icons/gi'
import { IoPerson } from 'react-icons/io5'
import Link from 'next/link'

function PopularCar() {
  return (
    <div className="bg-[#F6F7F9] p-10">
      <div>
        <div>
          <h1 className="ml-10 text-gray-500">Popular Cars</h1>
        </div>

        {/* Flex container for the car cards */}
        <div className="flex flex-wrap gap-4 justify-between mt-8">

          {/* Car Card 1 */}
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">Koinegsegg</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Sports</h3>
            <Image src="/car.png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

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
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">Nissan GT-R</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Sports</h3>
            <Image src="/car (1).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

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
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-5">
            <div className="flex mt-7">
              <h1 className="mt-8 ml-5 font-bold text-xl">Roll-Royce</h1>
              <FaHeart className="text-red-600 ml-44 mt-8" />
            </div>
            <h3 className="text-gray-500 ml-5">Seden</h3>
            <Image src="/car (2).png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

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
                <h3 className="mt-10 ml-5">$9.00</h3>
                <p className="ml-5 mt-10 text-gray-500">/day</p>
              </div>

              <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
                Rent Now
              </button>
            </div>
          </div>

        

        </div>
      </div>
      <Link href='/detailed'>
      <button className=' items-center justify-center rounded-md mt-6  bg-blue-500 text-white px-5 py-2'>Show More</button>
      </Link>
    </div>
  )
}

export default PopularCar













































































































//                 <h2 className="text-gray-500 ml-2">2 Person</h2>
//               </div>
//             </div>

//             {/* Pricing and Rent Now */}
//             <div className="flex items-center mt-8 justify-between">
//               <div className="flex items-center">
//                 <h3 className="mt-10 ml-5">$90.00</h3>
//                 <p className="ml-5 mt-10 text-gray-500">/day</p>
//               </div>

//               <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
//                 Rent Now
//               </button>
//             </div>
//           </div>

//           {/* Car Card 3 */}
//           <div className="bg-white w-1/3 p-5">
//             <div className="flex mt-7">
//               <h1 className="mt-8 ml-5">Koinegsegg</h1>
//               <FaHeart className="text-red-600 ml-44 mt-8" />
//             </div>
//             <h3 className="text-gray-500 ml-5">Sports</h3>
//             <Image src="/car.png" alt="" height={200} width={200} className="mt-16 ml-[25%]" />

//             {/* Information section */}
//             <div className="flex mt-10 ml-3 justify-between">
//               <div className="flex items-center">
//                 <MdLocalGasStation className="text-gray-500" />
//                 <h1 className="text-gray-500 ml-2">90L</h1>
//               </div>
//               <div className="flex items-center">
//                 <GiAbstract013 className="text-gray-500" />
//                 <h2 className="text-gray-500 ml-2">Manual</h2>
//               </div>
//               <div className="flex items-center">
//                 <IoPerson className="text-gray-500" />
//                 <h2 className="text-gray-500 ml-2">2 Person</h2>
//               </div>
//             </div>

//             {/* Pricing and Rent Now */}
//             <div className="flex items-center mt-8 justify-between">
//               <div className="flex items-center">
//                 <h3 className="mt-10 ml-5">$90.00</h3>
//                 <p className="ml-5 mt-10 text-gray-500">/day</p>
//               </div>

//               <button className="mt-9 bg-[#3563E9] text-white px-6 rounded-md py-2">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PopularCar
