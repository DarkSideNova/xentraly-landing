import React from "react"
import { ILinkMenu } from "../../list"
import { twMerge } from "tailwind-merge";
import useActiveLink from "@/app/utils/hooks/useActiveLink";

type linkPropsType = {
    link: ILinkMenu;
}

const Link:React.FC<linkPropsType> = ({link}) => {

    const active = useActiveLink(link.to)

    return(
        <a 
            href={link.to}
            className={twMerge([
                "w-fit flex justify-between items-center relative gap-8",
                "font-normal text-[16px]",
                active ? "text-third" : "text-white"
            ])}
        >
            {link.title}
        </a>
    )
}

export default Link