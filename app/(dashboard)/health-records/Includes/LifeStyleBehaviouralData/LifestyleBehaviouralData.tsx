'use client';

import PageWrapper from '@/components/PageWrapper';
import { Sub } from '@radix-ui/react-dropdown-menu';
import React from 'react'
import CircularValueGauge from './SleepPatternsChart';
import CircularProgress from '@/components/CircularProgress';
import SleepChart from './SleepPatternsChart';


const lifeStyles = [
    {
        title: "Overall Wellness",
        value: "78/100",
        icon: (
            <div className="relative w-10 h-10">
                <svg viewBox="0 0 36 36" className="w-10 h-10">
                    <path
                        className="text-gray-200"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        className="text-green-500"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="74, 100"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-green-700 font-semibold text-sm">74%</span>
            </div>
        ),
        change: "+2% from last week",
        changeClass: "text-green-600",
    },
    {
        title: "Sleep Quality",
        value: "6.8/10",
        icon: (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                <svg width="24" height="24" fill="none"><path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3Zm0 16a7 7 0 0 1 0-14c.552 0 1 .448 1 1 0 4.418 3.582 8 8 8 .552 0 1 .448 1 1a7 7 0 0 1-10 4Z" fill="#a855f7" /></svg>
            </span>
        ),
        change: "-0.5 from last week",
        changeClass: "text-red-500",
    },
    {
        title: "Activity Level",
        value: "4.2/5",
        icon: (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                <svg width="24" height="24" fill="none"><path d="M13 7l-2 10m-2-4l4 4m4-4l-4 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
        ),
        change: "+0.3 from last week",
        changeClass: "text-green-600",
    },
    {
        title: "Stress Level",
        value: "3.5/10",
        icon: (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
                <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#eab308" strokeWidth="2" /><circle cx="9" cy="10" r="1" fill="#eab308" /><circle cx="15" cy="10" r="1" fill="#eab308" /><path d="M9 16c1.333-1 4-1 6 0" stroke="#eab308" strokeWidth="2" strokeLinecap="round" /></svg>
            </span>
        ),
        change: "0.8 from last week",
        changeClass: "text-red-500",
    },
]

