import useResponsive from "@/app/utils/hooks/useResponsive"
import Grid from "./grid"
import EcosystemMobile from "./mobile"

const Ecosystem = () => {

    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    if(isTabletOrMobile){
        return(
            <EcosystemMobile/>
        )
    }


    return(
        <div className="w-full flex flex-col justify-center items-center relative px-[115px] gap-6 ">
            <div className="w-full flex flex-col justify-center items-center relative gap-2">
                <p className="text-[#0B0F19] font-medium text-[48px] text-center leading-tight">Conecta todo un ecosistema con <br/> tus servicios y <span className="text-[#38B7D2]">toma el control</span></p>
                <p className="text-[18px] font-normal text-[#666666] text-center leading-tight">Elige los componentes clave para tu operación: IA, marketplace, apps móviles, portales <br/> y gestión centralizada. Todo conectado, todo en tu control.</p>
            </div>
            <Grid/>
        </div>
    )
}

export default Ecosystem