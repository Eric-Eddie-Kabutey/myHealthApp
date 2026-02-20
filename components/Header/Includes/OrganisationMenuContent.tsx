'use client';

import React from 'react'

const items = [
    {
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=64&q=80',
        name: 'Employers',
        link: '/organizations',
        description: 'Skip the trip and get same-day care for common conditions.',
        services: [
            {
                name: 'Overview',
                link: '/organizations',
            },
            {
                name: 'Integrated Care',
                link: '/organizations/integrated-care',
            },
            {
                name: 'Chronic Care',
                link: '/organizations/chronic-care',
            },
            {
                name: 'Diabetes',
                link: '/organizations/diabetes',
            },
            {
                name: 'Hypertension',
                link: '/organizations/hypertension',
            },
            {
                name: 'Obesity & Weight Care',
                link: '/organizations/obesity-weight-care',
            },
            {
                name: 'Primary Care',
                link: '/organizations/primary-care',
            },
            {
                name: 'Mental Health',
                link: '/organizations/mental-health',
            },
            {
                name: 'Wellbound: Employee',
                link: '/organizations/wellbound-employee',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=64&q=80',
        name: 'Health Plans',
        link: '/organizations',
        description: 'Skip the trip and get same-day care for common conditions.',
        services: [
            {
                name: 'Overview',
                link: '/organizations',
            },
            {
                name: 'Integrated Care',
                link: '/organizations/integrated-care',
            },
            {
                name: 'Chronic Care',
                link: '/organizations/chronic-care',
            },
            {
                name: 'Diabetes',
                link: '/organizations/diabetes',
            },
            {
                name: 'Hypertension',
                link: '/organizations/hypertension',
            },
            {
                name: 'Obesity & Weight Care',
                link: '/organizations/obesity-weight-care',
            },
            {
                name: 'Primary Care',
                link: '/organizations/primary-care',
            },
            {
                name: 'Mental Health',
                link: '/organizations/mental-health',
            },
            {
                name: 'Wellbound: Employee',
                link: '/organizations/wellbound-employee',
            },
        ],
    },
    {
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=64&q=80',
        name: 'Hospitals & Health Systems',
        link: '/hospitals-health-systems',
        description: 'Skip the trip and get same-day care for common conditions.',
        services: [
            {
                name: 'Overview',
                link: '/organizations/health-systems',
            },
            {
                name: 'Virtual Care Platform',
                link: '/organizations/health-systems/virtual-care',
            },
            {
                name: 'Emergency Services',
                link: '/organizations/health-systems/emergency-services',
            },
            {
                name: 'Telestroke',
                link: '/organizations/health-systems/telestroke',
            },
            {
                name: 'Inpatient Services',
                link: '/organizations/health-systems/inpatient-services',
            },
            {
                name: 'Virtual Nursing',
                link: '/organizations/health-systems/virtual-nursing',
            },
            {
                name: 'Virtual Sitting',
                link: '/organizations/health-systems/virtual-sitting',
            },
            {
                name: 'Outpatient Services',
                link: '/organizations/health-systems/outpatient-services',
            },
            {
                name: 'Devices',
                link: '/organizations/health-systems/devices',
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

function OrganisationMenuContent() {
    const [active, setActive] = React.useState<string | null>(`24/7 Care`);
    return (
        <div className='main-content w-full sm:shadow flex lg:grid grid-cols-4 gap-8 p-6 overflow-y-auto bg-white border-t-0 border-b-2 border-indigo-950'>
            {/* Ways We Help Section */}
            <section className="min-w-fit sm:min-w-[240px] md:w-full text-nowrap h-full flex flex-col gap-4 overflow-y-auto">
                <h3 className="sm:text-lg font-semibold text-gray-900">Ways We Help</h3>
                <div className="flex h-full flex-col sm:gap-2">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div onMouseEnter={() => setActive(item.name)} className={`flex items-center gap-3 p-2 hover:bg-gray-50 ${active === item.name ? 'bg-gray-100' : ''} rounded-lg cursor-pointer group`}>
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
                                    <div className="w-full flex flex-col sm:gap-2 pl-4">
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
                        </React.Fragment>
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

export default OrganisationMenuContent