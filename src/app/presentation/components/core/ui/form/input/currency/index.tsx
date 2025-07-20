import { cn } from "@/app/utils/cn";
import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode | IconType;
    value?: number;
    onComplete?: (value: number) => void;
}

const Currency = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, value = 0, disabled, onComplete, ...props }, ref) => {
        const [inputValue, setInputValue] = useState("");

        // Format the number into "1.000,00" format
        const formatCurrency = (num: number): string => {
            return num
                .toFixed(2) // Ensure two decimal places
                .replace(".", ",") // Replace decimal point with a comma
                .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add dots as thousand separators
        };

        // Parse the formatted string back into a number
        const parseCurrency = (formatted: string): number => {
            return parseFloat(
                formatted.replace(/\./g, "").replace(",", ".")
            );
        };

        // Update the input value when the `value` prop changes
        useEffect(() => {
            if (value !== undefined && value !== null) {
                setInputValue(formatCurrency(value));
            }
        }, [value]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const rawValue = e.target.value;

            // Remove non-numeric characters except for commas and dots
            const numericValue = rawValue.replace(/[^0-9,]/g, "");

            // Update the input value for display
            setInputValue(numericValue);
        };

        const handleBlur = () => {
            if (inputValue.trim() === "") {
                // If the input is empty, reset to the default value only if a value prop exists
                if (value !== undefined && value !== null) {
                    setInputValue(formatCurrency(value));
                    onComplete?.(value);
                }
            } else {
                // Format the value on blur
                const parsedValue = parseCurrency(inputValue);
                setInputValue(formatCurrency(parsedValue));
                onComplete?.(parsedValue);
            }
        };

        const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            // Prevent invalid characters from being entered
            const invalidChars = ["e", "E", "+", "-"];
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
            }
        };

        return (
            <div
                ref={ref}
                className={cn([
                    "transition-all w-full h-fit flex items-center rounded border border-slate-300 bg-white text-sm relative overflow-hidden",
                    "ring-offset-white relative",
                    className,
                ])}
            >
                {/* Fixed "$" label */}
                <span className="px-3 py-2 bg-gray-100 border-r border-slate-300 text-gray-600">
                    $
                </span>

                {/* Input field */}
                <input
                    disabled={disabled}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyPress}
                    className={cn(
                        "w-full h-full px-3 py-2 text-left",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        "focus:outline-none"
                    )}
                    {...props}
                />
            </div>
        );
    }
);

Currency.displayName = "Currency";

export { Currency };