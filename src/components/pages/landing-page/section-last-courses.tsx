
"use client"
import { InfiniteMovingCards } from "../common/animated-slider";
import { Bebas_Neue } from "next/font/google"
import { DM_Serif_Text } from "next/font/google"
import { Exo_2 } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });
const exo2 = Exo_2({ subsets: ["latin"], weight: "400", style: "normal" });

const images = [
    { title: "Ancient Egypt: Pyramids and Pharaohs", url: "/images/event_1.png" },
    { title: "The Rise and Fall of the Roman Empire", url: "/images/event_2.png" },
    { title: "Medieval Europe: Knights and Castles", url: "/images/event_3.png" },
    { title: "The Renaissance: Art and Innovation", url: "/images/event_4.png" },
    { title: "The Age of Exploration", url: "/images/event_5.png" },
    { title: "The American Revolution", url: "/images/event_6.png" },
    { title: "The French Revolution", url: "/images/event_7.png" },
    { title: "The Industrial Revolution", url: "/images/event_8.png" },
    { title: "World War I: The Great War", url: "/images/event_9.png" },
    { title: "The Cold War Era", url: "/images/event_12.png" },
    { title: "The Civil Rights Movement", url: "/images/event_13.png" },
    { title: "The Digital Revolution", url: "/images/event_14.png" },
]

export default function AboutSection() {
    return (
        <>
            <h3 className={`${bebasNeue.className} text-yellow-500 mt-8 text-xl lg:text-4xl text-left`}>New Content</h3 >
            <div className="relative h-[60vh]">
                <InfiniteMovingCards speed="slow" items={images} className="h-full" direction="right" />
            </div>
        </>
    );
}



