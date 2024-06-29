"use client"
import React, { useState, useRef, useEffect } from "react";
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

const commentsData = [
    {
        user_id: "1",
        user_name: "Joh Rogan",
        img_url: "https://randomuser.me/api/portraits/men/43.jpg",
        date: "2023-10-02 14:30",
        comment: "This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        user_id: "2",
        user_name: "Jane Smith",
        img_url: "https://randomuser.me/api/portraits/women/43.jpg",
        date: "2023-10-02 14:30",
        comment: "This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]

interface Comment {
    user_id: string;
    user_name: string;
    img_url: string;
    date: string;
    comment: string;
}

interface CommentsProps {
    comments?: Comment[];
    className?: string;
}

export function Comments({ comments = commentsData, className }: CommentsProps) {
    const [commentList, setCommentList] = useState<Comment[]>(comments);

    const addComment = (newComment: Comment) => {
        setCommentList([...commentList, newComment]);
    };

    return (
        <section className="w-full rounded-lg flex-col mt-10">
            <h3 className="font-os text-lg text-yellow-500 font-bold">Comments</h3>

            {commentList.map((comment) => (
                <CommentItem key={comment.user_id} comment={comment} />
            ))}
            <CommentForm addComment={addComment} />
        </section>
    )
}

function CommentItem({ comment }: { comment: Comment }) {
    return (
        <div className="flex mt-4" key={comment.user_id}>
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex-shrink-0 flex items-center justify-center">
                <img className="h-12 w-12 rounded-full object-cover" src={comment.img_url} alt={comment.user_name} />
            </div>

            <div className="ml-3">
                <a href={`/user/${comment.user_id}`}>
                    <div className="font-medium" style={{ "color": "#a972cb" }}>@{comment.user_name}</div>
                </a>
                <div className="text-gray-600">Posted on {comment.date}</div>
                <div className="mt-2 text-white">{comment.comment}</div>
            </div>
        </div>
    )
}

const formSchema = z.object({
    user_name: z.string().min(1, {
        message: "Name is required",
    }),
    comment: z.string().min(1, {
        message: "Comment is required",
    }),
})
function CommentForm({ addComment }: { addComment: (comment: Comment) => void }) {
    const [user, setUser] = useState<any>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            user_name: "",
            comment: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const newComment: Comment = {
            user_id: (Math.random() * 1000).toString(),
            user_name: values.user_name,
            img_url: "https://randomuser.me/api/portraits/lego/1.jpg", // Placeholder image
            date: new Date().toISOString(),
            comment: values.comment,
        };
        addComment(newComment);
        form.reset();
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex justify-center items-center flex-col"
            >
                {user === null && <FormField
                    control={form.control}
                    name="user_name"
                    render={({ field }) => (
                        <FormItem className="w-full mb-4">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <GradientInput className="w-full" placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />}
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className="w-full mb-4">
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <GradientTextArea className="w-full" placeholder="Enter your comment" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-end">
                    <YellowButton onClick={() => { }}>
                        Post Comment
                    </YellowButton>
                </div>
            </form>
        </Form>
    )
}