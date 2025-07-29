import { BiPhoneCall } from "react-icons/bi";
import { FiGlobe, FiMail } from "react-icons/fi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Information = () => {

    const Tile = (obj:{
        children: any;
        title: string;
        description: string;
    }) => {

        return(
            <div className="w-full flex justify-start items-center relative gap-5">
                <span className="text-third flex justify-center items-center">
                    {obj.children}         
                </span>
                <div className="w-full flex flex-col justify-center items-start relative">
                    <p className="text-white font-semibold text-base">{obj.title}</p>
                    <p className="text-white font-normal text-sm">{obj.description}</p>
                </div>
            </div>
        )
    }
    
    return(
        <div className="w-[30%] h-fit bg-[#211E3B] relative rounded-lg p-8 flex flex-col justify-start items-start gap-3">
            <p className="text-white text-[20px] font-semibold">Información de Contacto</p>
            <div className="w-full flex flex-col justify-start items-start relative gap-5">
                <Tile
                    title="Ubicación"
                    description="Colombia - Perú - Panamá - México"
                >
                    <FiGlobe size={20}/>
                </Tile>
                <Tile
                    title="Correo Electrónico"
                    description="info@xentraly.com"
                >
                    <FiMail size={20}/>
                </Tile>
                <Tile
                    title="Teléfono de Contacto"
                    description="+507 69201093"
                >
                    <BiPhoneCall size={20}/>
                </Tile>
            </div>
        </div>
    )
}

export default Information