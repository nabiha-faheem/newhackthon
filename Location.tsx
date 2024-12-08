

import React from 'react'
import  Image  from 'next/image';
import img from '../app/img/Pick - Up.png'
import img2 from '../app/img/Drop - Off.png'
import img3 from '../app/img/Switch.png'
function Location() {
  return (
<div className='flex items-center  justify-between '>
    <div>
     <Image alt='img' src={img} width={500} className=' mx-auto'/>

        </div>
          <div>
            <Image alt='imh' src={img3}/>
          </div>
        <div>
     <Image alt='img' src={img2} width={500} className=' mx-auto'/>

        </div>
    </div>
  )
}

export default Location;
