'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import AccountType from './Includes/AccountType';
import SignUp from './Includes/SignUp';
import Verification from './Includes/Verification';
import { NAuthentication } from '@/types/auth.type';

type StepType = 'Account Type'|'Sign Up'|'Verify';


function Onboarding() {
    const searchParams = useSearchParams();
    const step = searchParams.get('step') as StepType || 'Account Type'
    const [payload, setPayload] = useState<NAuthentication.ISignUp>({
        accountType: '', email: ''
    })

    return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        {step === 'Account Type' && (
            <AccountType data={payload} setData={(accountType: typeof payload.accountType) => setPayload((prev) => ({ ...prev, accountType }))} />
        )}
        {step === 'Sign Up' && (
            <SignUp />
        )}
        {step === 'Verify' && (
            <Verification data={payload} />
        )}
        {!['Account Type', 'Sign Up', 'Verify'].includes(step) && (
            <AccountType data={payload} setData={(accountType: typeof payload.accountType) => setPayload((prev) => ({ ...prev, accountType }))} />
        )}
    </section>
}

export default Onboarding