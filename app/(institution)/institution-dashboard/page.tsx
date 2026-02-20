'use client';

import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import WelcomePrompt from '@/components/WelcomePrompt';
import React, { SVGProps } from 'react'

const stats = [
    {
        name: 'Total Requests',
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16667 0.5V13.8333H15.5V15.5H0.5V0.5H2.16667ZM14.9107 3.24408L16.0892 4.42259L11.3333 9.1785L8.83333 6.67917L5.25593 10.2559L4.07741 9.07742L8.83333 4.32149L11.3333 6.82083L14.9107 3.24408Z" fill="#3762E4"/>
            </svg>            
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Accepted',
        value: 1,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33464 9.00033C2.33464 5.31843 5.3194 2.33366 9.0013 2.33366C12.6832 2.33366 15.668 5.31843 15.668 9.00033C15.668 12.6822 12.6832 15.667 9.0013 15.667C5.3194 15.667 2.33464 12.6822 2.33464 9.00033ZM9.0013 0.666992C4.39893 0.666992 0.667969 4.39795 0.667969 9.00033C0.667969 13.6027 4.39893 17.3337 9.0013 17.3337C13.6036 17.3337 17.3346 13.6027 17.3346 9.00033C17.3346 4.39795 13.6036 0.666992 9.0013 0.666992ZM13.5489 6.88125L12.3704 5.70273L8.16797 9.90516L5.84056 7.57774L4.66204 8.75624L8.16797 12.2622L13.5489 6.88125Z" fill="#34765A"/>
            </svg>
        ),
        bg: 'bg-[#34765b25]'
    },
    {
        name: 'Rejected',
        value: '1',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.0013 17.3337C4.39893 17.3337 0.667969 13.6027 0.667969 9.00033C0.667969 4.39795 4.39893 0.666992 9.0013 0.666992C13.6036 0.666992 17.3346 4.39795 17.3346 9.00033C17.3346 13.6027 13.6036 17.3337 9.0013 17.3337ZM9.0013 15.667C12.6832 15.667 15.668 12.6822 15.668 9.00033C15.668 5.31843 12.6832 2.33366 9.0013 2.33366C5.3194 2.33366 2.33464 5.31843 2.33464 9.00033C2.33464 12.6822 5.3194 15.667 9.0013 15.667ZM9.0013 7.82183L11.3583 5.46479L12.5368 6.6433L10.1798 9.00033L12.5368 11.3573L11.3583 12.5358L9.0013 10.1788L6.64428 12.5358L5.46577 11.3573L7.8228 9.00033L5.46577 6.6433L6.64428 5.46479L9.0013 7.82183Z" fill="#E53E3E"/>
            </svg>
        ),
        bg: 'bg-[#e53e3e1c]'
    },
    {
        name: 'Avg Response',
        value: '4.8min',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.0013 17.3337C4.39893 17.3337 0.667969 13.6027 0.667969 9.00033C0.667969 4.39795 4.39893 0.666992 9.0013 0.666992C13.6036 0.666992 17.3346 4.39795 17.3346 9.00033C17.3346 13.6027 13.6036 17.3337 9.0013 17.3337ZM9.0013 15.667C12.6832 15.667 15.668 12.6822 15.668 9.00033C15.668 5.31843 12.6832 2.33366 9.0013 2.33366C5.3194 2.33366 2.33464 5.31843 2.33464 9.00033C2.33464 12.6822 5.3194 15.667 9.0013 15.667ZM9.83463 9.00033H13.168V10.667H8.16797V4.83366H9.83463V9.00033Z" fill="#FFB412"/>
            </svg>
        ),
        bg: 'bg-[#f59e4220]'
    },
]

function InstitutionDashboard() {
    useRoleGuard('institution')
    const [showWelcome, setShowWelcome] = React.useState(true)
    return <PageWrapper content={<>
        <WelcomePrompt open={showWelcome} close={() => setShowWelcome(false)} />
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx)=>{
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[250px] h-[95px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4'/>
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                        </aside>
                    </div>
                })
            }
        </section>
        <section className="w-full h-full flex-1 border rounded-2xl p-4">
            <div className="w-full border-b pb-4 flex items-center justify-between">
                <p>Recent Emergency Requests</p>
                <Button variant={'outline'} className='h-9'>View All</Button>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr>
                        <td/><td/><td/><td/><td/>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6].map((req, idx, arr)=>{
                            return <tr key={`req-${idx}`} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3 flex items-center gap-3">
                                        <span className="size-10 rounded-full border flex items-center justify-center bg-gray-100">JD</span>
                                        Joshua Danso
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">Heart Attack</div>
                                </td>
                                <td>
                                    <div className="p-3">2.3 km</div>
                                </td>
                                <td>
                                    <div className="p-3"><div className="h-7 bg-orange-100 text-orange-600 flex items-center w-fit rounded px-4">High</div></div>
                                </td>
                                <td>
                                    <div className="p-3 flex gap-3">
                                        {
                                            idx === 0 ? <>
                                                <Button variant={'outline'} className='w-fit h-7 px-4 rounded border-primary text-primary'>Accept</Button>
                                                <Button variant={'outline'} className='w-fit h-7 px-4 rounded border-danger text-danger'>Reject</Button>
                                            </> : 
                                            <div className="w-fit h-7 bg-primary/10 text-primary justify-center flex items-center rounded px-4">High</div>
                                        }
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </>}/>
}

export default InstitutionDashboard