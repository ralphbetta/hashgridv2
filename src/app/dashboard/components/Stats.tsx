import React from 'react'
import TotalCard from './TotalCard'
import { Container, Database, Link, Receipt, Wrench } from 'lucide-react'

function DashboardStats() {
  return (
<div>
<section className='flex justify-between items-center m-10'>
    <h1 className='text-3xl font-bold'>Welcome Back!</h1>

    <div className='flex items-center justify-center gap-x-4'>
      <div className=' border-2 altborder px-4 py-2 rounded-md flex items-center gap-x-2'> <Wrench /> <p>Quick Setup</p></div>
      <div className=' border-2 altborder px-4 py-2 rounded-md flex items-center gap-x-2'><Receipt /> <p>Account Billing</p></div>
    </div>
  </section>
  <section className='border altborder p-4 px-8 m-10 rounded-lg'>
    <p className='mb-2 text-muted-foreground font-semibold'>Stats for the month of Dec, 2024</p>
    <div className='grid grid-cols-3 gap-6 '>
      <TotalCard caption='Total Database' count={2} Icon={Database} />
      <TotalCard caption='Latest Deployment' Icon={Link} />
      <TotalCard caption='Total Admins' count={0} Icon={Container} />
    </div>

    <p className='mt-2 text-muted-foreground'>Statistics can take as long as an hour <span className='text-blue-500'>learn more</span>.
    </p>

  </section>
</div>
  )
}

export default DashboardStats