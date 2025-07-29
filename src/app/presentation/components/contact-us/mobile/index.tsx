import { twMerge } from "tailwind-merge"
import Information from "./components/information"
import Form from "./components/form"

const ContactUsMobile = () => {

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-start relative bg-[#151C2F] px-5 py-4",
            "gap-5"
        ])}>
            <div className="w-full flex flex-col justify-center items-center relative">
                <h3 className="text-[35px] font-medium text-white text-center">¿Listos para empezar?</h3>
                <p className="text-[12px] font-light text-white text-center">Estamos aquí para ayudarte a construir el futuro de tu comunidad.</p>
            </div>
            <div className="w-full flex flex-col justify-start items-center relative gap-10">
                <Form/>
                <Information/>
            </div>
        </div>
    )
}

export default ContactUsMobile