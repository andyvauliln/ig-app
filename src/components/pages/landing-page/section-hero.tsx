"use client"
import React from 'react';
import { LampContainer } from './lamp';
import { Anton } from "next/font/google"
import { Amatic_SC } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';
import AnimatedText from '../common/animated-text';
import { motion } from "framer-motion";
import { YellowButton } from "@/components/ui/button";
import { SignUp } from '../layout/login-button';

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
    return (
        <>
            <div className="lg:py-10 overflow-hidden">
                <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <LampContainer className='w-full lg:col-span-4 flex flex-col'>
                        <CompanyNameText />
                        <QuoteText />
                        <AuthorText />
                        <div className="items-center mt-10">
                            <SignUp />
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


function AuthorText() {
    return (
        <AnimatedText initialDelay={6} key="author" words="George Santayana" className={`mt-3 text-white opacity-80 text-xl font-sans`} />
    )
}

function QuoteText() {
    return (
        <AnimatedText initialDelay={3} key="Quote"
            words='" Those who cannot remember the past are condemned to repeat it. "'
            className={`${bebasNeue.className} text-yellow-500 mt-8 text-xl lg:text-4xl text-center`} />
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
            className={`${bebasNeue.className} justify-center items-center flex flex-col mt-4 text-white text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl`}
        >

            <span>Histoverse</span>
            <span style={{ fontSize: "1.2rem" }} className="mt-2 text-center mb-2 font-sans">AI Powered Educational Platform on Chain</span>

        </motion.h1>

    )
}
