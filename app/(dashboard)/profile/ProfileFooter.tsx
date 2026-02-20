'use client';

import React, { useState } from 'react'
import ContactSupportModal from './ContactSupportModal';

function ProfileFooter() {
    const [showSupport, setShowSupport] = useState(false)
    return <section className="py-2 text-sm">
        <span>Need help completing your profile? <span onClick={()=>setShowSupport(true)} className='cursor-pointer text-primary'>Click here to contact support</span></span>

        <ContactSupportModal open={showSupport} close={()=>setShowSupport(false)}/>
    </section>
}

export default ProfileFooter