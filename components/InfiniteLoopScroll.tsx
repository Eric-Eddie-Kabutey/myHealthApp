'use client';
import React from 'react'

const logos = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        alt: "Facebook"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        alt: "Apple"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        alt: "Netflix"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        alt: "IBM"
    }
];

function InfiniteLoopScroll() {
    // Repeat the logos array to mimic the original repeated images
    const repeatedLogos = Array(10).fill(logos).flat();

    return (
        <div className='logos'>
            <div className="logos-slide flex items-center justify-center gap-[10rem]">
                {repeatedLogos.map((logo, idx) => (
                    <img
                        key={idx}
                        src={logo.src}
                        alt={logo.alt}
                        className='size-24 object-contain filter grayscale'
                    />
                ))}
            </div>
        </div>
    );
}

export default InfiniteLoopScroll