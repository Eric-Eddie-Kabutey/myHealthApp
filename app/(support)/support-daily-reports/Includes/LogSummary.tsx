'use client';

import React from 'react'

function LogSummary() {
  return <section className="w-full flex text-sm text-left overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className='h-10 bg-gray-100'>
          <td><div className="px-3">Time</div></td>
          <td><div className="px-3">Type</div></td>
          <td><div className="px-3">Customer</div></td>
          <td><div className="px-3">Duration</div></td>
          <td><div className="px-3">Status</div></td>
        </tr>
      </thead>
      <tbody>
        {
          [1, 2, 3].map((item, idx, arr) => {
            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
              <td>
                <div className="p-3">09:00</div>
              </td>
              <td><div className="px-3">Chat</div></td>
              <td><div className="p-3">John Smith</div></td>
              <td><div className="px-3">2025-06-01 10:30</div></td>
              <td><div className="px-3">
                <div className="px-4 py-1 w-fit bg-emerald-50 text-emerald-700 rounded">Resolved</div>
              </div></td>
            </tr>
          })
        }
      </tbody>
    </table>
  </section>
}

export default LogSummary