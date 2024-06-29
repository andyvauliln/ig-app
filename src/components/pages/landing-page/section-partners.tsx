"use client"
import React from 'react';
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });

export default function PartnersSection() {
    return (
        <>
            <div className="flex flex-col lg:py-10 overflow-hidden">
                <h2 className={`${bebasNeue.className} text-yellow-500 mb-6 text-2xl lg:text-6xl text-center`}>Partners * Inverstors * Advisors</h2>
                <div className="w-full h-10 relative">
                    <div className="absolute top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-full blur-sm" />
                    <div className="absolute top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-full" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/2" />
                </div>
                <div className='flex justify-between w-full p-4 space-x-4'>
                    <Image
                        src="/partners/imortal_games_logo.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo imortal games"
                        height={50}
                        width={120}
                    />
                    <div>
                        <Image
                            src="/partners/positive_gaming_logo_part_1.png"
                            role="presentation"
                            loading="lazy"
                            className='h-[70px]'

                            alt="partners logo positive gameing bali"
                            height={50}
                            width={100}
                        />
                        <Image
                            src="/partners/positive_gaming_logo_part_2.png"
                            role="presentation"
                            loading="lazy"
                            alt="partners logo positive gaming bali"
                            height={50}
                            width={100}
                        />
                    </div>
                    <Image
                        src="/partners/infinity_logo_transparent.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo icp "
                        width={100}
                        height={50}
                        className='h-[50px] m-auto'
                    />
                    <div>
                        <Image
                            src="/partners/block_and_rock.svg"
                            role="presentation"
                            loading="lazy"
                            alt="partners logo block and rock"
                            height={40}
                            className='h-[80px] m-auto'
                            width={100}
                        />
                        <div className='text-white text-lg font-bold mt-4 text-center'>Rock&apos;n&apos;Block</div>
                    </div>
                    <Image
                        src="/partners/puri_kantor.jpg"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo puri kantor"
                        height={50}
                        width={120}
                    />
                </div>
            </div>

        </>
    );
}

