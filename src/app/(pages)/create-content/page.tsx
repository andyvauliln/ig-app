
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

export default function Page({ params }: { params: { id: string } }) {
    const [openDetails, setOpenDetails] = useState(false)
    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> {"Create New Content"}</h3 >
            </div>
            <CreateContentTabs />
        </div>
    )
}

function CreateContentTabs() {
    const user = {
        name: "John Wiek",
        img_url: "/images/dalay_lama.png"
    }
    return <Tabs defaultValue="configuration" className="w-ful h-full min-h-40">
        <TabsList>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="tutor">AI Tutor</TabsTrigger>
            <TabsTrigger value="upload_content">Upload Content</TabsTrigger>
            <TabsTrigger value="generate_content">Generate Content</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
        </TabsList>
        <TabsContent value="configuration">
            <ConfigurationTab />
        </TabsContent>
        <TabsContent value="upload_content">
            <UploadContentTab />
        </TabsContent>
        <TabsContent value="generate_content">
            <GenerateContent />
        </TabsContent>
        <TabsContent value="tutor">
            <TutorTab />
        </TabsContent>
        <TabsContent value="tests">
            <TestsTab />
        </TabsContent>
    </Tabs>
}

function TestsTab() {
    const [scenes, setScenes] = useState([{ title: "Scene 1", question: "What was the main reason of conflict?" }])
    const [showPolls, setShowPolls] = useState(false)

    return <div className="mt-2">
        {scenes.map((scene, index) => {
            return <div key={index} className="min-h-[400px] p-4">
                <div className="flex justify-between items-center">
                    <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> {"Question: " + (index + 1)}</h3 >
                </div>
                <div className="flex flex-col  pb-8">

                    <div className="flex justify-between py-8 space-x-4">
                        <div className="relative w-full">
                            <GradientTextArea key={"question"} className="w-full h-full my-0 min-h-[250px]" value={scene.question} placeholder="Question" />
                            <div className="absolute top-2 right-2 text-yellow-500">
                                <FaceUploadIcon type="question" />
                            </div>
                        </div>
                        <GradientTextArea key={"tutor_instructions"} className="w-full h-full my-0 min-h-[250px]" placeholder="Tutor Instructions" />

                    </div>
                    {showPolls && <div className="flex justify-end">
                        <PollsWindow />
                    </div>}
                    <div className="flex justify-end mt-8 space-x-2">
                        <SelectTutor />
                        <SelectScene />
                        <YellowButton onClick={() => setShowPolls(true)}>Generate Polls</YellowButton>
                        <YellowButton onClick={() => { }}>Save</YellowButton>
                    </div>
                </div>
                <div className="w-full h-10 relative flex items-center justify-center">
                    <div className="absolute inset-x-[25%] flex items-center justify-center space-x-4">
                        <YellowButton onClick={() => setScenes(scenes => [...scenes, { title: "Question 2", question: "What conclusion of this events you can make?" }])}>
                            <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                            </svg>
                        </YellowButton>
                    </div>


                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-full" />
                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 inset-x-[25%] bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/2 blur-sm" />
                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 inset-x-[25%] bg-gradient-to-r from-transparent via-yellow-600 to-transparent h-[5px] w-1/2 blur-sm" />
                </div>
            </div>
        })}

    </div>
}

