import { Button } from "../../../core/ui/button"
import { Form as Inputs } from "@/app/presentation/components/core/ui/form"

const Form = () => {
    return(
        <div className="w-[35%] h-fit bg-[#211E3B] relative rounded-lg p-8 flex flex-col justify-start items-start gap-3">
            <p className="text-white text-[20px] font-semibold">Envíanos un mensaje</p>
            <p className="text-white font-medium text-[12px]">Tu dirección de correo electrónico no será publicada. <br/> Los campos obligatorios están marcados *</p>
            <div className="w-full flex flex-col justify-start items-center relative gap-3">
                <Inputs.Input className="w-full" placeholder="Tu nombre*" type="text"/>
                <Inputs.Input className="w-full" placeholder="Tu correo electrónico *" type="mail"/>
                <Inputs.Textarea className="w-full" placeholder="Tu mensaje..."/>
                <Button
                    variant="default"
                    size="full"
                >
                    Enviar mensaje
                </Button>
            </div>

        </div>
    )
}

export default Form