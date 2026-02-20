'use client'

import { Check } from 'lucide-react'
import React from 'react'

function UpcomingBills() {
    return <div className="main-content flex flex-col gap-4 w-full">
        <div className="p-4 rounded-xl border flex flex-col gap-1">
            <span className="w-full flex items-center justify-between">
                <p>Monthly Premium</p>
                <p>$450.00</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p>Due: 2024-06-15</p>
                <p>Due in 24 days</p>
            </span>
        </div>
        <div className="p-4 rounded-xl border flex flex-col gap-1">
            <span className="w-full flex items-center justify-between">
                <p>Monthly Premium</p>
                <p>$450.00</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p>Due: 2024-06-15</p>
                <p>Due in 24 days</p>
            </span>
        </div>
        <div className="w-full text-primary border border-primary p-4 flex items-center gap-4 bg-primary/10 rounded-xl">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50521 0.5H16.5052C16.9655 0.5 17.3386 0.873092 17.3386 1.33333V14.6667C17.3386 15.1269 16.9655 15.5 16.5052 15.5H1.50521C1.04498 15.5 0.671875 15.1269 0.671875 14.6667V1.33333C0.671875 0.873092 1.04498 0.5 1.50521 0.5ZM15.6719 8.00001H2.33854V13.8333H15.6719V8.00001ZM15.6719 4.66667V2.16667H2.33854V4.66667H15.6719Z" fill="#34765A" />
            </svg>
            <p>Auto-Pay is enabled for monthly premiums</p>
        </div>
    </div>
}

export default UpcomingBills