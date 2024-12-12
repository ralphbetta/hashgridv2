'use client'
import React from 'react'
import DashboardStats from '../components/Stats'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import SignupButton from '@/app/components/buttons/SignupButton'

function AiWebsite() {
    return (
        <div className=''>
            <DashboardStats />

            <section className='m-10 border rounded-lg altborder alt p-8'>

                <div className='flex flex-col items-start justify-between border-b altborder pb-4 '>
                    <h1 className='text-3xl font-bold mb-2'>AI Website Generator</h1>
                    <p className='text-muted-foreground'>Describe the website you want to generate</p>
                </div>
                <div>

                </div>
                <div className="grid w-full gap-1.5 mt-4">
                    <Textarea rows={5} placeholder="Type your message here." id="message-2" className=' resize-none' />
                </div>
                <div className='mt-8'>
                    <SignupButton text='Deploy to Blockchain' onClick={()=>{}}/>
                </div>
            </section>
        </div>
    )
}

export default AiWebsite