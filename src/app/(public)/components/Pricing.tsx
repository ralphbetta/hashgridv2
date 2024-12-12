import { Check, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Pricing() {

    const free = [
        '2 project setup',
        '10 Decentralized Deployment',
        '1 Collaboration Project Team',
        '0.5 GB Storage',
        '100 computing hours',
        '30 AI Messages (GPT 3.5)',
        'Analytics & Monitoring',
        'All Integrations, APIs, webhooks',
        'Priority support',
        'Postgress Database extension',
        'Individual Account'
    ]

    const premium = [
        '100 project setup',
        'Unlimited Decentralized Deployment',
        'Unlimited Collaboration Project Team',
        '10 GB Storage',
        '300 computing hours',
        'Unlimited AI Messages (GPT 3.5)',
        'Analytics & Monitoring',
        'All Integrations, APIs, webhooks',
        'Priority support',
        'Postgress Database extension',
        'Organization Account'
    ]

    return (
        <div id='pricing' className=' md:mt-[8%] mt-[10%] mx-6 md:mx-0'>
            <h2 className='text-center text-3xl md:text-5xl font-bold mb-6'>Our Pricing Plan</h2>
            <p className="md:max-w-4xl mx-auto text-center md:text-xl mb-12 text-muted-foreground leading-[1.8]"> Actually, we&apos;re not so different from other coding platforms. But with AI, do you catch our drift? Exactly, that&apos;s the point.</p>


            <div className=' max-w-6xl mx-auto grid md:grid-cols-3 gap-4'>

                <div className='flex flex-col items-center gap-y-3  rounded-2xl gradient-card py-8 px-8 border border-1'>
                    <p className=' text-muted-foreground'>Demo Plan</p>
                    <h3 className='text-3xl font-bold'>$0 / Month</h3>
                    <div className=' text-muted-foreground flex items-center justify-center space-x-5'><Users /><p>Start for free</p></div>
                    <hr className=' border-1 w-full border-gray-600' />
                    <div className='flex flex-col gap-y-2 mt-5'>{free.map((element, index) => <div key={index} className='flex space-x-3'><Check className='text-blue-500' /> <p>{element}</p></div>)}</div>
                    <hr className=' border-1 w-full border-gray-600 mt-4' />
                    <p>To kickstart your projects, no credit card required.</p>                  
                    <hr className=' border-1 w-full border-gray-600' />

                    <Link className="h-[50px] w-full mt-5 px-8 border  flex items-center justify-center rounded-full border-primary text-primary text-xl" href="#">
                    Start for free
                    </Link>
                </div>

                <div className='flex flex-col items-center gap-y-3  rounded-2xl gradient-card-blue py-8 px-8 border border-1'>
                    <p className=' text-muted-foreground'>Demo Plan</p>
                    <h3 className='text-3xl font-bold'>$7 / Month</h3>
                    <div className=' text-muted-foreground flex items-center justify-center space-x-5'><Users /><p> Best for startups etc.</p></div>
                    <hr className=' border-1 w-full border-gray-600' />
                    <div className='flex flex-col gap-y-2 mt-5'>{premium.map((element, index) => <div key={index} className='flex space-x-3'><Check className='text-blue-500' /> <p>{element}</p></div>)}</div>
                    <hr className=' border-1 w-full border-gray-600' />
                    <p>The resources, and features you need to launch.</p>
                    <hr className=' border-1 w-full border-gray-600' />
                    <Link className="h-[50px] mt-5 w-full px-8 border border-primary flex items-center justify-center rounded-full primary-gradient text-white text-xl" href="#">
                        Get started
                    </Link>
                </div>


                <div className='flex flex-col items-center gap-y-3  rounded-2xl gradient-card py-8 px-8 border border-1'>
                    <p className=' text-muted-foreground'>Demo Plan</p>
                    <h3 className='text-3xl font-bold'>$12 / Month</h3>
                    <div className=' text-muted-foreground flex items-center justify-center space-x-5'><Users /><p>Start for free</p></div>
                    <hr className=' border-1 w-full border-gray-600' />
                    <div className='flex flex-col gap-y-2 mt-5'>{free.map((element, index) => <div key={index} className='flex space-x-3'><Check className='text-blue-500' /> <p>{element}</p></div>)}</div>
                    <hr className=' border-1 w-full border-gray-600 nt-4' />
                    <p>To kickstart your projects, no credit card required.</p>              
                    <hr className=' border-1 w-full border-gray-600' />
                    <Link className="h-[50px] w-full mt-5 px-8 border  flex items-center justify-center rounded-full border-primary text-primary text-xl" href="#">
                    Get started
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default Pricing