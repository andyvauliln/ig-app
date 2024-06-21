"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeamHorizontal = ({
    className,
}: {
    className?: string;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgWidth, setSvgWidth] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgWidth(contentRef.current.offsetWidth);
        }
    }, [contentRef.current?.offsetWidth]);

    return (
        <div className={cn("relative w-full max-w-7xl mx-auto h-full mb-5", className)} ref={contentRef}>
            {/* <div className="absolute"> */}
            <svg
                key={svgWidth} // Force re-render when svgWidth changes
                viewBox={`0 0 ${svgWidth} 20`}
                width={svgWidth} // Set the SVG width
                height="20"
                className="block"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop stopColor="#FFD700" stopOpacity="0"></stop>
                        <stop stopColor="#FFD700"></stop>
                        <stop offset="0.325" stopColor="#FFD700" stopOpacity="0.5"></stop>
                        <stop offset="0.8" stopColor="#FFD700"></stop>
                    </linearGradient>

                </defs>

                <path
                    d={`M 0 1H -36 l 24 18 H ${svgWidth * 0.75} l 24 -18H ${svgWidth}`}
                    // fill="none"
                    stroke="url(#linear)"
                    strokeWidth={1.25}
                ></path>
            </svg>
            {/* </div> */}
        </div>
    );
};

{/* <defs>
    <linearGradient
        id="gradient"
        gradientUnits="userSpaceOnUse"
        x1="0"
        x2={svgWidth}
        y1="0"
        y2="0"
    >
        <stop stopColor="#FFD700" stopOpacity="0"></stop>
        <stop stopColor="#FFD700"></stop>
        <stop offset="0.325" stopColor="#FFD700"></stop>
        <stop offset="1" stopColor="#FFD700" stopOpacity="0"></stop>
    </linearGradient>
</defs> */}