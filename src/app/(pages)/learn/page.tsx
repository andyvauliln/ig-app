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
import { items } from "./data"

export default function LearnPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedPeriod, setSelectedPeriod] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredItems = items.filter(item => {
        return (
            (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.short_description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCountry === "all" || item.country === selectedCountry) &&
            (selectedCategory === "all" || item.category === selectedCategory) &&
            (selectedPeriod === "all" || item.period === selectedPeriod) &&
            (filterStatus === "all" ||
                (filterStatus === "completed" && item.completed) ||
                (filterStatus === "to_watch" && item.to_watch) ||
                (filterStatus === "in_process" && item.in_process))
        );
    });

    return (
        <div className="flex justify-between min-h-screen w-full flex-col overflow-y-hidden">
            <div className="px-4">
                <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl mb-2`}> Learn</h3 >
                <div className="flex w-full justify-between mb-6">
                    <GradientInput
                        placeholder="Search by title, author, hashtag, or description"
                        className="w-[50%]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="space-x-2">
                        <YellowButton onClick={() => setFilterStatus("all")}>
                            All
                        </YellowButton>
                        <YellowButton onClick={() => setFilterStatus("completed")}>
                            Completed
                        </YellowButton>
                        <YellowButton onClick={() => setFilterStatus("to_watch")}>
                            To Watch
                        </YellowButton>
                        <YellowButton onClick={() => setFilterStatus("in_process")}>
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
                            <SelectCountry selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                            <SelectCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                            <SelectPeriod selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
                            <GradientInput placeholder="Price < Amount" className="min-w-[250px]" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <LearnGrid cards={filteredItems} SelectedCard={SelectedCard} ContentCard={ContentCard} />
        </div>
    );
}


function SelectCountry({ selectedCountry, setSelectedCountry }: { selectedCountry: string, setSelectedCountry: (value: string) => void }) {
    return (
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="">
                <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Country</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
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

function SelectPeriod({ selectedPeriod, setSelectedPeriod }: { selectedPeriod: string, setSelectedPeriod: (value: string) => void }) {
    return (
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="">
                <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Period</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
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

function SelectCategory({ selectedCategory, setSelectedCategory }: { selectedCategory: string, setSelectedCategory: (value: string) => void }) {
    return (
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Category</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
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


