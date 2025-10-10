"use client";

import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    let maxW = 'max-w-[100rem]';
    if (pathname === '/lore') {
        maxW = 'max-w-[80rem]';
    } else if (pathname.startsWith('/projects')) {
        maxW = 'max-w-3xl';
    }
    return (
        <footer className="w-full max-w-dvw flex justify-center mt-4 lg:mt-12 p-8 border-t border-t-[#272935]">
            <div className={`${maxW} w-full flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center`}>
                <div className="flex flex-col text-center md:text-left">
                    <p className="mb-1 text-sm">Coded and handpixelled by</p>
                    <div className="flex gap-2 w-full">
                        <img src="/portrait-sm.png" className="w-5 h-5" />
                        <h2 className="title-2 italic">Christina Raganit</h2>
                    </div>
                </div>

                <div className='flex items-center gap-5.5 ml-3 md:ml-0 order-first md:order-last'>
                    <a className='sword-gauntlet -mt-0.5' href='https://x.com/christinargnt'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#FFF" d="M1 3h1V2h2V1H0v1h1Zm-1 9h1v-1H0Zm1-1h1v-1H1Zm1-1h1V9H2Zm1-1h1V8H3Zm3 2h1V9H6ZM5 9h1V8H5ZM4 8h1V6H4ZM3 6h1V5H3Zm4 6h4v-1h-1v-1H9v1H7ZM2 5h1V3H2Zm6 5h1V8H8ZM7 8h1V7H7ZM6 7h1V5H6ZM5 5h1V4H5ZM4 4h1V2H4Zm3 1h1V4H7Zm1-1h1V3H8Zm1-1h1V2H9Zm1-1h1V1h-1Zm0 0" /></svg>
                    </a>

                    <a className='sword-gauntlet' href='https://github.com/christinaraganit/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="#FFF" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z" /></svg>     </a>

                    <a className='sword-gauntlet' href='https://www.linkedin.com/in/christinaraganit/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="#FFF" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z" /></svg>
                    </a>

                    <a className='sword-gauntlet' href='https://www.linkedin.com/in/christinaraganit/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5h2v2H8zM6 7h2v2H6zM4 9h2v2H4zm-2 2h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm8-12h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2z" /></svg>   </a>
                </div>
            </div>


        </footer>
    );
}