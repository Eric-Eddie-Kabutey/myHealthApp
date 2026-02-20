'use client';

import GoogleCharts from '@/components/GoogleCharts';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ArrowUp, File, FileLineChart, Pill, Settings, User } from 'lucide-react';
import React, { SVGProps } from 'react'

const stats = [
    {
        name: 'Total Users',
        value: '4,892',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9974 8.16699C11.2986 8.16699 13.1641 10.0325 13.1641 12.3337V17.3337H11.4974V12.3337C11.4974 11.0022 10.4566 9.91391 9.14431 9.83791L8.9974 9.83366C7.66598 9.83366 6.57768 10.8744 6.50164 12.1867L6.4974 12.3337V17.3337H4.83073V12.3337C4.83073 10.0325 6.69621 8.16699 8.9974 8.16699ZM3.58073 10.667C3.8131 10.667 4.03914 10.6942 4.25581 10.7455C4.11575 11.162 4.02967 11.602 4.00486 12.0581L3.9974 12.3337L3.99798 12.405C3.9037 12.3717 3.80424 12.3492 3.70111 12.3394L3.58073 12.3337C2.93098 12.3337 2.39702 12.8294 2.33645 13.4632L2.33073 13.5837V17.3337H0.664062V13.5837C0.664062 11.9728 1.9699 10.667 3.58073 10.667ZM14.4141 10.667C16.0249 10.667 17.3307 11.9728 17.3307 13.5837V17.3337H15.6641V13.5837C15.6641 12.9339 15.1683 12.4 14.5345 12.3394L14.4141 12.3337C14.2681 12.3337 14.1279 12.3587 13.9976 12.4047L13.9974 12.3337C13.9974 11.7789 13.9071 11.2453 13.7403 10.7467C13.9556 10.6942 14.1816 10.667 14.4141 10.667ZM3.58073 5.66699C4.73132 5.66699 5.66406 6.59973 5.66406 7.75033C5.66406 8.90091 4.73132 9.83366 3.58073 9.83366C2.43014 9.83366 1.4974 8.90091 1.4974 7.75033C1.4974 6.59973 2.43014 5.66699 3.58073 5.66699ZM14.4141 5.66699C15.5646 5.66699 16.4974 6.59973 16.4974 7.75033C16.4974 8.90091 15.5646 9.83366 14.4141 9.83366C13.2635 9.83366 12.3307 8.90091 12.3307 7.75033C12.3307 6.59973 13.2635 5.66699 14.4141 5.66699ZM3.58073 7.33366C3.35061 7.33366 3.16406 7.52024 3.16406 7.75033C3.16406 7.98041 3.35061 8.16699 3.58073 8.16699C3.81085 8.16699 3.9974 7.98041 3.9974 7.75033C3.9974 7.52024 3.81085 7.33366 3.58073 7.33366ZM14.4141 7.33366C14.184 7.33366 13.9974 7.52024 13.9974 7.75033C13.9974 7.98041 14.184 8.16699 14.4141 8.16699C14.6441 8.16699 14.8307 7.98041 14.8307 7.75033C14.8307 7.52024 14.6441 7.33366 14.4141 7.33366ZM8.9974 0.666992C10.8383 0.666992 12.3307 2.15938 12.3307 4.00033C12.3307 5.84128 10.8383 7.33366 8.9974 7.33366C7.15645 7.33366 5.66406 5.84128 5.66406 4.00033C5.66406 2.15938 7.15645 0.666992 8.9974 0.666992ZM8.9974 2.33366C8.0769 2.33366 7.33073 3.07985 7.33073 4.00033C7.33073 4.9208 8.0769 5.66699 8.9974 5.66699C9.9179 5.66699 10.6641 4.9208 10.6641 4.00033C10.6641 3.07985 9.9179 2.33366 8.9974 2.33366Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-[#3762e421]',
        subName: '+12.5% from last month',
        subVal: ''
    },
    {
        name: 'Active Sessions',
        value: '128',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66927 11.8763V13.6175C8.14794 13.4333 7.58702 13.333 7.0026 13.333C4.24118 13.333 2.0026 15.5716 2.0026 18.333H0.335938C0.335938 14.6511 3.3207 11.6663 7.0026 11.6663C7.5781 11.6663 8.1366 11.7393 8.66927 11.8763ZM7.0026 10.833C4.2401 10.833 2.0026 8.59551 2.0026 5.83301C2.0026 3.07051 4.2401 0.833008 7.0026 0.833008C9.7651 0.833008 12.0026 3.07051 12.0026 5.83301C12.0026 8.59551 9.7651 10.833 7.0026 10.833ZM7.0026 9.16634C8.84427 9.16634 10.3359 7.67467 10.3359 5.83301C10.3359 3.99134 8.84427 2.49967 7.0026 2.49967C5.16094 2.49967 3.66927 3.99134 3.66927 5.83301C3.66927 7.67467 5.16094 9.16634 7.0026 9.16634ZM12.0026 14.1663V11.2497L16.1693 14.9997L12.0026 18.7497V15.833H9.5026V14.1663H12.0026Z" fill="#34765A" />
            </svg>
        ),
        bg: 'bg-[#34765b24]',
        subName: '+3.2% from yesterday',
        subVal: ''
    },
    {
        name: 'Daily Consultations',
        value: '14,235.00',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.9979 11.5003C10.3976 11.5003 13.2029 14.0451 13.613 17.3337H0.382812C0.792879 14.0451 3.59821 11.5003 6.9979 11.5003ZM5.48698 13.3999C4.29229 13.7787 3.28604 14.5947 2.66574 15.667H6.9979L5.48698 13.3999ZM8.50915 13.4001L6.9979 15.667H11.3301C10.7098 14.5949 9.70373 13.7788 8.50915 13.4001ZM11.9979 0.666992V5.66699C11.9979 8.42841 9.75931 10.667 6.9979 10.667C4.23648 10.667 1.9979 8.42841 1.9979 5.66699V0.666992H11.9979ZM3.66457 5.66699C3.66457 7.50791 5.15695 9.00033 6.9979 9.00033C8.8389 9.00033 10.3312 7.50791 10.3312 5.66699H3.66457ZM10.3312 2.33366H3.66457L3.66448 4.00033H10.3311L10.3312 2.33366Z" fill="#B337E4" />
            </svg>
        ),
        bg: 'bg-[#b337e41d]',
        subName: '-2.4% from yesterday',
        subVal: ''
    },
    {
        name: "Today's Payments",
        value: '$24,520',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6719 3.83333V2.16667H2.33854V13.8333H15.6719V12.1667H9.00523C8.54498 12.1667 8.17189 11.7936 8.17189 11.3333V4.66667C8.17189 4.20642 8.54498 3.83333 9.00523 3.83333H15.6719ZM1.50521 0.5H16.5052C16.9655 0.5 17.3386 0.873092 17.3386 1.33333V14.6667C17.3386 15.1269 16.9655 15.5 16.5052 15.5H1.50521C1.04498 15.5 0.671875 15.1269 0.671875 14.6667V1.33333C0.671875 0.873092 1.04498 0.5 1.50521 0.5ZM9.83856 5.5V10.5H15.6719V5.5H9.83856ZM11.5052 7.16667H14.0052V8.83334H11.5052V7.16667Z" fill="#FFB412" />
            </svg>
        ),
        bg: 'bg-[#ffb4121f]',
        subName: '+18.7% from yesterday',
        subVal: ''
    },
];

