'use client'
import { YellowButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Comments } from "@/components/pages/common/comments-section";
import { cn } from "@/lib/utils";

const badgeCoolors = ["bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500", "bg-orange-500", "bg-lime-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500", "bg-orange-500", "bg-lime-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500"]
const SelectedCard = ({ card }: { card: any }) => {
    return (
        <>
            <div className="w-full flex flex-col justify-start rounded-lg shadow-2xl mb-4 relative z-[60] ">
                <div className="min-h-[500px] w-full flex flex-col rounded-xl bg-black cursor-pointer relative ">
                    <div className="relative w-full h-full">
                        <Image
                            src={card.img_url}
                            layout="fill"
                            objectFit="cover"
                            className={cn(
                                "object-top inset-0 h-full w-full transition duration-200"
                            )}
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="mt-4 z-20 flex flex-col">
                    <div className="space-x-2 pt-2">
                        <Badge key={-1} className="bg-yellow-500 text-white">#{card?.category}</Badge>
                        {card.hash_tags.map((tag: string, index: number) => (
                            <Badge className={cn("bg-yellow-500 text-white", badgeCoolors[index])} key={index}>{tag}</Badge>
                        ))}
                        <Badge className={cn("text-white", badgeCoolors[4])} key={4}>#{card?.type}</Badge>
                        <Badge className={cn("text-white", badgeCoolors[5])} key={5}>#{card?.country}</Badge>
                        <Badge className={cn("text-white", badgeCoolors[6])} key={6}>{card?.period}y</Badge>
                        <Badge className={cn("text-white", badgeCoolors[7])} key={7}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4.5C7.305 4.5 3.135 7.305 1.5 12c1.635 4.695 5.805 7.5 10.5 7.5s8.865-2.805 10.5-7.5c-1.635-4.695-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z" />
                            </svg>
                            {card?.views}
                        </Badge>

                    </div>
                    <div className="font-sans text-2xl font-bold text-white mb-2 mt-4">
                        {card?.title}
                    </div>
                    <div className="font-sans font-normal text-neutral-6000 dark:text-neutral-300">
                        {card?.long_description}
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex space-x-2">
                            <div className="text-yellow-500">Authors:</div>
                            {card?.authors.map((author: any, index: number) => (
                                <div className={cn("text-[#a972cb]")} key={index}>@{author.name}</div>
                            ))}
                        </div>
                        <div className="text-yellow-500">
                            {card?.create_date}
                        </div>
                    </div>
                    <div className="flex justify-end mt-4 space-x-2">

                        <YellowButton onClick={() => { }}>
                            <div className="flex space-x-2 text-white hover:text-yellow-500">
                                <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
                                </svg>
                                Save To Watch Later
                            </div>
                        </YellowButton>
                        <YellowButton onClick={() => { }}>
                            <div className="flex space-x-2 text-white hover:text-yellow-500">
                                <svg className="w-5 h-5 mr-2  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                </svg>
                                {card?.likes}
                            </div>
                        </YellowButton>
                        {card.price ? <YellowButton onClick={() => { window.location.href = `/learn/${card.id}` }}>
                            <div className="flex space-x-2 text-white hover:text-yellow-500">
                                Buy for {card.price} ICP
                                <svg className="w-5 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </YellowButton> :
                            <YellowButton onClick={() => { window.location.href = `/learn/${card.id}` }}>
                                <div className="flex space-x-2 text-white hover:text-yellow-500">
                                    {`Go To ${card.type}`}
                                    <svg className="w-5 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </YellowButton>}
                    </div>
                </div>
                <Comments />
            </div>
        </>
    );
};

export default SelectedCard;

