'use client';

import { ChevronDown, Download, FileChartLine } from 'lucide-react';
import React, { act, SVGProps, useState } from 'react'

const documents = [
  {
    title: 'Medical Reports',
    value: 4,
    date: '2025-04-12',
    icon: FileChartLine,
    details: [
      {
        name: 'Annual Physical Results',
        sub: 'Dr. Smith',
        date: '2025-04-12'
      },
      {
        name: 'Blood Test Results',
        sub: 'Quest Diagnostics',
        date: '2025-04-12'
      },
      {
        name: 'MRI Scan Report',
        sub: 'City Imaging Center',
        date: '2025-04-12'
      },
      {
        name: 'X-Ray Report',
        sub: 'Downtown Clinic',
        date: '2025-04-13'
      },
    ]
  },
  {
    title: 'Prescriptions',
    value: 6,
    date: '2025-04-12',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7825 2.22221C20.1256 4.56535 20.1256 8.36437 17.7825 10.7075L10.7114 17.7786C8.36821 20.1217 4.56925 20.1217 2.2261 17.7786C-0.117035 15.4354 -0.117035 11.6365 2.2261 9.29327L9.2972 2.22221C11.6403 -0.120944 15.4393 -0.120944 17.7825 2.22221ZM12.1263 13.5352L6.46946 7.87835L3.64032 10.7075C2.07822 12.2696 2.07822 14.8023 3.64032 16.3644C5.20241 17.9265 7.73507 17.9265 9.2972 16.3644L12.1263 13.5352ZM16.3682 3.63642C14.8061 2.07432 12.2735 2.07432 10.7114 3.63642L7.88366 6.46414L13.5405 12.121L16.3682 9.29327C17.9303 7.73118 17.9303 5.19852 16.3682 3.63642Z" fill="#525866"/>
      </svg>
    ),
    details: [
      {
        name: 'Blood Pressure Medication',
        sub: 'Dr. Lee',
        date: '2025-04-10'
      },
      {
        name: 'Cholesterol Medication',
        sub: 'Dr. Lee',
        date: '2025-04-10'
      },
      {
        name: 'Diabetes Medication',
        sub: 'Dr. Lee',
        date: '2025-04-10'
      },
      {
        name: 'Pain Relief',
        sub: 'Dr. Smith',
        date: '2025-04-12'
      },
      {
        name: 'Antibiotics',
        sub: 'Dr. Smith',
        date: '2025-04-12'
      },
      {
        name: 'Vitamin D Supplement',
        sub: 'Dr. Smith',
        date: '2025-04-12'
      }
    ]
  },
  {
    title: 'Referral Letters',
    value: 3,
    date: '2025-04-12',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20ZM16 18V2H2V18H16ZM4 4H8V8H4V4ZM4 10H14V12H4V10ZM4 14H14V16H4V14ZM10 5H14V7H10V5Z" fill="#525866"/>
      </svg>
    ),
    details: [
      {
        name: 'Cardiology Referral',
        sub: 'Dr. Smith',
        date: '2025-04-12'
      },
      {
        name: 'Orthopedic Referral',
        sub: 'Dr. Lee',
        date: '2025-04-13'
      },
      {
        name: 'Dermatology Referral',
        sub: 'Dr. Kim',
        date: '2025-04-14'
      }
    ]
  },
  {
    title: 'Immunization Records',
    value: 2,
    date: '2025-04-12',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00781 0H19.0078C19.5601 0 20.0078 0.44771 20.0078 1V17C20.0078 17.5523 19.5601 18 19.0078 18H1.00781C0.455532 18 0.0078125 17.5523 0.0078125 17V1C0.0078125 0.44771 0.455532 0 1.00781 0ZM18.0078 8.00001H2.00781V16H18.0078V8.00001ZM18.0078 6V2H2.00781V6H18.0078ZM12.0078 12H16.0078V14H12.0078V12Z" fill="#525866"/>
      </svg>
    ),
    details: [
      {
        name: 'COVID-19 Vaccine',
        sub: 'City Health Center',
        date: '2025-04-15'
      },
      {
        name: 'Flu Shot',
        sub: 'City Health Center',
        date: '2025-04-15'
      }
    ]
  }
]

function UploadedDocuments() {
  const [activeAccordion, setActiveAccordion] = useState(documents[0].title)
  return <div className="w-full flex flex-col main-content gap-4">
    <section className="pb-2 border-b flex">
      Upload Documents
    </section>
    <section className="w-full flex flex-col gap-3">
      {
        documents.map((doc, idx)=>{
          return <div key={`doc-${idx}`} className={`w-full flex flex-col gap-2 items-center ${activeAccordion !== doc.title ? 'border-b':'pb-4'}`}>
            <aside onClick={()=>setActiveAccordion(doc.title)} className="w-full cursor-pointer h-14 flex items-center justify-between hover:bg-gray-100 px-3 rounded-lg">
              <div className="flex items-center gap-2">
                <doc.icon className='size-5'/>
                <p>{doc.title} ({doc.value})</p>
              </div>
              <ChevronDown className={`${activeAccordion === doc.title ? 'rotate-180':''} transition-all duration-300`}/>
            </aside>
            {
              activeAccordion === doc.title ? 
              <aside className="w-[90%] slid-down flex flex-col gap-2">
                {
                  doc.details.map((det, idxx)=>{
                    return <div key={`doc - ${idxx}`} className="w-full rounded-lg p-4  flex items-center justify-between bg-primary/5">
                      <aside className="flex items-center gap-2">
                        <doc.icon className='size-5'/>
                        <div className="flex flex-col">
                          <p className="text-sm">{det.name}</p>
                          <small>{det.sub}</small>
                        </div>
                      </aside>
                      <aside className="flex items-center gap-2">
                        <small>{doc.date}</small>
                        <Download className='size-4'/>
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

export default UploadedDocuments