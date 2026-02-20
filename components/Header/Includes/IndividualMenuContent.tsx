'use client';

import routes from '@/lib/routes';
import { Link } from 'lucide-react';
import React from 'react'

const items = [
    {
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd0e61b8c?auto=format&fit=crop&w=64&q=80',
        name: '24/7 Care',
        link: '/247care',
        description: 'Skip the trip and get same-day care for common conditions.',
        services: [
            {
                name: 'Overview',
                link: '/247care',
            },
            {
                name: (
                    <span className='flex items-center gap-2'>
                        Get Care{' '}
                        <Link className='size-4' />
                    </span>
                ),
                link: routes.signup,
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=64&q=80',
        name: 'Mental Health',
        link: '/mental-health',
        description: 'Support for anxiety, depression, and more.',
        services: [
            {
                name: 'Overview',
                link: '/mental-health',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=64&q=80',
        name: 'Weight Management',
        link: '/condition-management',
        description: 'Personalized plans to help you reach your goals.',
        services: [
            {
                name: 'Overview',
                link: '/condition-management',
            },
            {
                name: 'Diabetes Prevention',
                link: '/condition-management/diabetes-prevention',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=64&q=80',
        name: 'Diabetes Management',
        link: '/condition-management/diabetes-prevention',
        description: 'Comprehensive care for diabetes.',
        services: [
            {
                name: 'Overview',
                link: '/condition-management/diabetes-prevention',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=64&q=80',
        name: 'Hypertension Management',
        link: '/condition-management/hypertension',
        description: 'Manage high blood pressure with expert support.',
        services: [
            {
                name: 'Overview',
                link: '/condition-management/hypertension',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=64&q=80',
        name: 'Specialty & Wellness',
        link: '/specialty-wellness',
        description: 'Specialty care and wellness services.',
        services: [
            {
                name: 'Overview',
                link: '/specialty-wellness',
            },
            {
                name: 'Dermatology',
                link: '/specialty-wellness/dermatology',
            },
            {
                name: 'Expert Medical Options',
                link: '/specialty-wellness/medical-options',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=64&q=80',
        name: 'Primary Care',
        link: '/primary-care',
        description: 'Your partner for ongoing health needs.',
        services: [
            {
                name: 'Overview',
                link: '/primary-care',
            },
        ],
    },
];

const exploreItems = [
    { name: 'Care Without Insurance', link: '/care-without-insurance' },
    { name: 'How It Works', link: '/how-it-works' },
    { name: 'Medicare', link: '/medicare' },
    { name: 'Medicaid', link: '/medicaid' },
    { name: 'FAQs', link: '/faqs' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Our Impact', link: '/our-impact' },
    { name: 'Teladoc Health Library', link: '/teladoc-health-library' },
    { name: 'Health Talk Blog', link: '/health-talk-blog' },
    { name: 'Contact Us', link: '/contact-us' },
]

function IndividualMenuContent() {
    const [active, setActive] = React.useState<string | null>(`24/7 Care`);
    return (
        <div className='main-content w-full sm:shadow flex lg:grid grid-cols-4 gap-8 p-6 overflow-y-auto bg-white border-t-0 border-b-2 border-indigo-950'>
            {/* Ways We Help Section */}
            <section className="min-w-fit sm:min-w-[240px] md:w-full text-nowrap h-full flex flex-col gap-4 overflow-y-auto">
                <h3 className="sm:text-lg font-semibold text-gray-900">Ways We Help</h3>
                <div className="flex h-full flex-col gap-2">
                    {items.map((item, index) => (
                        <>
                            <div onMouseEnter={() => setActive(item.name)} key={index} className={`flex items-center gap-3 p-2 hover:bg-gray-50 ${active === item.name ? 'bg-gray-100' : ''} rounded-lg cursor-pointer group`}>
                                <div className="w-8 h-8 min-w-8 rounded-full overflow-hidden sm:block hidden">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col sm:flex-1">
                                    <span className="text-sm min-w-fit sm:min-w-auto font-medium text-gray-900 group-hover:text-blue-600">
                                        {item.name}
                                    </span>
                                </div>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <section className='w-full sm:hidden '>
                                {(active && active === item.name) && (
                                    <div className="w-full flex flex-col gap-2 pl-4">
                                        <div className="flex flex-col gap-2">
                                            {items.find(item => item.name === active)?.services.map((service, idx) => (
                                                <a
                                                    key={idx}
                                                    href={service.link}
                                                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                                >
                                                    {service.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </section>
                        </>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="w-fit min-[800px]:w-full hidden sm:flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900">Services</h3>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Skip the trip and get same-day care for common conditions.
                    </p>
                    {active && (
                        <div className="flex flex-col gap-2">
                            {items.find(item => item.name === active)?.services.map((service, idx) => (
                                <a
                                    key={idx}
                                    href={service.link}
                                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                >
                                    {service.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Explore Section */}
            <section className="w-full hidden min-[700px]:flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900">Explore</h3>
                <div className="flex flex-col gap-2">
                    {exploreItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="text-sm text-gray-700 hover:text-blue-600 hover:underline py-1"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </section>

            <section className="w-full h-full hidden lg:flex rounded-2xl overflow-hidden">
                <img src={items.find(item => item.name === active)?.img} alt="featured" className="size-full object-cover" />
            </section>
        </div>
    )
}

export default IndividualMenuContent