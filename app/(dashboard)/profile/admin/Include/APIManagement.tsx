'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const apiSchema = z.object({
  mapsApiKey: z.string().min(1, 'API Key is required'),
  mapsEndpoint: z.string().url('Enter a valid URL'),
  mapsTimeout: z.string(),
  paymentSecret: z.string().min(1, 'Secret Key is required'),
  paymentProvider: z.string(),
  paymentMode: z.string(),
  smsApiKey: z.string(),
  smsProvider: z.string(),
  smsRegion: z.string(),
});

type APIForm = z.infer<typeof apiSchema>;

function APIManagement() {
  const [showMapsKey, setShowMapsKey] = useState(false);
  const [showPaymentKey, setShowPaymentKey] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<APIForm>({
    resolver: zodResolver(apiSchema),
    defaultValues: {
      mapsApiKey: '***************',
      mapsEndpoint: 'https://maps.googleapis.com/maps/api/',
      mapsTimeout: '30',
      paymentSecret: '***************',
      paymentProvider: 'Stripe',
      paymentMode: 'Test',
      smsApiKey: '',
      smsProvider: 'Twilio',
      smsRegion: 'Gambia',
    },
  });

  const onSubmit = (data: APIForm) => {
    console.log('Form Data:', data);
    // Add save logic here
  };

  return (
    <div className="w-[450px] main-content flex flex-col gap-6">
      <div className="flex flex-col">
        <h2>Tool/API Management</h2>
        <small className='text-gray-600'>Manage your platform API</small>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
        {/* Google Maps API */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label>Google Maps API</label>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Connected</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>API Key</label>
            <div className="relative w-full flex items-center border rounded h-10 px-3">
              <input
                type={showMapsKey ? 'text' : 'password'}
                {...register('mapsApiKey')}
                className="w-full text-sm border-none outline-none"
              />
              <button
                type="button"
                className=""
                onClick={() => setShowMapsKey((v) => !v)}
                tabIndex={-1}
              >
                {showMapsKey ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {errors.mapsApiKey && <p className="text-red-500 text-xs">{errors.mapsApiKey.message}</p>}
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Endpoint URL</label>
            <input {...register('mapsEndpoint')} className='w-full border rounded h-10 px-3 text-sm' />
            {errors.mapsEndpoint && <p className="text-red-500 text-xs">{errors.mapsEndpoint.message}</p>}
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Timeout (seconds)</label>
            <select {...register('mapsTimeout')} className='w-full border rounded h-10 px-3 text-sm'>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="60">60</option>
            </select>
          </div>
          <Button variant="destructive" type="button" className="w-full mt-3">Disconnect</Button>
        </div>
        <hr className="w-full my-3" />
        {/* Payment Gateway */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label>Payment Gateway</label>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Connected</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>Secret Key</label>
            <div className="relative w-full flex items-center border rounded h-10 px-3">
              <input
                type={showPaymentKey ? 'text' : 'password'}
                {...register('paymentSecret')}
                className="w-full text-sm border-none outline-none"
              />
              <button
                type="button"
                className=""
                onClick={() => setShowPaymentKey((v) => !v)}
                tabIndex={-1}
              >
                {showPaymentKey ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {errors.paymentSecret && <p className="text-red-500 text-xs">{errors.paymentSecret.message}</p>}
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Provider</label>
            <select {...register('paymentProvider')} className='w-full border rounded h-10 px-3 text-sm'>
              <option value="Stripe">Stripe</option>
              <option value="PayPal">PayPal</option>
              <option value="Flutterwave">Flutterwave</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Mode</label>
            <select {...register('paymentMode')} className='w-full border rounded h-10 px-3 text-sm'>
              <option value="Test">Test</option>
              <option value="Live">Live</option>
            </select>
          </div>
          <Button variant="destructive" type="button" className="w-full mt-3">Disconnect</Button>
        </div>
        <hr className="w-full my-3" />
        {/* SMS Gateway */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label>SMS Gateway</label>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Disconnected</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>API Key</label>
            <input {...register('smsApiKey')} placeholder="Enter SMS API Key" className='w-full border rounded h-10 px-3 text-sm' />
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Provider</label>
            <select {...register('smsProvider')} className='w-full border rounded h-10 px-3 text-sm'>
              <option value="Twilio">Twilio</option>
              <option value="Nexmo">Nexmo</option>
              <option value="Plivo">Plivo</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-1 mt-2">
            <label>Region</label>
            <select {...register('smsRegion')} className='w-full border rounded h-10 px-3 text-sm'>
              <option value="Gambia">Gambia</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
            </select>
          </div>
          <Button type="submit" className="w-full mt-3">Connect</Button>
        </div>
      </form>
    </div>
  );
}

export default APIManagement;