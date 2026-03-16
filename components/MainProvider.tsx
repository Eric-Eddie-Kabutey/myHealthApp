'use client';

import React, { Suspense } from 'react';

// Wrap any component that uses useMain() with this provider
// It satisfies Next.js's requirement for a Suspense boundary above useSearchParams()
export default function MainProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            {children}
        </Suspense>
    );
}