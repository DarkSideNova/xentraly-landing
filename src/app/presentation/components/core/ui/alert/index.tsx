import { cn } from "@/app/utils/cn";
import { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";

type typeAlert = "success" | "error" | "warning"

export interface AlertProps extends HTMLAttributes<HTMLDivElement>{
    type: typeAlert;
    title: string;
    body: string;
    show: boolean;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
    ({type, title, body, show, ...props}, ref) => {

        const [active, setActive] = useState<boolean>(false);

        useEffect(()=>{
            if(show){
                setActive(true);

                setTimeout(() => {
                    setActive(false)
                }, 3500);
            }
        },[show])

        return(
            <div 
                {...props}
                ref={ref}
                className={cn([
                    "w-fit h-fit border shadow-md rounded-lg flex justify-start items-center space-x-3 gap-3 p-3 bg-white",
                    "fixed top-4 right-4 z-30",
                    active ? "visible" : "invisible",
                    type === "success" && "border-green-300" ,
                    type === "error" && "border-red-300" ,
                    type === "warning" && "border-yellow-300" ,
                ])}
            >
                <span className={cn([
                    "size-fit relative flex flex-col justify-center items-center text-[1.6rem] p-[0.35rem] rounded-lg",
                    type === "success" && "bg-green-600 text-white",
                    type === "error" && "bg-red-600 text-white",
                    type === "warning" && "bg-yellow-600 text-white",
                ])}>
                    {type === "success" && <FiCheckCircle/>}
                    {type === "error" && <FiXCircle/>}
                    {type === "warning" && <FiAlertCircle/>}
                </span>
                <div className="w-full h-fit flex flex-col justify-center items-start relative">
                    <p className="text-slate-950 font-bold text-base leading-tight">{title}</p>
                    <p className="text-slate-950 font-normal text-sm leading-tight">{body}</p>

                    <span 
                        onClick={()=>{ setActive(false) }}
                        className="text-slate-500 absolute top-0 right-0 text-sm cursor-pointer"
                    >
                        <FiX/>
                    </span>
                </div>
            </div>
        )
    }
)

Alert.displayName = "Alert";

export {
    Alert
}