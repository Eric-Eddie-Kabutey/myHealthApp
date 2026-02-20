'use client'

import { useEffect } from 'react';
import useUserStore from '@/store/UserStore';
import routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import { NAuthentication } from '@/types/auth.type';
import useMain from './useMain';

const roleDashboardRoutes: Record<NAuthentication.TRoleType, string> = {
    doctor: routes.doctor.dashboard,
    nurse: routes.nurse.dashboard,
    patient: routes.dashboard,
    support: routes.customerSupport.dashboard,
    finance: routes.finance.dashboard,
    institution: routes.institution.dashboard,
    operations: routes.operations.dashboard,
    officer: routes.officer.dashboard,
    dispensary: routes.dispensary.dashboard,
    admin: routes.admin.dashboard,
};

export const useRoleGuard = (expectedRole: NAuthentication.TRoleType) => {
    const {searchParams} = useMain();
    const manage = Boolean(searchParams.get('manage'))
    const router = useRouter();
    const { user } = useUserStore(); // Assumes a user object with a `role` property

    useEffect(() => {
        if(manage) return;
        if (!user?.role) return; // User not loaded yet
        if (user?.role === 'admin') return;
        
        if (user.role !== expectedRole) {
            return router.replace(roleDashboardRoutes[user.role]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.role, expectedRole]);
};
