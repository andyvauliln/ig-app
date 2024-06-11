import React from 'react';
import { BackgroundGradient } from '../common/glowing-card';
import { LampContainer } from './lamp';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Anton } from "next/font/google"
import { Amatic_SC } from 'next/font/google';
import AnimatedText from '../common/animated-text';
import { motion } from "framer-motion";

const anton = Anton({ subsets: ["latin"], weight: "400", style: "normal" });
const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
    return (
        <>
            {/* Hero */}
            <div className="container lg:py-10 overflow-hidden">
                {/* Grid */}
                <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <LampContainer className='w-full lg:col-span-4 flex flex-col'>
                        <CompanyName />
                        <Slogan key="slogan" />
                        <Author key="author" />
                        <div className="items-center mt-10">
                            <GradientButton />
                        </div>
                    </LampContainer>
                    {/* End Col */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0 w-full rounded-xl h-full min-h-[500px]">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/jVjZ3bHQuhA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Hero */}
        </>
    );
}

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
{/* <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r  from-teal-400 to-cyan-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Lit up borders
  </div>
</button> */}

function Author() {
    return (
        <AnimatedText initialDelay={6} key="author" words="George Santayana" className={`mt-3 text-5xl bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-transparent`} />
    )
}

function Slogan() {
    return (
        <AnimatedText initialDelay={3} key="slogan"
            words='" Those who cannot remember the past are condemned to repeat it. "'
            className={`${amaticSC.className} text-white mt-16 text-2xl lg:text-4xl text-muted-foreground text-center`} />
    )
}

function CompanyName() {
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
