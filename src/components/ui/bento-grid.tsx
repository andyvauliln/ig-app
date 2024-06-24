"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { contactConfig } from "@/config/site"
import { YellowButton } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { GradientInput, GradientTextArea } from "@/components/ui/input"

export const LayoutGrid = ({ cards }: { cards: any[] }) => {
    const [selected, setSelected] = useState<any | null>(null);
    const [lastSelected, setLastSelected] = useState<any | null>(null);

    const handleClick = (card: any) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="max-w-7xl mx-auto grid md:auto-rows-[26rem] p-4  grid-cols-1 md:grid-cols-3 gap-4 relative">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative  p-4 bg-black border-white/[0.2] border ",
                            selected?.id === card.id
                                ? "overflow-hidden  yellow-card-bg rounded-lg cursor-pointer absolute inset-0  w-full md:w-2/3 p-10 m-auto z-50 flex flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 purple-card-bg rounded-xl h-full w-full"
                                    : "rounded-xl purple-card-bg h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id ? (
                            <SelectedCard selected={selected} />
                        ) : (
                            <ContentCard card={card} />
                        )}
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const ContentCard = ({ card }: { card: any }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        // <div className="relative flex flex-1 w-full h-full min-h-[16rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        // <div className="">
        // purple-card-bg row-span-1 rounded-xl group/bento hover:border transition duration-200 border-white/[0.2] border-1 p-4 bg-black justify-between flex flex-col space-y-4"
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
            </div>
            <div className="min-h-[16rem] z-20">
                {/* {card?.icon} */}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mt-2">
                    {card?.title}
                </div>
                <div className="text-yellow-500 text-sm opacity-85">{card?.date}</div>
                <div className="font-sans font-normal text-neutral-6000 text-xs dark:text-neutral-300">
                    {card?.description}
                </div>
                <div className="">{card?.footer}</div>
            </div>
        </>
        // </div>
    );
};
const SelectedCard = ({ selected }: { selected: any }) => {
    return (
        <>
            <div className="w-full flex flex-col justify-start rounded-lg shadow-2xl mb-4 relative z-[60] ">
                <div className="min-h-[500px] w-full flex flex-col rounded-xl bg-black cursor-pointer relative ">
                    <div className="relative w-full h-full">
                        <Image
                            src={selected.img_url}
                            layout="fill"
                            objectFit="cover"
                            className={cn(
                                "object-top inset-0 h-full w-full transition duration-200"
                            )}
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="mt-4 z-20">
                    {/* {card?.icon} */}
                    <div className="font-sans text-2xl font-bold text-neutral-600 dark:text-neutral-200 mt-2">
                        {selected?.title}
                    </div>
                    <div className="text-yellow-500 text-sm opacity-85">{selected?.date}</div>
                    {/* <div className="font-sans font-normal text-neutral-6000  dark:text-neutral-300">
                        {selected?.description}
                    </div> */}

                </div>
                <div className="flex-grow mt-4">
                    {selected?.content}
                </div>
                <div className="">{selected?.footer}</div>
                <Comments />
                {/* </motion.div> */}
            </div>
        </>
    );
};
function Comments() {
    return (
        <section className="w-full rounded-lg justify-center items-center flex-col mt-32 mx-auto max-w-xl">
            <h3 className="font-os text-lg text-yellow-500 font-bold">Comments</h3>

            <div className="flex mt-4">
                <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
                        alt="" />
                </div>

                <div className="ml-3">
                    <div className="font-medium" style={{ "color": "#a972cb" }}>John Doe</div>
                    <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
                    <div className="mt-2 text-white ">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </div>
                </div>

            </div>

            <div className="flex mt-4">
                <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/43.jpg"
                        alt="" />
                </div>
                <div className="ml-3">
                    <div className="font-medium" style={{ "color": "#a972cb" }}>Jane Smith</div>
                    <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
                    <div className="mt-2 text-white">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                        accumsan tellus.
                    </div>
                </div>
            </div>

            {/* <div className="flex mt-4">
                <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
                        alt="" />
                </div>

                <div className="ml-3">
                    <div className="font-medium" style={{ "color": "#a972cb" }}>John Doe</div>
                    <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
                    <div className="mt-2 text-white ">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </div>
                </div>

            </div>

            <div className="flex mt-4">
                <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/43.jpg"
                        alt="" />
                </div>
                <div className="ml-3">
                    <div className="font-medium" style={{ "color": "#a972cb" }}>Jane Smith</div>
                    <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
                    <div className="mt-2 text-white">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                        accumsan tellus.
                    </div>
                </div>
            </div> */}


            <CommentForm />
        </section>
    )
}

