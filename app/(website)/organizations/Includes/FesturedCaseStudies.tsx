'use client';

import { useState } from "react";

const caseStudies = [
    {
        name: "AFSPA",
        image: "/mobileapp.png",
        subtitle: "Case study",
        description: "Simplifying access to whole-person care across a global population",
        link: "#",
        linkText: "Download now"
    },
    {
        name: "Graco",
        image: "/mobileapp2.png",
        subtitle: "Case study",
        description: "Pioneering a successful whole-person strategy",
        link: "#",
        linkText: "Download now"
    },
    {
        name: "WellCare",
        image: "/riciacarehypertension.webp",
        subtitle: "Case study",
        description: "Improving hypertension outcomes with digital support",
        link: "#",
        linkText: "Download now"
    },
    {
        name: "HealthFirst",
        image: "/window.svg",
        subtitle: "Case study",
        description: "Driving engagement with virtual care solutions",
        link: "#",
        linkText: "Download now"
    }
];

export default function FeaturedCaseStudies() {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const visible = caseStudies.slice(index, index + 2);
    const canPrev = index > 0;
    const canNext = index < caseStudies.length - 2;

    // Handle transition
    const handleChange = (newIndex: number) => {
        setTransitioning(true);
        setTimeout(() => {
            setIndex(newIndex);
            setTransitioning(false);
        }, 300); // 300ms transition
    };

    return (
        <>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full transition-all duration-300 ${
                    transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
            >
                {visible.map((c, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center text-center md:text-left">
                        <div className="flex-1 flex flex-col justify-center items-start">
                            <span className="text-[#6240E8] font-semibold mb-2">{c.subtitle}</span>
                            <h3 className="text-2xl font-bold text-[#351F65] mb-2">{c.name}</h3>
                            <p className="text-gray-800 mb-6">{c.description}</p>
                            <a href={c.link} className="text-[#6240E8] font-semibold flex items-center gap-1 hover:underline">
                                {c.linkText}
                                <svg width="18" height="18" fill="none" stroke="#6240E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
                            <img
                                src={c.image}
                                alt={c.name}
                                className="rounded-2xl w-[180px] h-[180px] object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-6 mt-8 justify-center">
                <button
                    className={`w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canPrev && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canPrev && !transitioning && handleChange(index - 1)}
                    disabled={!canPrev || transitioning}
                    aria-label="Previous case studies"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: caseStudies.length - 1 }).map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#351F65]' : 'bg-[#E5E7EB]'}`}
                        ></span>
                    ))}
                </div>
                <button
                    className={`w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canNext && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canNext && !transitioning && handleChange(index + 1)}
                    disabled={!canNext || transitioning}
                    aria-label="Next case studies"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </div>
        </>
    );
}