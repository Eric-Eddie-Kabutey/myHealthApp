'use client';

// File: components/Header/Includes/CliniciansMenuContent.tsx
// Active row: card-lift shadow + inset left bar.
// Triangle on right edge of col1, tip points RIGHT into col2, follows mouse Y.

import React, { useRef, useState } from 'react';

const GREEN     = '#34765A';
const ACTIVE_BG = '#e8f5ee';
const COL3_BG   = '#f1f3f9';
const PROMO_BG  = '#1b4535';

// ─── SVG icons per team item ──────────────────────────────────────────────────
const clinicianIcons: Record<string, React.ReactNode> = {
    'Our Providers': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    'Clinical Leadership': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    'Provider Careers': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const teamItems = [
    {
        name: 'Our Providers',
        description: 'Explore career opportunities and resources for providers.',
        links: [{ name: 'Explore provider resources', link: '/providers', external: false }],
    },
    {
        name: 'Clinical Leadership',
        description: 'Meet our leadership team and explore their roles.',
        links: [{ name: 'Meet our leadership team', link: '/providers/leadership', external: false }],
    },
    {
        name: 'Provider Careers',
        description: 'Interested in joining our world-class team? View our openings.',
        links: [{ name: 'View openings', link: '/providers/careers', external: true }],
    },
];

const exploreItems = [
    { name: 'Join Our Team', link: '/providers/careers',  external: true  },
    { name: 'About Us',      link: '/about',               external: false },
    { name: 'Our Impact',    link: '/about/our-impact',    external: false },
    { name: 'Contact Us',    link: '/contact#clinicians',  external: false },
];

const ExtIcon = () => (
    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0, color: '#9ca3af' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
function CliniciansMenuContent() {
    const [active, setActive]           = useState('Our Providers');
    const [triangleTop, setTriangleTop] = useState(24);
    const col1Ref = useRef<HTMLElement>(null);

    const activeItem = teamItems.find(i => i.name === active);

    // Track mouse Y across col1 for smooth triangle follow
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (col1Ref.current) {
            const colTop  = col1Ref.current.getBoundingClientRect().top;
            const raw     = e.clientY - colTop;
            const clamped = Math.max(16, Math.min(raw, col1Ref.current.offsetHeight - 16));
            setTriangleTop(clamped);
        }
    };

    return (
        <div className="w-full grid grid-cols-4" style={{ fontFamily: "'Raleway', system-ui, sans-serif" }}>

            {/* ── COL 1: Our Team ── */}
            <section
                ref={col1Ref}
                className="relative py-5 bg-white border-r border-gray-100"
                style={{ boxShadow: '6px 0 20px -5px rgba(0,0,0,0.12)', zIndex: 1 }}
                onMouseMove={handleMouseMove}
            >
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-2 px-4">
                    Our Team
                </p>

                {teamItems.map((item) => {
                    const isActive = active === item.name;
                    return (
                        <button
                            key={item.name}
                            onMouseEnter={() => setActive(item.name)}
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
                            {/* SVG icon circle */}
                            <div
                                style={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    background: isActive ? '#bbf7d0' : '#f0fdf4',
                                    color:      isActive ? GREEN     : '#16a34a',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginRight: 12, flexShrink: 0,
                                    transition: 'background 0.1s',
                                }}
                            >
                                {clinicianIcons[item.name]}
                            </div>
                            {item.name}
                        </button>
                    );
                })}

                {/* Triangle — tip points RIGHT into col2, follows mouse */}
                <svg
                    viewBox="0 0 10 18"
                    width="11"
                    height="18"
                    aria-hidden="true"
                    style={{
                        position:      'absolute',
                        right:         -5,
                        top:           triangleTop - 9,
                        pointerEvents: 'none',
                        zIndex:        10,
                        transition:    'top 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
                        filter:        'drop-shadow(-2px 0 4px rgba(0,0,0,0.1))',
                    }}
                >
                    <path d="M10 0 L0 9 L10 18 Z" fill={ACTIVE_BG} />
                </svg>
            </section>

            {/* ── COL 2: Who We Are ── */}
            <section className="py-5 px-6 bg-white">
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-3">
                    Who We Are
                </p>
                {activeItem && (
                    <div className="flex flex-col gap-3">
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            {activeItem.description}
                        </p>
                        <div className="flex flex-col gap-0.5 mt-1">
                            {activeItem.links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-1.5 py-1 transition-colors"
                                    style={{ fontSize: '13.5px', fontWeight: 600, color: '#14161a' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                                    onMouseLeave={e => (e.currentTarget.style.color = '#14161a')}
                                >
                                    {link.name}
                                    {link.external && <ExtIcon />}
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
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-1.5 py-[7px] transition-colors"
                            style={{ fontSize: '13.5px', fontWeight: 500, color: '#14161a' }}
                            onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                            onMouseLeave={e => (e.currentTarget.style.color = '#14161a')}
                        >
                            {item.name}
                            {item.external && <ExtIcon />}
                        </a>
                    ))}
                </div>
            </section>

            {/* ── COL 4: Promo dark green ── */}
            <section className="flex flex-col overflow-hidden" style={{ background: PROMO_BG }}>
                <div
                    className="w-full h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80)` }}
                />
                <div className="flex flex-col gap-4 p-5 flex-1">
                    <h3 className="text-white font-bold text-[15px] leading-snug">
                        Simplify your work. Amplify your impact.
                    </h3>
                    <a
                        href="/providers/careers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white text-[13px] font-semibold hover:underline mt-auto"
                    >
                        See open roles
                        <ExtIcon />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default CliniciansMenuContent;