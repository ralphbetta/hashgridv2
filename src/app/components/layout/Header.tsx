'use client'
import Link from 'next/link'
import React from 'react'
import SignupButton from '../buttons/SignupButton'
import Image from 'next/image'

function PublicHeader() {

    const nav = [
        {title: 'About', path: '/about'},
        {title: 'Feature', path: '/feature'},
        {title: 'Blog', path: '/blog'},
        {title: 'Event', path: '/event'},
        {title: 'Pricing', path: '/pricing'},
    ]
  return (
    <div className='flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 right-0 bg-background z-50'>
        <div className='text-2xl md:text-3xl font-semibold md:font-bold flex justify-center items-center gap-x-1'><Image  src='/svg/icon.svg' className='md:w-8 w-6' width={20} height={20} alt='logo' /> Hash<span className='text-blue-500'>Grid</span></div>
        <div className='md:flex gap-x-8 items-center justify-center hidden '>
            {nav.map((element, index)=> <Link className='' key={index} href={element.path}>{element.title}</Link>)}
            <SignupButton onClick={()=>{}}/>
        </div>
    </div>
  )
}

export default PublicHeader