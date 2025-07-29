import React, { Dispatch, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'
import linksMenu from '../../list'

interface MenuProps {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const MenuLinks = () => {

    return (
        <ul className="flex flex-col gap-4">
            {linksMenu.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.to}
                        className="text-blue-900 hover:underline"
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Menu: React.FC<MenuProps> = ({ isActive }) => {
    return (
        <div
            className={
                twMerge([
                    `sticky top-0 w-full h-fit bg-white z-50 transform transition-transform duration-300 ease-in-out px-5 py-4`,
                    isActive ? 'translate-y-0 visible' : 'translate-y-10 hidden',
                ])
            }
        >
            <MenuLinks />
        </div>
    )
}

export default Menu