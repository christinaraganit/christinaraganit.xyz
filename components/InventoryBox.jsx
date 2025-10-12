import React, { useState, useRef, useLayoutEffect } from "react";
import PixelBorderBox from "./PixelBorderBox";
import { desc } from "framer-motion/client";

export default function InventoryBox({ icon, name, description, className = "", color = "light-blue" }) {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState({});
    const [menuPositioned, setMenuPositioned] = useState(false);
    const isTouch = useRef(false);
    const containerRef = useRef(null);
    const menuRef = useRef(null);

    // Detect touch device on first interaction
    const handlePointerDown = (e) => {
        if (e.pointerType === "touch" || e.pointerType === "pen") {
            isTouch.current = true;
        }
    };

    // Open on hover for desktop, on click for touch
    const handleMouseEnter = () => {
        if (!isTouch.current) setOpen(true);
    };
    const handleMouseLeave = () => {
        if (!isTouch.current) setOpen(false);
    };
    const handleClick = (e) => {
        if (isTouch.current) setOpen((v) => !v);
    };

    // Position-aware menu logic: measure and position immediately when open
    useLayoutEffect(() => {
        if (open && containerRef.current && menuRef.current) {
            // If not yet positioned, render offscreen and hidden, then measure
            if (!menuPositioned) {
                setMenuStyle({
                    left: -9999,
                    top: -9999,
                    position: 'absolute',
                    zIndex: 10,
                    visibility: 'hidden',
                });
                // Next frame, measure and position
                requestAnimationFrame(() => setMenuPositioned(true));
                return;
            }
            // Now menu is rendered, measure and position
            const containerRect = containerRef.current.getBoundingClientRect();
            const menuRect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let left = 0;
            let top = containerRect.height + 4; // mt-1

            // If menu would overflow right, align right edge or clamp to viewport
            if (containerRect.left + menuRect.width > viewportWidth) {
                left = containerRect.width - menuRect.width;
            }
            // Clamp left so menu never overflows viewport right
            if (containerRect.left + left + menuRect.width > viewportWidth) {
                left = viewportWidth - containerRect.left - menuRect.width;
            }
            // If menu would overflow left, align left edge
            if (containerRect.left + left < 0) {
                left = 0;
            }
            // If menu would overflow bottom, open upward
            if (containerRect.bottom + menuRect.height + 8 > viewportHeight) {
                top = -menuRect.height - 4;
            }
            // If menu would overflow top, clamp to top
            if (containerRect.top + top < 0) {
                top = 0;
            }

            setMenuStyle({
                left: left,
                top: top,
                position: 'absolute',
                zIndex: 10,
                maxWidth: '100vw',
                boxSizing: 'border-box',
                visibility: 'visible',
            });
        }
    }, [open, menuPositioned]);

    // Reset menuPositioned when closing
    useLayoutEffect(() => {
        if (!open && menuPositioned) setMenuPositioned(false);
    }, [open]);

    return (
        <div
            className="relative"
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="w-full h-full cursor-gauntlet"
                type="button"
                tabIndex={0}
                onClick={handleClick}
            >
                <PixelBorderBox color={color} className={`aspect-square ${className}`} selectable={true}>
                    <img src={icon} className="h-10 w-10 m-auto" />
                </PixelBorderBox>
            </button>
            {open && (
                <div
                    ref={menuRef}
                    style={menuStyle}
                >
                    <PixelBorderBox color="selected" selected={true} className="shadow-2xl w-fit">
                        <div className="-m-2 w-48 relative z-40">
                            <h1 className="title-2 mb-1.5">{name}</h1>
                            <p className="text-sm">{description}</p>
                        </div>
                    </PixelBorderBox>
                </div>
            )}
        </div>
    );
}
