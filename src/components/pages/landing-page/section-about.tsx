
"use client"
import { InfiniteMovingCards } from "../common/animated-slider";
import { Bebas_Neue } from "next/font/google"
import { DM_Serif_Text } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });
const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: "400", style: "normal" });


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
        <div className="relative h-[60vh]">
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="relative w-full h-full rounded-lg">

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-10 rounded shadow-lg">
                        <AboutTitle />
                        <AboutText />
                    </div>
                </div>
            </div>
            <InfiniteMovingCards items={images} className="h-full" direction="right" />
        </div>
    );
}

function AboutTitle() {
    return <h1 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl text-center`}>From Gaming to Education: The Birth of Histoverse
    </h1>
}

function AboutText() {
    return (
        <div key="company-description"
            className={`${dmSerifText.className} text-gray-200 mt-16 text-lg lg:text-2xl p-4 max-w-[900px] text-shadow-gray-900 mx-auto opacity-100`} >
            Founded by Ole, who discovered the power of story-driven games to connect with his autistic son, Immortal Games pivoted from casual gaming to revolutionizing history education. Early 2023 saw the birth of our MVP, validating our innovative vision. Recognizing blockchains potential, we embraced Web3 to democratize history education, creating a transparent, censorship-resistant platform. Histoverse combines immersive storytelling with interactive learning, bringing historical narratives to life..
        </div>
    )
}

