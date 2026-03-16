'use client';

// File: components/Header/Includes/ActiveMenuContent.tsx
// Dropdown is also centered at max-w-[1200px], rounded bottom corners.
// Outer div is transparent — white only comes from the inner content.

import React from 'react'
import IndividualMenuContent from './IndividualMenuContent';
import OrganisationMenuContent from './OrganisationMenuContent';
import CliniciansMenuContent from './CliniciansMenuContent';

// Typed nav items to prevent arbitrary strings
const NAV_ITEMS = ['Individuals', 'Organizations', 'Clinicians'] as const;
type NavItem = typeof NAV_ITEMS[number];

type Props = {
    activeMenu: NavItem | null;
    setActiveMenu: (menu: NavItem | null) => void;
}

function ActiveMenuContent({ activeMenu, setActiveMenu }: Props) {
    if (!activeMenu) return null;

    return (
        // Transparent outer — centers the white panel
        <div
            className="w-full absolute top-[70px] z-40"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
        >
            {/* Centered white dropdown panel — matches header width */}
            <div
                className="max-w-[1200px] mx-auto bg-white slid-down overflow-hidden rounded-b-xl"
                style={{
                    boxShadow: '0 8px 24px -4px rgba(0,0,0,0.14)',
                    borderTop: '1px solid #e8f5ee',   // subtle green top divider
                    borderBottom: '2px solid #14161a', // dark bottom border (Teladoc style)
                }}
            >
                {activeMenu === 'Individuals'   && <IndividualMenuContent />}
                {activeMenu === 'Organizations' && <OrganisationMenuContent />}
                {activeMenu === 'Clinicians'    && <CliniciansMenuContent />}
            </div>
        </div>
    )
}

export default ActiveMenuContent
