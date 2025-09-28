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

export default function VerticalNav() {
    const pathname = usePathname();
    const [selectedLink, setSelectedLink] = useState(navLinks[0].label);

    useEffect(() => {
        const current = navLinks.find((link) => link.href === pathname);
        if (current) setSelectedLink(current.label);
    }, [pathname]);

    return (
        <nav className="hidden md:block relative md:my-12 -left-8">
            <img src='/pixel-sparkle.svg' alt="A pixel-style sparkle" className='mb-10 ml-8'></img>

            <ul className="ml-8 list-none p-0">
                {navLinks.map((navLink) => (
                    <motion.li key={navLink.label} data-href={navLink.href} className="mb-4">
                        {/* Render pointer if this link is selected */}
                        {navLink.label === selectedLink ? (<motion.img layout
                            src="/pointer-icon.svg"
                            alt="pointer"
                            className="absolute left-0 w-6 py-2"
                            layoutId="cursor" id="cursor"
                        />) : null}

                        <Link href={navLink.href} onClick={() => setSelectedLink(navLink.label)}>
                            <span
                                className={`cursor-pointer font-pixel transition-colors duration-200
                                    ? 'text-white'
                                    : 'text-gray-700'
                                    }`}
                            >
                                {navLink.label}
                            </span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
}
