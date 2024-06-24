"use client"
import React from 'react';
import { Amatic_SC } from 'next/font/google';
import Image from 'next/image'
import { Bebas_Neue } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });

export default function AirdropSection() {
    return (
        <>
            <div className="w-full lg:py-10 overflow-hidden">
                <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className='lg:col-span-4 mt-10 lg:mt-0 w-full rounded-xl h-full min-h-[500px]'>
                        <AirdropText />
                    </div>

                    <div className="lg:col-span-4 mt-10 lg:mt-0 w-full relative rounded-xl h-full min-h-[500px]">
                        <Image fill style={{ objectFit: 'cover' }} src="/home_page/infinity_airdrop.png" className="rounded-lg" alt="Airdrop Image" />
                    </div>
                </div>
            </div>
        </>
    );
}

function AirdropText() {
    return (
        <>
            <h3 className={`${bebasNeue.className} text-yellow-500 mt-8 text-xl lg:text-4xl text-center`}> Earn Histocred Token by Contributing to Our Web3 Community.</h3 >
            <ul className="list-disc pl-5 mt-4 text-white">
                <li className="flex items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2 mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Join Our Community Channels:</strong>
                        <p className='opacity-90'>Engage with us on our official social media platforms. Follow, like, and share our content to spread the word about Histocred. Active participation in discussions and helping others will also earn you tokens.</p>
                    </div>
                </li>
                <li className="flex mt-4 items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2  mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Contribute Content:</strong>
                        <p>If you&apos;re passionate about history, contribute articles, research papers, or multimedia content to our platform. Each piece of content you contribute will be rewarded with HCT based on its quality and impact.</p>
                    </div>
                </li>
                <li className="flex mt-4 items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2  mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Invite Friends:</strong>
                        <p>Refer your friends to join Histocred and earn tokens for every new member who registers using your unique referral link. The more friends you bring in, the more you earn.</p>
                    </div>
                </li>
                <li className="flex mt-4 items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2  mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Participate in Community Events:</strong>
                        <p>We host regular events such as webinars, AMAs (Ask Me Anything), and contests. By participating and engaging in these events, you can earn additional HCT rewards.</p>
                    </div>
                </li>
                <li className="flex mt-4 items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2  mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Provide Feedback:</strong>
                        <p>Help us improve by giving feedback on our platform, features, and community initiatives. Constructive feedback and suggestions are highly valued and will be rewarded with tokens.</p>
                    </div>
                </li>
                <li className="flex  mt-4 items-start">
                    <Image src="/logo.svg" alt="icon" width={20} height={20} className="mr-2  mt-1" />
                    <div>
                        <strong style={{ "color": "#a972cb" }}>Support Development:</strong>
                        <p>For those with technical skills, contribute to our open-source projects or help with platform development. Technical contributions are crucial to our growth and will be generously rewarded.</p>
                    </div>
                </li>
            </ul>
        </>
    )
}

