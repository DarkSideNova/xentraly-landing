
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import Menu from "./menu";

const NavbarMobile = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <div className="w-full h-fit flex flex-col justify-start items-center sticky top-0 z-40">
            <div className="w-full h-fit bg-primary relative flex justify-between items-center px-5 py-4">
                <a
                    href="/"
                    className="w-fit h-[6vh] relative flex flex-col justify-center items-center"
                >
                    <img
                        src="/images/logo.png"
                        alt="Xentraly logo"
                        className="size-full object-contain object-center"
                    />
                </a>
                <button
                    onClick={() => setActiveMenu((prev) => !prev)}
                    className="text-white text-[1.5rem] cursor-pointer"
                >
                    {activeMenu ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <Menu
                isActive={activeMenu}
                setIsActive={setActiveMenu}
            />
        </div>
    )
}

export default NavbarMobile