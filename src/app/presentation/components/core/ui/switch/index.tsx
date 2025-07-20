import { cn } from "@/app/utils/cn";
import { Dispatch, SetStateAction, forwardRef } from "react";

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    active: boolean;
    onSwitch: Dispatch<SetStateAction<boolean>>;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
    ({ disabled = false, active, onSwitch, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => { 
                    if(
                        !disabled
                    ){
                        onSwitch(prv => !prv)
                    }
                }}
                className={cn([
                    'transition-colors ease-out w-16 h-8 bg-primary rounded-full flex items-center p-1 cursor-pointer border',
                    active ? 'bg-green-400' : 'bg-slate-300',
                ])}
            >
                <div className={cn([
                    'size-6 bg-white rounded-full shadow-md transform translate-x-0 transition-transform',
                    active && 'translate-x-8',
                ])} />
            </div>
        )
    }
)

Switch.displayName = "Switch"

export default Switch