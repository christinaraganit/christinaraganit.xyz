'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sidequests', label: 'Sidequests' },
    { href: '/lore', label: 'Lore' },
];


export default function HorizontalNavigation() {
    const pathname = usePathname();
    const [selectedLink, setSelectedLink] = useState(undefined);
    const [audioEnabled, setAudioEnabled] = useState(true);

    // On mount, read audio setting from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('audio-enabled');
        if (stored === null) {
            setAudioEnabled(true);
            localStorage.setItem('audio-enabled', 'true');
        } else {
            setAudioEnabled(stored === 'true');
        }
    }, []);

    // Update localStorage when toggled
    const toggleAudio = () => {
        setAudioEnabled((prev) => {
            const newValue = !prev;
            localStorage.setItem('audio-enabled', String(newValue));
            if (typeof window !== 'undefined') {
                window.__audioEnabled = newValue;
            }
            return newValue;
        });
    };

    useEffect(() => {
        const current = navLinks.find((link) => link.href === pathname);
        if (current) setSelectedLink(current.label);
    }, [pathname]);

    return (
        <nav className="h-16 flex items-center justify-center w-full max-w-dvw">
            <div className='max-w-[100rem] w-full mx-8 grid sm:grid-cols-3 items-center'>
                <img src='/pixel-sparkle.svg' alt="A pixel-style sparkle" className="hidden sm:block w-5 h-5" />

                <ul className="list-none flex flex-row gap-6 justify-center items-center h-12">
                    {navLinks.map((navLink) => (
                        <motion.li key={navLink.label} data-href={navLink.href} className="">
                            <Link
                                href={navLink.href}
                                onClick={() => setSelectedLink(navLink.label)}
                                className="relative flex flex-col items-center cursor-gauntlet h-[30px]"
                            >
                                <span
                                    className={`font-pixel transition-colors duration-200`}
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

                <div className='flex justify-end items-center justify-center'>
                    <button
                        type="button"
                        aria-label={audioEnabled ? 'Disable audio' : 'Enable audio'}
                        onClick={toggleAudio}
                        className="cursor-gauntlet hidden sm:block -mr-1.5 w-7.5 h-7.5 bg-transparent border-none p-0 cursor-pointer"
                        tabIndex={0}
                    >
                        <img
                            src={audioEnabled ? '/audio.png' : '/audio-off.png'}
                            alt={audioEnabled ? 'Enabled audio' : 'Disabled audio'}
                            className="w-7.5 h-7.5"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
}
