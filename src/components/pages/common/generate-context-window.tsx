import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useState } from "react"
import { YellowButton } from "@/components/ui/button"
import { GradientTextArea } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function GenerateContextWindow({ callBack, className, children, type, placeholder = "Enter your prompt", }: { callBack: () => void, placeholder?: string, className: string, children: React.ReactNode, type: "video" | "audio" | "text" | "question" }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ContextMenu>
            <ContextMenuTrigger leftClick={true} className={`${cn(className, "")}`}>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-[600px]">
                <GradientTextArea className="w-full" placeholder={placeholder} />
                <div className="flex justify-end space-x-2">
                    {type === "video" && (
                        <>
                            <YellowButton onClick={() => { /* Generate Video Logic */ }}>Attach Image</YellowButton>
                            <YellowButton onClick={() => { /* Generate Video Logic */ }}>Attach Scenet Text</YellowButton>
                            <YellowButton onClick={() => { /* Generate Audio Logic */ }}>Generate</YellowButton>
                        </>
                    )}
                    {type === "text" && (
                        <>
                            <YellowButton onClick={() => { /* Generate Text Logic */ }}>Generate Scene</YellowButton>
                            <YellowButton onClick={() => { /* Generate Text Logic */ }}>Attach Knowledge</YellowButton>
                        </>
                    )}
                    {type === "audio" && (
                        <YellowButton onClick={() => { /* Generate Voice Logic */ }}>Generate Audio</YellowButton>
                    )}
                    {type === "question" && (
                        <YellowButton onClick={() => { /* Generate Voice Logic */ }}>Generate Question</YellowButton>
                    )}
                </div>
            </ContextMenuContent>
        </ContextMenu>
    )
}
