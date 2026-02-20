import { ReactNode } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useUserStore from './UserStore'; // adjust the path as needed
import { User } from 'lucide-react';

type StoreState = {
    PageTitle: {
        name: string,
        description: string,
        icon: any, // icon can be a React component or any other type
    },
    setPageTitle: (name: string, description: string, icon: any) => void;
    resetPageTitle: () => void; // Optional reset function
};

export const useMainStore = create(
    persist<StoreState>(
        (set, get) => ({
            PageTitle: {
                name: '',
                description: 'Welcome back to Ricia Care',
                icon: (props:any) => <User {...props} />, // Default icon
            },
            setPageTitle: (name, description, icon) => {
                set({
                    PageTitle: {
                        name,
                        description,
                        icon,
                    },
                });
            },
            resetPageTitle: () => {
                const user = useUserStore.getState().user;
                set({
                    PageTitle: {
                        name: user?.firstName || '',
                        description: 'Welcome back to Ricia Care',
                        icon: User,
                    },
                });
            },
        }),
        {
            name: 'main-storage', // name in localStorage
        }
    )
);
