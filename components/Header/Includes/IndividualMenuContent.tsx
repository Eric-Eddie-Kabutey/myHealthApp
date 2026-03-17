'use client';

import React, { useRef, useState, useCallback } from 'react';

const GREEN     = '#34765A';
const ACTIVE_BG = '#e8f5ee';
const COL3_BG   = '#f1f3f9';
const PROMO_BG  = '#1b4535';

// ─── SVG icons per item ───────────────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
    '24/7 Care': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    'Mental Health': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    'Weight Management': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
    ),
    'Diabetes Management': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
    'Hypertension Management': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ),
    'Specialty & Wellness': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
    'Primary Care': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const items = [
    {
        name: '24/7 Care',
        description: 'Skip the trip and get same-day care for common conditions.',
        services: [
            { name: 'Overview',     link: '/247care',   external: false },
            { name: 'Get Care Now', link: '/register', external: true  },
        ],
    },
    {
        name: 'Mental Health',
        description: 'Find therapy that works best for you.',
        services: [
            { name: 'Overview',   link: '/mental-health',            external: false },
            { name: 'BetterHelp', link: '/mental-health/betterhelp', external: true  },
        ],
    },
    {
        name: 'Weight Management',
        description: 'Weight loss and healthy living tailored to you.',
        services: [
            { name: 'Overview',                     link: '/weight-management',                     external: false },
            { name: 'Diabetes Prevention',           link: '/weight-management/diabetes-prevention', external: false },
            { name: 'GLP-1 Prescription & Support',  link: '/weight-management/glp1',                external: false },
            { name: 'Nutrition',                     link: '/weight-management/nutrition',            external: false },
        ],
    },
    {
        name: 'Diabetes Management',
        description: 'A personalized way to manage and prevent diabetes.',
        services: [
            { name: 'Overview',            link: '/diabetes-management',            external: false },
            { name: 'Diabetes Prevention', link: '/diabetes-management/prevention', external: false },
        ],
    },
    {
        name: 'Hypertension Management',
        description: 'Lowering your blood pressure just got easier.',
        services: [
            { name: 'Overview', link: '/hypertension-management', external: false },
        ],
    },
    {
        name: 'Specialty & Wellness',
        description: "Skin issues? Meal planning? Or need a second opinion? We've got you covered.",
        services: [
            { name: 'Overview',                link: '/specialty-wellness',                 external: false },
            { name: 'Dermatology',             link: '/specialty-wellness/dermatology',     external: false },
            { name: 'Expert Medical Opinion', link: '/specialty-wellness/medical-experts', external: false },
            { name: 'BetterSleep — Try for $0', link: '/specialty-wellness/bettersleep',  external: true  },
        ],
    },
    {
        name: 'Primary Care',
        description: 'Looking for convenient, high-quality primary care? Welcome.',
        services: [
            { name: 'Overview', link: '/primary-care', external: false },
        ],
    },
];

const exploreItems = [
    { name: 'Care Without Insurance',  link: '/care-without-insurance' },
    { name: 'How It Works',            link: '/how-it-works' },
    { name: 'Medicare',                link: '/medicare' },
    { name: 'Medicaid',                link: '/medicaid' },
    { name: 'FAQs',                    link: '/faqs' },
    { name: 'About Us',                link: '/about' },
    { name: 'Our Impact',              link: '/about/our-impact' },
    { name: 'Teladoc Health Library',  link: '/library' },
    { name: 'Contact Us',              link: '/contact' },
];

