'use client'
import React, { useState } from "react"
import { Bebas_Neue } from "next/font/google"
import { YellowButton } from "@/components/ui/button";
import { LearnGrid } from "@/components/ui/learn-grid";
import { Badge } from "@/components/ui/badge"
import { GradientInput } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Comments } from "@/components/pages/common/comments-section";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import SelectedCard from "@/components/pages/common/selected-card";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });


export default function LearnPage() {
    return (
        <div className="flex justify-between min-h-screen w-full flex-col overflow-y-hidden">
            <div className="px-4">
                <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl mb-2`}> Learn</h3 >
                <div className="flex w-full justify-between mb-6">
                    <GradientInput placeholder="Search by title, author, hashtag, or description" className="w-[50%]" />
                    <div className="space-x-2">
                        <YellowButton onClick={() => { }}>
                            All
                        </YellowButton>
                        <YellowButton onClick={() => { }}>
                            Completed
                        </YellowButton>
                        <YellowButton onClick={() => { }}>
                            To Watch
                        </YellowButton>
                        <YellowButton onClick={() => { }}>
                            In Process
                        </YellowButton>
                    </div>

                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">

                        <AccordionTrigger>
                            <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl hover:scale-105 flex items-center`}>
                                <svg className="w-9 h-9 mr-2 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z" />
                                </svg>
                                Additional Filters
                            </h3 >
                        </AccordionTrigger>
                        <AccordionContent className="text-white w-full flex space-x-2">
                            <SelectCountry />
                            <SelectCategory />
                            <SelectPeriod />
                            <GradientInput placeholder="Price < Amount" className="w-[150px]" />
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
            <LearnGrid cards={items} SelectedCard={SelectedCard} ContentCard={ContentCard} />
        </div>

    );
}

function SelectCountry() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Country</SelectLabel>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="brazil">Brazil</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
function SelectPeriod() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Period</SelectLabel>
                    <SelectItem value="2000">2000-2100</SelectItem>
                    <SelectItem value="1900">1900-2000</SelectItem>
                    <SelectItem value="1800">1800-1900</SelectItem>
                    <SelectItem value="1700">1700-1800</SelectItem>
                    <SelectItem value="1600">1600-1700</SelectItem>
                    <SelectItem value="1500">1500-1600</SelectItem>
                    <SelectItem value="1400">1400-1500</SelectItem>
                    <SelectItem value="1300">1300-1400</SelectItem>
                    <SelectItem value="1200">1200-1300</SelectItem>
                    <SelectItem value="1100">1100-1200</SelectItem>
                    <SelectItem value="1000">1000-1100</SelectItem>
                    <SelectItem value="900">900-1000</SelectItem>
                    <SelectItem value="800">800-900</SelectItem>
                    <SelectItem value="700">700-800</SelectItem>
                    <SelectItem value="600">600-700</SelectItem>
                    <SelectItem value="500">500-600</SelectItem>
                    <SelectItem value="400">400-500</SelectItem>
                    <SelectItem value="300">300-400</SelectItem>
                    <SelectItem value="200">200-300</SelectItem>
                    <SelectItem value="100">100-200</SelectItem>
                    <SelectItem value="90">0-100</SelectItem>
                    <SelectItem value="80">&lt; 0</SelectItem>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
