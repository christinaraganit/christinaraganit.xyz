import React from "react";

export default function StylizedProfileBorderBox({ children, className = "" }) {
    return (
        <div className={`grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] ${className}`}>
            {/* Top Row */}
            <div className="w-[16px] h-[16px] bg-[url('/border-stylized/top-left.svg')] bg-no-repeat bg-contain"></div>
            <div className="h-[16px] bg-[url('/border-stylized/top-center.svg')] bg-repeat-x bg-contain"></div>
            <div className="w-[16px] h-[16px] bg-[url('/border-stylized/top-right.svg')] bg-no-repeat bg-contain"></div>

            {/* Middle Row */}
            <div className="w-[16px] min-h-[16px] bg-[url('/border-stylized/left-center.svg')] bg-repeat-y bg-contain"></div>
            <div className="bg-white flex items-start justify-start text-black">
                {children}
            </div>
            <div className="w-[16px] min-h-[16px] bg-[url('/border-stylized/right-center.svg')] bg-repeat-y bg-contain"></div>

            {/* Bottom Row */}
            <div className="w-[16px] h-[16px] bg-[url('/border-stylized/bottom-left.svg')] bg-no-repeat bg-contain"></div>
            <div className="h-[16px] bg-[url('/border-stylized/bottom-center.svg')] bg-repeat-x bg-contain"></div>
            <div className="w-[16px] h-[16px] bg-[url('/border-stylized/bottom-right.svg')] bg-no-repeat bg-contain"></div>
        </div>
    );
}
