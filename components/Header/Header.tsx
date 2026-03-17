'use client';

// File: components/Header/Header.tsx
// The white header bar is constrained to max-w-[1200px] and centered.
// The outer wrapper is transparent — no full-width white background.
// Layout: [LEFT: Register + Sign in] [RIGHT: Nav + Logo]

import React, { useRef } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import routes from '@/lib/routes';
import ActiveMenuContent from './Includes/ActiveMenuContent';
import { logo } from '@/app/assets/icons';
import Image from 'next/image';
import { MenuIcon } from 'lucide-react';
import MenuSidebar from './Includes/MenuSidebar';

const NAV_ITEMS = ['Individuals', 'Organizations', 'Clinicians'] as const;
type NavItem = typeof NAV_ITEMS[number];

function Header() {
    const [activeMenu, setActiveMenu] = React.useState<NavItem | null>(null);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [indicator, setIndicator] = React.useState({ left: 0, width: 0, visible: false });
    const navRef = useRef<HTMLDivElement>(null);

    const handleNavEnter = (menu: NavItem, e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveMenu(menu);
        if (navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const btnRect = e.currentTarget.getBoundingClientRect();
            setIndicator({ left: btnRect.left - navRect.left, width: btnRect.width, visible: true });
        }
    };

    const handleHeaderLeave = () => {
        setActiveMenu(null);
        setIndicator(prev => ({ ...prev, visible: false }));
    };

    return (
        // Outer wrapper: sticky, transparent bg — no full-width color
        <div className='w-full sticky top-0 z-50 relative' onMouseLeave={handleHeaderLeave}>

            {/* ── Centered white header bar — max-w-[1200px] ── */}
            <div className={`max-w-[1200px] mx-auto bg-white ${activeMenu ? '' : 'rounded-b-xl'}`}
                style={{ boxShadow: '0 4px 16px -2px rgba(0,0,0,0.12)' }}
            >
                <div className="w-full px-6 flex items-center justify-between h-[70px] relative">

                    {/* ─── LEFT: Register + Sign in ─── */}
                    <section className="flex items-center gap-4">
                        <Link href={routes.onboarding} className="hidden sm:block">
                            <Button
                                className='rounded-full px-6 h-10 text-[14px] font-semibold'
                                style={{ fontFamily: "'Raleway', system-ui, sans-serif" }}
                            >
                                Register Now
                            </Button>
                        </Link>

                        <Link
                            href={routes.login}
                            className="hidden sm:flex items-center gap-2 text-[#14161a] font-medium text-[14px] transition-colors"
                            style={{ fontFamily: "'Raleway', system-ui, sans-serif" }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#34765A')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#14161a')}
                        >
                            {/* Sign in arrow icon */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                                <polyline points="10 17 15 12 10 7"/>
                                <line x1="15" y1="12" x2="3" y2="12"/>
                            </svg>
                            Sign in
                        </Link>
                    </section>

                    {/* ─── RIGHT: Nav items + Logo ─── */}
                    <section className="flex items-center h-full">

                        {/* Nav buttons with animated underline */}
                        <div ref={navRef} className="hidden sm:flex items-center h-full relative mr-4">
                            {NAV_ITEMS.map((menu) => (
                                <button
                                    key={menu}
                                    onMouseEnter={(e) => handleNavEnter(menu, e)}
                                    className="h-full px-4 lg:px-5 font-semibold text-[14px] transition-colors duration-150"
                                    style={{
                                        fontFamily: "'Raleway', system-ui, sans-serif",
                                        color: activeMenu === menu ? '#34765A' : '#14161a',
                                    }}
                                >
                                    {menu}
                                </button>
                            ))}

                            {/* Green animated underline */}
                            <span
                                className="absolute bottom-0 h-[2.5px] rounded-full transition-all duration-200 ease-in-out"
                                style={{
                                    background: '#34765A',
                                    left: indicator.left,
                                    width: indicator.visible ? indicator.width : 0,
                                    opacity: indicator.visible ? 1 : 0,
                                }}
                            />
                        </div>

                        {/* Logo — rightmost */}
                        <Link href='/'>
                            <Image src={logo} alt="RiciaCare Logo" className='w-24' priority />
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className='sm:hidden ml-3 p-1 text-[#14161a]'
                            aria-label="Open menu"
                        >
                            <MenuIcon className='size-5' />
                        </button>
                    </section>
                </div>
            </div>

            {/* ── Dropdown — also max-w-[1200px] centered, has its own white bg ── */}
            <ActiveMenuContent activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            <MenuSidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />
        </div>
    )
}

export default Header
