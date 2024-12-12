"use client";
import React from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import Link from "next/link";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="mx-auto mt-16 pt-10 p-4 relative">
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


            <div className='absolute md:top-[13%] top-[0%] md:left-[10%] left-[5%] bg-purple-700 px-4 py-1 rounded-s-full rounded-t-full'>Hah....</div>

<div className='absolute md:top-[1%] top-[42%] md:right-[18%] right-[5%] bg-green-700 px-4 py-1 rounded-t-full rounded-e-full'>Check this out...</div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
