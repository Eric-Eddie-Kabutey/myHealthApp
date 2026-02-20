'use client'

import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Download, MapPin, Plus, Star } from 'lucide-react'
import React, { SVGProps, useEffect, useState } from 'react'
import {DayPicker} from 'react-day-picker'
import moment from 'moment';
import "react-day-picker/dist/style.css";
import { visaLogo } from '@/app/assets/images'
import Image from 'next/image'
import {Dialog,DialogContent,DialogTitle,} from "@/components/ui/dialog"
import Link from 'next/link'
import routes from '@/lib/routes'
import { timeList } from './timeList'
import { ScheduleType } from './types'
import { useRoleGuard } from '@/app/hooks/useRoleGuard'




const steps = [
    'Select a service',
    'Choose Doctor',
    'Select Time',
    'Confirm Booking'
]


const consultCategories = [
    {
        title: 'General Medical',
        subDescription: '24/7 Care',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5007 15.666H19.1673V17.3327H0.833984V15.666H2.50065V1.49935C2.50065 1.03912 2.87375 0.666016 3.33398 0.666016H16.6673C17.1276 0.666016 17.5007 1.03912 17.5007 1.49935V15.666ZM9.16732 5.66602H7.50065V7.33268H9.16732V8.99935H10.834V7.33268H12.5007V5.66602H10.834V3.99935H9.16732V5.66602ZM11.6673 15.666H13.334V10.666H6.66732V15.666H8.33398V12.3327H11.6673V15.666Z" fill="#34765A"/>
        </svg>,
        services: [
            {
            title: 'General Consultation',
            amount: 50,
            description: 'Basic medical consultation for non-emergency conditions',
            duration: '30 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
                },
                {
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                name: 'Dr. Sarah Lee',
                specialty: 'General Practitioner',
                ratings: 4.7,
                reviews: 98,
                distance: '3.8 miles away',
                status: 'Available Today'
                },
                {
                image: 'https://randomuser.me/api/portraits/men/65.jpg',
                name: 'Dr. David Kim',
                specialty: 'General Practitioner',
                ratings: 4.9,
                reviews: 150,
                distance: '6.1 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'Allergies',
            amount: 75,
            description: 'Find relief from seasonal or chronic allergy symptoms with expert advice.',
            duration: '45 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
                },
                {
                image: 'https://randomuser.me/api/portraits/women/22.jpg',
                name: 'Dr. Emily Park',
                specialty: 'General Practitioner',
                ratings: 4.6,
                reviews: 87,
                distance: '4.5 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'Bronchitis',
            amount: 50,
            description: 'Get prompt treatment for chest discomfort, cough, and breathing issues.',
            duration: '30 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'Cold and Flu',
            amount: 75,
            description: 'Effective care to help you recover faster from viral infections.',
            duration: '45 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/65.jpg',
                name: 'Dr. David Kim',
                specialty: 'General Practitioner',
                ratings: 4.9,
                reviews: 150,
                distance: '6.1 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'Sinus Infections',
            amount: 50,
            description: 'Treatment for nasal congestion, pain, and pressure caused by sinusitis.',
            duration: '30 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                name: 'Dr. Sarah Lee',
                specialty: 'General Practitioner',
                ratings: 4.7,
                reviews: 98,
                distance: '3.8 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'Sore Throats',
            amount: 75,
            description: 'Diagnosis and relief for throat pain, irritation, or infection.',
            duration: '45 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
                }
            ]
            },
            {
            title: 'And More',
            amount: 50,
            description: 'We’re here for a wide range of general health issues — just book a visit.',
            duration: '30 mins',
            doctors: [
                {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
                }
            ]
            }
        ]
    },
    {
        title: 'Primary Care',
        subDescription: 'Family Physicians',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4636 11.9693C11.6788 12.8509 13.3098 14.8859 13.6149 17.3327H0.384766C0.689866 14.8859 2.32091 12.8509 4.53616 11.9693L6.99985 15.666L9.4636 11.9693ZM11.9998 0.666016V5.66602C11.9998 8.42743 9.76126 10.666 6.99985 10.666C4.23843 10.666 1.99986 8.42743 1.99986 5.66602V0.666016H11.9998ZM10.3332 5.66602H3.66652C3.66652 7.50693 5.15891 8.99935 6.99985 8.99935C8.84085 8.99935 10.3332 7.50693 10.3332 5.66602Z" fill="#34765A"/>
        </svg>,
        services: [
            {
                title: 'Allergies',
                amount: 50,
                description: 'Personalized plans to manage seasonal or chronic allergy symptoms.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'General Practitioner',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Diabetes',
                amount: 75,
                description: 'Ongoing monitoring, management, and support for living well with diabetes.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Endocrinologist',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Cold and Flu',
                amount: 50,
                description: 'Fast relief and expert care for common viral infections.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/65.jpg',
                        name: 'Dr. David Kim',
                        specialty: 'General Practitioner',
                        ratings: 4.9,
                        reviews: 150,
                        distance: '6.1 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Anxiety',
                amount: 75,
                description: 'Talk to a provider about symptoms, triggers, and treatment options.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/22.jpg',
                        name: 'Dr. Emily Park',
                        specialty: 'Mental Health',
                        ratings: 4.6,
                        reviews: 87,
                        distance: '4.5 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Back Pain',
                amount: 50,
                description: 'Expert evaluation and guidance to help you manage and reduce back pain.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/12.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'General Practitioner',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Sexual Health',
                amount: 75,
                description: 'Private, judgment-free care for STI testing, treatment, and more.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'General Practitioner',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'High Blood Pressure',
                amount: 50,
                description: 'Monitor and manage hypertension with professional support.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'General Practitioner',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            }
        ]
    },
    {
        title: 'Mental Health',
        subDescription: 'Therapy & Counselling',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.08268 0.666016C4.47185 0.666016 3.16602 1.97185 3.16602 3.58268C3.16602 3.73282 3.17738 3.8803 3.19929 4.02432C1.76965 4.21204 0.666016 5.43514 0.666016 6.91602C0.666016 7.7321 1.00121 8.46993 1.54144 8.99935C1.00121 9.52877 0.666016 10.2666 0.666016 11.0827C0.666016 12.2508 1.35234 13.258 2.34396 13.7238C2.33649 13.8148 2.33268 13.9067 2.33268 13.9993C2.33268 15.8403 3.82507 17.3327 5.66602 17.3327C6.66159 17.3327 7.55527 16.8962 8.16602 16.2042V1.54144C7.6366 1.00121 6.8988 0.666016 6.08268 0.666016ZM9.83268 1.54144V16.2042C10.4434 16.8962 11.3371 17.3327 12.3327 17.3327C14.1736 17.3327 15.666 15.8403 15.666 13.9993C15.666 13.9067 15.6622 13.8148 15.6548 13.7238C16.6463 13.258 17.3327 12.2508 17.3327 11.0827C17.3327 10.2666 16.9975 9.52877 16.4573 8.99935C16.9975 8.46993 17.3327 7.7321 17.3327 6.91602C17.3327 5.43514 16.229 4.21204 14.7994 4.02432C14.8213 3.8803 14.8327 3.73282 14.8327 3.58268C14.8327 1.97185 13.5268 0.666016 11.916 0.666016C11.0999 0.666016 10.3621 1.00121 9.83268 1.54144Z" fill="#34765A"/>
        </svg>,
        services: [
            {
                title: 'Anxiety, stress, or feeling overwhelmed',
                amount: 50,
                description: 'Talk to someone about what’s weighing you down',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Mental Health',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Negative thought patterns',
                amount: 75,
                description: 'Learn how to challenge and manage unhelpful thoughts with guidance.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Mental Health',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Not feeling like yourself',
                amount: 50,
                description: 'When things feel off, we help you make sense of it and feel better again.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/65.jpg',
                        name: 'Dr. David Kim',
                        specialty: 'Mental Health',
                        ratings: 4.9,
                        reviews: 150,
                        distance: '6.1 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: "Sleep issues or if you can't get out of bed",
                amount: 75,
                description: 'Get help for insomnia, fatigue, or low energy.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/22.jpg',
                        name: 'Dr. Emily Park',
                        specialty: 'Mental Health',
                        ratings: 4.6,
                        reviews: 87,
                        distance: '4.5 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Relationship conflicts',
                amount: 50,
                description: 'Work through challenges with family, partners, or friends with support.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/12.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Mental Health',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Trauma and PTSD',
                amount: 75,
                description: 'Safe, compassionate care to help you process and heal.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Mental Health',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Mood swings',
                amount: 50,
                description: 'If your emotions feel unpredictable or intense, we’re here to help.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Mental Health',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Medication management (psychiatry only)',
                amount: 50,
                description: 'Get professional guidance on psychiatric medications & care.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/65.jpg',
                        name: 'Dr. David Kim',
                        specialty: 'Psychiatrist',
                        ratings: 4.9,
                        reviews: 150,
                        distance: '6.1 miles away',
                        status: 'Available Today'
                    }
                ]
            }
        ]
    },
    {
        title: 'Dermatology',
        subDescription: 'Skin care specialist',
        icon: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 0.445942C7.00975 0.162325 6.44047 0 5.83333 0C3.99238 0 2.5 1.49238 2.5 3.33333V4.81185C1.79079 5.09703 1.20952 5.53988 0.784383 6.12444C0.243658 6.86792 0 7.77892 0 8.75C0 10.0512 0.662742 11.1963 1.66667 11.8683V12.9167C1.66667 14.9878 3.3456 16.6667 5.41667 16.6667C6.18756 16.6667 6.90417 16.4341 7.5 16.0352V12.9167C7.5 11.8058 7.225 11.0956 6.7835 10.6173C6.33119 10.1273 5.59685 9.76375 4.44633 9.572L4.72033 7.928C5.80502 8.10875 6.75483 8.44775 7.5 9.02258V0.445942ZM9.16667 0.445942V9.02258C9.91183 8.44775 10.8617 8.10875 11.9463 7.928L12.2203 9.572C11.0698 9.76375 10.3355 10.1273 9.88317 10.6173C9.44167 11.0956 9.16667 11.8058 9.16667 12.9167V16.0352C9.7625 16.4341 10.4791 16.6667 11.25 16.6667C13.3211 16.6667 15 14.9878 15 12.9167V11.8683C16.0039 11.1963 16.6667 10.0512 16.6667 8.75C16.6667 7.77892 16.423 6.86792 15.8822 6.12444C15.4572 5.53988 14.8759 5.09703 14.1667 4.81185V3.33333C14.1667 1.49238 12.6742 0 10.8333 0C10.2262 0 9.65692 0.162325 9.16667 0.445942Z" fill="#34765A"/>
        </svg>,
        services: [
            {
                title: 'Acne',
                amount: 50,
                description: 'Take control of breakouts with personalized treatment plans.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Dermatologist',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Eczema',
                amount: 75,
                description: 'Relieve dryness, itching, and irritation with targeted solutions.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Dermatologist',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Psoriasis',
                amount: 50,
                description: 'Get support and treatment to manage flare-ups and symptoms.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/65.jpg',
                        name: 'Dr. David Kim',
                        specialty: 'Dermatologist',
                        ratings: 4.9,
                        reviews: 150,
                        distance: '6.1 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Rashes',
                amount: 75,
                description: 'Identify and treat rashes with expert guidance and care.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/22.jpg',
                        name: 'Dr. Emily Park',
                        specialty: 'Dermatologist',
                        ratings: 4.6,
                        reviews: 87,
                        distance: '4.5 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Rosacea',
                amount: 50,
                description: 'Calm redness and sensitivity with professional advice and treatment.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/12.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Dermatologist',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Skin Infections',
                amount: 75,
                description: 'Quick diagnosis and treatment for bacterial, fungal, or viral skin issues.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Dermatologist',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'And More',
                amount: 50,
                description: "From scalp to soles, we're here for all your skin health needs.",
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Dermatologist',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            }
        ]
    },
    {
        title: 'Health Programs',
        subDescription: 'Wellness Plans',
        icon: (props: SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0.445942C7.00975 0.162325 6.44047 0 5.83333 0C3.99238 0 2.5 1.49238 2.5 3.33333V4.81185C1.79079 5.09703 1.20952 5.53988 0.784383 6.12444C0.243658 6.86792 0 7.77892 0 8.75C0 10.0512 0.662742 11.1963 1.66667 11.8683V12.9167C1.66667 14.9878 3.3456 16.6667 5.41667 16.6667C6.18756 16.6667 6.90417 16.4341 7.5 16.0352V12.9167C7.5 11.8058 7.225 11.0956 6.7835 10.6173C6.33119 10.1273 5.59685 9.76375 4.44633 9.572L4.72033 7.928C5.80502 8.10875 6.75483 8.44775 7.5 9.02258V0.445942ZM9.16667 0.445942V9.02258C9.91183 8.44775 10.8617 8.10875 11.9463 7.928L12.2203 9.572C11.0698 9.76375 10.3355 10.1273 9.88317 10.6173C9.44167 11.0956 9.16667 11.8058 9.16667 12.9167V16.0352C9.7625 16.4341 10.4791 16.6667 11.25 16.6667C13.3211 16.6667 15 14.9878 15 12.9167V11.8683C16.0039 11.1963 16.6667 10.0512 16.6667 8.75C16.6667 7.77892 16.423 6.86792 15.8822 6.12444C15.4572 5.53988 14.8759 5.09703 14.1667 4.81185V3.33333C14.1667 1.49238 12.6742 0 10.8333 0C10.2262 0 9.65692 0.162325 9.16667 0.445942Z" fill="#34765A"/>
        </svg>,
        services: [
            {
                title: 'Male Reproductive Health',
                amount: 50,
                description: 'Support for fertility, hormones, sexual health, and overall wellness.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Urologist',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Female Reproductive Health',
                amount: 75,
                description: 'Care for menstrual health, fertility, hormonal balance, and more.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Gynecologist',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Weight Loss Program',
                amount: 50,
                description: 'Guided plans and expert support to help you reach and maintain a healthy weight.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/65.jpg',
                        name: 'Dr. David Kim',
                        specialty: 'Nutritionist',
                        ratings: 4.9,
                        reviews: 150,
                        distance: '6.1 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Adolescent Reproductive Health',
                amount: 75,
                description: 'Trusted information for teens navigating reproductive changes.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/22.jpg',
                        name: 'Dr. Emily Park',
                        specialty: 'Pediatrician',
                        ratings: 4.6,
                        reviews: 87,
                        distance: '4.5 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Mental Health',
                amount: 50,
                description: 'Tools, therapy, and support to help you build emotional well-being.',
                duration: '30mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/men/32.jpg',
                        name: 'Dr. Michael Chen',
                        specialty: 'Mental Health',
                        ratings: 4.8,
                        reviews: 124,
                        distance: '5.2 miles away',
                        status: 'Available Today'
                    }
                ]
            },
            {
                title: 'Sex Education',
                amount: 75,
                description: 'Fact-based, age-appropriate education to empower healthy choices and understanding.',
                duration: '45mins',
                doctors: [
                    {
                        image: 'https://randomuser.me/api/portraits/women/44.jpg',
                        name: 'Dr. Sarah Lee',
                        specialty: 'Health Educator',
                        ratings: 4.7,
                        reviews: 98,
                        distance: '3.8 miles away',
                        status: 'Available Today'
                    }
                ]
            }
        ]
    },
]

