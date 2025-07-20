import { cn } from "@/app/utils/cn";
import { forwardRef, HTMLAttributes } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export interface LoaderProps extends HTMLAttributes<HTMLDivElement>{
    size?: number;
}

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
    ({size, ...props}, ref) => {
        return(
            <span
                className={cn([
                    "text-inherit relative size-fit"
                ])}
                ref={ref}
                {...props}
            >
                <AiOutlineLoading size={size ?? 16} className="animate-spin"/>
            </span>
        )
    }
)

Loader.displayName = "Loader"

export { Loader }