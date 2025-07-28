import { PiUserRectangle } from "react-icons/pi"
import { Button } from "../../../core/ui/button"

const Header = () => {
    return(
        <div className="w-full h-[85vh] flex flex-col justify-center items-center relative">
            <div className="w-full h-full flex flex-col justify-between items-center absolute top-0 left-0 px-[115px] py-[70px] bg-primary/70">
                <div className="w-full flex flex-col justify-center items-center relative text-center">
                    <h1 className="text-[100px] font-bold text-white uppercase leading-[100px]">Conecta tu <br/> <p className="text-third">comunidad digital</p></h1>
                </div>
                <div className="w-full grid grid-cols-3 relative">
                    <div className="col-span-2"></div>
                    <div className="flex flex-col justify-center items-start relative gap-7">
                        <p className="text-[#F2F2F7] text-[17px] font-normal">Integra clientes, proveedores y servicios en una sola plataforma para incrementar tus ingresos, fidelizar tus clientes, innovar y escalar tu operación.</p>
                        <Button
                            variant="default"
                            className="w-full"
                        >
                            Contáctanos ahora
                            <PiUserRectangle/>
                        </Button>
                    </div>
                </div>
            </div>
            <img src="/images/videos/home-video.gif" className="size-full object-cover object-center" alt="Home video" />
        </div>
    )
}

export default Header