
import { InfiniteMovingCards } from "./animated-slider";


const images = [
    { text: "John Doe", url: "/images/event_1.png" },
    { text: "", url: "/images/event_2.png" },
    { text: "", url: "/images/event_3.png" },
    { text: "", url: "/images/event_4.png" },
    { text: "", url: "/images/event_5.png" },
    { text: "", url: "/images/event_5.png" },
    { text: "", url: "/images/event_7.png" },
    { text: "", url: "/images/event_8.png" },
    { text: "", url: "/images/event_8.png" },
    { text: "", url: "/images/event_10.png" },
    { text: "", url: "/images/event_11.png" },
]

export default function AboutSection() {
    return <>
        <InfiniteMovingCards items={images} />
    </>
}

