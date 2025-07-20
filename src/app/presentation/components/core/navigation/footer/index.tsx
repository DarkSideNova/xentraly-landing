import { cn } from "@/app/utils/cn"
import moment from "moment"
import { forwardRef } from "react"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"
import { RiInstagramLine } from "react-icons/ri"

const Footer = forwardRef<HTMLDivElement>(
    ({ ...props }, ref) => {

        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    "w-full h-fit box-border px-[115px] py-[40px] flex flex-col justify-start items-center bg-gradient-to-t from-[#0B0F19] to-[#151C2F]"
                )}
            >
                <div 
                    className={cn(
                        "w-full h-fit box-border flex justify-between items-start"
                    )}
                >
                    <div className="w-1/2 relative flex flex-col justify-start items-start">
                        <p className="font-medium text-white text-[48px]">Lleva tu ecosistema <br/> al <span className="text-third">siguiente nivel</span></p>
                        <p className="font-normal text-white text-[18px]">Evoluciona tu operación con tecnología diseñada para conectar, automatizar y escalar tu comunidad digital.</p>
                    </div>
                </div>
                <div
                    className={cn(
                        "w-full h-fit box-border grid grid-cols-3 justify-between items-start"
                    )}
                >
                    <div className=""></div>
                    <div className="flex justify-center items-center relative text-center">
                        <p className="text-[16px] text-[#F2F2F7] font-normal">© {moment().year()} Xentraly. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex justify-end items-center relative gap-4">
                        <a  className="size-[27px] flex-none p-1 rounded-full flex justify-center items-center relative bg-third">
                            <FaFacebookF/>
                        </a>
                        <a  className="size-[27px] flex-none p-1 rounded-full flex justify-center items-center relative bg-third">
                            <LiaLinkedinIn/>
                        </a>
                        <a  className="size-[27px] flex-none p-1 rounded-full flex justify-center items-center relative bg-third">
                            <RiInstagramLine/>
                        </a>
                    </div>

                </div>
            </div>

        )
    }
)
Footer.displayName = "Footer"

export { Footer }