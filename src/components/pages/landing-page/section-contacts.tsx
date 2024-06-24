"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { contactConfig } from "@/config/site"
import { SparklesPreview } from "./sparkles-contact"
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

const formSchema = z.object({
    subject: z.string().min(1, {
        message: "Subject is required",
    }),
    msg: z.string().min(1, {
        message: "Message is required",
    }),
})

function ContactForm() {
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
                className="w-full space-y-4 py-8 sm:w-[24rem]"
            >
                <FormField
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
                />
                <FormField
                    control={form.control}
                    name="msg"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <GradientTextArea placeholder="Enter your message" {...field} />
                            </FormControl>
                            <FormDescription>
                                Your message will be sent through email
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div />
                <YellowButton onClick={() => setSumbited(true)}>
                    Submit
                </YellowButton>

            </form>
        </Form>
    )
}


export default function ContactSection() {
    return (
        <div className="w-full overflow-hidden">
            <div className="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div className='lg:col-span-4 mt-10 lg:mt-0 w-full rounded-xl h-full'>
                    <ContactForm />
                </div>

                <div className="lg:col-span-4 mt-3 lg:mt-0 w-full relative rounded-xl h-full">
                    <SparklesPreview />
                </div>
            </div>
        </div>
    )
}

