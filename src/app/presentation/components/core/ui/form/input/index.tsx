import { cn } from "@/app/utils/cn"
import React, { useState } from "react"
import { IconType } from "react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode | IconType;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, type, ...props }, ref) => {

    const [focued, setFocused] = useState(false)

    if(icon) {

      return (
        <div className={cn([
          "transition-all w-full h-fit flex justify-between items-center rounded-md border border-slate-300 bg-white text-sm relative overflow-hidden",
          "ring-offset-white relative",
          className,
          focued ? "ring-2 ring-ring" : "ring-offset-white",
        ])}>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type={type}
            className={cn(
              "w-full h-full px-3 py-2",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              "focus:outline-none"
            )}
            ref={ref}
            {...props}
          />
          <span className="w-[40px] h-full absolute right-0 inset-y-0 pointer-events-none bg-white flex flex-col justify-center items-center">
            {React.isValidElement(icon) && (
              icon
            )}
          </span>
        </div>
      )
    }

    return (
      <input
        type={type}
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
Input.displayName = "Input"

export { Input }