const roles = [
    {
        name: "Doctor",
        count: "1,1128",
        color: "text-blue-700 bg-blue-50",
        bar: "bg-blue-700 w-[30%]",
        icon: () => <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66226 7.62496C8.63001 7.62496 10.2306 5.53644 10.2306 3.56879C10.2306 1.60114 8.63001 0 6.66226 0C4.69451 0 3.09375 1.60114 3.09375 3.56879C3.09408 5.53628 4.69467 7.62496 6.66226 7.62496Z" fill="#3762E4" />
            <path d="M9.70188 7.73441C10.2562 8.09456 10.6381 8.69643 10.6974 9.3901C11.1712 9.49627 11.5267 9.91979 11.5267 10.4253C11.5267 11.0107 11.0505 11.487 10.4651 11.487C9.87974 11.487 9.40348 11.0107 9.40348 10.4253C9.40348 9.9291 9.7463 9.51244 10.207 9.39664C10.1388 8.75474 9.71364 8.21918 9.13449 7.99019L6.73556 10.2381L4.30494 7.9603C3.64609 8.18276 3.16721 8.79607 3.14402 9.52354C3.23859 9.57842 3.31502 9.66336 3.3619 9.76625C3.71093 9.93089 4.01896 10.2775 4.25496 10.7709C4.29449 10.854 4.29955 10.9478 4.27064 11.0334C4.41208 11.3974 4.49293 11.7953 4.49293 12.1295C4.49293 12.5978 4.49293 13.0406 3.98254 13.1542C3.92717 13.2003 3.85808 13.2254 3.7854 13.2254H3.44422C3.27321 13.2254 3.13406 13.0861 3.13406 12.9153L3.13439 12.9032C3.14092 12.7384 3.27893 12.6051 3.44422 12.6051H3.78524C3.82019 12.6051 3.85433 12.611 3.88715 12.6226C3.9079 12.6167 3.91443 12.6118 3.91443 12.6118C3.95232 12.5445 3.95232 12.2642 3.95232 12.1297C3.95232 11.8582 3.88438 11.5304 3.76531 11.2258C3.70341 11.1907 3.6536 11.1376 3.62289 11.0734C3.41596 10.6404 3.13488 10.3608 2.90638 10.3608C2.67266 10.3608 2.37753 10.6631 2.17174 11.1128C2.1381 11.1859 2.07914 11.2457 2.00646 11.2813C1.89883 11.5729 1.8397 11.8729 1.8397 12.1295C1.8397 12.2425 1.8397 12.5426 1.88298 12.613C1.88347 12.613 1.89311 12.6188 1.92022 12.6255C1.9555 12.612 1.99339 12.605 2.03128 12.605H2.37296C2.53237 12.605 2.66515 12.7263 2.68132 12.8838L2.68312 12.903C2.68312 13.0861 2.54396 13.2254 2.37312 13.2254H2.03145C1.96367 13.2254 1.89817 13.2029 1.84427 13.1616C1.6491 13.1248 1.51158 13.0388 1.42453 12.8986C1.31902 12.7292 1.29975 12.5068 1.29975 12.1295C1.29975 11.7984 1.37618 11.4174 1.51501 11.0533C1.49459 10.9754 1.50145 10.8941 1.53526 10.8207C1.67997 10.5045 1.86387 10.2337 2.06705 10.0379C2.17877 9.93024 2.29881 9.84367 2.42441 9.78046C2.47177 9.67005 2.55376 9.57957 2.65421 9.52224C2.67315 8.76601 3.07494 8.10468 3.67369 7.72363C1.56891 8.2115 0 10.096 0 12.3488C0 13.647 2.98396 14.6997 6.665 14.6997C10.3459 14.6997 13.33 13.647 13.33 12.3488C13.33 10.1124 11.7836 8.23845 9.70188 7.73441Z" fill="#3762E4" />
            <path d="M10.4665 10.9136C10.7371 10.9136 10.9565 10.6942 10.9565 10.4236C10.9565 10.153 10.7371 9.93359 10.4665 9.93359C10.1959 9.93359 9.97656 10.153 9.97656 10.4236C9.97656 10.6942 10.1959 10.9136 10.4665 10.9136Z" fill="#3762E4" />
        </svg>, // Replace with your actual SVG or component
    },
    {
        name: "Patient",
        count: "2,849",
        color: "text-primary bg-primary/10",
        bar: "bg-primary w-[50%]",
        icon: () => <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.335938 18.333C0.335938 14.6511 3.3207 11.6663 7.0026 11.6663C10.6845 11.6663 13.6693 14.6511 13.6693 18.333H0.335938ZM7.83594 13.4022V16.6663H11.7181C11.1212 14.9776 9.64294 13.7053 7.83594 13.4022ZM6.16927 16.6663V13.4022C4.36231 13.7053 2.88399 14.9776 2.28711 16.6663H6.16927ZM7.0026 10.833C4.2401 10.833 2.0026 8.59551 2.0026 5.83301C2.0026 3.07051 4.2401 0.833008 7.0026 0.833008C9.7651 0.833008 12.0026 3.07051 12.0026 5.83301C12.0026 8.59551 9.7651 10.833 7.0026 10.833ZM7.0026 9.16634C8.8446 9.16634 10.3359 7.67503 10.3359 5.83301C10.3359 3.99098 8.8446 2.49967 7.0026 2.49967C5.16058 2.49967 3.66927 3.99098 3.66927 5.83301C3.66927 7.67503 5.16058 9.16634 7.0026 9.16634Z" fill="#34765A" />
        </svg>, // Replace with your actual SVG or component
    },
    {
        name: "Nurse",
        count: "982",
        color: "text-purple-700 bg-purple-50",
        bar: "bg-purple-700 w-[20%]",
        icon: () => <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.9979 11.5003C10.3976 11.5003 13.2029 14.0451 13.613 17.3337H0.382812C0.792879 14.0451 3.59821 11.5003 6.9979 11.5003ZM5.48698 13.3999C4.29229 13.7787 3.28604 14.5947 2.66574 15.667H6.9979L5.48698 13.3999ZM8.50915 13.4001L6.9979 15.667H11.3301C10.7098 14.5949 9.70373 13.7788 8.50915 13.4001ZM11.9979 0.666992V5.66699C11.9979 8.42841 9.75931 10.667 6.9979 10.667C4.23648 10.667 1.9979 8.42841 1.9979 5.66699V0.666992H11.9979ZM3.66457 5.66699C3.66457 7.50791 5.15695 9.00033 6.9979 9.00033C8.8389 9.00033 10.3312 7.50791 10.3312 5.66699H3.66457ZM10.3312 2.33366H3.66457L3.66448 4.00033H10.3311L10.3312 2.33366Z" fill="#B337E4" />
        </svg>, // Replace with your actual SVG or component
    },
    {
        name: "Institution",
        count: "314",
        color: "text-orange-700 bg-orange-50",
        bar: "bg-orange-700 w-[15%]",
        icon: () => <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66927 15.667V10.667H13.3359V15.667H15.8359V2.33366H4.16927V15.667H6.66927ZM8.33594 15.667H11.6693V12.3337H8.33594V15.667ZM17.5026 15.667H19.1693V17.3337H0.835938V15.667H2.5026V1.50033C2.5026 1.04009 2.8757 0.666992 3.33594 0.666992H16.6693C17.1295 0.666992 17.5026 1.04009 17.5026 1.50033V15.667ZM9.16927 5.66699V4.00033H10.8359V5.66699H12.5026V7.33366H10.8359V9.00033H9.16927V7.33366H7.5026V5.66699H9.16927Z" fill="#854D0F" />
        </svg>, // Replace with your actual SVG or component
    },
    {
        name: "Pharmacy & Dispatchers",
        count: "419",
        color: "text-red-700 bg-red-50",
        bar: "bg-red-700 w-[22%]",
        icon: () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4828 1.51818C16.4354 3.4708 16.4354 6.63665 14.4828 8.58923L8.59023 14.4818C6.63757 16.4344 3.47177 16.4344 1.51915 14.4818C-0.433467 12.5291 -0.433467 9.3634 1.51915 7.41073L7.41173 1.51818C9.36432 -0.434445 12.5301 -0.434445 14.4828 1.51818ZM9.76932 10.9456L5.05527 6.23163L2.69767 8.58923C1.39592 9.89098 1.39592 12.0016 2.69767 13.3033C3.99941 14.6051 6.10996 14.6051 7.41173 13.3033L9.76932 10.9456ZM13.3042 2.69669C12.0025 1.39494 9.89198 1.39494 8.59023 2.69669L6.23378 5.05312L10.9478 9.76715L13.3042 7.41073C14.606 6.10899 14.606 3.99844 13.3042 2.69669Z" fill="#E53E3E" />
        </svg>, // Replace with your actual SVG or component
    }
];

