import { cn } from "@/app/utils/cn"
import React from "react"
import { IconType } from "react-icons";
import { FiCheck } from "react-icons/fi";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode | IconType;
    checked: boolean;
    onCheck: () => void;
    label: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, checked, onCheck, ...props }, ref) => {

        const Box = () => {
            return (
                <span
                    className={cn(
                        "size-5 border rounded-md flex flex-col justify-center items-center relative transition-all ease-out",
                        checked ? "bg-green-500 text-white" : "bg-white group-hover:bg-slate-100"
                    )}
                >
                    {checked && <FiCheck size={12} className="text-inherit" />}
                </span>
            )
        }

        return (
            <div
                onClick={onCheck}
                className={cn(
                    "w-full h-fit flex justify-start items-center gap-2 relative cursor-pointer group",
                    className
                )}
                ref={ref}
                {...props}
            >
                <Box />
                <p className="transition-all ease-out text-slate-950 font-normal text-xs group-hover:font-medium">
                    {label}
                </p>
            </div>
        )
    }
)
Radio.displayName = "Radio"

export { Radio }