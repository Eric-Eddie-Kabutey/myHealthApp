'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';


function DoctorsLanguageAccessibility() {

    return <div className="main-content w-[370px] flex flex-col gap-3 py-[2rem]">
        <div className="flex flex-col pb-2 border-b mb-5">
            <p>Language Preferences</p>
            <p className="text-sm text-gray-600">Update and select your languages</p>
        </div>

        <section className="w-full flex flex-col gap-5 pb-3">


            <div className="w-full flex flex-col gap-4">
                <p>Timezone</p>
                <select name="lan" id="lan" className="w-full h-10 text-sm border px-3 rounded-md placeholder:text-gray-500">
                    <option value="">Select timezone</option>
                    <option value="en">EST (UTC-5)</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-4">
                <p>Date Format</p>
                <select name="lan" id="lan" className="w-full h-10 text-sm border px-3 rounded-md placeholder:text-gray-500">
                    <option value="">Select date format</option>
                    <option value="en">DD/MM/YYYY</option>
                    <option value="es">YYYY/MM/DD</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-4">
                <p>Theme</p>
                <select name="lan" id="lan" className="w-full h-10 text-sm border px-3 rounded-md placeholder:text-gray-500">
                    <option value="">Select Theme</option>
                    <option value="en">Light</option>
                    <option value="es">Dark</option>
                </select>
            </div>
        </section>


        <div className="w-full grid grid-cols-2 gap-4 mt-5">
            <Button variant={'outline'} type="button" className='w-full h-10 rounded'>Discard</Button>
            <Button type="submit" className='w-full h-10 rounded'>Save Changes</Button>
        </div>
    </div>
}

export default DoctorsLanguageAccessibility