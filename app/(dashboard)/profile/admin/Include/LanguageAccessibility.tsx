'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const languageSchema = z.object({
  language: z.string(),
  timezone: z.string(),
  dateFormat: z.string(),
  theme: z.string(),
});

type LanguageForm = z.infer<typeof languageSchema>;

function LanguageAccessibility() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LanguageForm>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      language: 'English',
      timezone: 'EST (UTC-5)',
      dateFormat: 'DD/MM/YY',
      theme: 'Light',
    },
  });

  const onSubmit = (data: LanguageForm) => {
    console.log('Form Data:', data);
    // Add save logic here
  };

  return (
    <div className="w-[350px] main-content flex flex-col gap-6">
      <div className="flex flex-col">
        <h2>Language Preferences</h2>
        <small className='text-gray-600'>Update your language and timezone.</small>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
        <div className="w-full flex flex-col gap-1">
          <label>Select Language</label>
          <select {...register('language')} className='w-full border rounded h-10 px-3 text-sm'>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Timezone</label>
          <select {...register('timezone')} className='w-full border rounded h-10 px-3 text-sm'>
            <option value="EST (UTC-5)">EST (UTC-5)</option>
            <option value="CST (UTC-6)">CST (UTC-6)</option>
            <option value="MST (UTC-7)">MST (UTC-7)</option>
            <option value="PST (UTC-8)">PST (UTC-8)</option>
            <option value="GMT (UTC+0)">GMT (UTC+0)</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Date Format</label>
          <select {...register('dateFormat')} className='w-full border rounded h-10 px-3 text-sm'>
            <option value="DD/MM/YY">DD/MM/YY</option>
            <option value="MM/DD/YY">MM/DD/YY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Theme</label>
          <select {...register('theme')} className='w-full border rounded h-10 px-3 text-sm'>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div className='w-full grid grid-cols-2 gap-5'>
          <Button variant={'outline'} type="button" onClick={() => reset()}>Discard</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}

export default LanguageAccessibility;