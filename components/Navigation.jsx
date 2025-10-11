'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { caseStudyNav } from '../lib/caseStudyNavConfig'; // ✅ adjust if needed

export default function VerticalNav() {
    const pathname = usePathname();

    // Extract the project slug from the path: /projects/[slug]
    const match = pathname.match(/^\/projects\/([^\/?#]+)/);
    const slug = match?.[1];

    const sections = caseStudyNav[slug] || [];

    const [selectedId, setSelectedId] = useState(() => (sections?.[0]?.id || ''));

    useEffect(() => {
        const handleScroll = () => {
            const sectionVisibility = sections
                .map(({ id }) => {
                    const el = document.getElementById(id);
                    if (!el) return null;

                    const rect = el.getBoundingClientRect();
                    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

                    return {
                        id,
                        visibleHeight: visibleHeight > 0 ? visibleHeight : 0,
                    };
                })
                .filter(Boolean);

            if (!sectionVisibility.length) return;

            const mostVisible = sectionVisibility.reduce((max, section) =>
                section.visibleHeight > max.visibleHeight ? section : max
            );

            if (mostVisible.id !== selectedId) {
                setSelectedId(mostVisible.id);
            }
        };


        if (sections.length > 0) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, selectedId]);

    if (!sections.length) return null; // hide nav on non-case study pages

    return (
        <nav className="hidden min-[72rem]:block relative md:my-12 -left-10">
            <Link href="/" className="flex gap-5 mb-12 cursor-gauntlet">
                <img src="/back.svg" className="mt-1" alt="Back" />
                <span className="text-sm font-pixel text-white transition-colors duration-200">
                    Return
                </span>
            </Link>

            <motion.ul className="ml-8 list-none p-0 max-w-[10vw]">
                {sections.map(({ id, label }) => (
                    <motion.li key={id} className="mb-3 relative">
                        {selectedId === id && (
                            <motion.img
                                layout
                                src="/pointer-icon.svg"
                                alt="pointer"
                                className="absolute -left-10 w-6 pt-2.5"
                                layoutId="verticalNavPointer"
                            />
                        )}
                        <a
                            href={`#${id}`}
                            onClick={() => setSelectedId(id)}
                            className="cursor-gauntlet"
                        >
                            <span className="text-sm font-pixel leading-[1] text-white transition-colors duration-200">
                                {label}
                            </span>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    );
}
