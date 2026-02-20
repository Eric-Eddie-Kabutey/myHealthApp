'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { heroMedia } from '@/app/(website)/leadership/heroMedia';

type props = {
    title?: string;
    content?: React.ReactNode;
    className?: string;
    subTitle?: string;
    btnText?: string;
    getStarted?: ()=>void;
}

function Hero({title, content, className, subTitle, btnText, getStarted}:props) {
    const [activeMedia, setActiveMedia] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(() => {
            setActiveMedia((prev) => (prev + 1) % heroMedia.length);
        }, 5000);

        return () => clearInterval(interval);
    },[]);

    return <div className="w-full sticky top-0">
        <section className={`w-full flex flex-col items-center h-[75dvh] mt-[-70px] relative ${className}`}>
            {
                content ? content : <>
                    {
                        heroMedia[activeMedia].includes('.mp4') ?
                            <video src={heroMedia[activeMedia]} playsInline autoPlay muted loop className="w-full h-full object-cover" /> :
                            <img src={heroMedia[activeMedia]} alt='' className="w-full h-full object-cover" />
                    }
                    <div className="absolute p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 text-white text-center items-center justify-end top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#000000c9]">
                        <b className="max-w-[90vw] sm:max-w-[600px] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] text-shadow-black text-shadow-2xs leading-tight font-extrabold">
                            {title || 'Healthier should always be within reach'}
                        </b>
                        <p className="text-base sm:text-lg md:text-xl">{subTitle}</p>
                        <Button
                            onClick={() => getStarted ? getStarted() : {}}
                            variant={'outline'}
                            className="px-6 sm:px-8 w-fit h-12 rounded-[3rem] mt-2 text-black transition-all duration-500 border-white border-2 group flex items-center gap-2"
                        >
                            {btnText ?? 'Get care now'}
                        </Button>
                    </div>
                </>
            }
        </section>
    </div>
}

export default Hero