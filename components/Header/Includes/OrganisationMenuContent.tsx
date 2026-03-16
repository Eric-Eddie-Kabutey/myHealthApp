'use client';

// File: components/Header/Includes/OrganisationMenuContent.tsx
// Active row: card-lift shadow + inset left bar.
// Triangle on right edge of col1, faces RIGHT (tip points into col2), follows mouse Y.

import React, { useRef, useState } from 'react';

const GREEN     = '#34765A';
const ACTIVE_BG = '#e8f5ee';
const COL3_BG   = '#f1f3f9';

// ─── SVG icons per partner ────────────────────────────────────────────────────
const orgIcons: Record<string, React.ReactNode> = {
    'Employers': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    'Health Plans': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    'Hospitals & Health Systems': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const partners = [
    {
        name: 'Employers',
        description: 'Comprehensive care for better employee health',
        solutions: [
            { name: 'Overview',                               link: '/organizations/employers',               sub: false },
            { name: 'Integrated Care',                        link: '/organizations/employers/integrated',    sub: false },
            { name: '24/7 Care',                              link: '/organizations/employers/247-care',      sub: false },
            { name: 'Chronic Care',                           link: '/organizations/employers/chronic',       sub: false },
            { name: 'Diabetes',                               link: '/organizations/solutions/diabetes',      sub: true  },
            { name: 'Hypertension',                           link: '/organizations/solutions/hypertension',  sub: true  },
            { name: 'Obesity & Weight Care',                  link: '/organizations/solutions/obesity',       sub: true  },
            { name: 'Mental Health',                          link: '/organizations/employers/mental-health', sub: false },
            { name: 'Wellbound: Employee Assistance Program', link: '/organizations/employers/eap',           sub: true  },
            { name: 'Primary Care',                           link: '/organizations/employers/primary-care',  sub: false },
        ],
    },
    {
        name: 'Health Plans',
        description: 'Integrated care solutions for commercial and government populations',
        solutions: [
            { name: 'Overview',                               link: '/organizations/health-plans',                sub: false },
            { name: 'Integrated Care',                        link: '/organizations/health-plans/integrated',    sub: false },
            { name: '24/7 Care',                              link: '/organizations/health-plans/247-care',      sub: false },
            { name: 'Chronic Care',                           link: '/organizations/health-plans/chronic',       sub: false },
            { name: 'Diabetes',                               link: '/organizations/solutions/diabetes',         sub: true  },
            { name: 'Hypertension',                           link: '/organizations/solutions/hypertension',     sub: true  },
            { name: 'Obesity & Weight Care',                  link: '/organizations/solutions/obesity',          sub: true  },
            { name: 'Mental Health',                          link: '/organizations/health-plans/mental-health', sub: false },
            { name: 'Wellbound: Employee Assistance Program', link: '/organizations/employers/eap',              sub: true  },
            { name: 'Primary Care',                           link: '/organizations/health-plans/primary-care',  sub: false },
        ],
    },
    {
        name: 'Hospitals & Health Systems',
        description: 'Enabling virtual care at scale from hospital to home',
        solutions: [
            { name: 'Overview',              link: '/organizations/hospitals',                 sub: false },
            { name: 'Virtual Care Platform', link: '/organizations/hospitals/virtual-care',    sub: false },
            { name: 'Emergency Services',    link: '/organizations/hospitals/emergency',       sub: false },
            { name: 'Telestroke',            link: '/organizations/solutions/telestroke',      sub: true  },
            { name: 'Inpatient Services',    link: '/organizations/hospitals/inpatient',       sub: false },
            { name: 'Virtual Nursing',       link: '/organizations/solutions/virtual-nursing', sub: true  },
            { name: 'Virtual Sitting',       link: '/organizations/solutions/virtual-sitting', sub: true  },
            { name: 'Outpatient Services',   link: '/organizations/hospitals/outpatient',      sub: false },
            { name: 'Devices',               link: '/organizations/hospitals/devices',         sub: false },
        ],
    },
];

const exploreItems = [
    { name: 'Our Approach',            link: '/organizations/our-approach' },
    { name: 'Connected Care Partners', link: '/organizations/connected-care-partners' },
    { name: 'Resource Center',         link: '/organizations/resources' },
    { name: 'Events',                  link: '/organizations/events' },
    { name: 'About Us',                link: '/about' },
    { name: 'Our Impact',              link: '/about/our-impact' },
    { name: 'Contact Us',              link: '/contact#organizations' },
];

// ─── Component ────────────────────────────────────────────────────────────────
function OrganisationMenuContent() {
    const [active, setActive]           = useState('Employers');
    const [triangleTop, setTriangleTop] = useState(40);
    const col1Ref = useRef<HTMLElement>(null);

    const activePartner = partners.find(p => p.name === active);

    // Track mouse Y across entire col1 for smooth triangle follow
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

            {/* ── COL 1: Partners ── */}
            <section
                ref={col1Ref}
                className="relative py-5 bg-white border-r border-gray-100"
                style={{ boxShadow: '6px 0 20px -5px rgba(0,0,0,0.12)', zIndex: 1 }}
                onMouseMove={handleMouseMove}
            >
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-2 px-4">
                    Partners
                </p>

                {partners.map((partner) => {
                    const isActive = active === partner.name;
                    return (
                        <button
                            key={partner.name}
                            onMouseEnter={() => setActive(partner.name)}
                            className="w-full text-left flex items-center transition-all duration-100"
                            style={{
                                // Taller padding when active for card-lift feel
                                padding:   isActive ? '13px 16px' : '11px 16px',
                                background: isActive ? ACTIVE_BG  : 'transparent',
                                // Inset left bar + right shadow bleeds into col2
                                boxShadow:  isActive
                                    ? 'inset 3px 0 0 #34765A, 4px 0 16px -2px rgba(52,118,90,0.22)'
                                    : 'none',
                            }}
                        >
                            {/* Icon circle */}
                            <div
                                style={{
                                    width: 34, height: 34, borderRadius: '50%',
                                    background: isActive ? '#bbf7d0' : '#f0fdf4',
                                    color:      isActive ? GREEN     : '#16a34a',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginRight: 12, flexShrink: 0,
                                    transition: 'background 0.1s',
                                }}
                            >
                                {orgIcons[partner.name]}
                            </div>

                            {/* Name + description stacked */}
                            <div>
                                <p style={{
                                    fontSize: '13.5px', fontWeight: 600, lineHeight: 1.3,
                                    color: isActive ? GREEN : '#14161a',
                                }}>
                                    {partner.name}
                                </p>
                                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4, marginTop: 2 }}>
                                    {partner.description}
                                </p>
                            </div>
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

            {/* ── COL 2: Solutions ── */}
            <section className="py-5 px-6 bg-white">
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-3">
                    Solutions
                </p>
                {activePartner && (
                    <div className="flex flex-col">
                        {activePartner.solutions.map((s) => (
                            <a
                                key={s.name}
                                href={s.link}
                                className="transition-colors py-[6px]"
                                style={{
                                    fontSize:    s.sub ? '12.5px' : '13.5px',
                                    fontWeight:  s.sub ? 500 : 600,
                                    paddingLeft: s.sub ? '12px' : '0',
                                    color:       s.sub ? GREEN : '#14161a',
                                    borderLeft:  s.sub ? '2px solid #a8d5bf' : 'none',
                                    marginLeft:  s.sub ? '2px' : '0',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                                onMouseLeave={e => (e.currentTarget.style.color = s.sub ? GREEN : '#14161a')}
                            >
                                {s.name}
                            </a>
                        ))}
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

            {/* ── COL 4: Promo article card ── */}
            <section className="flex flex-col overflow-hidden bg-white border-l border-gray-100">
                <div
                    className="w-full h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80)` }}
                />
                <div className="flex flex-col gap-3 p-5 flex-1">
                    <h3 style={{ color: '#14161a', fontWeight: 700, fontSize: '14.5px', lineHeight: 1.4 }}>
                        Why States Are Turning To Virtual Care To Transform Rural Health
                    </h3>
                    <a
                        href="/organizations/resources/virtual-care"
                        className="inline-flex items-center gap-2 mt-auto transition-colors"
                        style={{ fontSize: '13px', fontWeight: 600, color: GREEN }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#14161a')}
                        onMouseLeave={e => (e.currentTarget.style.color = GREEN)}
                    >
                        Read more
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default OrganisationMenuContent;