const ExtIcon = () => (
    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0, color: '#9ca3af' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
function IndividualMenuContent() {
    const [active, setActive]           = useState('24/7 Care');
    const [triangleTop, setTriangleTop] = useState(62); // Initial center of first item
    const col1Ref  = useRef<HTMLElement>(null);
    const btnRefs  = useRef<Record<string, HTMLButtonElement | null>>({});

    const activeItem = items.find(i => i.name === active);

    // Snap triangle to vertical center of the hovered button
    const handleHover = useCallback((name: string) => {
        setActive(name);
        const btn = btnRefs.current[name];
        const col = col1Ref.current;
        if (btn && col) {
            const colTop  = col.getBoundingClientRect().top;
            const btnRect = btn.getBoundingClientRect();
            // Center of the button relative to the column top
            const center  = btnRect.top - colTop + btnRect.height / 2;
            setTriangleTop(center);
        }
    }, []);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4" style={{ fontFamily: "'Raleway', system-ui, sans-serif" }}>

            {/* ── COL 1: Ways We Help ── */}
            <section
                ref={col1Ref}
                className="relative py-5 bg-white border-b md:border-b-0 md:border-r border-gray-100 shadow-sm md:shadow-[6px_0_20px_-5px_rgba(0,0,0,0.12)]"
                style={{ zIndex: 1 }}
            >
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-2 px-4">
                    Ways We Help
                </p>

                {items.map((item) => {
                    const isActive = active === item.name;
                    return (
                        <button
                            key={item.name}
                            ref={el => { btnRefs.current[item.name] = el; }} 
                            onMouseEnter={() => handleHover(item.name)}
                            onClick={() => handleHover(item.name)}
                            className="w-full text-left flex items-center transition-all duration-100"
                            style={{
                                padding:    isActive ? '11px 16px' : '9px 16px',
                                background: isActive ? ACTIVE_BG  : 'transparent',
                                color:      isActive ? GREEN      : '#14161a',
                                fontSize:   '13.5px',
                                fontWeight: 600,
                                boxShadow:  isActive
                                    ? 'inset 3px 0 0 #34765A, 4px 0 16px -2px rgba(52,118,90,0.22)'
                                    : 'none',
                            }}
                        >
                            <div style={{
                                width: 32, height: 32, borderRadius: '50%',
                                background: isActive ? '#bbf7d0' : '#f0fdf4',
                                color:      isActive ? GREEN     : '#16a34a',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginRight: 12, flexShrink: 0,
                                transition: 'background 0.1s',
                            }}>
                                {icons[item.name]}
                            </div>
                            {item.name}
                        </button>
                    );
                })}

                {/* Triangle snaps to center of active row */}
                <svg
                    viewBox="0 0 10 18" width="11" height="18" aria-hidden="true"
                    className="hidden md:block"
                    style={{
                        position:      'absolute',
                        right:          -5,
                        top:            triangleTop - 9,
                        pointerEvents: 'none',
                        zIndex:         10,
                        transition:    'top 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
                        filter:        'drop-shadow(-2px 0 4px rgba(0,0,0,0.1))',
                    }}
                >
                    <path d="M10 0 L0 9 L10 18 Z" fill={ACTIVE_BG} />
                </svg>
            </section>

            {/* ── COL 2: Services ── */}
            <section className="py-5 px-6 bg-white border-b md:border-b-0 border-gray-100">
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-3">
                    Services
                </p>
                {activeItem && (
                    <div className="flex flex-col gap-3">
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            {activeItem.description}
                        </p>
                        <div className="flex flex-col gap-0.5 mt-1">
                            {activeItem.services.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.link}
                                    target={s.external ? '_blank' : undefined}
                                    rel={s.external ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-1.5 py-1 transition-colors"
                                    style={{ color: '#14161a', fontSize: '13.5px', fontWeight: 600 }}
                                    onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                                    onMouseLeave={e => (e.currentTarget.style.color = '#14161a')}
                                >
                                    {s.name}
                                    {s.external && <ExtIcon />}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* ── COL 3: Explore ── */}
            <section className="py-5 px-6" style={{ background: COL3_BG }}>
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-3">
                    Explore
                </p>
                <div className="flex flex-col">
                    {exploreItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="py-[7px] transition-colors"
                            style={{ fontSize: '13.5px', fontWeight: 500, color: '#14161a' }}
                            onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                            onMouseLeave={e => (e.currentTarget.style.color = '#14161a')}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </section>

            {/* ── COL 4: Promo ── */}
            <section className="flex flex-col overflow-hidden" style={{ background: PROMO_BG }}>
                <div
                    className="w-full h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80)` }}
                />
                <div className="flex flex-col gap-4 p-5 flex-1">
                    <h3 className="text-white font-bold text-[15px] leading-snug">
                        Stop racing thoughts and start sleeping better
                    </h3>
                    <a
                        href="/wellness/sleep"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white text-[13px] font-semibold hover:underline mt-auto"
                    >
                        Try RiciaSleep — 30 days for $0
                        <ExtIcon />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default IndividualMenuContent;