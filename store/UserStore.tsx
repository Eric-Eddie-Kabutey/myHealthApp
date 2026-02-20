import { NAuthentication } from '@/types/auth.type';
import { ReactNode } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreState = {
    user: NAuthentication.IUser | null
    // setUser: (user: StoreState["user"])=>void;
    setUser: (user: any)=>void;
};

const useUserStore = create(
    persist<StoreState>(
        (set, get) => ({
            user: {
                email: 'odamejoshua37@gmail.com',
                firstName: 'Joshua',
                lastName: 'Odame',
                phone: '+233 54 289 3124',
                role: ''
            },
            setUser: (partialUser) => {
                const currentUser = get().user;
                if (currentUser) {
                    set({ user: { ...currentUser, ...partialUser } });
                }
            },
        }),
        {
            name: 'user-storage', // name in localStorage
        }
    )
);

export default useUserStore