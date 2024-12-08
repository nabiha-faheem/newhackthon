import Image from 'next/image';

function Hero() {
  return (
    <div className='bg-[#F6F7F9]'>
      {/* Flex container to align the left and right sections horizontally */}
      <div className='flex flex-col md:flex-row justify-between mt-6 mb-6 mx-6'>
        
        {/* Left Section */}
        <div className="left-section bg-[#54A6FF] h-[360px] flex-1 mr-4 mb-4 md:mb-0 rounded-lg">
          <h1 className='text-white text-2xl md:text-3xl w-full mt-9 ml-9 font-bold'>
            The Best Platform For Car Rental
          </h1>
          {/* Content for Left Section */}
          <p className='text-white w-full md:w-72 ml-9 mt-7'>
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>

          <div>
            <button className='bg-[#3563E9] text-white px-5 py-2 rounded-md ml-9 mt-4'>
              Rent a Car
            </button>

            {/* Image with adjusted margin for responsiveness */}
            <Image 
              src='/image 7.png' 
              alt='Car Rental Image' 
              width={350} 
              height={200} 
              className='ml-9 mt-2 md:ml-36'
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section bg-[#3563E9] h-[360px] flex-1 ml-4 rounded-lg">
          <h1 className='text-white text-2xl md:text-3xl w-full mt-9 ml-9 font-bold'>
            Easy way to rent a car at low price
          </h1>
          <p className='text-white w-full md:w-64 ml-9 mt-7'>
            Providing cheap car rental services and safe and comfortable facilities.
          </p>

          <div>
            <button className='bg-[#54A6FF] text-white px-5 py-2 rounded-md ml-9 mt-4'>
              Rent a Car
            </button>

            {/* Image with adjusted margin for responsiveness */}
            <Image 
              src='/image 8 (1).png' 
              alt='Easy Rental Image' 
              width={350} 
              height={200} 
              className='ml-9 mt-2 md:ml-40'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
