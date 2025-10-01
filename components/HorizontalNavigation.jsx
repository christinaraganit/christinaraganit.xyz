'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sidequests', label: 'Sidequests' },
    { href: '/lore', label: 'Lore' },
];

export default function HorizontalNavigation() {
    const pathname = usePathname();
    const [selectedLink, setSelectedLink] = useState(undefined);

    useEffect(() => {
        const current = navLinks.find((link) => link.href === pathname);
        if (current) setSelectedLink(current.label);
    }, [pathname]);

    return (
        <nav className="h-16 flex justify-center w-full max-w-dvw">
            <div className='max-w-[100rem] w-full mx-8 grid sm:grid-cols-3 items-center'>
                <img src='/pixel-sparkle.svg' alt="A pixel-style sparkle" className="hidden sm:block w-5 h-5"></img>

                <ul className="list-none flex flex-row gap-6 justify-center items-center h-12">
                    {navLinks.map((navLink) => (
                        <motion.li key={navLink.label} data-href={navLink.href} className="">
                            {/* {navLink.label === selectedLink ? (<motion.img layout
                            src="/pointer-icon.svg"
                            alt="pointer"
                            className="absolute left-0 w-6 py-2"
                            layoutId="cursor" id="cursor"
                        />) : null} */}

                            <Link
                                href={navLink.href}
                                onClick={() => setSelectedLink(navLink.label)}
                                className="relative flex flex-col items-center sword-gauntlet"
                            >
                                <span
                                    className={`font-pixel transition-colors duration-200
                                    ? 'text-white'
                                    : 'text-gray-700'
                                    }`}
                                >
                                    {navLink.label}
                                </span>
                                {navLink.label === selectedLink && (
                                    <motion.img
                                        src="/sparkle-indicator.svg"
                                        alt="sparkle"
                                        className="absolute h-[10px] w-[10px] -bottom-4" layoutId="cursor" id="cursor"
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
