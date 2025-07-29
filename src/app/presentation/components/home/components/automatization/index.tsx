import useResponsive from "@/app/utils/hooks/useResponsive"
import Grid from "./grid"
import AutomatizationMobile from "./mobile"

const Automatization = () => {

    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    if(isTabletOrMobile){
        return(
            <AutomatizationMobile/>
        )
    }

    return(
        <div
            className="w-full flex flex-col justify-center items-center relative px-[115px] gap-6 bg-gradient-to-b from-white to-[#E1E1E1] py-20"
        >
            <div className="w-full flex flex-col justify-center items-center relative gap-2">
                <p className="text-[#0B0F19] font-medium text-[48px] text-center leading-tight">Automatiza, escala y<br/> <span className="text-[#38B7D2]">controla en 5 pasos</span></p>
                <p className="text-[18px] font-normal text-[#666666] text-center leading-tight">
                    Ofrece productos y servicios, reserva tus citas, consulta tu historial, inicia <br/> interacciones desde Whatsapp, chatbot y mucho más.
                </p>
            </div>
            <Grid/>
        </div>
    )
}

export default Automatization