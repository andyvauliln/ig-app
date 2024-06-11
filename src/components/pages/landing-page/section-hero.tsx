"use client"
import React from 'react';
import { LampContainer } from './lamp';
import { Anton } from "next/font/google"
import { Amatic_SC } from 'next/font/google';
import AnimatedText from '../common/animated-text';
import { motion } from "framer-motion";

const anton = Anton({ subsets: ["latin"], weight: "400", style: "normal" });
const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
    return (
        <>
            <div className="container lg:py-10 overflow-hidden">
                <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <LampContainer className='w-full lg:col-span-4 flex flex-col'>
                        <CompanyNameText />
                        <QuoteText />
                        <AuthorText />
                        <div className="items-center mt-10">
                            <GradientButton />
                        </div>
                    </LampContainer>
                    <div className="lg:col-span-4 mt-10 lg:mt-0 w-full rounded-xl h-full min-h-[500px]">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/jVjZ3bHQuhA"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Introduction Video"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

// from-teal-400 to-cyan-500
function GradientButton() {
    return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Sign up
            </div>
        </button>
    )
}

function AuthorText() {
    return (
        <AnimatedText initialDelay={6} key="author" words="George Santayana" className={`mt-3 text-5xl bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-transparent`} />
    )
}

function QuoteText() {
    return (
        <AnimatedText initialDelay={3} key="Quote"
            words='" Those who cannot remember the past are condemned to repeat it. "'
            className={`${amaticSC.className} text-white mt-16 text-2xl lg:text-4xl text-muted-foreground text-center`} />
    )
}

function CompanyNameText() {
    return (
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className={`${anton.className} justify-center items-center flex flex-col mt-4 text-shadow-purple-500 text-white text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl`}
        >

            <span>Histoverse</span>
            <span style={{ fontSize: "1.2rem" }} className="mt-2 text-center mb-2 font-sans">AI Powered Educational Platform on Chain</span>

        </motion.h1>

    )
}
