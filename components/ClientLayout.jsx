'use client';

import { usePathname } from 'next/navigation';
import HorizontalNavigation from './HorizontalNavigation';

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();

    const hideNav = pathname.startsWith('/projects/');

    return (
        <>
            {!hideNav && <HorizontalNavigation />}
            {children}
        </>
    );
}
