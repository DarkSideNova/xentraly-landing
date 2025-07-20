import React from "react";
import { IAutomatizationCard } from "../../list";

type cardPropsType = {
    card: IAutomatizationCard;
}

const Card: React.FC<cardPropsType> = ({ card }) => {

    return (
        <div className="h-[50vh] flex flex-col justify-start items-start p-3 gap-5 bg-white rounded shadow-lg rounded-lg">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <p className="text-[48px] font-normal text-[#38B7D2]">0{card.id}</p>
                <p className="text-[18px] font-bold text-[#0B0F19]">{card.title}</p>
            </div>
            <p className="text-[16px] font-normal text-[#666666]">{card.description}</p>
        </div>
    )
}
export default Card