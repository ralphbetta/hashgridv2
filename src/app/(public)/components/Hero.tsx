
import Link from 'next/link'
import React from 'react'

function HeroSection() {
    return (
        <div className="py-14 relative md:mt-[5%] mt-[8%]">
            {/* Overlay for transparency */}
            <div className="absolute inset-0 -z-10 w-[50%] mx-auto "  style={{                
                backgroundImage: 'url(svg/carouselbg.svg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}>
               
            </div>

            {/* Setup an overlay */}
            <div className="absolute inset-0 bg-background/75 -z-10 rounded-full"></div> 

            {/* Content */}
            <div className="relative -z-10 mt-10 mx-6 md:mx-0 ">
                <h1 className="text-[30px] md:text-6xl font-black max-w-5xl leading-[1.2] text-center mx-auto -z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                    Coding fascinates us. <br/> However, imagine there also being an AI to assist with your coding?
                </h1>
                <p className="max-w-4xl mx-auto text-center md:text-xl my-12 text-muted-foreground leading-[1.8]">
                    Transform your code into no-code while ensuring it&apos;s clean-code, making it comprehensible to others. Sounds straightforward, doesn&apos;t it? Meet Glitty, the AI-Driven Coding Platform.
                </p>

                <div className="flex items-center justify-center gap-x-4">
                    <Link className="h-[40px] md:h-[50px] px-4 md:px-8 border border-primary flex items-center justify-center rounded-full primary-gradient text-white md:text-xl text-sm" href="#">
                        Deploy for free
                    </Link>
                    <Link className="h-[40px] md:h-[50px] px-4 md:px-8 border  flex items-center justify-center rounded-full border-primary text-primary md:text-xl text-sm" href="#">
                        Watch a demo
                    </Link>
                </div>
            </div>


            <div className='absolute md:top-[20%] top-[8%] md:left-[20%] left-[5%] bg-purple-700 px-4 py-1 rounded-s-full rounded-t-full'>Hah....</div>

            <div className='absolute md:top-[12%] top-[46%] md:right-[18%] right-[5%] bg-green-700 px-4 py-1 rounded-t-full rounded-e-full'>Check this out...</div>

        </div>
    )
}

export default HeroSection
