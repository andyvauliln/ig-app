"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Comments } from "@/components/pages/common/comments-section"

export const RequestContentGrid = ({ cards }: { cards: any[] }) => {
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
                                ? "overflow-hidden mb-4  yellow-card-bg rounded-lg cursor-pointer absolute inset-0  w-full md:w-2/3 p-10 mx-auto z-50 flex flex-col"
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
                <div className="">{selected?.footer_open}</div>
                <Comments />
                {/* </motion.div> */}
            </div>
        </>
    );
};
