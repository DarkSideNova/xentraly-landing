import React from "react";
import { IBusinessModelCard } from "../../list";

type cardPropsType = {
    card: IBusinessModelCard;
}

const Card: React.FC<cardPropsType> = ({ card }) => {

    const Icon = () => {

        if (React.isValidElement(card.icon)) {
            return <div>{card.icon}</div>;
        }

        if (typeof card.icon === "function") {
            const MarkComponent = card.icon;
            return <MarkComponent />;
        }

        return null;
    };

    return (
        <div className="h-[50vh] flex justify-center items-center relative p-[0.7px] bg-gradient-to-t from-[#3f3f3f] to-primary rounded-[20px]">
            <div className="w-full h-full flex flex-col justify-start items-start p-7 gap-5 bg-gradient-to-b to-[#0B0F19] from-[#151C2F] rounded-[20px]">
                <span className="size-[65px] bg-white rounded-lg flex flex-col justify-center items-center text-third">
                    <Icon/>
                </span>
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <p className="text-[32px] font-bold text-white">{card.title}</p>
                </div>
                <p className="text-[15px] font-light text-white">{card.description}</p>
                <p className="text-[20px] font-medium text-white">Hablemos</p>
            </div>
        </div>
    )
}
export default Card