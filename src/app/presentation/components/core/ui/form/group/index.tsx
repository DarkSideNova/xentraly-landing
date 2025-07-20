import { cn } from "@/app/utils/cn"
import React from "react"

export interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
    error?: string | undefined;
    label: string;
    required?: boolean;
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
    ({ className, error, required = false, label, children, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "w-full h-fit flex flex-col justify-center items-start text-left gap-2",
                    className
                )}
                ref={ref}
                {...props}
            >
                <label className="text-sm text-muted-foreground font-medium capitalize">{label} {required && <span className="text-red-600 font-bold">*</span>}</label>
                {children}
                {error && <p className="text-red-600 font-medium text-sm">{error}</p>}
            </div>
        )
    }
)
Group.displayName = "Group"

export { Group }