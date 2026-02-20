'use client';

import { useState } from "react";

export default function TestimonialsCarousel() {
    const testimonials = [
        {
            name: "Jane Doe",
            text: "Ricia Care made my recovery so much easier. The team was supportive and the process was seamless.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "John Smith",
            text: "I felt truly cared for. Highly recommend Ricia Care to anyone needing rehabilitation.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Emily Johnson",
            text: "Professional staff and excellent facilities. My experience was fantastic from start to finish.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Michael Lee",
            text: "The personalized approach at Ricia Care made all the difference in my recovery.",
            image: "https://randomuser.me/api/portraits/men/76.jpg"
        }
    ];
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const visible = testimonials.slice(index, index + 2);
    const canPrev = index > 0;
    const canNext = index < testimonials.length - 2;

    // Handle transition
    const handleSwitch = (newIndex: number) => {
        setFade(true);
        setTimeout(() => {
            setIndex(newIndex);
            setFade(false);
        }, 250); // duration matches transition
    };

    return (
        <>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
                {visible.map((t, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                        <img src={t.image} alt={t.name} className="size-16 rounded-full" />
                        <p className="text-gray-800 my-4">
                            <span className="text-2xl text-[#351F65] font-serif mr-1">“</span>
                            {t.text}
                            <span className="text-2xl text-[#351F65] font-serif ml-1">”</span>
                        </p>
                        <span className="text-[#6240E8] font-semibold text-lg">{t.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-6 mt-8">
                <button
                    className={`w-12 h-12 rounded-full border border-indigo-900 bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canPrev && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canPrev && handleSwitch(index - 1)}
                    disabled={!canPrev}
                    aria-label="Previous testimonials"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: testimonials.length - 1 }).map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#351F65]' : 'bg-[#E5E7EB]'}`}
                        ></span>
                    ))}
                </div>
                <button
                    className={`w-12 h-12 rounded-full border border-indigo-900 bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canNext && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canNext && handleSwitch(index + 1)}
                    disabled={!canNext}
                    aria-label="Next testimonials"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </div>
        </>
    );
}
