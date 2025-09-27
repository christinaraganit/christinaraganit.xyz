'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sidequests', label: 'Sidequests' },
    { href: '/lore', label: 'Lore' },
];

export default function VerticalNav() {
    const [selectedLink, setSelectedLink] = useState(navLinks[0].label);

    return (
        <nav className="relative">
            {/* Pointer image positioned beside the active link */}

            <ul className="ml-8 list-none p-0">
                {navLinks.map((navLink) => (
                    <motion.li key={navLink.label} data-href={navLink.href} className="mb-4">
                        {navLink.label === selectedLink ? (<motion.img layout
                            src="/pointer-icon.svg"
                            alt="pointer"
                            className="absolute left-0 w-6 py-2"
                            layoutId="cursor" id="cursor"
                        />) : null}

                        <Link href={navLink.href} onClick={() => setSelectedLink(navLink.label)}>
                            <span
                                className={`cursor-pointer text-lg font-medium transition-colors duration-200
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-500'
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
