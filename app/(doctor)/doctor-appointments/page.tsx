'use client';


import PageWrapper from '@/components/PageWrapper'
import React, { SVGProps } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import routes from '@/lib/routes';


const stats = [
  {
    name: `Today's Appointments`,
    value: 3,
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5013 0.835938V2.5026H11.5013V0.835938H13.168V2.5026H16.5013C16.9616 2.5026 17.3346 2.8757 17.3346 3.33594V16.6693C17.3346 17.1295 16.9616 17.5026 16.5013 17.5026H1.5013C1.04107 17.5026 0.667969 17.1295 0.667969 16.6693V3.33594C0.667969 2.8757 1.04107 2.5026 1.5013 2.5026H4.83464V0.835938H6.5013ZM15.668 9.16927H2.33464V15.8359H15.668V9.16927ZM4.83464 4.16927H2.33464V7.5026H15.668V4.16927H13.168V5.83594H11.5013V4.16927H6.5013V5.83594H4.83464V4.16927Z" fill="#3762E4" />
      </svg>
    ),
    bg: 'bg-[#3762e421]'
  },
  {
    name: 'This Week',
    value: 12,
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.0013 17.3346C4.39893 17.3346 0.667969 13.6036 0.667969 9.0013C0.667969 4.39893 4.39893 0.667969 9.0013 0.667969C13.6036 0.667969 17.3346 4.39893 17.3346 9.0013C17.3346 13.6036 13.6036 17.3346 9.0013 17.3346ZM9.0013 15.668C12.6832 15.668 15.668 12.6832 15.668 9.0013C15.668 5.3194 12.6832 2.33464 9.0013 2.33464C5.3194 2.33464 2.33464 5.3194 2.33464 9.0013C2.33464 12.6832 5.3194 15.668 9.0013 15.668ZM9.83463 9.0013H13.168V10.668H8.16797V4.83464H9.83463V9.0013Z" fill="#34765A" />
      </svg>
    ),
    bg: 'bg-[#34765b25]'
  },
  {
    name: 'Video Calls',
    value: '8',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1654 4.66536L18.5098 1.62429C18.6983 1.49232 18.9581 1.53817 19.09 1.7267C19.139 1.79673 19.1654 1.88015 19.1654 1.96564V12.0318C19.1654 12.2619 18.9788 12.4484 18.7487 12.4484C18.6632 12.4484 18.5798 12.4221 18.5098 12.3731L14.1654 9.33203V12.832C14.1654 13.2923 13.7923 13.6654 13.332 13.6654H1.66536C1.20513 13.20513 0.832031 13.2923 0.832031 12.832V1.16536C0.832031 0.705131 1.20513 0.332031 1.66536 0.332031H13.332C13.7923 0.332031 14.1654 0.705131 14.1654 1.16536V4.66536ZM14.1654 7.29761L17.4987 9.63095V4.36646L14.1654 6.69978V7.29761ZM2.4987 1.9987V11.9987H12.4987V1.9987H2.4987Z" fill="#B337E4" />
      </svg>
    ),
    bg: 'bg-[#b337e423]'
  },
  {
    name: 'In-Person',
    value: 4,
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.332031 18.332C0.332031 14.6501 3.3168 11.6654 6.9987 11.6654C10.6806 11.6654 13.6654 14.6501 13.6654 18.332H11.9987C11.9987 15.5706 9.76011 13.332 6.9987 13.332C4.23727 13.332 1.9987 15.5706 1.9987 18.332H0.332031ZM6.9987 10.832C4.2362 10.832 1.9987 8.59453 1.9987 5.83203C1.9987 3.06953 4.2362 0.832031 6.9987 0.832031C9.7612 0.832031 11.9987 3.06953 11.9987 5.83203C11.9987 8.59453 9.7612 10.832 6.9987 10.832ZM6.9987 9.16536C8.84036 9.16536 10.332 7.6737 10.332 5.83203C10.332 3.99036 8.84036 2.4987 6.9987 2.4987C5.15703 2.4987 3.66536 3.99036 3.66536 5.83203C3.66536 7.6737 5.15703 9.16536 6.9987 9.16536Z" fill="#FFB412" />
      </svg>
    ),
    bg: 'bg-[#f59e4220]'
  },
]

function DoctorAppointments() {
  const router = useRouter();


  return <PageWrapper content={<>
    <section className="w-full flex gap-5 overflow-x-auto">
      {
        stats.map((stat, idx) => {
          return <div key={`stat ${idx}`} className="rounded-xl min-w-[250px] h-[95px] border p-4 flex gap-2">
            <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
              <stat.icon className='size-4' />
            </aside>
            <aside className="flex flex-col">
              <p>{stat.name}</p>
              <h1 className="text-xl font-semibold">{stat.value}</h1>
            </aside>
          </div>
        })
      }
    </section>

    <section className="pb-2 border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
      <div className="flex flex-col">
        <p>Scheduled Appointments</p>
        <small className="text-gray-600">Upcoming appointments requiring your attention</small>
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

    <section className="flex overflow-x-auto">
      <table className='w-full text-left text-sm'>
        <thead>
          <tr className="h-10 bg-gray-100">
            <td>
              <div className="px-3">Patient Name</div>
            </td>
            <td>
              <div className="px-3">Type</div>
            </td>
            <td>
              <div className="px-3">Date &amp; Time</div>
            </td>
            <td>
              <div className="px-3">Appointment Type</div>
            </td>
            <td>
              <div className="px-3">Action</div>
            </td>
          </tr>
        </thead>
        <tbody>
          {
            [1, 2, 3, 4, 5].map((appointment, idx, arr) => {
              return <tr key={`apointment ${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                <td>
                  <div className="p-3">Joshua Odame</div>
                </td>
                <td>
                  <div className="p-3">Prescription review</div>
                </td>
                <td>
                  <div className="p-3">Mon, May 26 10:00 AM</div>
                </td>
                <td>
                  <div className="p-3"><Button className={`border-0 text-primary h-7 rounded ${idx % 2 === 0 ? 'bg-indigo-100 text-indigo-600' : 'bg-primary/10 text-primary'}`}>{idx % 2 === 0 ? 'Video' : 'In-Person'}</Button></div>
                </td>
                <td>
                  <div className="p-3"><Button onClick={() => router.push(routes.doctor.appointment + `/${idx}`)} disabled={idx % 2 === 0} variant={'outline'} className={`border-primary hover:bg-primary hover:text-white text-primary h-7 rounded ${idx % 2 === 0 && 'bg-gray-500 text-white border-gray-500'}`}>Start</Button></div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  </>} />
}

export default DoctorAppointments