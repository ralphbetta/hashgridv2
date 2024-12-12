'use client'
import React from 'react'
import DashboardStats from '../components/Stats'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import SignupButton from '@/app/components/buttons/SignupButton'

function Deployment() {
    return (
        <div className=''>
            <DashboardStats />

            <section className='m-10 border rounded-lg altborder alt p-8'>

                <div className='flex flex-col items-start justify-between border-b altborder pb-4 '>
                    <h1 className='text-3xl font-bold mb-2'>Deployement New Script</h1>
                    <p className='text-muted-foreground'>Populate the fields provided to securedly deploy and access your script</p>
                </div>
                <div>

                    <div className="grid items-center gap-1.5 mt-8">
                        <Label htmlFor="domain" className='text-md'>Domain</Label>
                        <Input id='domain' type="domain" placeholder="Enter your domain" className='py-1' />
                    </div>

                </div>
                <div className="grid w-full gap-1.5 mt-8">
                    <Label htmlFor="message-2" className='text-md '>Your Message</Label>
                    <Textarea rows={20} placeholder="Type your message here." id="message-2" className=' resize-none' />
                    <p className="text-sm text-muted-foreground">
                        Your message will be copied to the support team.
                    </p>
                </div>
                <div className='mt-8'>
                    <SignupButton text='Deploy to Blockchain' onClick={()=>{}}/>
                </div>
            </section>
        </div>
    )
}

export default Deployment