function PollsWindow() {
    const [selectedValue, setSelectedValue] = useState("people_was_hungry");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <RadioGroup value={selectedValue} onValueChange={handleChange} className="flex flex-col space-y-2 w-1/2 p-3">
            <div className="flex justify-between items-center space-x-2 w-full">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="no_one_wanted_pay_money" id="no_one_wanted_pay_money" />
                    <Label htmlFor="no_one_wanted_pay_money">No One Wanted Pay Money</Label>
                </div>
                <div className="flex items-center justify-center">
                    <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                    <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                </div>
            </div>
            <div className="flex justify-between items-center space-x-2 w-full">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="people_was_angry" id="people_was_angry" />
                    <Label htmlFor="people_was_angry">People was angry</Label>
                </div>
                <div className="flex items-center justify-center">
                    <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                    <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                </div>
            </div>
            <div className="flex justify-between items-center space-x-2 w-full">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="people_was_hungry" id="people_was_hungry" />
                    <Label htmlFor="people_was_hungry">People was hungry</Label>
                </div>
                <div className="flex items-center justify-center">
                    <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                    <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                </div>
            </div>
            <div className="flex justify-between items-center space-x-2 w-full">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="none_of_this" id="none_of_this" />
                    <Label htmlFor="none_of_this">None of this</Label>
                </div>
                <div className="flex items-center justify-center">
                    <RefreshIcon className="w-6 h-6 hover:text-yellow-500" />
                    <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                </div>
            </div>
        </RadioGroup>
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
function GenerateContent() {
    const [scenes, setScenes] = useState([{ title: "Scene 1", description: "Description 1" }])
    return <div className="mt-2">
        {scenes.map((scene, index) => {
            return <div key={index} className="min-h-[400px] p-4">
                <div className="flex justify-between items-center">
                    <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> {"Scene: " + (index + 1)}</h3 >
                    <YellowButton onClick={() => { }}>
                        <div className="flex space-x-2 text-white hover:text-yellow-500">

                            Play All Scenes
                            <PlayIcon className="w-5 h-5 ml-2" />
                        </div>
                    </YellowButton>
                </div>
                <div className="flex flex-col  pb-8">

                    <div className="flex justify-between py-8 space-x-4">
                        <div className="flex flex-col w-1/3 space-y-2">
                            <div className="flex min-h-[250px] rounded-sm bg-background text-yellow-500/75 border border-yellow-500 justify-center items-center cursor-pointer relative group">
                                <span className="group-hover:opacity-0">Upload or Generate Video</span>
                                <div className="absolute inset-0 space-x-4 flex justify-center items-center opacity-0 group-hover:opacity-100">
                                    <PlayIcon />
                                    <DownloadIcon />
                                    <FaceUploadIcon type="video" />
                                </div>
                            </div>
                        </div>
                        <div className="flex relative flex-col w-2/3 space-y-2">
                            <GradientTextArea className="h-full my-0 min-h-[250px]" placeholder="Scene Text (You can regenerate specific text by selecting text and click generate button)  => " />
                            <div className="absolute top-0 right-2 text-yellow-500">
                                <FaceUploadIcon type="text" />
                            </div>
                        </div>
                    </div>
                    <SoundControl />
                    <div className="flex justify-end mt-8 space-x-2">
                        <SelectTutor />
                        <YellowButton onClick={() => { }}>Synchronise Video with Text</YellowButton>
                        <YellowButton onClick={() => { }}>Save</YellowButton>
                    </div>
                </div>
                <div className="w-full h-10 relative flex items-center justify-center">
                    <div className="absolute inset-x-[25%] flex items-center justify-center space-x-4">
                        <YellowButton onClick={() => setScenes(scenes => [...scenes, { title: "Scene 2", description: "Description 2" }])}>
                            <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                            </svg>
                        </YellowButton>
                        <SelectTransitionEffect />
                    </div>


                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-full" />
                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 inset-x-[25%] bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/2 blur-sm" />
                    <div className="absolute inset-y-1/2 transform -translate-y-1/2 inset-x-[25%] bg-gradient-to-r from-transparent via-yellow-600 to-transparent h-[5px] w-1/2 blur-sm" />
                </div>
            </div>
        })}

    </div>
}


function UploadContentTab() {
    return <div className="py-4 space-y-4">
        <GradientInput placeholder="Upload From Url" />
        <YellowButton onClick={() => { }}>Upload From Computer</YellowButton>
    </div>
}

function TutorTab() {
    return <div className="py-4 space-y-4">
        <GradientInput placeholder="Tutor Name" />
        <div className="flex justify-between">
            <div className="flex w-1/2 min-h-[250px] rounded-sm bg-background text-yellow-500 border border-yellow-500  justify-center items-center cursor-pointer">

                Upload Tutor Image

            </div>
            <div className="w-1/2 ml-4">
                <GradientTextArea placeholder="Tutor System Prompt" className="h-full my-0" />
            </div>
        </div>
        <div className="flex justify-between items-center w-full space-x-4">
            <YellowButton onClick={() => { }}>
                <div className="flex space-x-2 text-white hover:text-yellow-500">
                    <svg className="w-5 h-5 mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
                    </svg>
                    Attach Additional Knowledge Base
                </div>
            </YellowButton>
            <SelectLanguage />
            <div className="flex items-center w-full space-x-2">
                <SelectTutorVoice />
                <svg className="w-16 h-16 text-yellow-500 hover:scale-110 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        <div className="flex justify-end">
            <YellowButton onClick={() => { }}>Save</YellowButton>
        </div>
    </div>
}

function ConfigurationTab() {
    const [selectedOption, setSelectedOption] = useState("curse");

    return <div className="py-4 space-y-4">
        <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="flex">
            <div className="flex items-center space-x-2">
                <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="curse" id="curse" />
                <Label htmlFor="curse">Curse</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem className="border border-yellow-500 text-yellow-500" value="lesson" id="lesson" />
                <Label htmlFor="lesson">Lesson</Label>
            </div>

        </RadioGroup>
        <GradientInput placeholder="Title" />
        <GradientInput placeholder="Short Description" />
        <GradientInput placeholder="Hash Tags" />
        <div className="flex justify-between">
            <div className="flex w-1/2 min-h-[250px] rounded-sm bg-background text-yellow-500/80 border border-yellow-500  justify-center items-center cursor-pointer">

                {selectedOption === "lesson" ? "Upload Lesson Image" : "Upload Course Image"}

            </div>
            <div className="w-1/2 ml-4">
                <GradientTextArea placeholder="Long Description" className="h-full my-0" />
            </div>
        </div>
        <div className="flex justify-between space-x-4 ">
            <SelectCountry />
            <SelectPeriod />
            <SelectCategory />
        </div>
        <GradientInput placeholder="Price (ICP token)" className="w-[250px]" />

        {selectedOption == "curse" && <div className="mt-8">
            <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl mt-8`}> {"Curse Videos"}</h3 >
            <VideoList />
        </div>}
        <div className="flex justify-end">
            <YellowButton onClick={() => { }}>Save</YellowButton>
        </div>
    </div>
}

const videos = [{ title: "WW1", path: "/create-content" }, { title: "WW2", path: "/create-content" }]
function VideoList() {
    return (
        <ul className="grid gap-3 mt-2">
            {videos.map((page, index) => {

                return (
                    <li
                        key={index}
                        onClick={() => {
                            window.location.href = page.path
                        }}
                        className={`border border-yellow-500 font-bold rounded-md flex justify-between cursor-pointer p-4`}
                    >

                        <div className="flex">
                            <h3 className={`${bebasNeue.className} text-yellow-500 text-xl mr-2 lg:text-4xl`}> {index + 1}. </h3 >
                            <h3 className={`${bebasNeue.className} text-white text-xl lg:text-4xl`}>{page.title}</h3>
                        </div>
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4" />
                        </svg>

                    </li>
                )
            })}
        </ul>
    );
};

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

function SelectTutorVoice() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Select Voice" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Voices</SelectLabel>
                    <SelectItem value="male_rick">Male Rick (Eleven Labs)</SelectItem>
                    <SelectItem value="female_roza">Female Roza (Eleven Labs)</SelectItem>
                    <SelectItem value="male_jim">Male Jim (Eleven Labs)</SelectItem>
                    <SelectItem value="female_lora">Female Lora (Eleven Labs)</SelectItem>
                    <SelectItem value="male_tor">Male Tor (Eleven Labs)</SelectItem>
                    <SelectItem value="female_susan">Female Susan (Eleven Labs)</SelectItem>
                    <SelectItem value="male_dora">Male Dora (Fake It)</SelectItem>
                    <SelectItem value="female_lorisa">Female Lorisa (Fake It)</SelectItem>
                    <SelectItem value="male_terry">Male Terry (Fake It)</SelectItem>
                    <SelectItem value="female_josefina">Female Josefina (Fake It)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
function SelectScene() {
    return (
        <div className="w-[160px]">
            <Select>
                <SelectTrigger className="">
                    <SelectValue placeholder="Select Scene" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Scenes</SelectLabel>
                        <SelectItem value="scene_1">Scene 1</SelectItem>
                        <SelectItem value="scene_2">Scene 2</SelectItem>
                        <SelectItem value="scene_3">Scene 3</SelectItem>
                        <SelectItem value="scene_4">Scene 4</SelectItem>
                        <SelectItem value="scene_5">Scene 5</SelectItem>
                        <SelectItem value="scene_6">Scene 6</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

function SelectLanguage() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Languages</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="korean">Korean</SelectItem>
                    <SelectItem value="vietnamese">Vietnamese</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
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

function SelectTransitionEffect() {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Transition Effect" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Effects</SelectLabel>
                    <SelectItem value="fade">Fade</SelectItem>
                    <SelectItem value="slide">Slide</SelectItem>
                    <SelectItem value="zoom">Zoom</SelectItem>
                    <SelectItem value="morfing">Morfing</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function SelectTutor() {
    return (
        <div className="w-[160px]">
            <Select>
                <SelectTrigger className="">
                    <SelectValue placeholder="Assign Tutor" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel className="text-yellow-500 border-b mb-1 border-yellow-500">Tutors</SelectLabel>
                        <SelectItem value="fade">Dalai Lama</SelectItem>
                        <SelectItem value="slide">Bill Gates</SelectItem>
                        <SelectItem value="zoom">Elon Musk</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

function PlayIcon(props: any) {
    return (
        <svg
            {...props}
            className={`${props.className} hover:scale-125 hover:text-yellow-300 w-10 h-10`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}

function DownloadIcon(props: any) {
    return (
        <svg
            {...props}
            className="hover:scale-125 hover:text-yellow-300 w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}

function FaceUploadIcon({ type = "video", placeholder = "Enter your prompt" }: { type: "audio" | "video" | "text" | "question", placeholder?: string }) {
    return (
        <GenerateContextWindow placeholder={placeholder} type={type} callBack={() => { }} className="">
            <svg className="w-10 h-10 hover:scale-125 hover:text-yellow-300 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.815 9H16.5a2 2 0 1 0-1.03-3.707A1.87 1.87 0 0 0 15.5 5 1.992 1.992 0 0 0 12 3.69 1.992 1.992 0 0 0 8.5 5c.002.098.012.196.03.293A2 2 0 1 0 7.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 0 1-1.74 1.326 1.893 1.893 0 0 1-1.811-1.326 1.9 1.9 0 0 1-3.621 0 1.8 1.8 0 0 1-1.749 1.326 1.98 1.98 0 0 1-1.87-1.326A1.763 1.763 0 0 1 8.46 12.9a2.035 2.035 0 0 1-1.905-1.326A1.9 1.9 0 0 1 4.74 12.9 1.805 1.805 0 0 1 3 11.574V12a9 9 0 0 0 18 0l-.028-.426Z" />
            </svg>
        </GenerateContextWindow>

    )
}