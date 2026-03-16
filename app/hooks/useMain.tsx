'use client';

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

function useMain() {
    // useSearchParams() requires a Suspense boundary above the component using this hook
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = usePathname();
    const params = useParams();
    const [loading, setLoading] = useState('');

    return {
        searchParams,
        router,
        path,
        params,
        loading,
        // Allow clearing loading by calling with no argument
        setLoading: (loading?: string) => setLoading(loading || ''),
    };
}

export default useMain;