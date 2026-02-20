'use client';

import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import WelcomePrompt from '@/components/WelcomePrompt';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { SVGProps } from 'react'

const stats = [
    {
        name: 'Active Doctors',
        value: '142',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.04015 6.22443C7.64655 6.22443 8.95322 4.51952 8.95322 2.91328C8.95322 1.30704 7.64655 0 6.04015 0C4.43375 0 3.12695 1.30704 3.12695 2.91328C3.12722 4.51939 4.43389 6.22443 6.04015 6.22443Z" fill="#3762E4"/>
            <path d="M8.51988 6.31349C8.97241 6.60748 9.28414 7.09881 9.33254 7.66506C9.71934 7.75173 10.0096 8.09746 10.0096 8.51012C10.0096 8.98798 9.62081 9.37677 9.14294 9.37677C8.66508 9.37677 8.27628 8.98798 8.27628 8.51012C8.27628 8.10506 8.55614 7.76493 8.93228 7.6704C8.87654 7.14641 8.52948 6.70921 8.05668 6.52228L6.09828 8.35732L4.11401 6.49788C3.57614 6.67948 3.18521 7.18014 3.16628 7.774C3.24348 7.81879 3.30588 7.88813 3.34414 7.97213C3.62908 8.10652 3.88054 8.38945 4.07321 8.79225C4.10548 8.86011 4.10961 8.93664 4.08601 9.00651C4.20148 9.3037 4.26748 9.6285 4.26748 9.90129C4.26748 10.2836 4.26748 10.645 3.85081 10.7378C3.80561 10.7754 3.74921 10.7959 3.68988 10.7959H3.41134C3.27174 10.7959 3.15814 10.6822 3.15814 10.5427L3.15841 10.5329C3.16374 10.3984 3.27641 10.2896 3.41134 10.2896H3.68974C3.71828 10.2896 3.74614 10.2944 3.77294 10.3038C3.78988 10.299 3.79521 10.295 3.79521 10.295C3.82614 10.2401 3.82614 10.0113 3.82614 9.90143C3.82614 9.67983 3.77068 9.41224 3.67348 9.16357C3.62294 9.13491 3.58228 9.09157 3.55721 9.03917C3.38828 8.68571 3.15881 8.45745 2.97228 8.45745C2.78148 8.45745 2.54054 8.70425 2.37254 9.07131C2.34508 9.13104 2.29694 9.17984 2.23761 9.2089C2.14974 9.4469 2.10148 9.69183 2.10148 9.90129C2.10148 9.99356 2.10148 10.2385 2.13681 10.296C2.13721 10.296 2.14508 10.3008 2.16721 10.3062C2.19601 10.2952 2.22694 10.2894 2.25788 10.2894H2.53681C2.66694 10.2894 2.77534 10.3885 2.78854 10.517L2.79001 10.5327C2.79001 10.6822 2.67641 10.7959 2.53694 10.7959H2.25801C2.20268 10.7959 2.14921 10.7775 2.10521 10.7438C1.94588 10.7138 1.83361 10.6435 1.76254 10.5291C1.67641 10.3909 1.66068 10.2093 1.66068 9.90129C1.66068 9.63103 1.72308 9.31997 1.83641 9.02277C1.81974 8.95918 1.82534 8.89278 1.85294 8.83291C1.97108 8.57478 2.12121 8.35372 2.28708 8.19386C2.37828 8.10599 2.47628 8.03533 2.57881 7.98373C2.61748 7.89359 2.68441 7.81973 2.76641 7.77293C2.78188 7.15561 3.10988 6.61575 3.59868 6.30469C1.88041 6.70295 0.599609 8.24132 0.599609 10.0804C0.599609 11.1401 3.03561 11.9994 6.04068 11.9994C9.04561 11.9994 11.4817 11.1401 11.4817 10.0804C11.4817 8.25465 10.2193 6.72495 8.51988 6.31349Z" fill="#3762E4"/>
            <path d="M9.14219 8.90936C9.3631 8.90936 9.54219 8.73028 9.54219 8.50937C9.54219 8.28846 9.3631 8.10938 9.14219 8.10938C8.92127 8.10938 8.74219 8.28846 8.74219 8.50937C8.74219 8.73028 8.92127 8.90936 9.14219 8.90936Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]',
        state: 'increase',
        stateChange: '+12 this month'
    },
    {
        name: 'Active Nurses',
        value: '287',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.47855 6.782C6.8077 7.31095 7.7863 8.53195 7.96935 10H0.03125C0.21431 8.53195 1.19294 7.31095 2.52209 6.782L4.0003 9L5.47855 6.782ZM7.0003 0V3C7.0003 4.65685 5.65715 6 4.0003 6C2.34345 6 1.0003 4.65685 1.0003 3V0H7.0003ZM6.0003 3H2.00031C2.00031 4.10455 2.89573 5 4.0003 5C5.1049 5 6.0003 4.10455 6.0003 3Z" fill="#34765A"/>
            </svg>
        ),
        bg: 'bg-[#34765b24]',
        state: 'increase',
        stateChange: '+8 this month'
    },
    {
        name: 'Active Patients',
        value: '892',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.8125 9.97313C0.8125 7.97016 2.43621 6.34646 4.43917 6.34646C6.44213 6.34646 8.06583 7.97016 8.06583 9.97313H0.8125ZM4.43917 5.89313C2.93637 5.89313 1.71917 4.67593 1.71917 3.17313C1.71917 1.67033 2.93637 0.453125 4.43917 0.453125C5.94197 0.453125 7.15917 1.67033 7.15917 3.17313C7.15917 4.67593 5.94197 5.89313 4.43917 5.89313Z" fill="black"/>
            </svg>
        ),
        bg: 'bg-[#0000001a]',
        state: 'decrease',
        stateChange: '-2 from last month'
    },
    {
        name: 'Pending Reviews',
        value: '28',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10C2.23857 10 0 7.7614 0 5C0 2.23857 2.23857 0 5 0C7.7614 0 10 2.23857 10 5C10 7.7614 7.7614 10 5 10ZM5.5 5V2.5H4.5V6H7.5V5H5.5Z" fill="#FFB412"/>
            </svg>
        ),
        bg: 'bg-[#ffb41228]',
        state: 'decrease',
        stateChange: '-2 from last month'
    },
    {
        name: 'Critical Cases',
        value: '12',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2071 1.5H9.5C9.77615 1.5 10 1.72386 10 2V9C10 9.27615 9.77615 9.5 9.5 9.5H0.5C0.22386 9.5 0 9.27615 0 9V1C0 0.72386 0.22386 0.5 0.5 0.5H4.2071L5.2071 1.5ZM4.5 3.5V6H5.5V3.5H4.5ZM4.5 6.5V7.5H5.5V6.5H4.5Z" fill="#E53E3E"/>
            </svg>
            
        ),
        bg: 'bg-[#e53e3e25]',
        state: 'increase',
        stateChange: '+12 this month'
    },
    {
        name: 'Emergency Flights',
        value: '3',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.94977 3.58398C10.047 3.94674 9.83172 4.31961 9.46896 4.4168L2.36677 6.3198C2.16584 6.37366 1.95405 6.28385 1.85308 6.10198L0.664062 3.96011L1.32089 3.78413L2.43962 4.89235L4.74949 4.27341L2.70472 1.06669L3.5805 0.832031L6.73178 3.74224L9.11695 3.10315C9.47971 3.00594 9.85258 3.22122 9.94977 3.58398ZM1.81295 7.6133H9.06627V8.51997H1.81295V7.6133Z" fill="#B337E4"/>
            </svg>
        ),
        bg: 'bg-[#b337e433]',
        state: 'increase',
        stateChange: '+12 this month'
    }
];


