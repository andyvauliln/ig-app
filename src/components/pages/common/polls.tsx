
"use client"
import { useState } from "react";
import { Bebas_Neue } from "next/font/google"
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GradientInput, GradientTextArea } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { YellowButton } from "@/components/ui/button";
import SoundControl from "@/components/pages/create-lessons-page/audio-box"
import { GenerateContextWindow } from "@/components/pages/common/generate-context-window"

export function PollsWindow({ showEdit = false }: { showEdit?: boolean }) {
    const [selectedValue, setSelectedValue] = useState("people_was_hungry");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioGroup value={selectedValue} onValueChange={handleChange} className="flex flex-col space-y-2 w-1/2 p-3">
            <div className="flex justify-between items-center space-x-2 w-full">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="no_one_wanted_pay_money" id="no_one_wanted_pay_money" />
                    <Label htmlFor="no_one_wanted_pay_money">No One Wanted Pay Money</Label>
                </div>
                {showEdit && (
                    <div className="flex items-center justify-center">
                        <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                        <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center space-x-2 w-full cursor-pointer">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="people_was_angry" id="people_was_angry" />
                    <Label htmlFor="people_was_angry">People was angry</Label>
                </div>
                {showEdit && (
                    <div className="flex items-center justify-center">
                        <RefreshIcon className="w-6 h-6 hover:text-yellow-5000" />
                        <DeleteIcon className="w-6 h-6 hover:text-yellow-5000" />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center space-x-2 w-full cursor-pointer">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="people_was_hungry" id="people_was_hungry" />
                    <Label htmlFor="people_was_hungry">People was hungry</Label>
                </div>
                {showEdit && (
                    <div className="flex items-center justify-center">
                        <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                        <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center space-x-2 w-full cursor-pointer">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="none_of_this" id="none_of_this" />
                    <Label htmlFor="none_of_this">None of this</Label>
                </div>
                {showEdit && (
                    <div className="flex items-center justify-center">
                        <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                        <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                    </div>
                )}
            </div>
        </RadioGroup >
    );
}

function DeleteIcon(props: any) {
    return (
        <div className="">
            <svg  {...props}
                className={`${props.className} hover:scale-125 hover:text-yellow-300 w-10 h-10 cursor-pointer`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
        </div>

    )
}
function RefreshIcon(props: any) {
    return (
        <div className="">
            <svg {...props} className={`${props.className} hover:scale-125 hover:text-yellow-300 w-10 h-10 cursor-pointer`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
            </svg>

        </div>

    )
}