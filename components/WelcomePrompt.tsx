'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import Link from 'next/link';

function WelcomePrompt({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <div className="size-16 bg-primary rounded-full mb-4">
                <div className="size-full flex items-center justify-center mt-1 bg-white rounded-full border-b border-primary/10">
                    <svg className='size-6' viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.151 6.0012H30.3324C31.2529 6.0012 31.999 6.7474 31.999 7.66787V19.3345C31.999 20.255 31.2529 21.0011 30.3324 21.0011H26.999L20.0519 11.2751C19.2229 10.1146 17.7475 9.61 16.3815 10.0198L12.2394 11.2624C11.0649 11.6148 9.7917 11.2938 8.92458 10.4267L8.43665 9.93875C7.69295 9.19507 7.81555 7.9569 8.69065 7.3735L17.6924 1.37233C18.7907 0.640183 20.2174 0.624999 21.331 1.33363L28.2564 5.74063C28.5237 5.91082 28.8342 6.0012 29.151 6.0012ZM5.37716 19.8258L2.68423 22.1821C1.89855 22.8695 1.93111 24.1018 2.75205 24.747L11.32 31.4788C12.1201 32.1075 13.2919 31.8786 13.7967 30.9951L14.9699 28.9421C15.6865 27.688 15.5139 26.115 14.5422 25.0461L10.0386 20.0921C8.81688 18.7481 6.74406 18.6298 5.37716 19.8258ZM8.74131 4.33463H1.9987C1.07823 4.33463 0.332031 5.08083 0.332031 6.0013V18.5276C0.332031 19.2083 0.539948 19.8635 0.915681 20.412C0.955531 20.3743 0.996298 20.3371 1.03798 20.3006L3.73091 17.9443C6.12298 15.8513 9.75041 16.0585 11.8885 18.4105L16.3922 23.3645C18.0925 25.2348 18.3947 27.9876 17.1405 30.1825L16.05 32.091C16.9882 32.4465 18.057 32.3663 18.947 31.8323L26.2957 27.4231C27.1297 26.9226 27.3597 25.8173 26.7947 25.0256L18.0169 12.7281C17.8095 12.4381 17.4407 12.3119 17.0992 12.4143L12.9571 13.657C10.9016 14.2736 8.67356 13.712 7.15613 12.1945L6.66818 11.7065C4.80895 9.84728 5.11545 6.75188 7.30321 5.29337L8.74131 4.33463Z" fill="#34765A" />
                    </svg>
                </div>
            </div>

            <p className='text-center'>Welcome to Ricia Care</p>
            <p className="text-gray-600 text-sm text-center">
                We’re glad to have you on board.To get the best out of your Ricia Care experience, please take a moment to complete your profile. This helps us personalize your dashboard and ensure smooth access to all features. It only takes a minute!
            </p>
            <div className="grid grid-cols-2 gap-4 w-full my-3">
                <Button variant={'outline'} onClick={close} className='rounded h-10 w-full'>Skip</Button>
                <Link href={'/profile'} className='w-full'>
                    <Button className='rounded h-10 w-full'>Go to Profile</Button>
                </Link>
            </div>
        </DialogContent>
    </Dialog>
}

export default WelcomePrompt