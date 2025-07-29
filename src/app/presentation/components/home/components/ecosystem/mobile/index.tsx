import Grid from "./grid"

const EcosystemMobile = () => {
    return(
        <div className="w-full flex flex-col justify-center items-center relative px-5 gap-6 ">
            <div className="w-full flex flex-col justify-center items-center relative gap-2">
                <p className="text-[#0B0F19] font-medium text-[30px] text-center leading-tight">Conecta todo un ecosistema con <br/> tus servicios y <span className="text-[#38B7D2]">toma el control</span></p>
                <p className="text-[12px] font-normal text-[#666666] text-center leading-tight">Elige los componentes clave para tu operación: IA, marketplace, apps móviles, portales <br/> y gestión centralizada. Todo conectado, todo en tu control.</p>
            </div>
            <Grid/>
        </div>
    )
}

export default EcosystemMobile