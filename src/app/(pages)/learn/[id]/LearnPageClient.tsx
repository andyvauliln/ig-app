"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 } from "lucide-react"
import { useParams } from 'next/navigation';
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
import { items, generateStaticParams } from "./params";


export { generateStaticParams };
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



export default function Page() {
    const [openDetails, setOpenDetails] = useState(false)
    const params = useParams();
    const { id } = params;
    const course = items.find(item => item.id === parseInt(id as string)) as Course | undefined

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

