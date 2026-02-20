'use client';

import { Calendar1, ChevronDown, Clock, Download, FileChartLine, Filter, Mail, MessageCircle, Phone, Search, Video } from 'lucide-react';
import React, { act, SVGProps, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';


const records = [
  {
    title: 'Chat Consultations',
    value: 3,
    date: '2025-04-12',
    time: '14:30',
    icon: MessageCircle,
    details: [
      {
        name: 'Chat with Dr. Smith',
        sub: 'General Inquiry',
        date: '2025-04-12'
      },
      {
        name: 'Chat with Dr. Lee',
        sub: 'Prescription Clarification',
        date: '2025-04-13'
      },
      {
        name: 'Chat with Dr. Kim',
        sub: 'Lab Results Discussion',
        date: '2025-04-14'
      }
    ]
  },
  {
    title: 'Video Consultations',
    value: 3,
    date: '2025-04-12',
    time: '14:30',
    icon: Video,
    details: [
      {
        name: 'Video Call with Dr. Smith',
        sub: 'Follow-up',
        date: '2025-04-12'
      },
      {
        name: 'Video Call with Dr. Lee',
        sub: 'Consultation',
        date: '2025-04-13'
      },
      {
        name: 'Video Call with Dr. Kim',
        sub: 'Routine Check',
        date: '2025-04-14'
      }
    ]
  },
  {
    title: 'Audio Consultations',
    value: 2,
    date: '2025-04-12',
    time: '14:30',
    icon: Phone,
    details: [
      {
        name: 'Audio Call with Dr. Smith',
        sub: 'Consultation',
        date: '2025-04-12'
      },
      {
        name: 'Audio Call with Dr. Lee',
        sub: 'Follow-up',
        date: '2025-04-13'
      }
    ]
  },
  {
    title: 'Patient Queries',
    value: 3,
    date: '2025-04-12',
    time: '14:30',
    icon: Mail,
    details: [
      {
        name: 'Question about Medication',
        sub: 'Patient',
        date: '2025-04-12'
      },
      {
        name: 'Appointment Scheduling',
        sub: 'Patient',
        date: '2025-04-13'
      },
      {
        name: 'Billing Inquiry',
        sub: 'Patient',
        date: '2025-04-14'
      }
    ]
  },
  {
    title: 'Follow-up Reminders',
    value: 3,
    date: '2025-04-12',
    time: '14:30',
    icon: Calendar1,
    details: [
      {
        name: 'Follow-up with Dr. Smith',
        sub: 'Reminder',
        date: '2025-04-15'
      },
      {
        name: 'Lab Results Review',
        sub: 'Reminder',
        date: '2025-04-16'
      },
      {
        name: 'Annual Checkup',
        sub: 'Reminder',
        date: '2025-04-17'
      }
    ]
  }
]

function CommunicationRecords() {
  const [activeAccordion, setActiveAccordion] = useState(records[0].title)
  return <div className="w-full flex flex-col main-content gap-4">
    <section className="pb-2 border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
      Upload Documents
      <div className="flex gap-3">
        <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
          <Search className='size-5' />
          <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
        </aside>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className='flex items-center gap-3 h-8 rounded-lg'>
              <Filter className='size-4' />
              Filter
              <ChevronDown className='size-5' />
            </Button>
          </PopoverTrigger>
          <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

          </PopoverContent>
        </Popover>
      </div>
    </section>
    <section className="w-full flex flex-col gap-3">
      {
        records.map((doc, idx) => {
          return <div key={`doc-${idx}`} className={`w-full flex flex-col gap-2 items-center ${activeAccordion !== doc.title ? 'border-b' : 'pb-4'}`}>
            <aside onClick={() => setActiveAccordion(doc.title)} className="w-full cursor-pointer h-14 flex items-center justify-between hover:bg-gray-100 px-3 rounded-lg">
              <div className="flex items-center gap-2">
                <doc.icon className='size-5' />
                <p>{doc.title} ({doc.value})</p>
              </div>
              <ChevronDown className={`${activeAccordion === doc.title ? 'rotate-180' : ''} transition-all duration-300`} />
            </aside>
            {
              activeAccordion === doc.title ?
                <aside className="w-[90%] slid-down flex flex-col gap-2">
                  {
                    doc.details.map((det, idxx) => {
                      return <div key={`accordion-doc-${idxx}`} className="w-full rounded-lg p-4  flex items-center justify-between bg-primary/5">
                        <aside className="flex items-center gap-2">
                          <doc.icon className='size-5' />
                          <div className="flex flex-col">
                            <p className="text-sm">{det.name}</p>
                            <small>{det.sub}</small>
                          </div>
                        </aside>
                        <aside className="flex items-center gap-4">
                          <span className='text-xs flex items-center gap-2'><Calendar1 className='size-4' />{doc.date}</span>
                          <span className='text-xs flex items-center gap-1'><Clock className='size-4' />{doc.time}</span>
                        </aside>
                      </div>
                    })
                  }
                </aside> : null
            }
          </div>
        })
      }
    </section>
  </div>

}

export default CommunicationRecords