function SelectCategory() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Category</SelectLabel>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="war">War</SelectItem>
                    <SelectItem value="biography">Biography</SelectItem>
                    <SelectItem value="organisation">Organisation</SelectItem>
                    <SelectItem value="politics">Politics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="revolution">Revolution</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const ContentCard = ({ card }: { card: any }) => {
    const [loaded, setLoaded] = useState(false);
    console.log(card, card.short_description)
    return (
        <>
            <div className="min-h-[16rem] flex flex-col rounded-xl bg-black cursor-pointer relative ">
                <Image
                    src={card.img_url}
                    layout="fill"
                    objectFit="cover"
                    onLoad={() => setLoaded(true)}
                    className={cn(
                        "object-top  inset-0 h-full w-full transition duration-200  ",
                        loaded ? "blur-none" : "blur-md"
                    )}
                    alt="thumbnail"
                />
                <div className="space-x-1 absolute top-2 left-2">
                    {/* <Badge className="bg-yellow-500 text-white">{card?.category}</Badge> */}
                    {card.hash_tags.map((tag: string, index: number) => (
                        <Badge className={cn("bg-yellow-500 text-white", badgeCoolors[index])} key={index}>{tag}</Badge>
                    ))}
                </div>
            </div>
            <div className="min-h-[16rem] z-20">
                <div className="font-sans font-bold text-neutral-600 mt-1 dark:text-neutral-200">
                    {card?.title}
                </div>
                <div className="text-yellow-500 text-sm opacity-85">{card?.create_date}</div>
                <div className="font-sans font-normal text-neutral-6000 text-xs dark:text-neutral-300">
                    {card?.short_description}
                </div>

                <div className="flex items-center space-x-2 mt-4">
                    <Badge variant="purple">{card.price ? card.price + " ICP" : "Free"} </Badge>
                    <Badge className="flex items-center bg-teal-500">
                        <i className="text-white fa fa-thumbs-up mr-1"></i>
                        <span className="text-white">{card.likes}</span>
                    </Badge>
                    <Badge className="bg-lime-600 text-white">{card.type} </Badge>
                </div>
            </div>
        </>
    );
};
const badgeCoolors = ["bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500", "bg-orange-500", "bg-lime-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500", "bg-orange-500", "bg-lime-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500"]

