 import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
 function Feature() {
   return (
     <div className='grid md:grid-cols-2 max-w-6xl mx-auto mt-[10%]'>

        <div 
        // style={{                
        //         backgroundImage: 'url(svg/trybg.svg)', 
        //         backgroundSize: 'cover', 
        //         backgroundPosition: 'center',
        //     }} 
            
            className='flex flex-col gap-y-8 mx-6 md:mx-0'>

            <h1 className="text-3xl md:text-5xl font-bold">Features like collaboration, code explainers and more</h1>
            <h3 className='max-w-xl'>Whether you're part of a team or an individual, Glitty helps you supercharge your code seamlessly.</h3>
            <div>
            <div className="flex justify-start gap-x-4">
                    <Link className="h-[40px] md:h-[50px] px-4 md:px-8 border border-primary flex items-center justify-center rounded-full primary-gradient text-white md:text-xl text-sm" href="#">
                        Get started
                    </Link>
                    <Link className="h-[40px] md:h-[50px] px-4 md:px-8 border  flex items-center justify-center rounded-full border-primary text-primary md:text-xl text-sm" href="#">
                        Watch a demo
                    </Link>
                </div>
            </div>
        </div>
        <div className='hidden md:block'>
            <Image src='/svg/bannerbg.svg' className='w-full' alt='test' width={100} height={100}/>
        </div>

     </div>
   )
 }
 
 export default Feature