function OfficerDashboard() {
    useRoleGuard('officer');
    const [showWelcome, setShowWelcome] = React.useState(true);
    
    return <PageWrapper content={<>
        <WelcomePrompt open={showWelcome} close={() => setShowWelcome(false)} />
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx)=>{
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[200px] h-[150px] border p-4 flex flex-col gap-2">
                        <aside className={`size-10 min-h-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4'/>
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                            <span className={`flex items-center text-xs mt-2 ${stat.state === 'increase' ? 'text-emerald-600':'text-red-500'}`}>
                                {stat.stateChange}
                                {stat.state === 'increase' ? <ArrowUp className='size-4 rotate-45'/>:<ArrowDown className='size-4 rotate-45'/>}
                            </span>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="w-full flex gap-5 h-[400px]">
            <aside className="w-full flex flex-col border rounded-xl p-4 pt-0 gap-2 overflow-y-auto">
                <div className="w-full flex items-center justify-between py-3 border-b bg-white sticky top-0">
                    <p>Critical Patient Cases</p>
                    <Button variant={'outline'} className='rounded h-8'>View All</Button>
                </div>
                <section className="w-full flex flex-col overflow-x-auto">
                    {
                        [1,2,3,4,5,6,7,8].map((pat, idx)=>{
                            return <div key={`pat-${idx}`} className="w-full flex items-center justify-between border-b py-2 text-sm">
                                <aside className="flex items-center gap-2">
                                    <div className="size-10 min-w-10 border rounded-full flex items-center justify-center bg-gray-100">JD</div>
                                    <div className="flex flex-col w-[300px]">
                                        <p>John Doe</p>
                                        <p className="text-gray-500">Cardiac Arrest • Attending: Dr. Chen</p>
                                    </div>
                                    <p className="text-gray-500 ml-10">10 min ago</p>
                                </aside>
                                <aside className="flex gap-4">
                                    <Button variant={'outline'} className='h-9 rounded'>Review</Button>
                                    <Button variant={'outline'} className='h-9 rounded border-primary text-primary'>Contact</Button>
                                </aside>
                            </div>
                        })
                    }
                </section>
            </aside>
            <aside className="min-w-[400px] flex flex-col border rounded-xl p-4 pt-0 gap-2">
                <div className="w-full flex items-center justify-between py-3 border-b">
                    <p>Staff Performance Overview</p>
                    <Button variant={'outline'} className='rounded h-8'>View All</Button>
                </div>
                <div className="size-full flex items-center justify-evenly">
                    <aside className="flex flex-col items-center text-center gap-3">
                        <img src={'https://randomuser.me/api/portraits/men/32.jpg'} alt="" className="size-14 rounded-full object-cover border border-primary" />
                        <div className="flex flex-col">
                            <small className='text-gray-600'>Top Performer</small>
                            <p className='text-sm'>Dr. Rodriguez</p>
                            <small className='text-emerald-600'>98% rating</small>
                        </div>
                    </aside>
                    <aside className="flex flex-col items-center text-center gap-3">
                        <img src={'https://randomuser.me/api/portraits/women/32.jpg'} alt="" className="size-14 rounded-full object-cover border border-primary" />
                        <div className="flex flex-col">
                            <small className='text-gray-600'>Needs Review</small>
                            <p className='text-sm'>Dr. Rodriguez</p>
                            <small className='text-orange-600'>72% rating</small>
                        </div>
                    </aside>
                    <aside className="flex flex-col items-center text-center gap-3">
                        <div className="relative flex items-center">
                            <img src={'https://randomuser.me/api/portraits/men/32.jpg'} alt="" className="size-14 rounded-full object-cover border border-primary" />
                            <img src={'https://randomuser.me/api/portraits/men/50.jpg'} alt="" className="absolute left-3 size-14 rounded-full object-cover border border-primary" />
                            <div className="absolute left-6 size-14 flex items-center justify-center rounded-full bg-primary text-white border border-primary">+3</div>
                        </div>
                        <div className="flex flex-col">
                            <small className='text-gray-600'>New Hires</small>
                            <p className='text-sm'>3 Doctors</p>
                            <small className='text-indigo-600'>2 nurses</small>
                        </div>
                    </aside>
                </div>
            </aside>
        </section>

        <section className="w-full flex flex-col border rounded-xl p-4 pt-0 gap-2 overflow-y-auto">
            <div className="w-full flex items-center justify-between py-3 border-b bg-white sticky top-0">
                <p>Priority Alerts</p>
                <Button variant={'outline'} className='rounded h-8'>View All</Button>
            </div>
            <div className="w-full flex flex-col">
                {
                    [1,2,3].map((alert, idx, arr)=>{
                        const colors = ['bg-red-700','bg-orange-600','bg-indigo-600'];
                        return <div key={`o-${idx}`} className={`w-full flex items-center justify-between h-16 pl-5 relative ${idx !== arr.length-1 && 'border-b'}`}>
                            <div className={`absolute left-0 h-full w-2 ${colors[idx]}`}/>
                            <aside className="flex flex-col">
                                <p>{
                                    idx === 0 ? 'Emergency Case':
                                    idx === 1 ? 'Prescription Review':
                                    idx === 2 ? 'Medical Flight':null
                                }</p>
                                <small className="text-gray-500">{
                                    idx === 0 ? 'Patient ID #P-4892 requires immediate attention - severe trauma case':
                                    idx === 1 ? 'Dr. Chen prescribed restricted medication - requires CMO approval':
                                    idx === 2 ? 'Request for emergency medical transport clearance - Patient ID #P-6721':null
                                }</small>
                            </aside>
                            <p>10 Min ago</p>
                        </div>
                    })
                }
            </div>
        </section>
    </>}/>
}

export default OfficerDashboard