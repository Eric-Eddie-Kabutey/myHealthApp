'use client';

import React, { useRef } from 'react';

const newsItems = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        type: 'Video',
        category: 'CHRONIC CARE, HEALTH PLANS, VIRTUAL...',
        title: 'Dr. Oz Talks Healthcare Reform, Virtual Care in a Fireside Chat',
        link: '#',
        linkText: 'Read More',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 9h8m0 0l-3-3m3 3l-3 3" />
            </svg>
        ),
    },
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        type: 'Video',
        category: 'CHRONIC CARE, HEALTH PLANS, VIRTUAL...',
        title: 'How Teladoc Health Is Unlocking the Potential of Virtual Care',
        link: '#',
        linkText: 'Watch Now',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="9" r="7" />
                <polygon points="8,6 14,9 8,12" />
            </svg>
        ),
    },
    {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        type: 'Video',
        category: 'CHRONIC CARE, HEALTH PLANS, VIRTUAL...',
        title: 'Perspectives on the Path Ahead for Virtual Care',
        link: '#',
        linkText: 'Watch Now',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="9" r="7" />
                <polygon points="8,6 14,9 8,12" />
            </svg>
        ),
    },
    {
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
        type: 'Article',
        category: 'ARTICLE, VIRTUAL CARE',
        title: 'Employers can address parental burnout with virtual care, new...',
        link: '#',
        linkText: 'Read More',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 9h8m0 0l-3-3m3 3l-3 3" />
            </svg>
        ),
    },
];

function NewsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const cardWidth = 320 + 16; // max-w + gap
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <aside className="w-full">
            <div
                ref={scrollRef}
                className="flex items-center gap-4 overflow-x-auto pb-4 scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
            >
                {[...newsItems, ...newsItems].map((item, idx) => (
                    <div key={idx} className="min-w-[280px] max-w-[320px] text-left bg-white rounded-2xl shadow-md p-4 flex flex-col">
                        <div className="rounded-xl overflow-hidden mb-3">
                            <img src={item.image} alt={item.title} className="w-full h-[140px] object-cover" />
                        </div>
                        <span
                            className={`${
                                item.type === 'Article'
                                    ? 'bg-gray-700'
                                    : 'bg-black'
                            } text-white text-xs px-2 py-1 rounded-full w-fit mb-2`}
                        >
                            {item.type}
                        </span>
                        <div className="text-xs text-gray-500 mb-2 truncate">{item.category}</div>
                        <h3 className="font-semibold text-lg leading-6 text-indigo-900 mb-2 truncate">{item.title}</h3>
                        <a href={item.link} className="flex items-center text-primary font-medium gap-1 mt-auto text-xs">
                            {item.type === 'Video' && item.icon}
                            <span>{item.linkText}</span>
                            {item.type === 'Article' && item.icon}
                        </a>
                    </div>
                ))}
            </div>
            {/* Navigation arrows */}
            <div className="flex justify-end gap-4 mt-4">
                <button
                    className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </aside>
    );
}

export default NewsCarousel;