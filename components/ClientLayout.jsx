'use client';


import { useEffect } from 'react';
import HorizontalNavigation from './HorizontalNavigation';


import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const hideNav = pathname.startsWith('/projects/');

    useEffect(() => {
        const sounds = [
            '/sounds/switch8.ogg', '/sounds/switch9.ogg', '/sounds/switch19.ogg', '/sounds/switch20.ogg',
            '/sounds/switch21.ogg', '/sounds/switch24.ogg', '/sounds/switch25.ogg', '/sounds/switch27.ogg',
            '/sounds/switch28.ogg', '/sounds/switch35.ogg', '/sounds/switch36.ogg', '/sounds/switch37.ogg',
        ];
        // Initialize global audio state
        if (typeof window !== 'undefined') {
            if (window.__audioEnabled === undefined) {
                const stored = localStorage.getItem('audio-enabled');
                window.__audioEnabled = stored === null ? true : stored === 'true';
            }
            // Listen for changes to localStorage from other tabs/windows
            window.addEventListener('storage', (e) => {
                if (e.key === 'audio-enabled') {
                    window.__audioEnabled = e.newValue === 'true';
                }
            });
        }
        let lastAudio = null;
        const handleClick = (e) => {
            // Only play sound if audio is enabled (use global var for instant feedback)
            if (typeof window !== 'undefined' && window.__audioEnabled === false) return;
            let el = e.target;
            // Traverse up to find a clickable ancestor
            while (el && el !== document.body) {
                if (
                    el.tagName === 'BUTTON' ||
                    el.tagName === 'A' ||
                    el.getAttribute('role') === 'button' ||
                    el.tabIndex === 0
                ) {
                    // Play sound
                    const src = sounds[Math.floor(Math.random() * sounds.length)];
                    // Stop previous sound if still playing
                    if (lastAudio && !lastAudio.paused) lastAudio.pause();
                    const audio = new window.Audio(src);
                    lastAudio = audio;
                    audio.volume = 0.5;
                    audio.play();
                    break;
                }
                el = el.parentElement;
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, []);

    return (
        <>
            {!hideNav && <HorizontalNavigation />}
            {children}
        </>
    );
}

