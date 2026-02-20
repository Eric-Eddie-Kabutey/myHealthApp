import { logo } from '@/app/assets/icons'
import { AppleAppBadge, GoogleAppBadge } from '@/app/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full p-4 py-8 pt-12 flex flex-col gap-4 items-center bg-white text-slate-800 min-h-[200px] border-t'>
            <div className="w-full max-w-[1200px] flex flex-col gap-8">
                <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24">
                    <div className="flex flex-col gap-4 min-w-fit">
                        <aside className="flex flex-col gap-2">
                            <Link href={'/'}>
                                <Image src={logo} alt="RiciaCare Logo" className='w-32' />
                            </Link>
                            <small>Healthier should always be within reach</small>
                            <div className="flex items-center gap-3">
                                <i className="fab fa-facebook" />
                                <i className="fab fa-instagram" />
                                <i className="fab fa-youtube" />
                                <i className="fab fa-x-twitter" />
                            </div>
                        </aside>

                        <aside className="flex flex-col">
                            <b>Address Info</b>
                            <small className="text-gray-700">Lorem, ipsum.</small>
                            <small className="text-gray-700">Lorem, ipsum. Lorem.</small>
                        </aside>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 pt-2">
                        <aside className="flex flex-col gap-2 min-w-[120px]">
                            <b>Company</b>
                            <small className="text-gray-700">About Us</small>
                            <small className="text-gray-700">Leadership</small>
                            <small className="text-gray-700">Careers</small>
                            <small className="text-gray-700">Privacy Policy</small>
                            <small className="text-gray-700">Terms of Service</small>
                        </aside>
                        <aside className="flex flex-col gap-2 min-w-[120px]">
                            <b>Support</b>
                            <small className="text-gray-700">Help Center</small>
                            <small className="text-gray-700">FAQs</small>
                            <small className="text-gray-700">Contact Us</small>
                        </aside>
                        <aside className="flex flex-col flex-1 gap-2">
                            <div className="pb-1 flex">
                                <b>Services</b>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
                                <aside className="flex flex-col gap-1">
                                    <small className="text-sm font-[500] mb-1">Organizations</small>
                                    <small className="text-gray-700">Online Consultation</small>
                                    <small className="text-gray-700">Health Monitoring</small>
                                    <small className="text-gray-700">Prescription Delivery</small>
                                </aside>
                                <aside className="flex flex-col gap-1">
                                    <small className="text-sm font-[500] mb-1">Individuals</small>
                                    <small className="text-gray-700">Online Consultation</small>
                                    <small className="text-gray-700">Health Monitoring</small>
                                    <small className="text-gray-700">Prescription Delivery</small>
                                </aside>
                                <aside className="flex flex-col gap-1">
                                    <small className="text-sm font-[500] mb-1">Clinicians</small>
                                    <small className="text-gray-700">Online Consultation</small>
                                    <small className="text-gray-700">Health Monitoring</small>
                                    <small className="text-gray-700">Prescription Delivery</small>
                                </aside>
                            </div>
                        </aside>
                    </div>
                </section>
                <section className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-sm text-center sm:text-left">© 2025 Ricia Care Telemedicine <span className="text-purple-600 italic">Address</span></span>
                    <div className="flex gap-3">
                        <Image src={AppleAppBadge} alt='AppleAppBadge' className='w-32' />
                        <Image src={GoogleAppBadge} alt='AppleAppBadge' className='w-32' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
