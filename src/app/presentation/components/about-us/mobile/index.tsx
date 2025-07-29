import { twMerge } from "tailwind-merge"
import { Button } from "../../core/ui/button"
import { PiUserSquare } from "react-icons/pi"

const AboutUsMobile = () => {

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-start relative bg-[#151C2F] px-5 py-4",
            "gap-5"
        ])}>
            <p className="text-[12px] font-light text-white">En Xentraly, somos un equipo apasionado por la tecnología y su poder para transformar negocios y comunidades. Nacimos con la visión de crear ecosistemas digitales integrados que faciliten la interacción entre empresas, proveedores y clientes, generando valor para todos los participantes.</p>
            <p className="text-[12px] font-light text-white">Nuestra misión es empoderar a las organizaciones con herramientas innovadoras y personalizadas que les permitan optimizar sus procesos, expandir su alcance y ofrecer experiencias excepcionales. Creemos en la co-creación y trabajamos de cerca con nuestros clientes para desarrollar soluciones que realmente respondan a sus necesidades y desafíos específicos.</p>
            <p className="text-[12px] font-light text-white">Con un enfoque en la flexibilidad, la escalabilidad y la usabilidad, nuestro modelo de negocio esta diseñado para adaptarse a cualquier sector de industria y contamos con un equipo comprometido con la mejora continua e innovación funcional y tecnológica de la misma.</p>
            <p className="text-[12px] font-light text-white">Te invitamos a conocer más sobre cómo Xentraly puede ayudarte a construir y potenciar tu comunidad digital.</p>
            <div className="w-full flex justify-center items-center relative">
                <Button
                    value="default"
                    size="default"
                >
                    Hablemos de tu proyecto
                    <PiUserSquare/>
                </Button>
            </div>
        </div>
    )
}

export default AboutUsMobile