const formSchema = z.object({
    subject: z.string().min(1, {
        message: "Subject is required",
    }),
    msg: z.string().min(1, {
        message: "Message is required",
    }),
})
function CommentForm() {
    const [submitted, setSumbited] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            msg: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        window.location.href = `mailto:${contactConfig.email}?subject=${values.subject}&body=${values.msg}`
        form.reset()
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex justify-center items-center flex-col"
            >
                {/* <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <GradientInput placeholder="Enter the subject" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <FormField
                    control={form.control}
                    name="msg"
                    render={({ field }) => (
                        <FormItem className="w-full mb-4">
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <GradientTextArea className="w-full" placeholder="Enter your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-end">
                    <YellowButton onClick={() => setSumbited(true)}>
                        Post Comment
                    </YellowButton>
                </div>
            </form>
        </Form>
    )
}

// type Card = {
//     id: number;
//     content: JSX.Element | React.ReactNode | string;
//     className: string;
//     thumbnail: string;
// };

// export const LayoutGrid = ({ cards }: { cards: any[] }) => {
//     const [selected, setSelected] = useState<Card | null>(null);
//     const [lastSelected, setLastSelected] = useState<Card | null>(null);

//     const handleClick = (card: Card) => {
//         setLastSelected(selected);
//         setSelected(card);
//     };

//     const handleOutsideClick = () => {
//         setLastSelected(selected);
//         setSelected(null);
//     };

//     return (
//         <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
//             {cards.map((card, i) => (
//                 // <div key={i} className={cn(card.className, "")}>
//                 <motion.div
//                     onClick={() => handleClick(card)}
//                     className={cn(
//                         card.className,
//                         "relative overflow-hidden",
//                         selected?.id === card.id
//                             ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
//                             : lastSelected?.id === card.id
//                                 ? "z-40 bg-white rounded-xl h-full w-full"
//                                 : "bg-white rounded-xl h-full w-full"
//                     )}
//                     layout
//                 >
//                     {selected?.id === card.id && <SelectedCard selected={selected} />}
//                     <ContentCard card={card} className={card.className} />
//                 </motion.div>
//                 // </div>
//             ))}
//             <motion.div
//                 onClick={handleOutsideClick}
//                 className={cn(
//                     "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
//                     selected?.id ? "pointer-events-auto" : "pointer-events-none"
//                 )}
//                 animate={{ opacity: selected?.id ? 0.3 : 0 }}
//             />
//         </div>
//     );
// };

// {/* <Image
// src={card.thumbnail}
// height="500"
// width="500"
// onLoad={() => setLoaded(true)}
// className={cn(
//   "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
//   loaded ? "blur-none" : "blur-md"
// )}
// alt="thumbnail"
// /> */}
// const ContentCard = ({ card, className }: { card: any, className: string }) => {
//     const [loaded, setLoaded] = useState(false);
//     return (
//         <div
//             className={cn(
//                 "purple-card-bg row-span-1 rounded-xl group/bento hover:border transition duration-200 border-white/[0.2] border-1 p-4 bg-black justify-between flex flex-col space-y-4",
//                 className
//             )}
//         >
//             {/* {card?.header} */}
//             {/* <div className="relative flex flex-1 w-full h-full min-h-[16rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
//                 <Image src={card.img_url} alt={card.title} layout="fill" objectFit="cover" className="rounded-xl" />
//             </div> */}
//             <Image
//                 src={card.img_url}
//                 height="500"
//                 width="500"
//                 onLoad={() => setLoaded(true)}
//                 className={cn(
//                     "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
//                     loaded ? "blur-none" : "blur-md"
//                 )}
//                 alt="thumbnail"
//             />
//             {/* <div className="">
//                 {card?.icon}
//                 <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mt-2">
//                     {card?.title}
//                 </div>
//                 <div className="text-yellow-500 text-sm opacity-85">{card?.date}</div>
//                 <div className="font-sans font-normal text-neutral-6000 text-xs dark:text-neutral-300">
//                     {card?.description}
//                 </div>
//                 <div className="">{card?.footer}</div>
//             </div> */}
//         </div>
//     );
// };

// const SelectedCard = ({ selected }: { selected: Card | null }) => {
//     return (
//         <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//             <motion.div
//                 initial={{
//                     opacity: 0,
//                 }}
//                 animate={{
//                     opacity: 0.6,
//                 }}
//                 className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
//             />
//             <motion.div
//                 initial={{
//                     opacity: 0,
//                     y: 100,
//                 }}
//                 animate={{
//                     opacity: 1,
//                     y: 0,
//                 }}
//                 transition={{
//                     duration: 0.3,
//                     ease: "easeInOut",
//                 }}
//                 className="relative px-8 pb-4 z-[70]"
//             >
//                 {selected?.content}
//             </motion.div>
//         </div>
//     );
// };


