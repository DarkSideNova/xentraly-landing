import { cn } from "@/app/utils/cn"
import * as React from "react"

export const DefaultCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "h-full relative rounded-lg border bg-white text-slate-950 shadow-sm overflow-hidden",
            "hover:bg-50 hover:border-secondary transition duration-200 ease-in-out cursor-pointer",
            className
        )}
        {...props}
    />
))
DefaultCard.displayName = "DefaultCard"

const Header = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-3 p-6", className)}
        {...props}
    />
))
Header.displayName = "Header"

const Icon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "size-[3rem] flex flex-col justify-center items-center rounded-lg overflow-hidden",
            className
        )}
        {...props}
    />
))
Icon.displayName = "Icon"

const Tag = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        className={cn(
            "size-fit flex justify-center items-center gap-2 rounded-full overflow-hidden absolute top-1 right-3 text-xs font-semibold px-3 py-1",
            className
        )}
        {...props}
    />
))
Tag.displayName = "Tag"

const Title = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-lg font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
Title.displayName = "Title"

const Description = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-slate-700", className)}
        {...props}
    />
))
Description.displayName = "Description"

const Content = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
Content.displayName = "Content"

const Footer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
Footer.displayName = "Footer"

const Card = {
    Header,
    Footer,
    Title,
    Description,
    Content,
    Icon,
    Tag
}

export default Card;


