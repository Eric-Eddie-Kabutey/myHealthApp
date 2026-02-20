'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const schema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your new password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormType = z.infer<typeof schema>;

function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: FormType) => {
    // Add save logic here
    console.log(data);
  };

  return (
    <div className="w-[350px] main-content flex flex-col gap-6">
      <div className="flex flex-col">
        <h2>Change Password</h2>
        <small className="text-gray-600">Update your current password</small>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-1">
          <label>Current Password</label>
          <div className="relative w-full flex items-center border rounded h-10 px-3">
            <input
              type={showCurrent ? 'text' : 'password'}
              {...register('currentPassword')}
              placeholder="Enter password"
              className="w-full text-sm border-none outline-none"
            />
            <button
              type="button"
              className=""
              onClick={() => setShowCurrent((v) => !v)}
              tabIndex={-1}
            >
              {showCurrent ? <Eye className='size-4' /> : <EyeOff className='size-4' />}
            </button>
          </div>
          {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>New Password</label>
          <div className="relative w-full flex items-center border rounded h-10 px-3">
            <input
              type={showNew ? 'text' : 'password'}
              {...register('newPassword')}
              placeholder="Enter new password"
              className="w-full text-sm border-none outline-none"
            />
            <button
              type="button"
              className=""
              onClick={() => setShowNew((v) => !v)}
              tabIndex={-1}
            >
              {showNew ? <Eye className='size-4' /> : <EyeOff className='size-4' />}
            </button>
          </div>
          {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Confirm New Password</label>
          <div className="relative w-full flex items-center border rounded h-10 px-3">
            <input
              type={showConfirm ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder="Re-enter new password"
              className="w-full text-sm border-none outline-none"
            />
            <button
              type="button"
              className=""
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
            >
              {showConfirm ? <Eye className='size-4' /> : <EyeOff className='size-4' />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>
        <div className="w-full grid grid-cols-2 gap-5">
          <Button variant={'outline'} type="button" onClick={() => reset()}>Discard</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;