
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


export default function CreateContentLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [openDetails, setOpenDetails] = useState(false)
    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        {children}
                    </div>

                    <Card
                        className="overflow-hidden border-2 border-yellow-500 bg-black" x-chunk="dashboard-05-chunk-4"
                    >
                        <CardContent className="p-6 text-sm bg-black">
                            <div className="grid gap-3">
                                <PagesList />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const pages = [{ title: "Create New Content", path: "/create-content" }, { title: "My Curses", path: "/create-content/my-curses" }, { title: "My Lessons", path: "/create-content/my-lessons" }, { title: "My Tutors", path: "/create-content/my-tutors" }, { title: "Messages", path: "/create-content/messages" }]
function PagesList() {
    return (
        <ul className="grid gap-3 mt-2">
            {pages.map((page, index) => {

                return (
                    <li
                        key={index}
                        onClick={() => {
                            window.location.href = page.path
                        }}
                        className={`yellow-card-hover font-bold rounded-md flex justify-between cursor-pointer p-4 ${page.path === window.location.pathname ? 'yellow-card-active' : ''
                            }`}
                    >
                        <div className="flex flex-col justify-center">
                            <span className="text-white">{page.title}</span>
                        </div>
                        <svg className="w-5 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                        </svg>
                    </li>
                )
            })}
        </ul>
    );
};
