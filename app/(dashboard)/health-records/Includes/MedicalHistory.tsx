'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

function MedicalHistory() {
    return <div className="w-full flex flex-col main-content gap-4">
        <section className="w-full pb-2 flex items-center justify-between border-b">
            <p className="text-lg">Medical History</p>
        </section>

        <section className="w-full rounded-2xl border p-4 flex flex-col gap-3">
            <div className="w-full pb-2 flex border-b"><p>Past Medical Conditions</p></div>
            <div className="grid grid-cols-2 w-fit gap-[1.5rem] max-h-[200px]">
                <aside className="flex flex-col mr-[3rem]">
                    <p>Hypertension</p>
                    <small className="text-gray-700">Diagnosed: 2018 • Controlled with medication</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Hypertension</p>
                    <small className="text-gray-700">Diagnosed: 2018 • Controlled with medication</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Hypertension</p>
                    <small className="text-gray-700">Diagnosed: 2018 • Controlled with medication</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Hypertension</p>
                    <small className="text-gray-700">Diagnosed: 2018 • Controlled with medication</small>
                </aside>
            </div>
        </section>


        <section className="w-full rounded-2xl border p-4 flex flex-col gap-3">
            <div className="w-full pb-2 flex border-b"><p>Surgical History</p></div>
            <div className="grid grid-cols-2 w-fit gap-[1.5rem]">
                <aside className="flex flex-col mr-[3rem]">
                    <p>Appendectomy</p>
                    <small className="text-gray-700">2005 • No complications</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Appendectomy</p>
                    <small className="text-gray-700">2005 • No complications</small>
                </aside>
            </div>
        </section>

        <section className="w-full rounded-2xl border p-4 flex flex-col gap-3">
            <div className="w-full pb-2 flex items-center justify-between border-b">
                <p>Family Medical History</p>
                <Button variant={'outline'} className='h-9 px-6'>Edit</Button>
            </div>
            <div className="grid grid-cols-2 w-fit gap-[1.5rem] max-h-[200px]">
                <aside className="flex flex-col mr-[3rem]">
                    <p>Father</p>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Father</p>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Father</p>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
                <aside className="flex flex-col mr-[3rem]">
                    <p>Father</p>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
            </div>
        </section>


        <section className="w-full rounded-2xl border p-4 flex flex-col gap-3">
            <div className="w-full pb-2 flex items-center justify-between border-b">
                <p>Allergies</p>
                <Button variant={'outline'} className='h-9 px-6'>Edit</Button>
            </div>
            <div className="grid grid-cols-2 w-fit gap-[1.5rem] max-h-[200px]">
                <aside className="flex flex-col gap-1 mr-[3rem]">
                    <span className='flex items-center gap-4'>Penicillin <Button className='rounded-2xl bg-red-50 text-red-600 h-8 text-sm'>Severe</Button></span>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
                <aside className="flex flex-col gap-1 mr-[3rem]">
                    <span className='flex items-center gap-4'>Penicillin <Button className='rounded-2xl bg-red-50 text-red-600 h-8 text-sm'>Severe</Button></span>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
                <aside className="flex flex-col gap-1 mr-[3rem]">
                    <span className='flex items-center gap-4'>Penicillin <Button className='rounded-2xl bg-red-50 text-red-600 h-8 text-sm'>Severe</Button></span>
                    <small className="text-gray-700">Heart disease (age 65), Hypertension</small>
                </aside>
            </div>
        </section>

        <section className="w-full rounded-2xl border p-4 pt-0 flex flex-col gap-3 overflow-y-auto max-h-[300px]">
            <div className="w-full py-3 pt-4 flex items-center justify-between border-b bg-white sticky top-0 z-10">
                <p>Immunization Records</p>
            </div>
            <table className="w-full">
                <thead className='h-10 bg-gray-100'>
                    <tr className=''>
                        <td className='text-left'><div className="px-3">Vaccine</div></td>
                        <td className='text-left'><div className="px-3">Date</div></td>
                        <td className='text-left'><div className="px-3">Next Due</div></td>
                        <td className='text-left'><div className="px-3">Status</div></td>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {
                            vaccine: "COVID-19 (Pfizer)",
                            date: "03/15/2021",
                            nextDue: "09/15/2023",
                            status: "Up to date"
                        },
                        {
                            vaccine: "Tetanus",
                            date: "01/10/2018",
                            nextDue: "01/10/2028",
                            status: "Up to date"
                        },
                        {
                            vaccine: "Hepatitis B",
                            date: "06/22/2015",
                            nextDue: "N/A",
                            status: "Completed"
                        },
                        {
                            vaccine: "Influenza",
                            date: "10/05/2023",
                            nextDue: "10/05/2024",
                            status: "Due soon"
                        }
                    ].map((record, idx) => (
                        <tr className='border-b text-sm' key={idx}>
                            <td><div className="px-3 py-4">{record.vaccine}</div></td>
                            <td><div className="px-3 py-4">{record.date}</div></td>
                            <td><div className="px-3 py-4">{record.nextDue}</div></td>
                            <td><div className="px-3 py-4">
                                <Button variant={`outline`} className='bg-primary/10 max-h-8 text-primary'>{record.status}</Button>
                            </div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        <section className="w-full rounded-2xl border p-4 pt-0 flex flex-col gap-3 overflow-y-auto max-h-[500px]">
            <div className="w-full py-3 pt-4 flex items-center justify-between border-b bg-white sticky top-0 z-10">
                <p>Chronic Illnesses</p>
                <Button variant={'outline'} className='h-9 px-6'>Edit</Button>
            </div>
            <aside className="w-full flex flex-col gap-3">
                {
                    [1,2,3].map((item, idx) => {
                        return <div key={`ill-${idx}`} className="w-full bg-blue-50 rounded-xl p-4 flex justify-between gap-1">
                            <div className="w-full flex flex-col gap-[0.5rem]">
                                <p>Hypertension</p>
                                <small className="text-gray-600">Current Treatment</small>
                                <small className="text-gray-600">Current Treatment</small>
                                <small className="text-gray-600">Current Treatment</small>
                            </div>
                            <small className='text-nowrap'>Since 2018</small>
                        </div>
                    })
                }
            </aside>
        </section>
    </div>
}

export default MedicalHistory