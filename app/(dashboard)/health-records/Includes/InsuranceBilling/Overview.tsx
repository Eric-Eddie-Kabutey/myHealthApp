'use client';

import React from 'react'

function Overview() {
    return <div className="main-content w-full grid grid-cols-4 2xl:grid-cols-5 gap-5 text-sm">
        <div className="border rounded-xl p-3 flex flex-col gap-2">
            <span className="pb-3 border-b">Insurance Provider</span>
            <div className="w-full flex flex-col gap-1">
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Provider:</p>
                    <p>BlueCross BlueShield</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Policy Number:</p>
                    <p>BC123456789</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Group Number:</p>
                    <p>GRP-001234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Member ID:</p>
                    <p>MEM789012</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Effective Date:</p>
                    <p>2024-01-01</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className="text-gray-600">Expiration Date:</p>
                    <p>2024-12-31</p>
                </span>
            </div>
        </div>
        <div className="border rounded-xl p-3 flex flex-col gap-2">
            <span className="pb-3 border-b">Policy Holders</span>
            <div className="w-full flex flex-col gap-1">
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">Primary Holder:</p>
                <p>John Doe</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">Dependents:</p>
                <div className="flex flex-col">
                <p>Jane Doe</p>
                <p>Jimmy Doe</p>
                </div>
            </span>
            </div>
        </div>
        <div className="border rounded-xl p-3 flex flex-col gap-2">
            <span className="pb-3 border-b">Bills</span>
            <div className="w-full flex flex-col gap-1">
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">Monthly Premium:</p>
                <p>$450</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">Coverage Types:</p>
                <p>4</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">Days Until Renewal:</p>
                <p>223</p>
            </span>
            <span className="w-full flex items-center justify-between">
                <p className="text-gray-600">YTD Payments:</p>
                <p>$2,315</p>
            </span>
            </div>
        </div>

    </div>
}

export default Overview