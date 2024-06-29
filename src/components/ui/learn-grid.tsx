"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Comments } from "@/components/pages/common/comments-section"


export const LearnGrid = ({ cards, SelectedCard, ContentCard }: { cards: any[], SelectedCard: React.FC<{ card: any }>, ContentCard: React.FC<{ card: any }> }) => {
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
        <div className="max-w-7xl mx-auto grid md:auto-rows-[26rem] cursor-pointer p-4  grid-cols-1 md:grid-cols-3 gap-4 relative">
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
                            <SelectedCard card={selected} />
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






