'use client'
import Link from 'next/link'
import React from 'react'
import SignupButton from '../buttons/SignupButton'
import Image from 'next/image'
import { CircleUserRound, BellDot, LogOut } from 'lucide-react'

function DashboardHeader() {

  return (
    <div className=" fixed top-0 left-0 right-0 alt w-full border-b h-[64px] flex items-center justify-end p-8">
      <div className="flex gap-x-5">
        <button className="flex items-center justify-center space-x-2 font-semibold bg-muted  px-3 h-[44px] rounded-md">
          <p>$10.00</p>
        </button>
        <button className="flex items-center justify-center space-x-2 font-semibold border alt-border  size-[44px] rounded-md hover:bg-gray-700">
          <CircleUserRound className="w-4" />
        </button>
        <button className="flex items-center justify-center space-x-2 font-semibold border alt-border  size-[44px] rounded-md hover:bg-gray-700">
          <BellDot className="w-4" />
        </button>
        <button className="flex items-center justify-center space-x-2 font-semibold border alt-border  size-[44px] rounded-md hover:bg-gray-700">
          <LogOut className="w-4 text-red-600" />
        </button>
      </div>
    </div>
  )
}

export default DashboardHeader