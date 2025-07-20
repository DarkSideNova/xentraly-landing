import React from "react"
import { ILinkMenu } from "../../list"
import { twMerge } from "tailwind-merge";

type linkPropsType = {
    link: ILinkMenu;
}

const Link:React.FC<linkPropsType> = ({link}) => {
    return(
        <a 
            href={link.to}
            className={twMerge([
                "w-fit flex justify-between items-center relative gap-8",
                "text-white font-normal text-[16px]"
            ])}
        >
            {link.title}
        </a>
    )
}

export default Link