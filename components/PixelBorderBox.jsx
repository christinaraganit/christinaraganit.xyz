import React, { useState, useRef } from "react";


const borderMap = {
    "dark-blue": {
        topLeft: "/border/top-left-sm.svg",
        top: "/border/center-sm.svg",
        topRight: "/border/top-right-sm.svg",
        left: "/border/center-sm.svg",
        right: "/border/center-sm.svg",
        bottomLeft: "/border/bottom-left-sm.svg",
        bottom: "/border/center-sm.svg",
        bottomRight: "/border/bottom-right-sm.svg",
        content: "bg-[#272935] text-white",
    },
    white: {
        topLeft: "/border/top-left-white.svg",
        top: "/border/center-white.svg",
        topRight: "/border/top-right-white.svg",
        left: "/border/center-white.svg",
        right: "/border/center-white.svg",
        bottomLeft: "/border/bottom-left-white.svg",
        bottom: "/border/center-white.svg",
        bottomRight: "/border/bottom-right-white.svg",
        content: "bg-white text-black",
    },
    "white-sm": {
        topLeft: "/border/top-left-white-sm.svg",
        top: "/border/center-white-sm.svg",
        topRight: "/border/top-right-white-sm.svg",
        left: "/border/center-white-sm.svg",
        right: "/border/center-white-sm.svg",
        bottomLeft: "/border/bottom-left-white-sm.svg",
        bottom: "/border/center-white-sm.svg",
        bottomRight: "/border/bottom-right-white-sm.svg",
        content: "bg-white text-black",
    },
    "white-xs": {
        topLeft: "/border/white/xs/top-left.svg",
        top: "/border/white/xs/center.svg",
        topRight: "/border/white/xs/top-right.svg",
        left: "/border/white/xs/center.svg",
        right: "/border/white/xs/center.svg",
        bottomLeft: "/border/white/xs/bottom-left.svg",
        bottom: "/border/white/xs/center.svg",
        bottomRight: "/border/white/xs/bottom-right.svg",
        content: "bg-white text-black",
    },
    "light-blue": {
        topLeft: "/border/top-left-light-blue.svg",
        top: "/border/center-light-blue.svg",
        topRight: "/border/top-right-light-blue.svg",
        left: "/border/center-light-blue.svg",
        right: "/border/center-light-blue.svg",
        bottomLeft: "/border/bottom-left-light-blue.svg",
        bottom: "/border/center-light-blue.svg",
        bottomRight: "/border/bottom-right-light-blue.svg",
        content: "bg-[#323444] text-[#FFFFFF]",
    },
    selected: {
        topLeft: "/border/selected-top-left.svg",
        top: "/border/selected-center.svg",
        topRight: "/border/selected-top-right.svg",
        left: "/border/selected-center.svg",
        right: "/border/selected-center.svg",
        bottomLeft: "/border/selected-bottom-left.svg",
        bottom: "/border/selected-center.svg",
        bottomRight: "/border/selected-bottom-right.svg",
        content: "bg-[#414458] text-white",
    },
};


export default function PixelBorderBox({
    children,
    className = "",
    color = "dark-blue",
    selectable = false,
    selected = false,
    size = "md", // "md" (default) or "sm"
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const isTouch = useRef(false);

    let showSelected = false;
    if (selectable) {
        // On desktop: show selected on hover. On mobile: show selected on tap/click.
        showSelected = selected || isHovered || isTouched;
    } else {
        showSelected = selected;
    }


    // Determine border set based on color and size
    let borderKey = color;
    if (color === "white" && size === "sm") {
        borderKey = "white-sm";
    }
    let border = borderMap[borderKey] || borderMap["dark-blue"];
    if (selectable && showSelected) {
        border = borderMap["selected"];
    }

    // Border image size
    const px = size === "sm" ? 8 : 24;

    // Handlers for hover/touch
    const handlePointerDown = (e) => {
        if (e.pointerType === "touch" || e.pointerType === "pen") {
            isTouch.current = true;
            setIsTouched((v) => !v);
        }
    };
    const handleMouseEnter = () => {
        if (!isTouch.current) setIsHovered(true);
    };
    const handleMouseLeave = () => {
        if (!isTouch.current) setIsHovered(false);
    };

    return (
        <div
            className={`grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] ${className} ${selectable ? 'sword-gauntlet' : ''}`}
            onPointerDown={selectable ? handlePointerDown : undefined}
            onMouseEnter={selectable ? handleMouseEnter : undefined}
            onMouseLeave={selectable ? handleMouseLeave : undefined}
            tabIndex={selectable ? 0 : undefined}
            style={{ cursor: selectable ? 'pointer' : undefined }}
        >
            {/* Top Row */}
            <div style={{ width: px, height: px, background: `url('${border.topLeft}') no-repeat center/contain` }}></div>
            <div style={{ height: px, background: `url('${border.top}') repeat-x center/contain` }}></div>
            <div style={{ width: px, height: px, background: `url('${border.topRight}') no-repeat center/contain` }}></div>

            {/* Middle Row */}
            <div style={{ width: px, minHeight: px, background: `url('${border.left}') repeat-y center/contain` }}></div>
            <div className={`flex items-start justify-start ${border.content}`}>
                {children}
            </div>
            <div style={{ width: px, minHeight: px, background: `url('${border.right}') repeat-y center/contain` }}></div>

            {/* Bottom Row */}
            <div style={{ width: px, height: px, background: `url('${border.bottomLeft}') no-repeat center/contain` }}></div>
            <div style={{ height: px, background: `url('${border.bottom}') repeat-x center/contain` }}></div>
            <div style={{ width: px, height: px, background: `url('${border.bottomRight}') no-repeat center/contain` }}></div>
        </div>
    );
}
