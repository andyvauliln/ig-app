'use client'
import React from "react"
import { Bebas_Neue } from "next/font/google"
import { YellowButton } from "@/components/ui/button";
import { RequestContentGrid } from "@/components/ui/request-content-grid";
import { Badge } from "@/components/ui/badge"
import { purple } from "tailwindcss/colors";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });


const RequestLessonPage = () => {
    return (
        <div className="flex justify-between min-h-screen w-full flex-col overflow-y-hidden">
            <div className="flex w-full justify-between px-4 mb-6">
                <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> Request Content</h3 >
                <div className="space-x-2">
                    <YellowButton onClick={() => { }}>
                        Request Content
                    </YellowButton>
                    <YellowButton onClick={() => { }}>
                        Propose Content
                    </YellowButton>
                </div>

            </div>
            <RequestContentGrid cards={items} />
        </div>

    );
}
export default RequestLessonPage



const Footer = ({ reward, numberOfVotes }: { reward: string, numberOfVotes: number }) => {
    return <div className="flex justify-between mt-2 items-center">
        <div className="flex items-center space-x-2">
            <Badge variant="purple">Reward: {reward} ICP</Badge>
            <Badge className="flex items-center bg-teal-500">
                <i className="text-white fa fa-thumbs-up mr-1"></i>
                <span className="text-white">{numberOfVotes}</span>
            </Badge>

        </div>
        <div className="">
            <YellowButton onClick={() => { }}>Upvote</YellowButton>
        </div>
    </div>
};
const FooterOpen = ({ reward, numberOfVotes }: { reward: string, numberOfVotes: number }) => {
    return <div className="flex justify-between mt-6 items-center">
        <div className="flex items-center space-x-2">
            <Badge variant="purple">Reward: {reward} ICP</Badge>
            <Badge className="flex items-center bg-teal-500">
                <i className="text-white fa fa-thumbs-up mr-1"></i>
                <span className="text-white">{numberOfVotes}</span>
            </Badge>

        </div>
        <div className="space-x-2">
            <YellowButton onClick={() => { }}>Upvote</YellowButton>
            <YellowButton onClick={() => { }}>Collaborate</YellowButton>
        </div>
    </div>
};
const OpenContent = ({ card = null }: { card?: any }) => {
    return (
        <div className="h-full w-full text-white">
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.

        </div>
    );
};
const items = [
    {
        id: 1,
        title: "Ancient Civilizations",
        description: "Delve into the history of ancient cultures and their contributions.",
        header: null,
        img_url: "/images/event_1.png",
        footer: <Footer reward="100/400" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="100/400" numberOfVotes={100} />,
        content: <OpenContent />,
        date: "2021-01-01"
    },
    {
        id: 2,
        title: "The Age of Exploration",
        description: "Discover the voyages and discoveries that shaped the modern world.",
        header: null,
        img_url: "/images/event_2.png",
        footer: <Footer reward="300/400" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="300/400" numberOfVotes={100} />,
        content: <OpenContent />,
        date: "2023-01-01"
    },
    {
        id: 3,
        title: "The Industrial Revolution",
        description: "Learn about the innovations that transformed industry and society.",
        header: null,
        img_url: "/images/event_3.png",
        footer: <Footer reward="400/400" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="400/400" numberOfVotes={100} />,
        content: <OpenContent />,
        date: "2023-02-07"
    },
    {
        id: 4,
        title: "World War I and II",
        description: "Understand the causes and consequences of the two global conflicts.",
        header: null,
        img_url: "/images/event_4.png",
        footer: <Footer reward="100" numberOfVotes={1000} />,
        footer_open: <FooterOpen reward="100" numberOfVotes={1000} />,
        content: <OpenContent />,
        date: "2024-06-07"
    },
    {
        id: 5,
        title: "The Cold War",
        description: "Explore the tensions and rivalries that defined the post-war era.",
        header: null,
        img_url: "/images/event_5.png",
        footer: <Footer reward="100" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="100" numberOfVotes={100} />,
        content: <OpenContent />,
        date: "2024-03-09"
    },
    {
        id: 6,
        title: "The American Revolution",
        description: "Study the birth of the United States and its struggle for independence.",
        header: null,
        img_url: "/images/event_6.png",
        content: <OpenContent />,
        footer: <Footer reward="0/500" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="0/500" numberOfVotes={100} />,
        date: "2024-06-09"
    },
    {
        id: 7,
        img_url: "/images/event_7.png",
        title: "The Renaissance",
        content: <OpenContent />,
        description: "Witness the rebirth of art, science, and culture in Europe.",
        footer: <Footer reward="100" numberOfVotes={1000} />,
        footer_open: <FooterOpen reward="100" numberOfVotes={1000} />,
        date: "2024-09-12"
    },
    {
        id: 8,
        img_url: "/images/event_8.png",
        title: "The Renaissance",
        content: <OpenContent />,
        description: "Witness the rebirth of art, science, and culture in Europe.",
        footer: <Footer reward="100" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="100" numberOfVotes={100} />,
        date: "2024-09-12"
    },
    {
        id: 9,
        img_url: "/images/event_9.png",
        title: "The Renaissance",
        content: <OpenContent />,
        description: "Witness the rebirth of art, science, and culture in Europe.",
        footer: <Footer reward="100" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="100/400" numberOfVotes={100} />,
        date: "2024-09-12"
    },
    {
        id: 10,
        img_url: "/images/event_10.png",
        title: "The Renaissance",
        content: <OpenContent />,
        description: "Witness the rebirth of art, science, and culture in Europe.",
        footer: <Footer reward="100" numberOfVotes={100} />,
        footer_open: <FooterOpen reward="100/400" numberOfVotes={100} />,
        date: "2024-09-12"
    },
];

