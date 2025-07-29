import { PiUserRectangle } from "react-icons/pi"
import { Button } from "../../../../core/ui/button"

const HeaderMobile = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center relative">
            <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 px-5 py-4 bg-primary/70 gap-10">
                <div className="w-full flex flex-col justify-center items-center relative text-center">
                    <h1 className="text-[45px] font-bold text-white uppercase leading-[50px]">Conecta tu <p className="text-third">comunidad digital</p></h1>
                </div>
                <div className="w-full flex flex-col justify-center items-start relative gap-7">
                    <p className="text-[#F2F2F7] text-[12px] font-normal text-center">Integra clientes, proveedores y servicios en una sola plataforma para incrementar tus ingresos, fidelizar tus clientes, innovar y escalar tu operación.</p>
                    <Button
                        variant="default"
                        className="w-full"
                    >
                        Contáctanos ahora
                        <PiUserRectangle />
                    </Button>
                </div>
            </div>
            <img src="/images/videos/home-video.gif" className="size-full object-cover object-center" alt="Home video" />
        </div>
    )
}

export default HeaderMobile