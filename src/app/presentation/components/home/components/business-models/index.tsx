import Grid from "./grid"

const BusinessModels = () => {
    return(
        <div
            className="w-full flex flex-col justify-center items-center relative px-[115px] gap-6 bg-[#0B0F19] py-20"
        >
            <div className="w-full flex flex-col justify-center items-center relative gap-2">
                <p className="text-white font-normal text-[48px] text-center leading-tight">Elige el modelo de negocio <span className="text-third">ideal para ti</span></p>
                <p className="text-[18px] font-light text-white text-center leading-tight">
                    Una plataforma flexible pensada para distintos tipos de negocio: directo al cliente, en <br/> red con aliados o proyectos a medida.
                </p>
            </div>
            <Grid/>
        </div>
    )
}

export default BusinessModels