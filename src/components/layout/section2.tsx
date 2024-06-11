
import { InfiniteMovingCards } from "./animated-slider";
import Image from "next/image";
import { Amatic_SC } from 'next/font/google';
import AnimatedText from './animated-text';
import { motion } from "framer-motion";
import { Anton } from "next/font/google"

const anton = Anton({ subsets: ["latin"], weight: "400", style: "normal" });
const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400", style: "normal" });


const images = [
    { text: "John Doe", url: "/images/event_1.png" },
    { text: "", url: "/images/event_2.png" },
    { text: "", url: "/images/event_3.png" },
    { text: "", url: "/images/event_4.png" },
    { text: "", url: "/images/event_5.png" },
    { text: "", url: "/images/event_6.png" },
    { text: "", url: "/images/event_7.png" },
    { text: "", url: "/images/event_8.png" },
    { text: "", url: "/images/event_9.png" },
    { text: "", url: "/images/event_12.png" },
    { text: "", url: "/images/event_13.png" },
    { text: "", url: "/images/event_14.png" },
]

export default function AboutSection() {
    return (
        <div className="relative h-[100vh]">
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="relative w-[70%] h-1/2 rounded-lg shadow-lg shadow-gray-900">
                    <Image src="/images/bg_paper.png" className=" rounded-lg" alt="Background Image" fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-10 rounded shadow-lg">
                        <h1 className={`${anton.className} text-2xl mb-4 font-bold text-white opacity-85`}>From Gaming to Education: The Birth of Histoverse
                        </h1>
                        <Text />
                    </div>
                </div>
            </div>
            <InfiniteMovingCards items={images} className="h-full" direction="right" />
        </div>
    );
}


function Text() {
    return (
        <AnimatedText key="company-description"
            words='Founded by Ole, who discovered the power of story-driven games to connect with his autistic son, Immortal Games pivoted from casual gaming to revolutionizing history education. Early 2023 saw the birth of our MVP, validating our innovative vision. Recognizing blockchains potential, we embraced Web3 to democratize history education, creating a transparent, censorship-resistant platform. Histoverse combines immersive storytelling with interactive learning, bringing historical narratives to life..'
            className={`${amaticSC.className} text-black mt-16 font-extrabold text-2xl lg:text-4xl text-center`} />
    )
}

