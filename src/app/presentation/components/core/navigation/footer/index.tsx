import { cn } from "@/app/utils/cn"
import moment from "moment"
import { forwardRef } from "react"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"
import { RiInstagramLine } from "react-icons/ri"
import listOfLinks from "./list"
import { FiGlobe, FiMail, FiPhone } from "react-icons/fi"
import { Button } from "../../ui/button"
import { PiUserSquare } from "react-icons/pi"

const Footer = forwardRef<HTMLDivElement>(
    ({ ...props }, ref) => {

        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    "w-full h-fit box-border px-[115px] py-[40px] flex flex-col justify-start items-center bg-gradient-to-t from-[#0B0F19] to-[#151C2F] gap-5"
                )}
            >
                <div 
                    className={cn(
                        "w-full h-fit box-border flex justify-between items-start"
                    )}
                >
                    <div className="w-1/2 relative flex flex-col justify-start items-start gap-5">
                        <p className="font-medium text-white text-[48px]">Lleva tu ecosistema <br/> al <span className="text-third">siguiente nivel</span></p>
                        <p className="font-normal text-white text-[18px]">Evoluciona tu operación con tecnología diseñada para conectar, automatizar y escalar tu comunidad digital.</p>
                        <Button
                            onClick={()=>{
                                window.location.href = "/contact-us"
                            }}
                            variant={"default"}
                            size="default"
                        >
                            Contáctanos ahora
                            <PiUserSquare/>
                        </Button>
                    </div>
                    <div className="w=1/2 relative grid grid-cols-2">
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="text-[20px] font-semibold text-white">Navegación</p>
                            <div className="w-full flex flex-col justify-start items-start relative gap-2">
                                {listOfLinks.map((elem, i) => <a href={elem.to} key={i} className="text-[15px] font-normal text-white">{elem.title}</a>)}
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="text-[20px] font-semibold text-white">Contacto</p>
                            <div className="w-full flex flex-col justify-start items-start relative gap-2">
                                <div className="w-full flex justify-start items-center gap-2">
                                    <span className="text-third flex-none gap-5">
                                        <FiGlobe size={17}/>
                                    </span>
                                    <p className="text-[15px] font-normal text-white">Colombia - Perú - Panamá - México</p>
                                </div>
                                <div className="w-full flex justify-start items-center gap-2">
                                    <span className="text-third flex-none gap-5">
                                        <FiMail size={17}/>
                                    </span>
                                    <p className="text-[15px] font-normal text-white">info@xentraly.com</p>
                                </div>
                                <div className="w-full flex justify-start items-center gap-2">
                                    <span className="text-third flex-none gap-5">
                                        <FiPhone size={17}/>
                                    </span>
                                    <p className="text-[15px] font-normal text-white">+507 69201093</p>
                                </div>
                            </div>
                        </div>
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