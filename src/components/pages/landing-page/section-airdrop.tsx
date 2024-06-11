"use client"
import React from 'react';
import { BackgroundGradient } from '../common/glowing-card';
import { LampContainer } from './lamp';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Anton } from "next/font/google"
import { Amatic_SC } from 'next/font/google';
import AnimatedText from '../common/animated-text';
import Image from 'next/image'

const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400", style: "normal" });

export default function AirdropSection() {
    return (
        <>
            <div className="container lg:py-10 overflow-hidden">
                <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <AirdropText />
                    <div className="lg:col-span-4 mt-10 lg:mt-0 w-full rounded-xl h-full min-h-[500px]">
                        <Image src="/home_page/infinity_airdrop.png" className="rounded-lg" alt="Background Image" width={250} height={250} />
                    </div>
                </div>
            </div>
        </>
    );
}

function AirdropText() {
    return (
        <AnimatedText key="slogan"
            words='Earn Histocred Token
            by Contributing to Our
            Web3 Community.'
            className={`${amaticSC.className} text-white mt-16 text-2xl lg:text-4xl text-muted-foreground text-center`} />
    )
}

