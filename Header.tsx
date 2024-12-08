import React from 'react'
import { FaBell, FaHeart, FaSearch } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div>
        <div className=' flex'>

<h1 className=' text-[#3563E9]  font-bold text-[32px] ml-16 mt-8 top-[40px]'>
    MORENT
</h1>







<div className='input flex mt-8 ml-12 w-[492px] h-[44px] rounded-full border-[1px] relative'>
  <FaSearch className='text-gray-500  absolute left-4 top-1/2 transform -translate-y-1/2' />
  <input 
    type="text" 
    placeholder='search something here' 
    className='pl-10 w-full h-full rounded-full ' 
    
  />
</div>

 




<div className=' flex space-x-3 ml-[300px]'>

<div className="icons flex border-[1px] h-[34px] mt-8 w-[34px] rounded-full items-center justify-center">

    <FaHeart 
    className='  w-[14px] h-[14px] top-[10px] left-[10px]' />

    
</div> 

<div className="icon-2  icons flex border-[1px] h-[34px] mt-8 w-[34px] rounded-full items-center justify-center">


<FaBell
    className='  w-[14px] h-[14px] top-[10px] left-[10px]' />
    


</div>

<div className='icon-3 icons flex border-[1px] h-[34px] mt-8 w-[34px] rounded-full items-center justify-center'>

<IoIosSettings 
    className='  w-[18px] h-[18px] top-[10px] left-[10px]' />
    

</div>


<div className='icon-3 icons flex border-[1px] h-[34px] mt-8 w-[34px] rounded-full items-center justify-center'>

<Image src='/image.png' alt='' height={50} width={50}/>

</div>

</div>






        </div>
      </div>
    </div>
  )
}

export default Header