function AppointmentBooking() {
    useRoleGuard('patient')
    const [activeStep, setActiveStep] = useState(steps[0])
    const [activeConsultation, setActiveConsultation] = useState<typeof consultCategories[0]|null>(null);
    const [activeService, setActiveService] = useState<(typeof consultCategories[0]['services'][0]) | null>(null);
    const [activeDoctor, setActiveDoctor] = useState<(typeof consultCategories[0]['services'][0]['doctors'] extends Array<infer D> ? D : never) | null>(null);
    const [scheduleDetails, setScheduleDetails] = useState<ScheduleType|null>(null)
    const [confirmedAppointment, setConfirmedAppointment] = useState<boolean>(false);
    const scheduleDataCompleted = () => {
        if (!scheduleDetails) return false;
        if(!scheduleDetails.appointment_type) return false;
        if(!scheduleDetails.day) return false;
        if(!scheduleDetails.time) return false;
        return true;
    }

    useEffect(()=>{
        console.log(scheduleDetails)
    },[scheduleDetails])

    return <PageWrapper content={<>
        <section className="w-full flex items-center justify-between">
            <aside className="flex items-center gap-4">
                {
                    steps.map((step, idx) => (
                        <span onClick={()=>setActiveStep(step)} key={step} className="flex items-center gap-1">
                            <div
                                className={`size-12 rounded-full flex items-center justify-center text-lg
                                    ${activeStep === step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}
                                `}
                            >
                                {idx + 1}
                            </div>
                            <p className={``}>{step}</p>
                        </span>
                    ))
                }
            </aside>
            <Link href={routes.appointment_booking+`/history`}>
                <Button variant={'outline'}>Appointment History</Button>
            </Link>
        </section>

        <section className="w-full flex flex-col gap-3 mt-4">
            <p className='text-lg'>Select Consultation Category</p>
            <aside className="w-full flex overflow-x-auto gap-5">
                {
                    consultCategories.map((consult, idx)=>{
                        return <div key={`consult-${idx}`} onClick={()=>{
                            setActiveConsultation(consult);
                            setTimeout(() => {
                                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                            }, 0);
                        }} className={`p-4 w-[220px] min-w-[220px] h-[149px] border ${activeConsultation?.title === consult.title ? `border-2 border-primary bg-[#34765A0F]`:``} hover:border-2 hover:border-primary hover:bg-[#34765A0F] transition-all cursor-pointer rounded-2xl flex flex-col items-center justify-center gap-4`}>
                            <div className="size-14 rounded-full bg-[#34765A1A] flex items-center justify-center">
                                <consult.icon className='size-5'/>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>{consult.title}</p>
                                <small className='text-gray-600'>{consult.subDescription}</small>
                            </div>
                        </div>
                    })
                }
            </aside>
        </section>
        

        {/* All Services ................... */}
        {
            activeConsultation ? 
            <section id='services-section' className="main-content w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Available Services</p>
                    <button onClick={()=>{
                        setActiveConsultation(null);
                        setActiveService(null);
                        setActiveDoctor(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="flex gap-5 flex-wrap">
                    {
                        activeConsultation?.services.map((service, idx)=>{
                            return <div onClick={()=>{
                                setActiveService(service);
                                setTimeout(() => {
                                    document.getElementById('doc-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} key={`service-${idx}`} className={`p-4 border ${activeService?.title === service.title ? `border-2 border-primary bg-[#34765A0F]`:`bg-white`} hover:border-2 hover:border-primary hover:bg-[#34765A0F] transition-all cursor-pointer rounded-2xl flex flex-col justify-between gap-3 w-[260px] min-[260px] h-[150px]`}>
                                <section className="flex flex-col gap-2">
                                    <div className="w-full flex items-center justify-between">
                                        <p>{service.title}</p>
                                        <p className="text-primary">${service.amount}</p>
                                    </div>
                                    <p className="font-[400] text-gray-700">{service.description}</p>
                                </section>
                                <span className='flex items-center gap-1'><Clock fill='black' className='size-5 text-white'/> {service.duration}</span>
                            </div>
                        })
                    }
                </div>
            </section> : null
        }

        {/* All Doctors ................... */}
        {
            activeService ? 
            <section id='doc-section' className="main-content w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Available Doctors</p>
                    <button onClick={()=>{
                        setActiveService(null);
                        setActiveDoctor(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="flex gap-5 flex-wrap">
                    {
                        activeService?.doctors?.map((doc, idx)=>{
                            return <div onClick={()=>{
                                setActiveDoctor(doc); 
                                setTimeout(() => {
                                    document.getElementById('schedule-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} key={`doc-${idx}`} className={`p-4 border ${doc?.name === activeDoctor?.name ? `border-2 border-primary bg-[#34765A0F]`:`bg-white`} hover:border-2 hover:border-primary hover:bg-[#34765A0F] transition-all cursor-pointer rounded-2xl flex flex-col justify-between gap-3 w-[300px] min-[300px] h-[150px]`}>
                                <section className="w-full flex gap-2">
                                    <img src={doc.image} alt="doc" className="size-10 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <p className="text-sm">{doc.name}</p>
                                        <small>{doc.specialty}</small>
                                        <small>
                                            <span className='flex items-center gap-1'>
                                                <Star className='text-yellow-500 size-4'/>
                                                {doc.ratings}
                                                ({doc.reviews} reviews)
                                            </span>
                                        </small>
                                    </div>
                                </section>
                                <section className="w-full flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                        <MapPin className='size-4'/>
                                        {doc.distance}
                                    </span>
                                    <div className={`px-3 h-8 text-xs flex items-center rounded-lg ${doc.status.toLowerCase().includes('available') ? `bg-emerald-50 text-emerald-500`:``}`}>{doc.status}</div>
                                </section>
                            </div>
                        })
                    }
                </div>
            </section> : null
        }

        {/* Appointment Detail & Scheduling ............... */}
        {
            activeDoctor ? 
            <section id='schedule-section' className="main-content min-h-[400px] w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Appointment Details</p>
                    <button onClick={()=>{
                        setActiveDoctor(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="w-full flex gap-5">
                    <section className="min-w-[300px] flex flex-col gap-4">
                        <p>Appointment Type</p>
                        <div className="flex flex-col gap-2">
                            <aside onClick={()=>{
                                setScheduleDetails((prev: ScheduleType | null) => ({
                                    ...(prev ?? { appointment_type: 'Virtual Consultation', day: '', time: '' }),
                                    appointment_type: 'Virtual Consultation'
                                }));
                                setTimeout(() => {
                                    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} className={`w-full min-h-12 border rounded-xl p-3 flex items-center justify-between gap-2 ${scheduleDetails?.appointment_type === 'Virtual Consultation'?'border-2 border-primary':''} hover:border-2 hover:border-primary cursor-pointer transition-all ease-in-out`}>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center rounded size-6 bg-emerald-100">
                                        <svg className='size-4' viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.1663 4.66732L18.5108 1.62624C18.6993 1.49428 18.9591 1.54013 19.091 1.72865C19.14 1.79868 19.1663 1.8821 19.1663 1.96759V12.0337C19.1663 12.2638 18.9798 12.4504 18.7497 12.4504C18.6642 12.4504 18.5808 12.4241 18.5108 12.3751L14.1663 9.33398V12.834C14.1663 13.2942 13.7933 13.6673 13.333 13.6673H1.66634C1.20611 13.6673 0.833008 13.2942 0.833008 12.834V1.16732C0.833008 0.707084 1.20611 0.333984 1.66634 0.333984H13.333C13.7933 0.333984 14.1663 0.707084 14.1663 1.16732V4.66732Z" fill="#34765A"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Virtual Consultation</p>
                                        <small className="text-gray-600">Video call with your doctor</small>
                                    </div>
                                </div>
                                <CheckCircle className={`size-5 text-primary ${scheduleDetails?.appointment_type === 'Virtual Consultation'?'flex':'hidden'}`}/>
                            </aside>
                            <aside onClick={()=>{
                                setScheduleDetails((prev: ScheduleType | null) => ({
                                    ...(prev ?? { appointment_type: 'In-Person Vist', day: '', time: '' }),
                                    appointment_type: 'In-Person Vist'
                                }));
                                setTimeout(() => {
                                    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} className={`w-full min-h-12 border rounded-xl p-3 flex items-center justify-between gap-2 ${scheduleDetails?.appointment_type === 'In-Person Vist'?'border-2 border-primary':''} hover:border-2 hover:border-primary cursor-pointer transition-all ease-in-out`}>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center rounded size-6 bg-emerald-100">
                                        <svg className='size-4' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5007 15.666H19.1673V17.3327H0.833984V15.666H2.50065V1.49935C2.50065 1.03912 2.87375 0.666016 3.33398 0.666016H16.6673C17.1276 0.666016 17.5007 1.03912 17.5007 1.49935V15.666ZM9.16732 5.66602H7.50065V7.33268H9.16732V8.99935H10.834V7.33268H12.5007V5.66602H10.834V3.99935H9.16732V5.66602ZM11.6673 15.666H13.334V10.666H6.66732V15.666H8.33398V12.3327H11.6673V15.666Z" fill="#34765A"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">In-Person Visit</p>
                                        <small className="text-gray-600">Visit doctor's clinic</small>
                                    </div>
                                </div>
                                <CheckCircle className={`size-5 text-primary ${scheduleDetails?.appointment_type === 'In-Person Vist'?'flex':'hidden'}`}/>
                            </aside>
                        </div>
                    </section>
                    <section className={`w-[800px] flex gap-5 ${!scheduleDetails?.appointment_type && 'opacity-50 pointer-events-none'}`}>
                        <div className="w-[350px] flex flex-col gap-4">
                            <p>Select Date & Time</p>
                            <div className="flex sm:p-0 p-3 sm:rounded-none rounded-xl w-fit sm:w-full sm:border-none border mt-4 sm:scale-100 scale-90">
                                <DayPicker
                                captionLayout="dropdown"
                                defaultMonth={new Date()}
                                startMonth={new Date()}
                                endMonth={new Date(new Date().getFullYear(), 11)}
                                // disabled={{ dayOfWeek: [0, 1, 3] }}
                                //Tuesday, Thursday, Friday, Saturday
                                mode="single"
                                onDayClick={(day) => {
                                    const date = moment(day, "YYYYMMDD").format();
                                    const formatDate = date?.split('T')?.[0];
                                    const dat = new Date(formatDate);
                                    const options:Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
                                    // const formattedDate = dat.toLocaleDateString('en-US', options);
                                    console.log(day, formatDate)
                                    setScheduleDetails((prev:any)=>({...prev, day}));
                                    setTimeout(() => {
                                        document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 0);
                                    // setSelectedDate(formattedDate)

                                    // setPayload((prev:any) => ({ ...prev, date: formatDate }));
                                    // setState({...payload, date: formatDate})
                                    // setOpenTimeModal(true);
                                }}
                                />
                            </div>
                        </div>
                        <div className="min-w-[300px] flex flex-col gap-4">
                            <p>Call duration</p>
                            <div className="w-full min-h-10 flex items-center justify-center border rounded-xl bg-gray-50">
                                {activeService?.duration}
                            </div>
                            <span className="text-sm">What time works best?</span>
                            <span className="text-sm">Showing times for 13 May 2025</span>
                            <span className="text-sm">UTC +01:00 (Africa) Central European Time</span>
                            <div className="max-h-[300px] w-full flex flex-col gap-2 overflow-y-auto">
                                {
                                    [...timeList].map((time, idx)=>{
                                        return <div onClick={()=>{
                                            setScheduleDetails((prev: ScheduleType | null) => ({ ...(prev ?? { appointment_type: 'Virtual Consultation', day: '', time: '' }), time }));
                                            setTimeout(() => {
                                                document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                            }, 0);
                                        }} key={`time-${idx}`} className={`w-full cursor-pointer hover:text-primary min-h-10 flex items-center justify-center rounded-lg border ${scheduleDetails?.time === time ? 'bg-primary text-white':''}`}>
                                            {time}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section> : null
        }

        {
            scheduleDataCompleted() ? <section id='payment-section' className="main-content min-h-[400px] w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Confirm Your Appointment</p>
                    <button onClick={()=>{
                        setScheduleDetails(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="w-full flex gap-5">
                    <section className="border rounded-2xl p-4 pt-0 flex flex-col gap-4 bg-white min-w-[400px]">
                        <div className="w-full text-sm min-h-10 flex items-center border-b">Appointment Summary</div>
                        <div className="flex flex-col gap-1">
                            <small><span className="text-gray-700">Service: <span className="text-black">General Consultation</span></span></small>
                            <small><span className="text-gray-700">Doctor: <span className="text-black">Dr. Joshua Odame</span></span></small>
                            <small><span className="text-gray-700">Date & Time: <span className="text-black">24 Jan 2025 . 12pm</span></span></small>
                            <small><span className="text-gray-700">Type: <span className="text-black">Virtual Consultation</span></span></small>
                            <small><span className="text-gray-700">Duration: <span className="text-black">30 Minutes</span></span></small>
                            <small><span className="text-gray-700">Price: <span className="text-black">$50.00</span></span></small>
                        </div>
                    </section>
                    <section className="w-full bg-white p-4 pt-0 flex flex-col gap-4 rounded-2xl border">
                        <div className="w-full text-sm min-h-10 flex items-center border-b">Payment Method</div>
                        <div className="flex flex-col gap-2">
                            <aside className="w-full p-4 border rounded-xl flex items-center justify-between border-primary bg-[#34765A0D] ">
                                <div className="flex items-center gap-2">
                                    <div className="size-10 rounded-full border bg-white">
                                        <Image src={visaLogo} alt='visa' className='size-full object-contain'/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Visa ending in 4242</p>
                                        <small className="text-gray-700">Expires 05/25</small>
                                    </div>
                                </div>
                                <CheckCircle className='size-4'/>
                            </aside>
                            <aside className="w-full p-4 border rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-xl border flex items-center justify-center"><Plus className='size-5'/></div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Add new payment method</p>
                                        {/* <small className="text-gray-700">Expires 05/25</small> */}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                </div>
                <div className="w-full rounded-2xl border p-4 flex flex-col">
                    <div className="w-full text-sm min-h-10 flex items-center border-b">Order Summary</div>
                    <div className="flex flex-col gap-2 mb-4">
                        <aside className="w-full flex flex-col gap-2 border-b py-2">
                            <span className="flex items-center justify-between text-gray-700">Consultation Fee <span className="text-black font-semibold">$50.00</span></span>
                            <span className="flex items-center justify-between text-gray-700">Service Fee <span className="text-black font-semibold">$2.00</span></span>
                        </aside>
                        <span className="flex items-center justify-between text-gray-700">Total <span className="text-black font-semibold">$52.00</span></span>
                    </div>

                    <div onClick={()=>setConfirmedAppointment(true)} className="flex justify-end mb-2"><Button className='rounded px-4'>Confirm & Pay</Button></div>
                    <div className="w-full flex justify-center text-sm">By confirming, you agree to our Terms of Service and Privacy Policy</div>
                </div>
            </section>:null
        }



        <Dialog open={!!confirmedAppointment} onOpenChange={()=>setConfirmedAppointment(false)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <section className="size-16 rounded-full bg-gradient-to-b from-primary via-white to-white flex justify-center items-center">
                <div className="size-[97%] mt-1 rounded-full flex items-center justify-center bg-white">
                <i className="fa fa-check-circle text-xl text-primary"></i>
                </div>
            </section>
            <p className="font-[500] text-lg">Appointment Confirmed!</p>
            <small className="text-gray-600 my-2 text-center">Your appointment with Dr. Michael Chen has been successfully scheduled for Today, June 15 at 10:00 AM.</small>
            
            <div className="w-full rounded-xl p-4 pt-0 flex flex-col bg-gray-50">
                <span className="h-10 flex items-center justify-center border-b font-[500] text-sm">Appointment Details</span>
                <div className="flex flex-col gap-2 mt-3 text-sm">
                    <span className="flex items-center justify-between text-gray-700">Booking ID: <span className="text-black font-[500]">MC-20230615-001</span></span>
                    <span className="flex items-center justify-between text-gray-700">Date <span className="text-black font-[500]">June 15, 2025</span></span>
                    <span className="flex items-center justify-between text-gray-700">Time <span className="text-black font-[500]">10:00 AM</span></span>
                    <span className="flex items-center justify-between text-gray-700">Type <span className="text-black font-[500]">Virtual Consultation</span></span>
                    <span className="flex items-center justify-between text-gray-700">Payment <span className="text-black font-[500]">$52.00 (Visa ending in 4242)</span></span> 
                </div>
            </div>

            <Button variant={`outline`} className='w-full flex items-center gap-3 justify-center border-primary text-primary'>
                <Download className='size-4'/>
                Download Receipt
            </Button>
            <hr className='w-full'/>
            <div className="w-full flex items-center gap-3">
                <i className="fa fa-check-circle text-xl text-primary"></i>
                <aside className="flex flex-col">
                    <p className="text-sm">Confirmation Email</p>
                    <small className="text-gray-700 font-light">We've sent details to your email</small>
                </aside>
            </div>
            </DialogContent>
        </Dialog>
    </>}/>
}

export default AppointmentBooking