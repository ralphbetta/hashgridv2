import Image from 'next/image'
import React from 'react'

function ClientSection() {
    const clients = [
        "svg/brand1.svg",
        "svg/brand3.svg",
        "svg/brand4.svg",
        "svg/brand6.svg",
        "svg/brand7.svg",
        "svg/brand8.svg",


    ]
  return (
    <div className='flex flex-col items-center mt-[7%]'>
        <h3 className=" text-3xl font-bold mb-8 offwhite"> Client Section</h3>
        <div className='flex gap-x-12'>{clients.map((element, index)=> <Image src={element} key={index} alt='brands' width={index ==2 ? 100 : 150} height={1000} />)}</div>
    </div>
  )
}

export default ClientSection