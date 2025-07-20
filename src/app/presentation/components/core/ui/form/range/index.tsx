import { cn } from "@/app/utils/cn";
import { forwardRef } from "react";

export interface InputRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: number;
}

const Range = forwardRef<HTMLInputElement, InputRangeProps>(
    ({ value, ...props }, ref) => {

        const labels = [
            { title: 'Bajo', value: 1 },
            { title: 'Recomendado', value: 2 },
            { title: 'Alto', value: 3 },
        ];

        return (
            <div
                ref={ref}
                className='w-full h-fit relative'
            >
                <input
                    {...props}
                    className='transition w-full h-2 bg-slate-100 appearance-none outline-none hover:bg-slate-200 active:bg-slate-200 border'
                    type="range"
                    value={value}
                    step="0.01" // Add this line
                />
                <div className='flex justify-between mt-2'>
                    {labels.map((label, index) => (
                        <span key={index} className={cn([
                            'text-sm uppercase',
                            value === label.value ? 'text-slate-950 font-bold' : 'text-gray-900 font-normal',
                        ])}>
                            {label.title}
                        </span>
                    ))}
                </div>
            </div>
        )
    }
)

Range.displayName = "Range";

export { Range }