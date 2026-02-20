'use client';

import { useState } from "react";

const approaches = [
    {
        name: "Physical Health",
        description: "Supporting physical wellness through exercise, nutrition, and preventive care.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        link: "/physical-health",
        linkText: "Learn more",
    },
    {
        name: "Mental Wellbeing",
        description: "Promoting mental health with counseling, mindfulness, and stress management.",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        link: "/mental-wellbeing",
        linkText: "Learn more",
    },
    {
        name: "Social Connection",
        description: "Building strong relationships and community engagement.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        link: "/social-connection",
        linkText: "Learn more",
    },
    {
        name: "Emotional Support",
        description: "Providing resources for emotional resilience and coping strategies.",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80",
        link: "/emotional-support",
        linkText: "Learn more",
    },
    {
        name: "Spiritual Care",
        description: "Encouraging spiritual growth and personal reflection.",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
        link: "/spiritual-care",
        linkText: "Learn more",
    },
    {
        name: "Financial Wellness",
        description: "Guidance on budgeting, saving, and financial planning.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        link: "/financial-wellness",
        linkText: "Learn more",
    },
    {
        name: "Environmental Health",
        description: "Creating safe and healthy living environments.",
        image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
        link: "/environmental-health",
        linkText: "Learn more",
    },
    {
        name: "Intellectual Growth",
        description: "Fostering lifelong learning and curiosity.",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        link: "/intellectual-growth",
        linkText: "Learn more",
    },
    {
        name: "Occupational Wellness",
        description: "Supporting career development and work-life balance.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
        link: "/occupational-wellness",
        linkText: "Learn more",
    },
    {
        name: "Cultural Awareness",
        description: "Celebrating diversity and fostering inclusion.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        link: "/cultural-awareness",
        linkText: "Learn more",
    },
];

export default function WholePersonApproach() {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const visible = approaches.slice(index, index + 3);
    const canPrev = index > 0;
    const canNext = index < approaches.length - 3;

    // Handle transition
    const handleChange = (newIndex: number) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => {
            setIndex(newIndex);
            setTransitioning(false);
        }, 300); // 300ms transition
    };

    return (
        <>
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-10 w-full transition-all duration-300 ${
                    transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
            >
                {visible.map((a, i) => (
                    <div key={i} className="bg-white flex flex-col items-center text-center">
                        <img
                            src={a.image}
                            alt={a.name}
                            className="rounded-2xl w-full h-[180px] object-cover mb-6"
                        />
                        <h3 className="text-xl font-bold text-[#351F65] mb-2">{a.name}</h3>
                        <p className="text-gray-800 mb-6">{a.description}</p>
                        <a href={a.link} className="text-[#6240E8] font-semibold flex items-center gap-1 hover:underline">
                            {a.linkText}
                            <svg width="18" height="18" fill="none" stroke="#6240E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-6 mt-8 justify-center">
                <button
                    className={`w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canPrev && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canPrev && handleChange(index - 1)}
                    disabled={!canPrev || transitioning}
                    aria-label="Previous"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: approaches.length - 2 }).map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#351F65]' : 'bg-[#E5E7EB]'}`}
                        ></span>
                    ))}
                </div>
                <button
                    className={`w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#351F65] hover:bg-[#E5E7EB] transition ${!canNext && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => canNext && handleChange(index + 1)}
                    disabled={!canNext || transitioning}
                    aria-label="Next"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#351F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </div>
        </>
    );
}
