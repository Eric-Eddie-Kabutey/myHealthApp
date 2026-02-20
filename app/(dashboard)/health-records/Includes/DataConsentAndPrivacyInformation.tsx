'use client'

import PageWrapper from '@/components/PageWrapper'
import { Switch } from '@/components/ui/switch'
import React from 'react'

export default function DataConsentAndPrivacyInformation() {
    return <PageWrapper content={<>

        <span className='border-b pb-4'>Data Consent and Privacy Information</span>
        {
            [
                {
                    name: 'Telemedicine Consents',
                    sub: 'Toggle on and off consents',
                },
                {
                    name: 'Data Sharing Consents',
                    sub: 'Toggle on and off data sharing consents',
                }
            ].map((item, idx) => {
                return <section key={idx} className="w-full 2xl:w-[1200px] flex gap-5 pb-7 mb-4 border-b">
                    <div className="xl:min-w-[300px] flex flex-col gap-1 text-nowrap pt-4">
                        <span className="font-semibold">{item.name}</span>
                        <p className="text-sm text-muted-foreground mb-4">{item.sub}</p>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        {
                            [1, 2, 3].map((item, idx) => {
                                return <section key={`as-${idx}`} className="w-full flex items-center gap-4">
                                    <div className="border rounded-xl p-4 flex flex-col w-full">
                                        <div className="w-full flex items-center justify-between">
                                            <span className="font-semibold">General Telemedicine Consultation</span>
                                            <span className="text-xs text-muted-foreground">Expires: Mar 15, 2026&nbsp;v2.1</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">Primary Care Clinic</span>
                                        <p className=" text-sm">Consent for video, audio, and text-based remote consultations</p>
                                        <span className="mt-2 font-semibold">Permissions Granted</span>
                                        <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
                                            <li>Video consultations</li>
                                            <li>Audio calls</li>
                                            <li>Secure messaging</li>
                                            <li>Screen sharing</li>
                                            <li>File sharing</li>
                                        </ul>
                                    </div>
                                    <span className="min-w-[50px] flex items-center gap-3">
                                        <Switch checked={true} />
                                        <p>ON</p>
                                    </span>
                                </section>
                            })
                        }
                    </div>
                </section>
            })
        }
    </>} />
}
