'use client'

import React, { SVGProps } from 'react'
import {UserPlus, } from 'lucide-react'
import { NAuthentication } from '@/types/auth.type'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import routes from '@/lib/routes'
import { OnboardingSteps } from './OnboardingSteps'

const AccountTypes: {
    name: NAuthentication.TAccountType,
    description: string,
    Icon: React.ComponentType<SVGProps<SVGSVGElement>>
}[] = [
    {
        name: 'Patient',
        description: 'Join Ricia Care to manage your health, book appointments, and access quality medical support anytime.',
        Icon: UserPlus
    },
    {
        name: 'Doctor',
        description: 'Create your professional profile, connect with patients, and deliver trusted care through Ricia Care’s digital platform.',
        Icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M9.06822 10.374C11.7456 10.374 13.9233 7.53254 13.9233 4.85547C13.9233 2.17841 11.7456 0 9.06822 0C6.39089 0 4.21289 2.17841 4.21289 4.85547C4.21334 7.53232 6.39111 10.374 9.06822 10.374Z" fill="black"/>
                <path d="M13.2004 10.5244C13.9547 11.0144 14.4742 11.8333 14.5549 12.7771C15.1996 12.9215 15.6833 13.4977 15.6833 14.1855C15.6833 14.9819 15.0353 15.6299 14.2389 15.6299C13.4424 15.6299 12.7944 14.9819 12.7944 14.1855C12.7944 13.5104 13.2609 12.9435 13.8878 12.7859C13.7949 11.9126 13.2164 11.184 12.4284 10.8724L9.16444 13.9308L5.85733 10.8318C4.96089 11.1344 4.30933 11.9689 4.27778 12.9586C4.40644 13.0333 4.51044 13.1488 4.57422 13.2888C5.04911 13.5128 5.46822 13.9844 5.78933 14.6557C5.84311 14.7688 5.85 14.8964 5.81067 15.0128C6.00311 15.5081 6.11311 16.0494 6.11311 16.5041C6.11311 17.1412 6.11311 17.7436 5.41867 17.8983C5.34333 17.961 5.24933 17.9952 5.15044 17.9952H4.68622C4.45356 17.9952 4.26422 17.8056 4.26422 17.5732L4.26467 17.5568C4.27356 17.3325 4.46133 17.1512 4.68622 17.1512H5.15022C5.19778 17.1512 5.24422 17.1592 5.28889 17.175C5.31711 17.167 5.326 17.1603 5.326 17.1603C5.37756 17.0688 5.37755 16.6874 5.37755 16.5043C5.37755 16.135 5.28511 15.689 5.12311 15.2746C5.03889 15.2268 4.97111 15.1546 4.92933 15.0672C4.64778 14.4781 4.26533 14.0977 3.95444 14.0977C3.63644 14.0977 3.23489 14.509 2.95489 15.1208C2.90911 15.2204 2.82889 15.3017 2.73 15.3501C2.58356 15.7468 2.50311 16.155 2.50311 16.5041C2.50311 16.6579 2.50311 17.0661 2.562 17.1619C2.56267 17.1619 2.57578 17.1699 2.61267 17.179C2.66067 17.1605 2.71222 17.151 2.76378 17.151H3.22867C3.44556 17.151 3.62622 17.3161 3.64822 17.5303L3.65067 17.5565C3.65067 17.8056 3.46133 17.9952 3.22889 17.9952H2.764C2.67178 17.9952 2.58267 17.9645 2.50933 17.9083C2.24378 17.8583 2.05667 17.7412 1.93822 17.5505C1.79467 17.3201 1.76844 17.0174 1.76844 16.5041C1.76844 16.0537 1.87244 15.5352 2.06133 15.0399C2.03356 14.9339 2.04289 14.8232 2.08889 14.7235C2.28578 14.2933 2.536 13.9248 2.81244 13.6584C2.96444 13.5119 3.12778 13.3942 3.29867 13.3082C3.36311 13.1579 3.47467 13.0348 3.61133 12.9568C3.63711 11.928 4.18378 11.0282 4.99844 10.5098C2.13467 11.1735 0 13.7375 0 16.8025C0 18.5687 4.06 20.0009 9.06844 20.0009C14.0767 20.0009 18.1369 18.5687 18.1369 16.8025C18.1369 13.7597 16.0329 11.2102 13.2004 10.5244Z" fill="black"/>
                <path d="M14.2389 14.8509C14.6071 14.8509 14.9056 14.5524 14.9056 14.1842C14.9056 13.816 14.6071 13.5176 14.2389 13.5176C13.8707 13.5176 13.5723 13.816 13.5723 14.1842C13.5723 14.5524 13.8707 14.8509 14.2389 14.8509Z" fill="black"/>
            </svg>
        )
    },
    {
        name: 'Nurse',
        description: 'Sign up to assist in care delivery, collaborate with medical teams, and support patients within the Ricia Care network.',
        Icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M10.8946 13.564C13.5529 14.6219 15.5101 17.0639 15.8762 20H0C0.36612 17.0639 2.32337 14.6219 4.98167 13.564L7.9381 18L10.8946 13.564ZM13.9381 0V6C13.9381 9.3137 11.2518 12 7.9381 12C4.6244 12 1.93811 9.3137 1.93811 6V0H13.9381ZM11.9381 6H3.93811C3.93811 8.2091 5.72897 10 7.9381 10C10.1473 10 11.9381 8.2091 11.9381 6Z" fill="black"/>
            </svg>
        )
    },
    {
        name: 'Institution',
        description: 'Register your healthcare facility to manage your team, streamline patient services, and grow your digital presence with Ricia Care.',
        Icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M20 16H22V18H0V16H2V1C2 0.44772 2.44772 0 3 0H13C13.5523 0 14 0.44772 14 1V16H16V6H19C19.5523 6 20 6.44772 20 7V16ZM6 8V10H10V8H6ZM6 4V6H10V4H6Z" fill="black"/>
            </svg>
        )
    },
]

type props = {
    data: NAuthentication.ISignUp
    setData: (accountType: NAuthentication.TAccountType )=>void
}

function AccountType({data, setData}:props) {

    return (
        <div className={`main-content w-[600px] flex flex-col items-center gap-6`}>
            <section className="flex flex-col gap-1">
                <h1 className="text-2xl">What type of account would you like to create?</h1>
                <p className='font-extralight text-gray-800'>Choose the option that suits you.</p>
            </section>

            <section className="flex gap-5">
                {
                    AccountTypes.map((accType, idx)=>{
                        return <div onClick={()=>setData(accType.name)} key={`account type ${idx}`} className={`p-4 pt-[2rem] cursor-pointer ${data.accountType === accType.name ? 'border-2 bg-primary-foreground':'bg-white'} hover:bg-primary-foreground hover:border-2 border-primary transition-all  text-center flex flex-col items-center rounded-2xl gap-3 w-[242px] h-[281px]`}>
                            <div className="size-12 flex items-center justify-center border-t-2 border-black shadow-sm rounded-full">
                                <accType.Icon className='size-5' fill={'black'} />
                            </div>

                            <br />
                            {accType.name}

                            <small className='text-gray-800'>{accType.description}</small>
                        </div>
                    })
                }
            </section>
            
            <Link href={routes.onboarding+`?step=${OnboardingSteps.signUp}`} className={`${!data.accountType && 'pointer-events-none'}`}>
                <Button disabled={!data.accountType} className='w-[200px]'>Continue</Button>
            </Link>
        </div>
    )
}

export default AccountType