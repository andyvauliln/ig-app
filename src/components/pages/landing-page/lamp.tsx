"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedLogo from "../common/animated-logo";
import AnimatedLogoGold from "../common/animated-logo-gold";
import AnimatedText from '../common/animated-text';


export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-[50rem] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
                className
            )}
        >
            <AnimatedLogoGold className="absolute top-8 w-[10rem] h-[10rem] z-50 mb-8" />
            <GoldText />
            <div id="animated-lamp" className="relative flex w-full items-center justify-center isolate z-0 mb-8">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[rgba(255,215,0,0.8)] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[rgba(255,215,0,0.8)] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-40 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-40 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[rgba(255,215,0,0.8)] opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[rgba(255,215,0,0.8)] blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-40 h-0.5 w-[30rem] -translate-y-[7rem] bg-[rgba(255,215,0,0.8)] "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
            </div>
            <div id="chiled-content" className="absolute bottom-[10%] z-50 flex flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
}

function GoldText() {
    return (
        <div className="absolute text-center  text-[#D4AF37] text-2xl mb-5 top-52 pb-4 z-50" >
            <AnimatedText initialDelay={2} words="Create, Learn and Earn with" />
        </div>
    );
}

