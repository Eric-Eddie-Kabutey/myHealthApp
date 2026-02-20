'use client';

import React from 'react'
import IndividualMenuContent from './IndividualMenuContent';
import OrganisationMenuContent from './OrganisationMenuContent';
import CliniciansMenuContent from './CliniciansMenuContent';

function ActiveMenuContent({ activeMenu, setActiveMenu }: { activeMenu: string | null, setActiveMenu: (menu: string | null) => void }) {

    if (!activeMenu) return null;
    return <section id='ActiveMenuContent' className="absolute slid-down w-full top-[70px] h-auto bg-white z-10" onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
        {
            activeMenu === 'Individuals' ? <IndividualMenuContent/> :
                activeMenu === 'Organizations' ? <OrganisationMenuContent/> :
                    activeMenu === 'Clinicians' ? <CliniciansMenuContent/> : null
        }
    </section>
}

export default ActiveMenuContent