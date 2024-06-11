"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = false,
    className,
}: {
    items: {
        text: string;
        url: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        console.log("useEffect", start, direction, speed, items, pauseOnHover)
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    console.log("values", start, direction, speed, items, pauseOnHover)
    function addAnimation() {
        console.log("addAnimation", containerRef.current, scrollerRef.current)
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            console.log("scrollerContent", scrollerContent)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        console.log("getDirection1", containerRef.current)
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
        console.log("getDirection2", containerRef.current)
    };
    const getSpeed = () => {
        console.log("getSpeed1", containerRef.current)
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
        console.log("getSpeed2", containerRef.current)
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 h-full py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] h-full max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={idx}
                    >
                        <Image src={item.url} alt={item.text} fill style={{ objectFit: 'cover' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
