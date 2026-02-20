'use client';

import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Bell, Plus, RefreshCcw } from 'lucide-react';
import useMain from '@/app/hooks/useMain';
import { set } from 'react-hook-form';


function Notifications() {
    const {loading, setLoading} = useMain();
    const [hasNotifications, setHasNotifications] = useState(false); // This could be dynamic based on actual notifications data
    useEffect(()=>{
        setLoading('notifications');
        // Simulate loading notifications
        setTimeout(() => {
            setLoading('');
            setHasNotifications(true); // Simulate that we have notifications after loading
            // In a real application, you would fetch notifications from an API here
            // and set hasNotifications based on the response.
        }, 3000);
        // Cleanup function to reset loading state if component unmounts
        return () => {
            setLoading('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <Popover>
            <PopoverTrigger asChild>
                <aside className="relative">
                    <div className='size-2 rounded-full bg-red-500 absolute top-0 right-0' />
                    <Bell className='size-5' />
                </aside>
            </PopoverTrigger>
            <PopoverContent side={'bottom'} className="w-[370px] text-[14px] flex flex-col gap-1 mr-5 rounded-xl p-4 py-3 pt-0 overflow-y-auto max-h-[500px]">
                <div className="w-full py-4 flex items-center justify-between sticky top-0 bg-white z-10">
                    <p className='text-base'>Notifications</p>
                    <button className="size-8 rounded-full border flex items-center justify-center"><Plus className='size-5 rotate-45' /></button>
                </div>

                {
                    loading ? <div className='w-full h-[200px] flex flex-col gap-1 items-center justify-center'>
                        <RefreshCcw className='size-6 animate-spin' />
                        <p className='text-sm text-gray-500'>Loading notifications...</p>
                    </div>:
                    hasNotifications ? <NotificationList /> : <EmptyNotifications />
                }
            </PopoverContent>
        </Popover>
    )
}


const NotificationList = () => {
    const notifications = [
        {
            id: 1,
            type: 'new_patient',
            title: 'New Patient',
            message: 'You have a new patient named Daniel Akobada',
            time: '12:14 • 20/12/2025',
            isNew: true,
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 2,
            type: 'new_patient',
            title: 'New Patient',
            message: 'You have a new patient named Daniel Akobada',
            time: '12:14 • 20/12/2025',
            isNew: true,
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            id: 3,
            type: 'appointment',
            title: 'Appointment Tomorrow',
            message: 'Hi, Dr. Michael Chen you have an appointment tomorrow with Meshack',
            time: '12:14 • 20/12/2025',
            isNew: false,
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 4,
            type: 'appointment',
            title: 'Appointment Tomorrow',
            message: 'Hi, Dr. Michael Chen you have an appointment tomorrow with Meshack',
            time: '12:14 • 20/12/2025',
            isNew: false,
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
        }
    ];

    const newNotifications = notifications.filter(n => n.isNew);
    const allNotifications = notifications.filter(n => !n.isNew);

    return (
        <div className="w-full flex flex-col gap-3">
            {/* New Notifications Section */}
            {newNotifications.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-gray-600">New</h3>
                        <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                            {newNotifications.length}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        {newNotifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                </div>
            )}

            {/* All Notifications Section */}
            {allNotifications.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-gray-600">All</h3>
                        <button className="text-primary">
                            Clear All
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        {allNotifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                </div>
            )}

            {/* See More Button */}
            {notifications.length > 0 && (
                <button className="w-full py-2 text-gray-600 hover:text-gray-800 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    See More
                </button>
            )}
        </div>
    );
};

const NotificationItem = ({ notification }: { notification: any }) => {
    const getNotificationIcon = (type: string) => {
        if (type === 'new_patient') {
            return (
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C8.55228 0 9 0.447715 9 1V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H7V1C7 0.447715 7.44772 0 8 0Z" fill="#10B981" />
                    </svg>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex items-start gap-3 p-3 border-b hover:bg-gray-50 transition-colors cursor-pointer">
            {/* Avatar or Icon */}
            <div className="flex-shrink-0">
                {notification.avatar ? (
                    <img
                        src={notification.avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    getNotificationIcon(notification.type)
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {notification.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                    {notification.message}
                </p>
                <p className="text-xs text-gray-500">
                    {notification.time}
                </p>
            </div>

            {/* New indicator */}
            {notification.isNew && (
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
            )}
        </div>
    );
};

const EmptyNotifications = () => (
    <div className="w-full h-[200px] flex flex-col gap-2 items-center justify-center">
        <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="60" height="60" rx="30" fill="black" />
            <rect width="60" height="60" rx="30" fill="#34765A" />
            <g clip-path="url(#clip0_530_17574)">
                <path d="M39.725 33.7221L40.276 34.0974C40.5042 34.2529 40.5631 34.5639 40.4076 34.7922C40.3468 34.8815 40.2585 34.9488 40.1561 34.9838L25.0154 40.1568C24.7541 40.246 24.4699 40.1066 24.3806 39.8453C24.3456 39.7429 24.3448 39.6319 24.3782 39.5291L24.5843 38.8951L21.7823 30.6938C20.3538 26.5129 22.5852 21.9655 26.7661 20.537C30.9471 19.1085 35.4945 21.3399 36.923 25.5209L39.725 33.7221ZM30.5433 39.3249L35.2748 37.7083C35.7212 39.0148 35.0239 40.4359 33.7173 40.8823C32.4108 41.3287 30.9897 40.6314 30.5433 39.3249Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_530_17574">
                    <rect width="24" height="24" fill="white" transform="translate(14.7656 22.5234) rotate(-18.8633)" />
                </clipPath>
            </defs>
        </svg>

        <span className="flex flex-col items-center">
            <p className='text-base'>All caught up</p>
            <p className="text-gray-500 text-sm">You have no new notifications.</p>
        </span>
    </div>
);

export default Notifications