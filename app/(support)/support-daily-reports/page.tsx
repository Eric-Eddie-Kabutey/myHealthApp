'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { SVGProps, useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Filter, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useMain from '@/app/hooks/useMain';
import routes from '@/lib/routes';
import ResolvedTickets from './Includes/ResolvedTickets';
import UnresolvedTickets from './Includes/UnresolvedTickets';
import LogSummary from './Includes/LogSummary';

const stats = [
    {
        name: 'Total Feedback',
        value: 30,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.80365 12.1667H15.668V2.16667H2.33464V13.3209L3.80365 12.1667ZM4.38009 13.8333L0.667969 16.75V1.33333C0.667969 0.8731 1.04107 0.5 1.5013 0.5H16.5013C16.9616 0.5 17.3346 0.8731 17.3346 1.33333V13C17.3346 13.4602 16.9616 13.8333 16.5013 13.8333H4.38009Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Average Rating',
        value: 142,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99887 15.218L4.121 18.5081L5.43377 11.9012L0.488281 7.3278L7.17748 6.53469L9.99887 0.417969L12.8202 6.53469L19.5094 7.3278L14.564 11.9012L15.8767 18.5081L9.99887 15.218Z" fill="#FFB412"/>
            </svg>
        ),
        bg: 'bg-[#ffb41223]'
    },
    {
        name: 'Low Ratings',
        value: '3.50',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.0013 17.3327C4.39893 17.3327 0.667969 13.6017 0.667969 8.99935C0.667969 4.39697 4.39893 0.666016 9.0013 0.666016C13.6036 0.666016 17.3346 4.39697 17.3346 8.99935C17.3346 13.6017 13.6036 17.3327 9.0013 17.3327ZM9.0013 15.666C12.6832 15.666 15.668 12.6813 15.668 8.99935C15.668 5.31745 12.6832 2.33268 9.0013 2.33268C5.3194 2.33268 2.33464 5.31745 2.33464 8.99935C2.33464 12.6813 5.3194 15.666 9.0013 15.666ZM8.16797 11.4993H9.83463V13.166H8.16797V11.4993ZM8.16797 4.83268H9.83463V9.83268H8.16797V4.83268Z" fill="#E53E3E"/>
            </svg>
        ),
        bg: 'bg-[#e4373722]'
    },
    {
        name: 'Follow-ups Needed',
        value: 1,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.80463 6.90175C6.585 8.274 7.726 9.415 9.09825 10.1953L9.83533 9.16342C10.0804 8.82042 10.543 8.71442 10.913 8.9165C12.0853 9.55692 13.3809 9.94608 14.7324 10.0531C15.1658 10.0874 15.5 10.4491 15.5 10.8838V14.6028C15.5 15.0301 15.1768 15.3881 14.7518 15.4318C14.3102 15.4772 13.8647 15.5 13.4167 15.5C6.28299 15.5 0.5 9.717 0.5 2.58333C0.5 2.13522 0.52285 1.68976 0.568242 1.24813C0.611917 0.823125 0.96995 0.5 1.39721 0.5H5.11618C5.55092 0.5 5.91261 0.8342 5.94692 1.26757C6.05389 2.61907 6.44308 3.9147 7.0835 5.08703C7.28558 5.457 7.17958 5.91962 6.83658 6.16464L5.80463 6.90175ZM3.70354 6.35433L5.28683 5.22341C4.83789 4.25428 4.53023 3.22652 4.37273 2.16667H2.17422C2.16919 2.30527 2.16667 2.44417 2.16667 2.58333C2.16667 8.7965 7.2035 13.8333 13.4167 13.8333C13.5558 13.8333 13.6947 13.8308 13.8333 13.8257V11.6272C12.7735 11.4697 11.7457 11.1621 10.7766 10.7132L9.64567 12.2965C9.18817 12.1187 8.74633 11.9096 8.32283 11.6717L8.27442 11.6442C6.64142 10.7156 5.28445 9.35858 4.35583 7.72558L4.32828 7.67717C4.09041 7.25367 3.88128 6.81183 3.70354 6.35433Z" fill="#4BA254"/>
            </svg>
        ),
        bg: 'bg-[#69f5421f]'
    },
]

type TabType = 'Resolved Tickets'|'Unresolved Tickets'|'Log Summary'
const tabs = ['Resolved Tickets', 'Unresolved Tickets', 'Log Summary']

function SupportDailyReports() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Resolved Tickets';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);


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

        <section className="border-b flex md:flex-row flex-col items-start md:items-end justify-between gap-2">
            <div className="flex">
                {
                    tabs.map((tab, idx) => {
                        return <button onClick={() => router.push(routes.customerSupport.dailyReports + `?tab=${tab}`)} key={`tab-${idx}`} className={`px-4 pb-3 ${tab === activeTab && 'border-b-2 border-primary '}`}>{tab}</button>
                    })
                }
            </div>
            <div className="flex gap-3 py-2">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded'>
                            <Filter className='size-4' />
                            Filter
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
            </div>
        </section>

        {
            tab === 'Resolved Tickets' ? <ResolvedTickets/> :
            tab === 'Unresolved Tickets' ? <UnresolvedTickets/> :
            tab === 'Log Summary' ? <LogSummary/> : null
        }
    </>} />
}

export default SupportDailyReports