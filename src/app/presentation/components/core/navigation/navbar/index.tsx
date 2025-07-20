import { cn } from "@/app/utils/cn"
import { forwardRef } from "react"
import { FiGlobe } from "react-icons/fi"
import Menu from "./menu"

const Navbar = forwardRef<HTMLDivElement>(
    ({ ...props }, ref) => {

        return (
            <div
                className={cn(
                    "w-full h-fit box-border flex flex-col justify-start items-center sticky top-0 z-10"
                )}
                ref={ref}
                {...props}
            >
                <div className="w-full flex justify-end items-center relative bg-[#D9D9D9] px-[115px] py-[5px]">
                    <div className="w-fit flex justify-between items-center relative gap-2">
                        <span className="text-primary relative">
                            <FiGlobe size={16}/>
                        </span>
                        <p className="text-[16px] font-normal text-primary">ES</p>
                        <p className="text-[16px] font-normal text-primary">EN</p>
                    </div>
                </div>
                <div className="w-full relative flex justify-between items-center px-[115px] py-[5px] bg-[#0B0F19]">
                    <a href="/" className="h-full w-[11vw] relative visible">
                        <img src={"/images/logo.png"} alt="logo" className="h-[100%] w-[100%] object-contain" />
                    </a>
                    <Menu/>
                </div>
            </div>

        )
    }
)
Navbar.displayName = "Navbar"

export { Navbar }