'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const configSchema = z.object({
  minSessionDuration: z.string(),
  maxSessionDuration: z.string(),
  maxSimultaneousBookings: z.string(),
  bufferTime: z.string(),
  basicPrice: z.string(),
  basicSessions: z.string(),
  premiumPrice: z.string(),
  premiumSessions: z.string(),
  familyPrice: z.string(),
  familyMembers: z.string(),
  touristPrice: z.string(),
  touristDuration: z.string(),
});

type ConfigForm = z.infer<typeof configSchema>;

function ConfigurationSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfigForm>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      minSessionDuration: '15',
      maxSessionDuration: '120',
      maxSimultaneousBookings: '5',
      bufferTime: '10',
      basicPrice: '9.99',
      basicSessions: '2',
      premiumPrice: '19.99',
      premiumSessions: '5',
      familyPrice: '29.99',
      familyMembers: '4',
      touristPrice: '49.99',
      touristDuration: '7',
    },
  });

  const onSubmit = (data: ConfigForm) => {
    console.log('Form Data:', data);
    // Add save logic here
  };

  return (
    <div className="w-[450px] main-content flex flex-col gap-6">
      <div className="flex flex-col">
        <h2>Consultation Settings</h2>
        <small className='text-gray-600'>Manage your platform settings and configurations</small>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
        <div className="w-full flex flex-col gap-1">
          <label>Minimum Session Duration (minutes)</label>
          <input {...register('minSessionDuration')} className='w-full border rounded h-10 px-3 text-sm' />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Maximum Session Duration (minutes)</label>
          <input {...register('maxSessionDuration')} className='w-full border rounded h-10 px-3 text-sm' />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Max Simultaneous Bookings</label>
          <input {...register('maxSimultaneousBookings')} className='w-full border rounded h-10 px-3 text-sm' />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Buffer Time Between Sessions (minutes)</label>
          <input {...register('bufferTime')} className='w-full border rounded h-10 px-3 text-sm' />
        </div>
        <hr className="w-full my-3" />
        <p>Subscription Control</p>
        <div className="w-full flex flex-col gap-1">
          <label>Basic Plan <span className="text-xs text-gray-500">$9.99/month</span></label>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Monthly Price ($)</label>
              <input {...register('basicPrice')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
            <div className="flex-1">
              <label className="text-xs">Sessions Included</label>
              <input {...register('basicSessions')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Premium Plan <span className="text-xs text-gray-500">$19.99/month</span></label>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Monthly Price ($)</label>
              <input {...register('premiumPrice')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
            <div className="flex-1">
              <label className="text-xs">Sessions Included</label>
              <input {...register('premiumSessions')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Family Plan <span className="text-xs text-gray-500">$29.99/month</span></label>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Monthly Price ($)</label>
              <input {...register('familyPrice')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
            <div className="flex-1">
              <label className="text-xs">Max Family Members</label>
              <input {...register('familyMembers')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Tourist Plan <span className="text-xs text-gray-500">$49.99/week</span></label>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Weekly Price ($)</label>
              <input {...register('touristPrice')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
            <div className="flex-1">
              <label className="text-xs">Plan Duration (days)</label>
              <input {...register('touristDuration')} className='w-full border rounded h-10 px-3 text-sm' />
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-5 mt-4'>
          <Button variant={'outline'} type="button" onClick={() => reset()}>Discard</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}

export default ConfigurationSettings;