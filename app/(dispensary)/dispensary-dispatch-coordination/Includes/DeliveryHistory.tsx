'use client';

import React from 'react'

function DeliveryHistory() {
    return <section className="main-content w-full text-left text-sm overflow-x-auto">
        <table className="w-full text-left">
            <thead>
                <tr className='h-10 bg-gray-100'>
                    <td><div className="px-3">Patient Name</div></td>
                    <td><div className="px-3">Prescription ID</div></td>
                    <td><div className="px-3">Dispatcher</div></td>
                    <td><div className="px-3">Time Dispatched</div></td>
                    <td><div className="px-3">Time Delivered</div></td>
                    <td><div className="px-3">Status</div></td>
                </tr>
            </thead>
            <tbody>
                {
                    [1, 2, 3].map((item, idx, arr) => {
                        return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                            <td><div className="p-3">Robert Williams</div></td>
                            <td><div className="p-3">RX-2024-155</div></td>
                            <td><div className="p-3">Sarah Chen</div></td>
                            <td><div className="p-3">13:15</div></td>
                            <td><div className="p-3">22:57</div></td>
                            <td><div className="p-3">
                                <div className="px-3 h-8 flex items-center w-fit rounded bg-primary/10 text-primary">Delivered</div>
                            </div></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </section>
}

export default DeliveryHistory