import Image from 'next/image'
import React from 'react'

function OffereSection() {

  const data = [
    { caption: 'Let AI do the work my friend', desc: 'Write a prompt, hit enter, and let AI do the heavy lifting. Having an AI tool built into, allows you to quickly and easily generate the exact code you need for your project.', img: "svg/aicoding.svg" },
    { caption: 'Reduce development time by working with your team', desc: 'Develop faster without being restricted. Work with multiple people on the same project at the same time.', img: "svg/deployment.svg" },
    { caption: 'Publish to staging or production', desc: 'Not yet ready to publish the code to your actual website? Then publish it to staging only using the staging script with Glitty. Your production Javascript file will always be available 👍🏻', img: "svg/deployment.svg" },
    { caption: 'Code Library', desc: 'Save your favorite code solutions for easy reuse. Drag and drop code you have saved into any of your projects.', img: "svg/library.svg" },
  ]
  return (
    <div className='mt-[10%] relative'>

      <h2 className=' text-center text-5xl font-bold offwhite'>Unlike any coding tool <br /> you&apos;ve ever encountered</h2>
      <p className="md:max-w-xl mx-auto text-center text-xl my-12 text-muted-foreground leading-[1.8]"> Actually, we&apos;re not so different from other coding platforms.<br /> But with AI, do you catch our drift? Exactly, that&apos;s the point.</p>


      <div className='grid grid-cols-2 max-w-5xl mx-auto gap-6 mt-[5%] '>
        {...data.map((element, index) => <div key={index} className='plain-card p-6 rounded-3xl' >
          <Image src={element.img} alt='feedback' className='w-full' width={100} height="200" />
          <h2 className='text-2xl mt-4'>{element.caption}</h2>
          <p className=' text-muted-foreground mt-2'>{element.desc}</p>
        </div>)}
      </div>

      <div style={{ backgroundImage: 'url(svg/horizontalbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }} className=' min-h-[30%] w-full absolute  bottom-0 -z-10 left-0 right-0' > </div>


    </div>
  )
}

export default OffereSection