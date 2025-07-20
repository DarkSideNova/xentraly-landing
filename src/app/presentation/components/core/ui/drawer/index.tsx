/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/app/utils/cn";
import { HTMLAttributes, forwardRef, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement>{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
    ({open, setOpen, title, children, ...props}, ref) => {

        const wrapperRef = useRef(null);

        function useOutsideAlerter(ref: React.MutableRefObject<any>) {
            useEffect(() => {
                function handleClickOutside(event: MouseEvent) {
                    if (ref.current && !ref.current.contains(event.target as Node)) {
                        setOpen(false);
                    }
                }

                document.addEventListener("mousedown", handleClickOutside);

                return () => {
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }, [ref]);
        }

        useOutsideAlerter(wrapperRef);

        return(
            <div
                {...props}
                ref={ref}
                className={cn([
                    "w-full h-screen bg-slate-900/20 backdrop-blur-sm fixed top-0 left-0 z-10 flex flex-col justify-center items-end",
                    open ? "visible" : "hidden"
                ])}
            >
                <div
                    className="w-[30%] h-screen bg-white border-l relative px-5 overflow-y-auto"
                    ref={wrapperRef}
                >
                    <div className="w-full h-fit sticky top-0 left-0 bg-white z-10 border-b flex justify-between items-center py-2">
                        <p className="text-slate-950 font-semibold text-[1.4rem]">{title}</p>
                        <span 
                            onClick={()=>{ setOpen(false) }}
                            className="text-slate-950 text-xl cursor-pointer p-2 hover:bg-slate-900/10"
                        >
                            <FiX/>
                        </span>
                    </div>

                    {children}
                </div>
            </div>
        )
    }
)

Drawer.displayName = "Drawer"

export { Drawer }