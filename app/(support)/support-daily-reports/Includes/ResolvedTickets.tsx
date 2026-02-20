'use client';

import React from 'react'

function ResolvedTickets() {
    return <section className="w-full flex text-sm text-left overflow-x-auto">
        <table className="w-full text-left">
            <thead>
                <tr className='h-10 bg-gray-100'>
                    <td><div className="px-3">ID</div></td>
                    <td><div className="px-3">Name</div></td>
                    <td><div className="px-3">Description</div></td>
                    <td><div className="px-3">Date Resolved</div></td>
                    <td><div className="px-3">Status</div></td>
                </tr>
            </thead>
            <tbody>
                {
                    [1, 2, 3].map((item, idx, arr) => {
                        return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                            <td>
                                <div className="p-3">T001</div>
                            </td>
                            <td><div className="p-3">John Smith</div></td>
                            <td><div className="px-3">Login Issues</div></td>
                            <td><div className="px-3">2025-06-01 10:30</div></td>
                            <td><div className="px-3">
                                <div className="px-4 py-1 w-fit bg-red-50 text-red-700 rounded">High</div>
                            </div></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </section>
}

export default ResolvedTickets