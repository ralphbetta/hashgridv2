import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {


    const nav = [
        { title: 'About', path: '/about' },
        { title: 'Feature', path: '/feature' },
        { title: 'Blog', path: '/blog' },
        { title: 'Event', path: '/event' },
        { title: 'Pricing', path: '/pricing' },
    ]

    const socials = [
        { title: 'Discord', path: 'https://discord.com' },
        { title: 'Github', path: 'https://github.com' },
        { title: 'X.com', path: 'https://x.com' },
        { title: 'Linkedin', path: 'https://linkedin.com' },
        { title: 'Youtube', path: 'https://youtube.com' },
    ]

    const docs = [
        { title: 'Terms & Condition', path: '/termsandcondition' },
        { title: 'Privacy Policy', path: '/privacypolicy' },
    ]

    return (
     <footer className='border-t mt-[10%] pt-8 w-full'>
           <div className=' grid grid-cols-6   mx-8 mb-5'>
            <div className='flex flex-col justify-between items-start h-full col-span-3'>

            <div className='text-3xl font-bold flex justify-center items-center gap-x-1'><Image  src='/svg/icon.svg' className='w-8' width={20} height={20} alt='logo' /> Hash<span className='text-blue-500'>Grid</span></div>


                <div className='flex flex-col gap-y-4'>
                    <div className='text-xl flex items-center gap-x-2'><div className='bg-green-400 rounded-full w-2 h-2'></div>  <p>All System Operational</p></div>
                    <p className='text-sm'>Copyright Ⓒ 2023 – 2024 Hashgrid, Inc.</p>
                </div>


            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='text-xl font-bold'>Company</h1>
                {nav.map((element, index) => <Link href={element.path} key={index} className=' text-gray-500'>{element.title}</Link>)}
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='text-xl font-bold'>Social</h1>
                {socials.map((element, index) => <Link href={element.path} key={index} className=' text-gray-500'>{element.title}</Link>)}
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='text-xl font-bold'>Docs</h1>
                {docs.map((element, index) => <Link href={element.path} key={index} className=' text-gray-500'>{element.title}</Link>)}
            </div>

        </div>
     </footer>
    )
}

export default Footer