function SuperAdminDashboard() {
    return <PageWrapper content={<>
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[270px] h-[105px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="w-full flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                            <span className="w-full flex justify-between mt-4">
                                <small className="text-gray-600">{stat.subName}</small>
                                <small className="">{stat.subVal}</small>
                            </span>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="w-full border rounded-xl p-4 flex flex-col gap-3">
            <p>Quick Actions</p>
            <aside className="w-full flex gap-5">
                <div className="min-w-[250px] min-h-[110px] cursor-pointer hover:bg-indigo-50/40 rounded-xl border flex flex-col items-center justify-center gap-2">
                    <div className="size-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-700">
                        <User className='size-5' />
                    </div>
                    <p>Add User</p>
                </div>
                <div className="min-w-[250px] min-h-[110px] cursor-pointer hover:bg-emerald-50/40 rounded-xl border flex flex-col items-center justify-center gap-2">
                    <div className="size-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700">
                        <Settings className='size-5' />
                    </div>
                    <p>Configure Platform Settings</p>
                </div>
                <div className="min-w-[250px] min-h-[110px] cursor-pointer hover:bg-orange-50/40 rounded-xl border flex flex-col items-center justify-center gap-2">
                    <div className="size-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-700">
                        <FileLineChart className='size-5' />
                    </div>
                    <p>Run Audit Report</p>
                </div>
            </aside>
        </section>

        <section className="grid grid-cols-3 gap-5 h-[440px] max-h-[440px]">
            <div className="w-full h-full border rounded-xl p-4 pt-2 flex flex-col overflow-y-auto">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 mb-2 z-10">
                    <p>User Breakdown</p>
                </span>
                {roles.map((role, idx) => (
                    <div key={`user-${idx}`} className={`flex gap-2 items-center py-2 ${idx !== 0 && 'border-t'}`}>
                        <span className={`${role.color} size-10 rounded-full min-w-10 flex items-center justify-center`}>
                            <role.icon />
                        </span>
                        <span className="w-full flex flex-col gap-1">
                            <div className="w-full flex items-center justify-between">
                                <small>{role.name}</small>
                                <small>{role.count}</small>
                            </div>
                            <div className="w-full h-2 rounded-xl bg-gray-100 relative overflow-hidden flex">
                                <span className={`h-full ${role.bar}`} />
                            </div>
                        </span>
                    </div>
                ))}
            </div>
            <div className="w-full h-full border rounded-xl p-4 pt-2 flex flex-col gap-2 overflow-y-auto">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Payment Trends</p>
                </span>
                <GoogleCharts type='AreaChart' />
                <div className="w-full flex justify-around gap-2">
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>Today:</p>
                        <p>$24,520</p>
                    </section>
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>This Week:</p>
                        <p>$174,520</p>
                    </section>
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>This Month:</p>
                        <p>$784,520</p>
                    </section>
                </div>
            </div>
            <div className="w-full h-full border rounded-xl p-4 pt-2 flex flex-col gap-2 overflow-y-auto">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Real-Time Activity Feed</p>
                    <Button variant={'outline'}>View All</Button>
                </span>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
                        return <div key={`activity-${idx}`} className={`flex flex-col gap-1 py-2 ${idx !== 0 && 'border-t'}`}>
                            <p className="text-sm">New patient registration</p>
                            <small className="text-gray-500">Sarah Johnson • Just now</small>
                        </div>
                    })
                }
            </div>
        </section>

        <section className="w-full grid grid-cols-2 gap-5 h-[450px] max-h-[450px]">
            <div className="w-full border rounded-xl p-4 flex flex-col">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Usage Reports</p>
                    <div className="flex items-center gap-3">
                        <div className='h-2 w-4 bg-primary' />
                        <p className="mr-2">Consultations</p>
                        <div className='h-2 w-4 bg-blue-500' />
                        <p className="mr-2">New Users</p>
                        <div className='h-2 w-4 bg-purple-600' />
                        <p className="mr-2">Subscriptions</p>
                    </div>
                </span>
                <GoogleCharts type='ColumnChart' />
                <div className="w-full flex justify-around gap-2">
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>Consultations</p>
                        <p className='text-sm'>1,842</p>
                        <p className="text-xs text-primary">+23%</p>
                    </section>
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>New Users</p>
                        <p className='text-sm'>168</p>
                        <p className="text-xs text-primary">+48%</p>
                    </section>
                    <section className="w-fit items-center flex flex-col gap-2">
                        <p>Subscriptions</p>
                        <p className='text-sm'>25</p>
                        <p className="text-xs text-red-500">-23%</p>
                    </section>
                </div>
            </div>
            <div className="w-full border rounded-xl p-4 gap-2 flex flex-col">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Regional Distribution</p>
                </span>
                <section className="w-full h-[400px] flex gap-3 justify-between">
                    <div className="min-w-24 flex flex-col items-center justify-between h-full">
                        <span className="w-full h-full flex flex-col items-center gap-3">
                            <p className="text-sm">North</p>
                            <span className="w-full h-[30%] rounded-lg flex items-center justify-center text-sm bg-primary/10">1,024</span>
                        </span>
                        <span className='flex min-h-10 items-center gap-1'><ArrowUp className='size-3' /> 12%</span>
                    </div>
                    <div className="min-w-24 flex flex-col items-center justify-between h-full">
                        <span className="w-full h-full flex flex-col items-center gap-3">
                            <p className="text-sm">South</p>
                            <span className="w-full h-[40%] rounded-lg flex items-center justify-center text-sm bg-primary/20">1,024</span>
                        </span>
                        <span className='flex min-h-10 items-center gap-1'><ArrowUp className='size-3' /> 12%</span>
                    </div>
                    <div className="min-w-24 flex flex-col items-center justify-between h-full">
                        <span className="w-full h-full flex flex-col items-center gap-3">
                            <p className="text-sm">East</p>
                            <span className="w-full h-[50%] rounded-lg flex items-center justify-center text-sm bg-primary/40">1,024</span>
                        </span>
                        <span className='flex min-h-10 items-center gap-1'><ArrowUp className='size-3' /> 12%</span>
                    </div>
                    <div className="min-w-24 flex flex-col items-center justify-between h-full">
                        <span className="w-full h-full flex flex-col items-center gap-3">
                            <p className="text-sm">West</p>
                            <span className="w-full h-[60%] rounded-lg flex items-center justify-center text-sm bg-primary/60">1,024</span>
                        </span>
                        <span className='flex min-h-10 items-center gap-1'><ArrowUp className='size-3' /> 12%</span>
                    </div>
                    <div className="min-w-24 flex flex-col items-center justify-between h-full">
                        <span className="w-full h-full flex flex-col items-center gap-3">
                            <p className="text-sm">Central</p>
                            <span className="w-full h-[85%] rounded-lg flex items-center justify-center text-sm bg-primary">1,024</span>
                        </span>
                        <span className='flex min-h-10 items-center gap-1'><ArrowUp className='size-3' /> 12%</span>
                    </div>
                </section>
                <div className="w-full flex justify-between items-center gap-2 mt-4">
                    <span className="flex flex-col gap-1">
                        <p>Top Region</p>
                        <p className="text-sm">West has highest activity growth</p>
                    </span>
                    <div className="px-4 py-1 bg-emerald-50 text-emerald-700 text-sm"> +15% MoM</div>
                </div>
            </div>
            <div className="w-full border rounded-xl p-4 gap-2 flex flex-col">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Performance Analytics</p>
                </span>
                <div className="w-full flex justify-around gap-2  py-3">
                    <section className="w-full p-4 flex flex-col gap-2 border rounded ">
                        <p>API Uptime</p>
                        <span className='text-xl flex items-center gap-3 text-primary'>
                            99.98%
                            <p className="bg-emerald-50  px-2 py-1 text-sm text-primary">+23%</p>
                        </span>
                    </section>
                    <section className="w-full p-4 flex flex-col gap-2 border rounded ">
                        <p>Avg Latency</p>
                        <span className='text-xl flex items-center gap-3 text-blue-500'>
                            142ms
                            <p className="bg-red-50  px-2 py-1 text-sm text-red-600">+48%</p>
                        </span>
                    </section>
                    <section className="w-full p-4 flex flex-col gap-2 border rounded ">
                        <p>Max Load</p>
                        <span className='text-xl flex items-center gap-3 text-purple-500'>
                            25%
                            <p className="bg-emerald-50  px-2 py-1 text-sm text-red-500">-23%</p>
                        </span>
                    </section>
                </div>
                <section className="w-full h-[400px] flex gap-3 justify-between">
                    <GoogleCharts type='LineChart' />
                </section>
                <div className="w-full flex justify-between items-center gap-2 mt-4">
                    <p>Peak times: 10:00 AM - 12:00 PM and 6:00 PM - 8:00 PM</p>
                </div>
            </div>
            <div className="w-full border rounded-xl p-4 gap-2 flex flex-col">
                <span className="min-h-12 pb-1 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                    <p>Performance Analytics</p>
                </span>
                <div className="w-full flex justify-end gap-2 py-2 ">
                    $12,450 in refunds processed this period
                </div>
                <section className="w-full h-[400px] flex gap-3 justify-between">
                    <GoogleCharts type='PieChart' />
                </section>
                <div className="w-full flex text-sm overflow-x-auto mt-4">
                    <table className="w-full">
                        <thead>
                            <tr className="h-10 bg-gray-100">
                                <td><div className="px-3">Category</div></td>
                                <td><div className="px-3">Amount</div></td>
                                <td><div className="px-3">% Of Total</div></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4].map((item, idx, arr) => {
                                    return <tr key={`sdf-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                        <td><div className="p-3 py-2">Consultation</div></td>
                                        <td><div className="p-3 py-2">$186,420</div></td>
                                        <td><div className="p-3 py-2">54%</div></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <br />
    </>} />
}

export default SuperAdminDashboard