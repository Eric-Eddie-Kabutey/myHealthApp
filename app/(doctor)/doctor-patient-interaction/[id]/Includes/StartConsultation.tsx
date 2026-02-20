'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import routes from '@/lib/routes';

type StateType = {
    type: 'Virtual' | 'In Person (Home Visit)';
    method: 'Chat' | 'Voice Call' | 'Video Call';
};
const appointment_types = ['Virtual' , 'In Person (Home Visit)'];
const consultation_methods = ['Chat' , 'Voice Call' , 'Video Call'];


function StartConsultation({open, close}:{open:boolean, close:()=>void}) {
    const param = useParams();
    const router = useRouter();
    const path = usePathname();
    const [state, setState] = useState<StateType>({
        type: 'Virtual',
        method: 'Chat'
    })
    return <Dialog open={open} onOpenChange={()=>close()}>
    <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
        <DialogTitle/>
        <span className="w-full text-center text-lg my-2">Start Consultation</span>

        <div className="w-full flex flex-col gap-2">
            <p className="text-sm">Appointment Type</p>
            <aside className="w-full flex gap-3">
                {appointment_types.map((type, idx)=><button onClick={()=>setState((prev:any)=>({...prev, type}))} key={`apt-type-${idx}`} className={`${type === state.type ? 'border-primary bg-primary/10 text-primary':''} h-10 text-sm px-5 flex items-center border rounded`}>
                    {type}
                </button>)}
            </aside>
        </div>

        <div className="w-full flex flex-col gap-2">
            <p className="text-sm">Consultation Method</p>
            <aside className="w-full flex gap-3">
                {consultation_methods.map((method, idx)=><button onClick={()=>setState((prev:any)=>({...prev, method}))} key={`apt-type-${idx}`} className={`${method === state.method ? 'border-primary bg-primary/10 text-primary':''} h-10 text-sm px-5 flex items-center border rounded`}>
                    {method}
                </button>)}
            </aside>
        </div>
        
        <Button onClick={()=>router.push(routes.doctor.appointment+`/${param?.id}?type=${state.type}&method=${state.method}`)} className='w-full rounded mt-4'>Start Consultation</Button>
    </DialogContent>
    </Dialog>
}

export default StartConsultation