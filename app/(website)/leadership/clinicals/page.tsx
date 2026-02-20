import Hero from '@/components/Hero'
import React from 'react'

const list = [
    {
        image: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder image for Dr. Joshua Odame
        name: 'Dr. Joshua Odame',
        role: 'Regional Medical Director, General Medical',
        socialMediaLink: 'https://www.linkedin.com/in/joshuaodame'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg', // Placeholder image for Dr. Vidya Raman-Tangella
        name: 'Dr. Vidya Raman-Tangella',
        role: 'Chief Medical Officer, Teladoc Health',
        socialMediaLink: 'https://www.linkedin.com/in/vidyart'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder real image for Dr. Jane Doe
        name: 'Dr. Jane Doe',
        role: 'Director of Clinical Operations',
        socialMediaLink: 'https://www.linkedin.com/in/janedoe'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/46.jpg', // Placeholder real image for Dr. John Smith
        name: 'Dr. John Smith',
        role: 'Lead Physician, Patient Care',
        socialMediaLink: 'https://www.linkedin.com/in/johnsmith'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder image for Dr. Joshua Odame
        name: 'Dr. Joshua Odame',
        role: 'Regional Medical Director, General Medical',
        socialMediaLink: 'https://www.linkedin.com/in/joshuaodame'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg', // Placeholder image for Dr. Vidya Raman-Tangella
        name: 'Dr. Vidya Raman-Tangella',
        role: 'Chief Medical Officer, Teladoc Health',
        socialMediaLink: 'https://www.linkedin.com/in/vidyart'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder real image for Dr. Jane Doe
        name: 'Dr. Jane Doe',
        role: 'Director of Clinical Operations',
        socialMediaLink: 'https://www.linkedin.com/in/janedoe'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/46.jpg', // Placeholder real image for Dr. John Smith
        name: 'Dr. John Smith',
        role: 'Lead Physician, Patient Care',
        socialMediaLink: 'https://www.linkedin.com/in/johnsmith'
    },
]

function ClinicalLeadership() {
    return <div className="">
        <main className="min-h-[100dvh] h-auto flex flex-col items-center bg-white">
            <Hero className={`max-h-[400px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-indigo-800 text-white text-center'>
                <b className="text-[3rem] leading-[3rem]">Clinical leadership</b>
                <p>{`"As healthcare providers, we must strive to be the GPS guidance system for every individual on their health journey."`}</p>
                <div className="my-1 flex flex-col">
                    <b className="text-sky-200">Dr Vidya Raman-Tangella</b>
                    <p>Chief Medical Officer, Teladoc Health</p>
                </div>
            </div>}/>

            <div className="w-full flex flex-col items-center bg-white z-10 py-[4rem]">
                <section className="w-[1200px] grid grid-cols-2 gap-[4rem]">
                    {list.map((person, idx) => (
                        <aside
                            key={`leadership - ${idx}`}
                            className={`w-full flex ${idx % 2 === 1 ? 'flex-row-reverse' : ''} items-center justify-end gap-3`}
                        >
                            <div className={`flex flex-col ${idx % 2 === 1 ? 'items-start' : 'items-end'}`}>
                                <b className='text-lg'>{person.name}</b>
                                <p className="text-sm">{person.role}</p>
                                <a
                                    href={person.socialMediaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-600 underline text-xs mt-1"
                                >
                                    View Profile
                                </a>
                            </div>
                            <div className="size-32 border overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem]">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </aside>
                    ))}
                </section>
            </div>
        </main>
    </div>
}

export default ClinicalLeadership