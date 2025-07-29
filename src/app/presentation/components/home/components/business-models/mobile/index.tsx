import Grid from "./grid"

const BusinessModelsMobile = () => {
    return(
        <div
            className="w-full flex flex-col justify-center items-center relative px-5 gap-6 bg-[#151C2F] py-5"
        >
            <div className="w-full flex flex-col justify-center items-center relative gap-2">
                <p className="text-white font-normal text-[25px] text-center leading-tight">Elige el modelo de negocio <span className="text-third">ideal para ti</span></p>
                <p className="text-[12px] font-light text-white text-center leading-tight">
                    Una plataforma flexible pensada para distintos tipos de negocio: directo al cliente, en <br/> red con aliados o proyectos a medida.
                </p>
            </div>
            <Grid/>
        </div>
    )
}

export default BusinessModelsMobile