"use client"
import React from 'react';
import Image from "next/image"

export default function PartnersSection() {
    return (
        <>
            <div className="container flex flex-col lg:py-10 overflow-hidden">
                <h2 className='text-white'>Partners * Inverstors * Advisors</h2>
                <div className='w-full p-4 space-x-4'>
                    <Image
                        src="/imortal_games_logo.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo imortal games"
                        height={50}
                        width={100}
                    />
                    <Image
                        src="/positive_gaming_logo_part_1.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo positive gameing bali"
                        height={50}
                        width={100}
                    />
                    <Image
                        src="/positive_gaming_logo_part_2.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo positive gaming bali"
                        height={50}
                        width={100}
                    />
                    <Image
                        src="/infinity_logo_transparent.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo icp "
                        height={50}
                        width={100}
                    />
                    <Image
                        src="/block_and_rock.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo block and rock"
                        height={50}
                        width={100}
                    />
                    <Image
                        src="/puri_kantor.png"
                        role="presentation"
                        loading="lazy"
                        alt="partners logo puri kantor"
                        height={50}
                        width={100}
                    />
                </div>
            </div>

        </>
    );
}

