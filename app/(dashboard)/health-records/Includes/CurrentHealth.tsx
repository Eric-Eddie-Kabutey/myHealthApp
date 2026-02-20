'use client';

import { Button } from '@/components/ui/button';
import { Edit, Trash } from 'lucide-react';
import React from 'react'

function CurrentHealth() {
    return <div className="w-full flex flex-col main-content gap-4 text-sm">
        <section className="w-full pb-2 border-b text-base">
            Current Health Data
        </section>

        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Current Symptons</p>
                <Button variant={'outline'} className='h-8'>Add Symptons</Button>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Symptons</div></td>
                        <td><div className="px-3">Severity</div></td>
                        <td><div className="px-3">Onset Date</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3].map((item, idx, arr)=>{
                            return <tr key={'symptons'+idx} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                <td>
                                    <div className="p-2 flex flex-col">
                                        <p>Persistent Cough</p>
                                        <small className="text-gray-700">Dry, non-productive</small>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded-xl bg-orange-100 text-orange-500">Moderate</div>
                                    </div>
                                </td>
                                <td><div className="px-3">09/15/2023</div></td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded-lg bg-indigo-100 text-indigo-500">Ongoing</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3 flex gap-3 items-center">
                                        <Edit className='size-4 text-primary cursor-pointer '/>
                                        <Trash className='size-4 text-red-600 cursor-pointer '/>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Vital Signs</p>
                <Button variant={'outline'} className='h-8'>Filter by date range</Button>
            </div>
            <div className="w-full flex gap-5 flex-wrap">
                {
                    [1,2,3,4,5,6].map((item, idx)=>{
                        return <div key={`signs-${idx}`} className="border flex flex-col gap-2 w-[350px] rounded-xl">
                            <div className="p-2 px-4 border-b">Blood Pressure</div>
                            <div className="w-full flex flex-col gap-2 p-2 px-4">
                                <aside className="w-full flex items-center justify-between gap-2">
                                    <div className="flex flex-col">
                                        <h1 className="text-xl">16</h1>
                                        <small>Breaths/min</small>
                                        <small className='text-gray-500'>Last reading: 16 (05/20/23)</small>
                                    </div>
                                </aside>
                                <aside className="w-full h-2 bg-gray-100 rounded-xl overflow-hidden flex">
                                    <div className={`transition-all w-[40%] h-full bg-indigo-500`}/>
                                </aside>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>

        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Patient-Reported Outcomes</p>
                {/* <Button variant={'outline'} className='h-8'>Filter by date range</Button> */}
            </div>
            <div className="flex flex-col gap-3 w-full">
                <p className='mt-2'>Mood Assessment</p>
                <aside className="flex gap-5 overflow-x-auto">
                    {
                        [
                            {
                                name: 'Angry',
                                emoji: '😡',
                                bg: 'bg-orange-100',
                                color: 'orange'
                            },
                            {
                                name: 'Sad',
                                emoji: '😢',
                                bg: 'bg-blue-100',
                                color: 'blue'
                            },
                            {
                                name: 'Neutral',
                                emoji: '😐',
                                bg: 'bg-gray-100',
                                color: 'gray'
                            },
                            {
                                name: 'Happy',
                                emoji: '😊',
                                bg: 'bg-yellow-100',
                                color: 'gold'
                            },
                            {
                                name: 'Excited',
                                emoji: '🤩',
                                bg: 'bg-green-100',
                                color: 'green'
                            },
                        ].map((item, idx) => {
                            return (
                                <div key={item.name} className='flex flex-col items-center gap-2 min-w-[200px] px-[3rem]'>
                                    <aside className={`size-16 rounded-full flex items-center justify-center ${item.bg}`}>
                                        {item.emoji}
                                    </aside>
                                    <small>{item.name}</small>
                                    <aside className="w-full h-1 bg-gray-100 flex overflow-hidden rounded-lg">
                                        <div style={{ background: item.color }} className={`w-[40%]`} />
                                    </aside>
                                </div>
                            )
                        })
                    }
                </aside>

                <p className='mt-4'>Mental Health Assessment</p>
                <aside className="w-full flex flex-col gap-3">
                    {
                        [
                            {
                                name: 'Stress Level',
                                value: {value: 60, name: 'Moderate'},
                                color: '#DF8736'
                            },
                            {
                                name: 'Anxiety',
                                value: {value: 40, name: 'Mild'},
                                color: '#dfd736'
                            },
                            {
                                name: 'Sleep Quality',
                                value: {value: 80, name: 'Fair'},
                                color: '#3671df'
                            },
                            {
                                name: 'Energy Level',
                                value: {value: 20, name: 'Low'},
                                color: '#df3636'
                            },
                        ].map((item, idx) => {
                            return (
                                <div key={item.name} className='flex flex-col gap-1 w-full px-[3rem]'>
                                    <aside className="w-full flex justify-between">
                                        <p>{item.name}</p>
                                        <p>{item.value.name}</p>
                                    </aside>
                                    <aside className="w-full h-2 bg-gray-100 flex overflow-hidden rounded-xl">
                                        <div style={{width: `${item.value.value}%`, background: item.color}} className={``}/>
                                    </aside>
                                </div>
                            )
                        })
                    }
                </aside>
            </div>
        </section>
    </div>

}

export default CurrentHealth