const items = [
    {
        id: 1,
        title: "Ancient Civilizations",
        short_description: "Delve into the history of ancient cultures and their contributions.",
        country: "Germany",
        img_url: "/images/event_1.png",
        price: 0,
        create_date: "2021-01-01",
        period: "1900-2000",
        authors: [
            { name: "Author One", id: 1, img_url: "/images/author_1.png" },
            { name: "Author Two", id: 2, img_url: "/images/author_2.png" }
        ],
        likes: 150,
        dislikes: 10,
        hash_tags: ["#history", "#ancient", "#civilizations"],
        views: 1200,
        tests_type: ["Polls", "Questions"],
        user_id: 1,
        user_name: "John Doe",
        user_img_url: "/images/user_1.png",
        comments: [
            {
                comment: "Very informative!",
                date: "2021-02-01",
                user_name: "Alice",
                user_img_url: "/images/user_2.png",
                user_id: 2
            },
            {
                comment: "Loved the details!",
                date: "2021-02-05",
                user_name: "Bob",
                user_img_url: "/images/user_3.png",
                user_id: 3
            }
        ],
        number_of_test: 2,
        update_date: "2021-02-02",
        type: "Video",
        category: "economy",
        long_description: "An in-depth look into the ancient civilizations that shaped our world. This course covers the rise and fall of various ancient empires, their cultural achievements, and their lasting legacies. Students will explore the social, political, and economic structures of these civilizations. The course also delves into the art, architecture, and technological advancements of the time. By understanding the past, students will gain insights into the foundations of modern society. The course includes interactive elements such as virtual tours and artifact analysis. It is designed to be engaging and informative for history enthusiasts.",
        lessons: [
            {
                lesson_id: 1,
                lesson_name: "Introduction to Ancient Civilizations",
                lesson_order: 1,
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/lesson_1.png"
            }
        ]
    },
    {
        id: 2,
        title: "The Age of Exploration",
        short_description: "Discover the voyages and discoveries that shaped the modern world.",
        country: "Britain",
        img_url: "/images/event_2.png",
        price: 0,
        create_date: "2023-01-01",
        period: "1800-1900",
        authors: [
            { name: "Author Three", id: 3, img_url: "/images/author_3.png" }
        ],
        likes: 200,
        dislikes: 15,
        hash_tags: ["#exploration", "#voyages", "#discoveries"],
        views: 1500,
        tests_type: ["Questions", "Essay"],
        user_id: 2,
        user_name: "Jane Smith",
        user_img_url: "/images/user_2.png",
        comments: [
            {
                comment: "Fascinating insights!",
                date: "2023-02-01",
                user_name: "Charlie",
                user_img_url: "/images/user_4.png",
                user_id: 4
            },
            {
                comment: "Great course!",
                date: "2023-02-10",
                user_name: "David",
                user_img_url: "/images/user_5.png",
                user_id: 5
            }
        ],
        number_of_test: 3,
        update_date: "2023-02-02",
        type: "Curse",
        category: "war",
        long_description: "A detailed exploration of the Age of Exploration and its impact on the world. This course examines the motivations behind the great voyages of discovery, including economic, religious, and political factors. Students will learn about the key explorers, such as Columbus, Magellan, and da Gama, and their significant journeys. The course also covers the consequences of these explorations, including the exchange of goods, ideas, and diseases between the Old and New Worlds. Students will explore the impact on indigenous populations and the development of colonial empires. The course includes primary source analysis and interactive maps to enhance learning.",
        lessons: [
            {
                lesson_id: 2,
                lesson_name: "Introduction to the Age of Exploration",
                lesson_order: 1,
                lesson_description: "An overview of the Age of Exploration. This lesson introduces students to the major explorers and their voyages. It covers the technological advancements that made long-distance sea travel possible, such as the compass and the caravel. Students will learn about the motivations behind exploration, including the search for new trade routes and the spread of Christianity. The lesson also discusses the impact of exploration on global trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of the Age of Exploration and its significance.",
                lesson_img_url: "/images/lesson_2.png"
            }
        ]
    },
    {
        id: 3,
        title: "The Industrial Revolution",
        short_description: "Learn about the innovations that transformed industry and society.",
        country: "USA",
        price: 10,
        img_url: "/images/event_3.png",
        create_date: "2023-02-07",
        period: "1400-1500",
        authors: [
            { name: "Author Four", id: 4, img_url: "/images/author_4.png" }
        ],
        likes: 250,
        dislikes: 20,
        hash_tags: ["#industrial", "#revolution", "#innovation"],
        views: 1800,
        tests_type: ["Tutor Questions", "Game"],
        user_id: 3,
        user_name: "Alice Johnson",
        user_img_url: "/images/user_3.png",
        comments: [
            {
                comment: "Very enlightening!",
                date: "2023-03-01",
                user_name: "Eve",
                user_img_url: "/images/user_6.png",
                user_id: 6
            },
            {
                comment: "Highly recommend!",
                date: "2023-03-05",
                user_name: "Frank",
                user_img_url: "/images/user_7.png",
                user_id: 7
            }
        ],
        number_of_test: 4,
        update_date: "2023-03-02",
        type: "Video",
        category: "biography",
        long_description: "An in-depth look at the Industrial Revolution and its impact on society. This course covers the major technological advancements that revolutionized industry, such as the steam engine, the spinning jenny, and the power loom. Students will learn about the social and economic changes brought about by industrialization, including urbanization, the rise of factory work, and changes in labor conditions. The course also examines the environmental impact of industrialization and the responses to these changes, such as the labor movement and regulatory reforms. Interactive simulations and primary source documents are used to enhance understanding.",
        lessons: [
            {
                lesson_id: 3,
                lesson_name: "Introduction to the Industrial Revolution",
                lesson_order: 1,
                lesson_description: "An overview of the Industrial Revolution. This lesson introduces students to the key inventions and innovations that drove industrialization. It covers the transition from agrarian economies to industrial economies and the resulting changes in society. Students will learn about the impact of industrialization on different social classes and the development of new economic theories. The lesson also discusses the global spread of industrialization and its long-term effects. By the end of this lesson, students will have a foundational understanding of the Industrial Revolution and its significance.",
                lesson_img_url: "/images/lesson_3.png"
            }
        ]
    },
    {
        id: 4,
        title: "World War I and II",
        short_description: "Understand the causes and consequences of the two global conflicts.",
        country: "RUSSIA",
        price: 10,
        img_url: "/images/event_4.png",
        create_date: "2024-06-07",
        period: "2000-2100",
        authors: [
            { name: "Author Five", id: 5, img_url: "/images/author_5.png" }
        ],
        likes: 300,
        dislikes: 25,
        hash_tags: ["#worldwar", "#conflict", "#history"],
        views: 2000,
        tests_type: ["Polls", "Questions", "Essay"],
        user_id: 4,
        user_name: "Bob Brown",
        user_img_url: "/images/user_4.png",
        comments: [
            {
                comment: "Very detailed!",
                date: "2024-07-01",
                user_name: "Grace",
                user_img_url: "/images/user_8.png",
                user_id: 8
            },
            {
                comment: "Extremely informative!",
                date: "2024-07-05",
                user_name: "Henry",
                user_img_url: "/images/user_9.png",
                user_id: 9
            }
        ],
        number_of_test: 5,
        update_date: "2024-07-02",
        type: "Curse",
        category: "war",
        long_description: "A comprehensive study of World War I and II and their global impact. This course examines the causes, major events, and consequences of the two world wars. Students will learn about the political, economic, and social factors that led to the conflicts. The course covers key battles, military strategies, and the roles of different nations. It also explores the impact of the wars on civilians, including the Holocaust and other atrocities. The course includes primary source analysis, such as letters, diaries, and government documents. Students will gain a deep understanding of the lasting effects of the world wars on global politics and society.",
        lessons: [
            {
                lesson_id: 4,
                lesson_name: "Introduction to World War I and II",
                lesson_order: 1,
                lesson_description: "An overview of World War I and II. This lesson introduces students to the major causes and events of the two world wars. It covers the alliances, military strategies, and key battles that defined the conflicts. Students will learn about the impact of the wars on different regions and populations. The lesson also discusses the aftermath of the wars, including the formation of the United Nations and the beginning of the Cold War. By the end of this lesson, students will have a foundational understanding of World War I and II and their significance.",
                lesson_img_url: "/images/lesson_4.png"
            }
        ]
    },
    {
        id: 5,
        title: "The Cold War",
        short_description: "Explore the tensions and rivalries that defined the post-war era.",
        country: "Germany",
        price: 4,
        img_url: "/images/event_5.png",
        create_date: "2024-03-09",
        period: "2000-2100",
        authors: [
            { name: "Author Six", id: 6, img_url: "/images/author_6.png" }
        ],
        likes: 350,
        dislikes: 30,
        hash_tags: ["#coldwar", "#tensions", "#rivalries"],
        views: 2200,
        tests_type: ["Questions", "Tutor Questions"],
        user_id: 5,
        user_name: "Charlie Davis",
        user_img_url: "/images/user_5.png",
        comments: [
            {
                comment: "Very insightful!",
                date: "2024-04-01",
                user_name: "Ivy",
                user_img_url: "/images/user_10.png",
                user_id: 10
            },
            {
                comment: "Great analysis!",
                date: "2024-04-05",
                user_name: "Jack",
                user_img_url: "/images/user_11.png",
                user_id: 11
            }
        ],
        number_of_test: 6,
        update_date: "2024-04-02",
        type: "Video",
        category: "war",
        long_description: "An in-depth look at the Cold War and its impact on global politics. This course covers the ideological, political, and military tensions between the United States and the Soviet Union. Students will learn about key events such as the Cuban Missile Crisis, the Korean War, and the Vietnam War. The course also examines the impact of the Cold War on other regions, including Europe, Asia, and Latin America. Students will explore the role of espionage, propaganda, and nuclear arms in the conflict. The course includes primary source analysis and interactive simulations to enhance understanding.",
        lessons: [
            {
                lesson_id: 5,
                lesson_name: "Introduction to the Cold War",
                lesson_order: 1,
                lesson_description: "An overview of the Cold War. This lesson introduces students to the major events and figures of the Cold War. It covers the ideological differences between the United States and the Soviet Union and the resulting political and military tensions. Students will learn about the impact of the Cold War on different regions and the role of nuclear arms in the conflict. The lesson also discusses the end of the Cold War and its lasting effects on global politics. By the end of this lesson, students will have a foundational understanding of the Cold War and its significance.",
                lesson_img_url: "/images/lesson_5.png"
            }
        ]
    },
    {
        id: 6,
        title: "The German Revolution",
        short_description: "Study the birth of the United States and its struggle for independence.",
        country: "Germany",
        price: 15,
        img_url: "/images/event_6.png",
        create_date: "2024-06-09",
        period: "2000-2100",
        authors: [
            { name: "Author Seven", id: 7, img_url: "/images/author_7.png" }
        ],
        likes: 400,
        dislikes: 35,
        hash_tags: ["#revolution", "#independence", "#history"],
        views: 2500,
        tests_type: ["Polls", "Game"],
        user_id: 6,
        user_name: "David Evans",
        user_img_url: "/images/user_6.png",
        comments: [
            {
                comment: "Very educational!",
                date: "2024-07-01",
                user_name: "Kate",
                user_img_url: "/images/user_12.png",
                user_id: 12
            },
            {
                comment: "Highly detailed!",
                date: "2024-07-05",
                user_name: "Leo",
                user_img_url: "/images/user_13.png",
                user_id: 13
            }
        ],
        number_of_test: 7,
        update_date: "2024-07-02",
        type: "Curse",
        category: "revolution",
        long_description: "A comprehensive study of the German Revolution and its impact on the world. This course examines the causes, major events, and consequences of the German Revolution. Students will learn about the political, social, and economic factors that led to the revolution. The course covers key figures and movements, such as the Spartacist uprising and the Weimar Republic. It also explores the impact of the revolution on German society and its role in shaping modern Germany. The course includes primary source analysis, such as speeches, letters, and government documents. Students will gain a deep understanding of the German Revolution and its significance.",
        lessons: [
            {
                lesson_id: 6,
                lesson_name: "Introduction to the German Revolution",
                lesson_order: 1,
                lesson_description: "An overview of the German Revolution. This lesson introduces students to the major causes and events of the revolution. It covers the political and social changes that occurred during the revolution and the impact on German society. Students will learn about the key figures and movements involved in the revolution. The lesson also discusses the aftermath of the revolution and its role in shaping modern Germany. By the end of this lesson, students will have a foundational understanding of the German Revolution and its significance.",
                lesson_img_url: "/images/lesson_6.png"
            }
        ]
    },
    {
        id: 7,
        img_url: "/images/event_7.png",
        title: "The Renaissance",
        price: 7,
        country: "Indonesia",
        short_description: "Witness the rebirth of art, science, and culture in Europe.",
        create_date: "2024-09-12",
        period: "2000-2100",
        authors: [
            { name: "Author Eight", id: 8, img_url: "/images/author_8.png" }
        ],
        likes: 450,
        dislikes: 40,
        hash_tags: ["#renaissance", "#art", "#science"],
        views: 2800,
        tests_type: ["Questions", "Essay"],
        user_id: 7,
        user_name: "Eve Foster",
        user_img_url: "/images/user_7.png",
        comments: [
            {
                comment: "Very inspiring!",
                date: "2024-10-01",
                user_name: "Mia",
                user_img_url: "/images/user_14.png",
                user_id: 14
            },
            {
                comment: "Loved the content!",
                date: "2024-10-05",
                user_name: "Noah",
                user_img_url: "/images/user_15.png",
                user_id: 15
            }
        ],
        number_of_test: 8,
        update_date: "2024-10-02",
        type: "Video",
        category: "art",
        long_description: "An in-depth look at the Renaissance and its impact on art, science, and culture. This course covers the major artistic, scientific, and cultural achievements of the Renaissance period. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The course examines the social and political context of the Renaissance and its impact on European society. Students will explore the development of humanism and its influence on art and literature. The course includes primary source analysis, such as paintings, sculptures, and scientific writings. Students will gain a deep understanding of the Renaissance and its significance.",
        lessons: [
            {
                lesson_id: 7,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_7.png"
            }
        ]
    },
    {
        id: 8,
        img_url: "/images/event_8.png",
        title: "The Renaissance",
        price: 10,
        country: "Philippine",
        short_description: "Witness the rebirth of art, science, and culture in Europe.",
        create_date: "2024-09-12",
        period: "2000-2100",
        authors: [
            { name: "Author Nine", id: 9, img_url: "/images/author_9.png" }
        ],
        likes: 500,
        dislikes: 45,
        hash_tags: ["#renaissance", "#culture", "#rebirth"],
        views: 3000,
        tests_type: ["Polls", "Tutor Questions"],
        user_id: 8,
        user_name: "Frank Green",
        user_img_url: "/images/user_8.png",
        comments: [
            {
                comment: "Very enlightening!",
                date: "2024-10-01",
                user_name: "Olivia",
                user_img_url: "/images/user_16.png",
                user_id: 16
            },
            {
                comment: "Fantastic course!",
                date: "2024-10-05",
                user_name: "Paul",
                user_img_url: "/images/user_17.png",
                user_id: 17
            }
        ],
        number_of_test: 9,
        update_date: "2024-10-02",
        type: "Curse",
        category: "culture",
        long_description: "A comprehensive study of the Renaissance and its impact on European culture. This course examines the major artistic, scientific, and cultural achievements of the Renaissance period. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The course covers the social and political context of the Renaissance and its impact on European society. Students will explore the development of humanism and its influence on art and literature. The course includes primary source analysis, such as paintings, sculptures, and scientific writings. Students will gain a deep understanding of the Renaissance and its significance.",
        lessons: [
            {
                lesson_id: 8,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_8.png"
            }
        ]
    },
    {
        id: 9,
        img_url: "/images/event_9.png",
        title: "The Renaissance",
        price: 13,
        country: "Netherlands",
        short_description: "Witness the rebirth of art, science, and culture in Europe.",
        create_date: "2024-09-12",
        period: "2000-2100",
        authors: [
            { name: "Author Ten", id: 10, img_url: "/images/author_10.png" }
        ],
        likes: 550,
        dislikes: 50,
        hash_tags: ["#renaissance", "#europe", "#rebirth"],
        views: 3200,
        tests_type: ["Questions", "Game"],
        user_id: 9,
        user_name: "Grace Harris",
        user_img_url: "/images/user_9.png",
        comments: [
            {
                comment: "Very informative!",
                date: "2024-10-01",
                user_name: "Quinn",
                user_img_url: "/images/user_18.png",
                user_id: 18
            },
            {
                comment: "Excellent content!",
                date: "2024-10-05",
                user_name: "Rachel",
                user_img_url: "/images/user_19.png",
                user_id: 19
            }
        ],
        number_of_test: 10,
        update_date: "2024-10-02",
        type: "Video",
        category: "art",
        long_description: "An in-depth look at the Renaissance and its impact on European art and culture. This course covers the major artistic, scientific, and cultural achievements of the Renaissance period. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The course examines the social and political context of the Renaissance and its impact on European society. Students will explore the development of humanism and its influence on art and literature. The course includes primary source analysis, such as paintings, sculptures, and scientific writings. Students will gain a deep understanding of the Renaissance and its significance.",
        lessons: [
            {
                lesson_id: 9,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_9.png"
            }
        ]
    },
    {
        id: 10,
        img_url: "/images/event_10.png",
        price: 14,
        title: "The Renaissance",
        country: "Australia",
        short_description: "Witness the rebirth of art, science, and culture in Europe.",
        create_date: "2024-09-12",
        period: "2000-2100",
        authors: [
            { name: "Author Eleven", id: 11, img_url: "/images/author_11.png" }
        ],
        likes: 600,
        dislikes: 55,
        hash_tags: ["#renaissance", "#rebirth", "#culture"],
        views: 3500,
        tests_type: ["Polls", "Essay"],
        user_id: 10,
        user_name: "Henry Jackson",
        user_img_url: "/images/user_10.png",
        comments: [
            {
                comment: "Very inspiring!",
                date: "2024-10-01",
                user_name: "Sam",
                user_img_url: "/images/user_20.png",
                user_id: 20
            },
            {
                comment: "Incredible course!",
                date: "2024-10-05",
                user_name: "Tina",
                user_img_url: "/images/user_21.png",
                user_id: 21
            }
        ],
        number_of_test: 11,
        update_date: "2024-10-02",
        type: "Curse",
        category: "culture",
        long_description: "A comprehensive study of the Renaissance and its impact on art, science, and culture. This course examines the major artistic, scientific, and cultural achievements of the Renaissance period. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The course covers the social and political context of the Renaissance and its impact on European society. Students will explore the development of humanism and its influence on art and literature. The course includes primary source analysis, such as paintings, sculptures, and scientific writings. Students will gain a deep understanding of the Renaissance and its significance.",
        lessons: [
            {
                lesson_id: 10,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_10.png"
            }
        ]
    },
];
