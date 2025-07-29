import React from "react"
import { FiCheck } from "react-icons/fi";

export interface ICardProduct {
    title: string;
    mainImage: string;
    description: string;
    items: string[];
    platformImages: string[];
}

type cardTypeProps = {
    data: ICardProduct;
}

const Card:React.FC<cardTypeProps> = ({data}) => {

    const Items = () => {
        return(
            <div className="w-full flex flex-col justify-start items-start relative gap-4">
                <h4 className="text-third font-bold text-[19px]">Características Principales:</h4>
                <div className="w-full flex flex-col justify-start items-start relative gap-3">
                    {data.items.map((elem, i) => {
                        return(
                            <div key={i} className="w-full flex justify-start items-center relative gap-3">
                                <span className="text-[#211E3B] bg-[#E88843] flex justify-center items-center relative rounded-full p-1">
                                    <FiCheck size={14}/>
                                </span>
                                <p className="text-[16px] text-white font-normal">{elem}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const Images = () => {
        return(
            <div className="w-full flex flex-col justify-start items-start relative gap-4">
                <h4 className="text-third font-bold text-[19px]">Vistas de la plataforma:</h4>
                <div className="w-full grid grid-cols-3 relative gap-2">
                    {data.platformImages.map((elem, i) => 
                        <span className="bg-secondary h-[30vh] relative overflow-hidden rounded-lg" key={i}>
                            <img src={"/images/products/" + elem} className="size-full object-cover object-center relative" />
                        </span>
                    )}
                </div>
            </div>
        )
    }

    return(
        <div className="w-full flex bg-[#211E3B] relative justify-between items-start rounded-[20px] p-5 gap-10">
            <div className="w-[35%] flex-none h-full flex flex-col justify-start items-start relative gap-5">
                <p className="text-[30px] font-bold text-white">Salud y Bienestar</p>
                <span className="w-full h-[35vh] relative overflow-hidden rounded-[12px] flex justify-center items-center">
                    <img src={"/images/products/" + data.mainImage} className="size-full object-cover object-center relative bg-secondary" alt="Imagen producto xentraly"/>
                </span>
            </div>
            <div className="w-full flex flex-col justify-start items-start relative gap-4">
                <h2 className="text-white font-normal text-[16px]">Conecta tu red de especialistas y facilita el acceso a servicios y productos. Fideliza a tus pacientes acompañándolos antes, durante y después de la atención.</h2>
                <Items/>
                <Images/>
            </div>
        </div>
    )
}

export default Card