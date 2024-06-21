"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedText({
    words,
    className,
    delay = 0.2,
    initialDelay = 0,
}: {
    words: string;
    className?: string;
    delay?: number;
    initialDelay?: number;
}) {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            animate(
                "span",
                {
                    opacity: 1,
                },
                {
                    duration: 2,
                    delay: stagger(delay),
                }
            );
        }, initialDelay * 1000);
        return () => clearTimeout(timeoutId);
    }, [scope.current, delay, initialDelay]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className=" text-inherit opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};