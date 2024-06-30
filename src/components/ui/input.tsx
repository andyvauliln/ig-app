import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


export { Input, GradientInput, GradientTextArea }

const GradientInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type = "text", ...props }, ref) => {
    return (
      <div className={cn(className, "p-[1.5px] rounded-md bg-gradient-to-r from-yellow-700 via-gray-900 to-yellow-500", className)}>
        <input placeholder={placeholder} {...props} ref={ref} className="px-3 py-2 w-full flex h-10 text-sm  ring-offset-background rounded-md bg-background text-muted-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type={type} />
      </div >
    )
  }
)
GradientInput.displayName = "GradientInput"

const GradientTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <div className={cn("my-4 p-[1.5px] w-full h-40 rounded-md bg-gradient-to-r from-yellow-500 via-yellow-700 to-yellow-500", className)}>
        <textarea
          className={cn("px-3 py-2 w-full flex h-full  text-sm ring-offset-background rounded-md bg-background text-muted-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", className)}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
GradientTextArea.displayName = "GradientTextArea"