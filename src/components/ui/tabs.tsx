"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex w-full pb-2 h-10 items-center py-1 text-muted-foreground",
      "shadow-[0_9px_14px_-7px_rgba(255,215,0,0.6)]", // Adjusted for bottom-only glow
      className
    )}
    {...props}
  />
))
// 0 9px 14px -7px rgba(255,215,0,0.6)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-t-sm px-5 py-1.5 text-sm font-medium disabled:pointer-events-none",
      "data-[state=active]:bg-background data-[state=active]:text-foreground",
      "data-[state=active]:shadow-[0_-12px_27px_-12px_rgba(255,215,0,0.6),0px_0_0px_0px_rgba(255,215,0,0.6),0px_-1px_2px_0px_rgba(255,215,0,0.6)]", // Updated glowing effect
      className
    )}
    {...props}
  />
))
// data-[state=active]:border-yellow-500 data-[state=active]:border-2 data-[state=active]:border-b-0
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2  h-full text-white bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex-grow",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
