'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import React, { SVGProps, useState } from 'react'

import RequestCall from './Includes/RequestCall';
import EmergencyConsultation from './Includes/EmergencyConsultation';

const services = [
    {
        title: 'Emergency Response',
        desc: `Ready for emergency assistance, click to dispatch nearest ambulance`,
        button: `Emergency - Call Now`,
        color: '#E53E3E',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.33204 24.666V16.666C2.33204 10.775 7.10767 5.99935 12.9987 5.99935C18.8898 5.99935 23.6654 10.775 23.6654 16.666V24.666H24.9987V27.3327H0.998707V24.666H2.33204ZM4.99871 16.666H7.66537C7.66537 13.7205 10.0532 11.3327 12.9987 11.3327V8.66602C8.58043 8.66602 4.99871 12.2477 4.99871 16.666ZM11.6654 0.666016H14.332V4.66602H11.6654V0.666016ZM23.3696 4.4095L25.2552 6.29512L22.4268 9.12355L20.5412 7.23792L23.3696 4.4095ZM0.742188 6.29512L2.6278 4.4095L5.45623 7.23792L3.57061 9.12355L0.742188 6.29512Z" fill="#E53E3E"/>
        </svg>
    },
    {
        title: 'Instant Booking',
        desc: `Book immediate medical services without prior appointment`,
        button: `Book Emergency Consultation`,
        color: '#3762E4',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4903 6.95812L21.4281 5.02028L23.3137 6.90589L21.3759 8.84373C23.018 10.8966 24 13.5007 24 16.334C24 22.9615 18.6275 28.334 12 28.334C5.37259 28.334 0 22.9615 0 16.334C0 9.70657 5.37259 4.33398 12 4.33398C14.8333 4.33398 17.4373 5.31594 19.4903 6.95812ZM10.6667 9.66732V17.6673H13.3333V9.66732H10.6667ZM6.66667 0.333984H17.3333V3.00065H6.66667V0.333984Z" fill="#3762E4"/>
        </svg>
        
    },
    {
        title: 'Home Visit Service',
        desc: `Request immediate medical professional to visit your location`,
        button: `Request Home Visit`,
        color: '#4BA254',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7792 0.582344C14.3156 0.251198 13.6928 0.251198 13.2292 0.582344L0.5625 9.62996L2.11247 11.7998L14.0041 3.30585L25.8958 11.7998L27.4458 9.62996L14.7792 0.582344ZM24.1125 13.9157L14.7792 7.24901C14.3156 6.91786 13.6928 6.91786 13.2292 7.24901L3.89583 13.9157C3.54545 14.166 3.33749 14.57 3.33749 15.0007V23.6673C3.33749 24.4037 3.93443 25.0007 4.67082 25.0007H23.3374C24.0738 25.0007 24.6708 24.4037 24.6708 23.6673V15.0007C24.6708 14.57 24.4629 14.166 24.1125 13.9157Z" fill="#4BA254"/>
        </svg>
        
    },

]

const emergencyContacts = [
    {
        name: 'Emergency',
        number: '911',
        color: '#E53E3E',
        bg: '#E53E3E08'
    },
    {
        name: 'Poison-Control',
        number: '1-800-222-1222',
        color: '#3762E4',
        bg: '#3762E408'
    },
    {
        name: 'Non-Emergency',
        number: '311',
        color: '#B337E4',
        bg: '#B337E408'
    },
    {
        name: 'Mental Health Crisis',
        number: '988',
        color: '#4BA254',
        bg: '#4BA25408'
    },
]

function EmergencyServices() {
    const [open, setOpen] = useState<'Emergency Response'|'Instant Booking'|'Home Visit Service'|''>('');

    return <PageWrapper content={<>
        <section className="w-full flex justify-center gap-5">
            {
                services.map((service, idx)=>{
                    return <div key={`emergency-service-${idx}`} className="w-[300px] text-center rounded-2xl border p-4 py-6 pt-8 flex flex-col items-center gap-2">
                        <div style={{backgroundColor: service.color}} className={`size-14 rounded-full pt-1`}>
                            <div className="size-14 rounded-full bg-white flex items-center justify-center">
                                <service.icon className='size-5'/>
                            </div>
                        </div>
                        <p className='text-lg'>{service.title}</p>
                        <p className="text-sm text-gray-700">{service.desc}</p>

                        <Button onClick={()=>setOpen(service.title as 'Emergency Response' | 'Instant Booking' | 'Home Visit Service')} style={{backgroundColor: service.color}} className='w-full text-white mt-2 rounded h-10'>{service.button}</Button>
                    </div>
                })
            }
        </section>
        <section className="w-full flex flex-col gap-3">
            <p>Emergency Contacts</p>
            <div className="w-full rounded-2xl p-4 flex flex-col gap-4">
                {
                    emergencyContacts.map((contact, idx)=>{
                        return <aside key={idx} style={{backgroundColor: contact.bg, color: contact.color}} className="w-full rounded-lg p-5 flex flex-col items-center gap-1">
                            <p className="text-sm">{contact.name}</p>
                            <b className="text-2xl">{contact.number}</b>
                        </aside>
                    })
                }
            </div>
        </section>

        <RequestCall open={open==='Emergency Response'} close={()=>setOpen('')}/>
        <EmergencyConsultation open={open==='Instant Booking'} close={()=>setOpen('')}/>
        <EmergencyConsultation open={open==='Home Visit Service'} close={()=>setOpen('')}/>
    </>}/>
}

export default EmergencyServices