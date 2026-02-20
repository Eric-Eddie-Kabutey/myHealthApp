'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';


function LanguageAccessibility() {

    return <div className="main-content w-[370px] flex flex-col gap-3 py-[2rem]">
        <div className="flex flex-col pb-2 border-b mb-5">
            <p>Language Preferences</p>
            <p className="text-sm text-gray-600">Update and select your languages</p>
        </div>

        <section className="w-full flex flex-col gap-5 pb-3 border-b">

            <div className="w-full flex flex-col gap-2">
                <p>Select Language</p>
                <select name="lan" id="lan" className="w-full h-10 text-sm border px-3 rounded-md placeholder:text-gray-500">
                    <option value="">Select a language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                    <option value="ar">Arabic</option>
                    <option value="hi">Hindi</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                </select>
            </div>

            <p className="mt-2 font-semibold">Accessibility Options</p>
        </section>

        <section className="w-full flex flex-col gap-5 pb-3">
            <div className="w-full flex items-center justify-between">
                <aside className="flex flex-col">
                    <p>Screen Reader Support</p>
                    <p className="text-sm text-gray-700">Enhanced screen reader support</p>
                </aside>
                <Switch id="screen-reader" />
            </div>
            <div className="w-full flex items-center justify-between">
                <aside className="flex flex-col">
                    <p>High Contrast Mode</p>
                    <p className="text-sm text-gray-700">Increase colour contrast for better visibility</p>
                </aside>
                <Switch id="high-contrast" />
            </div>
            <div className="w-full flex items-center justify-between">
                <aside className="flex flex-col">
                    <p>Voice Assistant</p>
                    <p className="text-sm text-gray-700">Enable voice commands and audio feedback</p>
                </aside>
                <Switch id="voice-assistant" />
            </div>
        </section>

        <div className="w-full grid grid-cols-2 gap-4 mt-5">
            <Button variant={'outline'} type="button" className='w-full h-10 rounded'>Discard</Button>
            <Button type="submit" className='w-full h-10 rounded'>Save Changes</Button>
        </div>
    </div>
}

export default LanguageAccessibility