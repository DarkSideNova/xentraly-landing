import { cn } from "@/app/utils/cn";
import React from "react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    asChild?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, ...props }, ref) => {
        const Component = "select"
        return (
            <Component
                className={cn(
                    "transition-all w-full h-10 flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Select.displayName = "Select";

export { Select }