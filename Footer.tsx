


import React from 'react'

function Footer() {
  return (
    <div className='bg-white mt-10'>
      <div className='flex flex-wrap'>
        {/* Morent Logo and Vision */}
        <div className="flex flex-col ml-10 mt-12 mr-10">
          <h1 className='text-[#3563E9] font-bold text-4xl'>MORENT</h1>
          <p className='text-[#585555] w-72 mt-4'>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* About Section */}
        <div className="about ml-auto  mt-6 mr-20 gap-x-11">
          <h1 className='font-bold text-xl'>About</h1>
          <h2 className='mt-4 text-gray-500'>How It Works</h2>
          <h3 className='mt-3 text-gray-500'>Featured</h3>
          <h4 className='mt-3 text-gray-500'>Partnership</h4>
          <h5 className='mt-3 text-gray-500'>Business Relation</h5>
        </div>

        {/* Additional Section (similar to About) */}
        <div className="services ml-auto  ml-1  mt-6 mr-20">
          <h1 className='font-bold text-xl'>Community</h1>
          <h2 className='mt-4 text-gray-500'>Event</h2>
          <h3 className='mt-3 text-gray-500'>Blog</h3>
          <h4 className='mt-3 text-gray-500'>Podcast</h4>
          <h5 className='mt-3 text-gray-500'>Invite a friend</h5>
        </div>

        {/* Duplicate Section (as per original code) */}
        <div className="services ml-auto ml-1 mr-14 gap-x-6 mt-6 ">
          <h1 className='font-bold text-xl'>Socials</h1>
          <h2 className='mt-4 text-gray-500'>Discord</h2>
          <h3 className='mt-3 text-gray-500'>Instagram</h3>
          <h4 className='mt-3 text-gray-500'>Twitter</h4>
          <h5 className='mt-3 text-gray-500'>Facebook</h5>
        </div>
        <div className="w-full border-t border-gray-300 mt-6"></div>


        <div className=' flex'>
        <p className=' mt-8'>@2022 MORENT.All right reserved</p>
        <h1 className=' ml-[644px] mt-8'>Privacy&Policy</h1>
        <h2 className=' ml-20 mt-8'>Terms&Conditions</h2>
        </div>
       
      </div>
    </div>
  )
}

export default Footer


