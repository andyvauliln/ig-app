"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 } from "lucide-react"

import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button, YellowButton } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator";
import { Bebas_Neue } from "next/font/google"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { GradientTextArea } from "@/components/ui/input";
import SelectedCard from "@/components/pages/common/selected-card";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });
import { motion } from "framer-motion";
import { PollsWindow } from "@/components/pages/common/polls";

interface Lesson {
    id: number;
    lesson_name: string;
    lesson_order: number;
    lesson_description: string;
    lesson_img_url: string;
    completed: boolean;
    questions: any[];
}

interface LessonsProps {
    lessons: Lesson[];
    currentLesson: Lesson | undefined;
    setCurrentLesson: (lesson: Lesson) => void;
}
interface Course {
    id: number;
    title: string;
    type: string;
    lessons: Lesson[];
}
interface Tutor {
    tutor_name: string;
    tutor_image: string;
    tutor_instruction: string;
}

export default function Page({ params }: { params: { id: string } }) {
    const [openDetails, setOpenDetails] = useState(false)
    const course = items.find(item => item.id === parseInt(params.id)) as Course | undefined
    const [currentLesson, setCurrentLesson] = useState(course?.lessons[0])
    console.log(currentLesson, "currentLesson")
    const lessons = course?.lessons ?? []
    const tutor = { tutor_name: "Dalai Lama", tutor_image: "/images/dalay_lama.png", tutor_instruction: "This is a test instruction" }
    return (
        <div className="flex min-h-screen w-full flex-col">
            {openDetails && <motion.div
                onClick={() => setOpenDetails(false)}
                className={`absolute  p-10 bg-black border-white/[0.2] border overflow-hidden mb-4  yellow-card-bg rounded-lg cursor-pointer  inset-0  w-full md:w-2/3  mx-auto z-50 flex flex-col `}
                layout
            >
                <SelectedCard card={course} />
            </motion.div>}
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="flex justify-between items-center">
                            <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> {course?.title}</h3 >
                            <div className="flex flex-row items-center gap-2">
                                <YellowButton onClick={() => {
                                    window.location.href = '/learn';
                                }}>
                                    {`Back`}
                                </YellowButton>
                                <YellowButton onClick={() => setOpenDetails(true)}>
                                    {`${course?.type} Details`}
                                </YellowButton>
                            </div>
                        </div>
                        <VideoContent course={course} />
                        <TestTabs lesson={currentLesson} tutor={tutor} />
                    </div>

                    <Card
                        className="overflow-hidden border-2 border-yellow-500 bg-black" x-chunk="dashboard-05-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-start bg-black border-b border-yellow-500">
                            <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                    {tutor.tutor_name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 text-sm bg-black">
                            <div className="grid gap-3">
                                <Tutor turor={tutor} />
                            </div>
                            <Separator className="my-2 mb-4 bg-yellow-500" />
                            <div className="flex justify-between text-lg mb-4">
                                <div className="space-x-2">
                                    <span className="text-yellow-500">Lessons:</span>
                                    <span className="text-white">{`${lessons.filter(lesson => lesson.completed).length} / ${lessons.length}`}</span>
                                </div>
                                <div className="space-x-2">
                                    <span className="text-yellow-500">Test:</span>
                                    <span className="text-white">{`${10} / ${30}`}</span>
                                </div>
                            </div>
                            {/* <Separator className="my-2 mb-4 bg-yellow-500" /> */}
                            <Lessons lessons={lessons} currentLesson={currentLesson} setCurrentLesson={setCurrentLesson} />
                        </CardContent>
                        {/* <CardFooter className="flex flex-row items-center bg-black px-6 py-3">
                          

                        </CardFooter> */}
                    </Card>
                </div>
            </div>
        </div>
    )
}
function VideoContent({ course }: { course: Course | undefined }) {
    return (
        course && <iframe
            className="w-full min-h-[400px] h-full"
            src={`https://www.youtube.com/embed/jVjZ3bHQuhA`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>

    )
}

function Tutor({ turor }: { turor: Tutor | undefined }) {
    return (turor && <div className="relative group">
        <Image
            className="yellow-card-hover cursor-pointer hover:scale-105 rounded-md hover:mb-2"
            src="/images/dalay_lama.png"
            alt="Artur Conan"
            layout="responsive"
            width={100}
            height={300}
        />
        <svg
            className="absolute inset-0 m-auto w-10 h-10 opacity-0 group-hover:opacity-100 text-yellow-500 pointer-events-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                clipRule="evenodd"
            />
            <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
        </svg>
    </div>)
}

const Lessons: React.FC<LessonsProps> = ({ lessons, currentLesson, setCurrentLesson }) => {
    return (
        <ul className="grid gap-3 mt-2">
            {lessons.map((lesson, index) => {
                console.log(lesson, currentLesson, "curs")
                return (
                    <li
                        key={lesson.id}
                        onClick={() => {
                            setCurrentLesson(lesson)
                        }}
                        className={`yellow-card-hover rounded-md flex justify-between cursor-pointer p-2 ${lesson.id === currentLesson?.id ? 'yellow-card-active' : ''
                            }`}
                    >
                        <div className="flex flex-col justify-center">
                            <span className="text-white">Lesson: {index + 1}</span>
                            <CardDescription>{lesson.lesson_name}</CardDescription>
                        </div>
                        {!lesson.completed ? <svg className="w-6 h-6 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Z" />
                        </svg> :
                            <svg
                                className="w-6 h-6 text-yellow-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                    </li>
                )
            })}
        </ul>
    );
};


function TestTabs({ lesson, tutor }: { lesson: any, tutor: any }) {
    console.log(lesson, "lesson")
    const user = {
        name: "John Wiek",
        img_url: "/images/dalay_lama.png"
    }
    return <Tabs defaultValue="questions" className="w-ful h-full min-h-40">
        <TabsList>
            <TabsTrigger value="questions">Q&A</TabsTrigger>
            <TabsTrigger value="polls">Polls</TabsTrigger>
            <TabsTrigger value="essay">Essay</TabsTrigger>
            <TabsTrigger value="game">Games</TabsTrigger>
            <TabsTrigger value="result">Results</TabsTrigger>
        </TabsList>
        <TabsContent value="questions">
            <QuestionsTabContent questions={lesson.questions} tutor={tutor} user={user} />
        </TabsContent>
        <TabsContent value="polls"><PollsWindow /></TabsContent>
        <TabsContent value="essay">No Content Yet.</TabsContent>
        <TabsContent value="game">No Content Yet</TabsContent>
        <TabsContent value="result">No Content Yet.</TabsContent>
    </Tabs>
}


function QuestionsTabContent({ questions, tutor, user }: { questions: any[], tutor: any, user: any }) {
    const [page, setPage] = useState(0);

    if (!questions || questions.length === 0 || !tutor) {
        return <div>No questions available.</div>;
    }
    const totalQuestions = questions?.length || 0;
    const currentQuestion = questions?.[page];
    console.log(currentQuestion, "currentQuestion")
    const messages = [
        {
            id: 1,
            name: tutor.tutor_name,
            type: "tutor",
            message: currentQuestion.question,
            img_url: tutor.tutor_image
        }
    ]

    return (
        <div className="flex flex-col gap-8 p-2 ">
            < div className="flex justify-between mt-4" >
                {page === 0 ? <div className="w-[84px]">&nbsp;</div> : <YellowButton
                    onClick={() => setPage(prev => Math.max(0, prev - 1))}
                >
                    <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>

                </YellowButton>
                }
                <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}>  Questions: {page + 1} / {totalQuestions}</h3 >
                {
                    page === totalQuestions - 1 ? <div className="w-[84px]">&nbsp;</div> : <YellowButton
                        onClick={() => setPage(prev => Math.min(totalQuestions - 1, prev + 1))}
                    >
                        <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>

                    </YellowButton>
                }
            </div >
            <div className="flex flex-col gap-4 mt-4">
                {messages.map((message, index) => {
                    return <div className="text-white w-full flex cursor-pointer justify-between items-center" key={index}>
                        <div className="flex items-center gap-2">
                            <Image src={message.img_url} alt={message.name} width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-yellow-500">{message.name}</div>
                                <div>{message.message}</div>
                            </div>
                        </div>
                        <div className="">
                            <svg
                                className="w-10 h-10 text-yellow-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                                    clipRule="evenodd"
                                />
                                <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
                            </svg>
                        </div>
                    </div>
                })}
            </div>
        </div >
    );
}

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
                id: 1,
                lesson_name: "Introduction to Ancient Civilizations",
                completed: true,
                lesson_order: 1,
                video_url: "https://www.youtube.com/embed/0EOLxc1o0NY",
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_1.png",
                questions: [
                    {
                        id: 1,
                        question: "What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    },
                    {
                        id: 2,
                        question: "What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    },
                    {
                        id: 3,
                        question: "What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    }
                ]
            },
            {
                id: 2,
                lesson_name: "Introduction to Ancient Civilizations",
                lesson_order: 2,
                completed: false,
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_2.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
            },
            {
                id: 3,
                lesson_name: "Introduction to Ancient Civilizations",
                lesson_order: 3,
                completed: false,
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_3.png"
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
                id: 1,
                lesson_name: "Introduction to Ancient Civilizations",
                completed: true,
                lesson_order: 1,
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_1.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
                questions: [
                    {
                        id: 1,
                        question: "What is the capital of the world? What is the capital of the world?What is the capital of the world? What is the capital of the world? What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    },
                    {
                        id: 2,
                        question: "What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    },
                    {
                        id: 3,
                        question: "What is the capital of the world?",
                        answer: "The capital of the world is the city of London.",
                    }
                ]
            },
            {
                id: 2,
                lesson_name: "Introduction to Ancient Civilizations",
                lesson_order: 2,
                completed: false,
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_2.png"
            },
            {
                id: 3,
                lesson_name: "Introduction to Ancient Civilizations",
                lesson_order: 3,
                completed: false,
                lesson_description: "An overview of ancient civilizations. This lesson introduces students to the major ancient cultures, including Mesopotamia, Egypt, Greece, and Rome. It covers their geographical locations, key historical events, and significant contributions to human history. Students will learn about the development of writing, law, and governance in these societies. The lesson also highlights the importance of trade and cultural exchange. By the end of this lesson, students will have a foundational understanding of ancient civilizations and their impact on the world.",
                lesson_img_url: "/images/event_3.png"
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
                id: 3,
                lesson_name: "Introduction to the Industrial Revolution",
                lesson_order: 1,
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 4,
                lesson_name: "Introduction to World War I and II",
                lesson_order: 1,
                lesson_description: "An overview of World War I and II. This lesson introduces students to the major causes and events of the two world wars. It covers the alliances, military strategies, and key battles that defined the conflicts. Students will learn about the impact of the wars on different regions and populations. The lesson also discusses the aftermath of the wars, including the formation of the United Nations and the beginning of the Cold War. By the end of this lesson, students will have a foundational understanding of World War I and II and their significance.",
                lesson_img_url: "/images/lesson_4.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 5,
                lesson_name: "Introduction to the Cold War",
                lesson_order: 1,
                lesson_description: "An overview of the Cold War. This lesson introduces students to the major events and figures of the Cold War. It covers the ideological differences between the United States and the Soviet Union and the resulting political and military tensions. Students will learn about the impact of the Cold War on different regions and the role of nuclear arms in the conflict. The lesson also discusses the end of the Cold War and its lasting effects on global politics. By the end of this lesson, students will have a foundational understanding of the Cold War and its significance.",
                lesson_img_url: "/images/lesson_5.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 6,
                lesson_name: "Introduction to the German Revolution",
                lesson_order: 1,
                lesson_description: "An overview of the German Revolution. This lesson introduces students to the major causes and events of the revolution. It covers the political and social changes that occurred during the revolution and the impact on German society. Students will learn about the key figures and movements involved in the revolution. The lesson also discusses the aftermath of the revolution and its role in shaping modern Germany. By the end of this lesson, students will have a foundational understanding of the German Revolution and its significance.",
                lesson_img_url: "/images/lesson_6.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 7,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_7.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 8,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_8.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 9,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_9.png",
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
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
                id: 10,
                lesson_name: "Introduction to the Renaissance",
                lesson_order: 1,
                video_url: "https://www.youtube.com/embed/jVjZ3bHQuhA",
                lesson_description: "An overview of the Renaissance. This lesson introduces students to the major artistic, scientific, and cultural achievements of the Renaissance period. It covers the social and political context of the Renaissance and its impact on European society. Students will learn about key figures such as Leonardo da Vinci, Michelangelo, and Galileo. The lesson also discusses the development of humanism and its influence on art and literature. By the end of this lesson, students will have a foundational understanding of the Renaissance and its significance.",
                lesson_img_url: "/images/lesson_10.png"
            }
        ]
    },
];


