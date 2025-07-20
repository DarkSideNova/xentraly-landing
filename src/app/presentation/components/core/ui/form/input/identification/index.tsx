import { cn } from "@/app/utils/cn";
import React, { useState, useRef } from "react";
import { IconType } from "react-icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode | IconType;
    onComplete: (value: string) => void;
}

const Identification = React.forwardRef<HTMLInputElement, InputProps>(
    ({ icon, className, onComplete, ...props }, ref) => {
        const [values, setValues] = useState(["", "", "", ""]);
        const inputsRef = useRef<(HTMLInputElement | null)[]>([]);


        const handleChange = (index: number, value: string) => {
            if (value.length > (index == 0 ? 2 : 4)) return;

            const newValues = [...values];
            newValues[index] = value.toUpperCase();
            setValues(newValues);

            // Automatically move to the next input if the current one is filled
            if (value.length === (index == 0 ? 2 : 4) && index < 4) {
                inputsRef.current[index + 1]?.focus();
            }

            // Call onComplete when all inputs are filled
            if (newValues.every(v => v.length > 0)) {
                onComplete(newValues.join("-"));
            }
        };

        const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
            if (event.key === "Backspace" && values[index].length === 0 && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        };

        return (
            <div
                ref={ref}
                className={cn([
                    "transition-all w-full h-fit flex justify-between items-center rounded-md border border-slate-300 bg-white text-sm relative overflow-hidden",
                    "ring-offset-white relative",
                    className,
                ])}
            >
                <div className="flex w-full">
                    {/* Selector for the first input */}
                    <select
                        value={values[0]}
                        onChange={(e) => handleChange(0, e.target.value)}
                        className={cn(
                            "w-[50px] h-full px-1 py-2 text-center bg-white border-r border-slate-300",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        )}
                    >
                        <option>-</option>
                        {Array.from({ length: 13 }, (_v, i) => i).map(elem => <option key={elem} value={elem + 1}>{elem + 1}</option>)}
                        <option value="PE">PE</option>
                        <option value="E">E</option>
                        <option value="N">N</option>
                    </select>

                    {/* Second input */}
                    <input
                        ref={(el) => {
                            inputsRef.current[1] = el
                        }}
                        type="text"
                        maxLength={4}
                        value={values[1]}
                        onChange={(e) => handleChange(1, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(1, e)}
                        className={cn(
                            "w-full h-full px-1 py-2 text-center border-r border-slate-300",
                            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            "focus:outline-none"
                        )}
                        {...props}
                    />

                    {/* Third input */}
                    <input
                        ref={(el) => {
                            inputsRef.current[2] = el;
                        }}
                        type="text"
                        maxLength={4}
                        value={values[2]}
                        onChange={(e) => handleChange(2, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(2, e)}
                        className={cn(
                            "w-full h-full px-1 py-2 text-center border-r border-slate-300",
                            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            "focus:outline-none"
                        )}
                        {...props}
                    />

                    {/* Fourth input */}
                    <input
                        ref={(el) => {
                            inputsRef.current[3] = el;
                        }}
                        type="text"
                        maxLength={4}
                        value={values[3]}
                        onChange={(e) => handleChange(3, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(3, e)}
                        className={cn(
                            "w-full h-full px-1 py-2 text-center",
                            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            "focus:outline-none"
                        )}
                        {...props}
                    />
                </div>
                {icon && (
                    <span className="w-[40px] h-full absolute right-0 inset-y-0 pointer-events-none bg-white flex flex-col justify-center items-center">
                        {React.isValidElement(icon) && icon}
                    </span>
                )}
            </div>
        );
    }
);

Identification.displayName = "Identification";

export { Identification };