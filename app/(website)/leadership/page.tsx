'use client';

import React, { useState } from 'react'

const list = [
    {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Jane Doe",
        role: "Chief Executive Officer",
        bio: "Jane leads the company with over 15 years of experience in healthcare management and innovation.",
        description: "Jane Doe is a visionary leader with a proven track record in steering organizations towards growth and excellence. Her expertise spans strategic planning, organizational development, and fostering a culture of innovation. Jane is passionate about improving patient outcomes and has successfully led multiple large-scale healthcare initiatives. She is known for her empathetic leadership style, commitment to diversity, and ability to inspire teams to achieve ambitious goals."
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Smith",
        role: "Chief Technology Officer",
        bio: "John oversees all technical operations, driving digital transformation and product development.",
        description: "John Smith brings a wealth of experience in software engineering, cloud infrastructure, and digital health solutions. He has led cross-functional teams in building scalable platforms and is recognized for his innovative approach to technology adoption. John is dedicated to leveraging technology to enhance patient care and streamline operations. He is a frequent speaker at tech conferences and mentors aspiring engineers in the healthcare sector."
    },
    {
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Susan Lee",
        role: "Chief Operations Officer",
        bio: "Susan ensures operational excellence and efficiency across all departments at Ricia Care.",
        description: "Susan Lee is an operations expert with a keen eye for process optimization and organizational efficiency. With a background in healthcare administration, she has implemented systems that have significantly improved service delivery and patient satisfaction. Susan excels at building high-performing teams and fostering collaboration across departments. Her leadership ensures that Ricia Care operates smoothly and adapts quickly to industry changes."
    },
    {
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "Michael Brown",
        role: "Chief Financial Officer",
        bio: "Michael manages the company’s finances, focusing on sustainable growth and fiscal responsibility.",
        description: "Michael Brown is a seasoned financial strategist with extensive experience in budgeting, forecasting, and investment management. He has played a pivotal role in securing funding and guiding Ricia Care through periods of rapid expansion. Michael is committed to transparency and ethical financial practices, ensuring the company’s long-term stability. He collaborates closely with other executives to align financial planning with organizational goals."
    },
    {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Jane Doe",
        role: "Chief Executive Officer",
        bio: "Jane leads the company with over 15 years of experience in healthcare management and innovation.",
        description: "Jane Doe is a visionary leader with a proven track record in steering organizations towards growth and excellence. Her expertise spans strategic planning, organizational development, and fostering a culture of innovation. Jane is passionate about improving patient outcomes and has successfully led multiple large-scale healthcare initiatives. She is known for her empathetic leadership style, commitment to diversity, and ability to inspire teams to achieve ambitious goals."
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Smith",
        role: "Chief Technology Officer",
        bio: "John oversees all technical operations, driving digital transformation and product development.",
        description: "John Smith brings a wealth of experience in software engineering, cloud infrastructure, and digital health solutions. He has led cross-functional teams in building scalable platforms and is recognized for his innovative approach to technology adoption. John is dedicated to leveraging technology to enhance patient care and streamline operations. He is a frequent speaker at tech conferences and mentors aspiring engineers in the healthcare sector."
    },
    {
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Susan Lee",
        role: "Chief Operations Officer",
        bio: "Susan ensures operational excellence and efficiency across all departments at Ricia Care.",
        description: "Susan Lee is an operations expert with a keen eye for process optimization and organizational efficiency. With a background in healthcare administration, she has implemented systems that have significantly improved service delivery and patient satisfaction. Susan excels at building high-performing teams and fostering collaboration across departments. Her leadership ensures that Ricia Care operates smoothly and adapts quickly to industry changes."
    },
    {
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "Michael Brown",
        role: "Chief Financial Officer",
        bio: "Michael manages the company’s finances, focusing on sustainable growth and fiscal responsibility.",
        description: "Michael Brown is a seasoned financial strategist with extensive experience in budgeting, forecasting, and investment management. He has played a pivotal role in securing funding and guiding Ricia Care through periods of rapid expansion. Michael is committed to transparency and ethical financial practices, ensuring the company’s long-term stability. He collaborates closely with other executives to align financial planning with organizational goals."
    },
]

function LeadershipPage() {
    const [activeLeader, setActiveLeader] = useState<typeof list[0] | null>(null)
    const closeActiveLeader = () => setActiveLeader(null);
    return (
        <div className="">
            {
                activeLeader ? <div className='fixed size-full flex flex-col items-center justify-center bg-[#00000094] z-[999]'>
                    <div onClick={() => closeActiveLeader()} className='size-full absolute' />
                    <section className="bg-white p-5 rounded-3xl flex flex-col relative z-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-32">
                                <img src={activeLeader.image} alt={activeLeader.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="text-2xl font-bold">{activeLeader.name}</div>
                            <div className="text-lg text-gray-600">{activeLeader.role}</div>
                            <div className="text-sm w-[70%] text-gray-500 text-center">{activeLeader.bio}</div>
                            <hr className='w-full' />
                            <div className="mt-2 text-sm text-gray-800 text-center max-w-xl">{activeLeader.description}</div>
                        </div>
                    </section>
                </div> : null
            }
            <main className="min-h-[100dvh] h-auto flex flex-col items-center justify-between">
                <section className="w-full flex flex-col items-center py-[4rem]">
                    <div className="w-[1200px] flex flex-col items-center gap-4">
                        <b className="font-bold text-[3rem]">Our Executive Team</b>

                        <div className="w-full gap-5 columns-4">
                            {
                                list.map((leader, idx) => (
                                    <div key={`leader-${idx}`} onClick={() => setActiveLeader(leader)} className="mb-8 break-inside-avoid rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer bg-white shadow p-4 flex flex-col items-center">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-32 h-32 object-cover rounded-full mb-4"
                                        />
                                        <div className="text-xl font-semibold">{leader.name}</div>
                                        <div className="text-gray-600 mb-2">{leader.role}</div>
                                        <div className="text-gray-700 text-center text-sm">{leader.bio}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LeadershipPage