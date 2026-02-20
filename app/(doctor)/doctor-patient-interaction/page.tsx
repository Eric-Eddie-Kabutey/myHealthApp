'use client';

import PageWrapper from '@/components/PageWrapper'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import routes from '@/lib/routes';
import { useRouter } from 'next/navigation';


function DoctorPatientInteraction() {
  const router = useRouter()
  return <PageWrapper content={<>
    <section className="pb-2 border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
      <div className="flex flex-col">
        <p>Patient Records</p>
        <small className="text-gray-600">See all your patients and their records.</small>
      </div>
      <aside className="flex gap-3">
        <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[200px]">
          <Search />
          <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
              <svg className='size-4' viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z" fill="#525866" />
              </svg>
              Filter
              <ChevronDown className='size-5' />
            </Button>
          </PopoverTrigger>
          <PopoverContent side={'bottom'} className="w-[350px] text-[14px] flex flex-col gap-3 mr-5 rounded-xl px-6">
            <p>Filter by</p>
            <div className="w-full flex flex-col gap-1">
              <p className="text-sm">Type</p>
              <select className="w-full h-10 rounded-lg border px-3">
                <option value="">Select Type</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-sm">Date Range</p>
              <div className="w-full h-10 flex items-center gap-2 justify-between border rounded-lg p-3">
                <input type="date" name="" id="" />
                <b>--</b>
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-sm">Doctor / Provider</p>
              <select className="w-full h-10 rounded-lg border px-3">
                <option value="">Select Doctor</option>
              </select>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t">
              <Button variant={'outline'}>Reset</Button>
              <Button>Apply</Button>
            </div>
          </PopoverContent>
        </Popover>
      </aside>
    </section>

    <section className="w-full flex overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className='h-10 bg-gray-100'>
            <td><div className="px-3">Patient Name</div></td>
            <td><div className="px-3">Age</div></td>
            <td><div className="px-3">Last Visit</div></td>
            <td><div className="px-3">Allergies</div></td>
            <td><div className="px-3">Chronic Conditions</div></td>
            <td><div className="px-3">Action</div></td>
          </tr>
        </thead>
        <tbody>
          {
            [1, 2, 3, 4, 5].map((inter, idx, arr) => {
              return <tr key={`inter-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                <td><div className="p-3">Joshua Odame</div></td>
                <td><div className="p-3">29</div></td>
                <td><div className="p-3">2024-11-15</div></td>
                <td><div className="p-3 max-w-[300px] flex gap-2 flex-wrap">
                  {
                    ['Penicillin', 'Shelfish', 'Peanut'].map((allergy, idx) => <div key={`inter-allergy-${idx}`} className='h-7 text-xs px-4 flex items-center rounded bg-red-50 text-red-500'>{allergy}</div>)
                  }
                </div></td>
                <td><div className="p-3 max-w-[300px] flex gap-2 flex-wrap">
                  {
                    ['asthma', 'diabetes'].map((allergy, idx) => <div key={`inter-allergy-${idx}`} className='h-7 text-xs px-4 flex items-center rounded bg-orange-50 text-orange-500'>{allergy}</div>)
                  }
                </div></td>
                <td>
                  <div className="p-3"><Button onClick={() => router.push(routes.doctor.patientInteraction + `/${idx}`)} variant={'outline'} className='h-9 text-primary border-primary'>View Full Record</Button></div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  </>} />
}

export default DoctorPatientInteraction