export default function LifestyleBehaviouralData() {
    return <PageWrapper content={<>
        <section className="w-full flex flex-col gap-3">
            <span className="pb-4">Lifestyle and Behavioural Data</span>
            <div className="w-full flex overflow-x-auto gap-5">
                {lifeStyles.map((card, idx) => (
                    <div key={card.title} className="min-w-[250px] bg-white rounded-xl border p-6 flex flex-col gap-2">
                        <span className="font-medium">{card.title}</span>
                        <div className="flex w-full items-center justify-between">
                            <span className="text-3xl">{card.value}</span>
                            <div className="flex items-center gap-2">{card.icon}</div>
                        </div>
                        <span className={`${card.changeClass} text-sm mt-2`}>{card.change}</span>
                    </div>
                ))}
            </div>
        </section>

        <section className="w-full gap-5 flex">
            <div className="p-3 flex flex-col gap-3 rounded-xl border w-[300px]">
                <span className="border-b pb-2">
                    Substance Use
                </span>
                <div className="w-full grid grid-cols-2 gap-2">
                    <CircularProgress content={<div className='flex flex-col items-center'><b>2</b><small className="text-gray-600">Cigaretters/day</small></div>} value={20} className="size-[120px]" />
                    <CircularProgress content={<div className='flex flex-col items-center'><b>4</b><small className="text-gray-600">Alcoholic drinks/week</small></div>} value={40} className="size-[120px]" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <span className="w-full flex items-center justify-between">
                            <small>Smoking</small>
                            <small className='text-red-500'>High Risk</small>
                        </span>
                        <div className="relative w-full flex rounded-2xl h-2 bg-gray-200">
                            <span className="h-full w-[70%] bg-red-500 rounded-2xl" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <span className="w-full flex items-center justify-between">
                            <small>Alcohol</small>
                            <small className='text-orange-500'>Moderate</small>
                        </span>
                        <div className="relative w-full flex rounded-2xl h-2 bg-gray-200">
                            <span className="h-full w-[70%] bg-orange-500 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-3 rounded-xl border w-[300px]">
                <span className="border-b pb-2">
                    Substance Use
                </span>
                <div className="w-full flex justify-center gap-2">
                    <CircularProgress content={<div className='flex flex-col items-center'><b>68</b><small className="text-gray-600">Cigaretters/day</small></div>} value={68} className="size-[120px]" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex flex-col gap-1">
                        <span className="w-full flex items-center justify-between">
                            <small>Smoking</small>
                            <small className='text-emerald-500'>4.2/5</small>
                        </span>
                        <div className="relative w-full flex rounded-2xl h-2 bg-gray-200">
                            <span className="h-full w-[70%] bg-emerald-500 rounded-2xl" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <span className="w-full flex items-center justify-between">
                            <small>Processed Foods</small>
                            <small className='text-red-500'>3.1/5</small>
                        </span>
                        <div className="relative w-full flex rounded-2xl h-2 bg-gray-200">
                            <span className="h-full w-[70%] bg-red-500 rounded-2xl" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <span className="w-full flex items-center justify-between">
                            <small>Water Intake</small>
                            <small className=''>2.5L</small>
                        </span>
                        <div className="relative w-full flex rounded-2xl h-2 bg-gray-200">
                            <span className="h-full w-[50%] bg-blue-500 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-3 rounded-xl border w-[300px]">
                <span className="border-b pb-2">
                    Physical Activity
                </span>
                <div className="w-full grid grid-cols-2 gap-5">
                    <span className="flex flex-col">
                        <p className="text-sm text-gray-500">Hours/week</p>
                        <b className="text-3xl">4.2</b>
                    </span>
                    <span className="flex flex-col">
                        <p className="text-sm text-gray-500">Workouts</p>
                        <b className="text-3xl">3</b>
                    </span>
                    <span className="flex flex-col">
                        <p className="text-sm text-gray-500">Steps/day</p>
                        <b className="text-3xl">6,842</b>
                    </span>
                </div>
            </div>
        </section>

        <section className="w-full flex flex-col gap-2 border rounded-xl p-4">
            <div className="w-full border-b flex items-center justify-between">
                <p>Sleep Patterns</p>
                <span className="flex items-center gap-2">
                    <div className="flex flex-col items-start">
                        <small>7.2</small>
                        <small className="text-gray-500">Avg. Hours</small>
                    </div>
                    <div className="flex flex-col items-start">
                        <small>7.2</small>
                        <small className="text-gray-500">Avg. Hours</small>
                    </div>
                    <div className="flex flex-col items-start">
                        <small>7.2</small>
                        <small className="text-gray-500">Avg. Hours</small>
                    </div>
                    <div className="flex flex-col items-start">
                        <small>7.2</small>
                        <small className="text-gray-500">Avg. Hours</small>
                    </div>
                </span>
            </div>
            <SleepChart data={weekly} />
        </section>

        <section className="w-full border rounded-2xl p-4 flex flex-col gap-2">
            <span className="border-b pb-4">Personalized Recommendations</span>
            <div className="flex items-center gap-5 overflow-x-auto py-2">
                {[
                    {
                        title: "Quit Smoking",
                        description: "Consider nicotine replacement therapy to help reduce cravings.",
                    },
                    {
                        title: "Improve Diet",
                        description: "Add more leafy greens and reduce processed food intake by 20%.",
                    },
                    {
                        title: "Sleep Routine",
                        description: "Try going to bed 30 minutes earlier to improve sleep quality.",
                    },
                    {
                        title: "Stress Management",
                        description: "Practice 10 minutes of mindfulness meditation daily.",
                    },
                ].map((rec, idx) => (
                    <div
                        key={rec.title}
                        className={`w-[220px] h-[130px] rounded-xl p-4 flex flex-col gap-2`}
                        style={{
                            backgroundColor: [
                                "#fee2e24b", // Quit Smoking - light red
                                "#d1fadf5d", // Improve Diet - light green
                                "#e0e7ff63", // Sleep Routine - light indigo
                                "#fef9c360", // Stress Management - light yellow
                            ][idx]
                        }}
                    >
                        <span className="font-semibold">{rec.title}</span>
                        <span className="text-gray-600 text-sm">{rec.description}</span>
                    </div>
                ))}
            </div>
        </section>
    </>} />
}

const weekly = [
    { day: 'Monday', hours: 6.0, sleepQualityPct: 38 },
    { day: 'Tuesday', hours: 6.5, sleepQualityPct: 82 },
    { day: 'Wednesday', hours: 7.6, sleepQualityPct: 15 },
    { day: 'Thursday', hours: 7.8, sleepQualityPct: 17 },
    { day: 'Friday', hours: 7.5, sleepQualityPct: 18 },
    { day: 'Saturday', hours: 7.0, sleepQualityPct: 66 },
    { day: 'Sunday', hours: 3.7, sleepQualityPct: 15 },
];
