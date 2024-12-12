import { Container, Database, Link, Receipt, Server, Wrench } from 'lucide-react'
import React from 'react'
import TotalCard from './components/TotalCard'
import DashboardStats from './components/Stats'

function Dashboard() {
  return (
    <div>

      <DashboardStats />

      <section className='m-10 border rounded-lg altborder alt'>

        <div className='flex items-center justify-between border-b altborder'>
          <div className='px-8'>
            <h1 className='text-3xl font-bold mb-2'>Deployement Activity Overview</h1>
            <p className='text-muted-foreground'>Trends across desktop and mobile platforms over the past quarter</p>
          </div>
          <div className='flex'>
            <div className='border-x altborder px-10 py-4'>
              <p>Desktop</p>
              <h1 className='text-7xl font-semibold'>0</h1>
            </div>
            <div className='px-10 py-4'>
              <p>Mobile</p>
              <h1 className='text-7xl font-semibold'>0</h1>
            </div>
          </div>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Dashboard