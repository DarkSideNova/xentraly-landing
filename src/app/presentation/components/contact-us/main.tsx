import { twMerge } from "tailwind-merge"
import useResponsive from "@/app/utils/hooks/useResponsive"
import Information from "./components/information"
import Form from "./components/form"
import ContactUsMobile from "./mobile"

const ContactUsMain = () => {

    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    if(isTabletOrMobile){
        return(
            <ContactUsMobile/>
        )
    }

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-start relative bg-[#151C2F] px-[115px] py-[60px]",
            "gap-6"
        ])}>
            <div className="w-full flex flex-col justify-center items-center relative">
                <h3 className="text-[46px] font-medium text-white">¿Listos para empezar?</h3>
                <p className="text-[16px] font-light text-white">Estamos aquí para ayudarte a construir el futuro de tu comunidad.</p>
            </div>
            <div className="w-full flex justify-center items-start relative gap-10">
                <Information/>
                <Form/>
            </div>
        </div>
    )
}

export default ContactUsMain