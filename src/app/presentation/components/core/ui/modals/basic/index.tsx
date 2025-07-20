/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/app/utils/cn';
import React, { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi';

export interface ModalBasicProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string | undefined;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBasic = React.forwardRef<HTMLDivElement, ModalBasicProps>(
    ({ title, description, active, setActive, children, ...props }, ref) => {

        const wrapperRef = useRef(null);

        function useOutsideAlerter(ref: React.MutableRefObject<any>) {
            useEffect(() => {
                function handleClickOutside(event: MouseEvent) {
                    if (ref.current && !ref.current.contains(event.target as Node)) {
                        setActive(false);
                    }
                }

                document.addEventListener("mousedown", handleClickOutside);

                return () => {
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }, [ref]);
        }

        useOutsideAlerter(wrapperRef);

        return (
            <div
                ref={ref}
                {...props}
                className={cn([
                    "w-full h-screen bg-slate-900/20 backdrop-blur-sm fixed top-0 left-0 z-10 flex flex-col justify-center items-center",
                    active ? "visible" : "hidden"
                ])}
            >

                <div
                    className="w-[40vw] max-h-[70vh] h-fit min-h-[10vh] bg-white rounded-lg flex flex-col gap-3 justify-between border/30 relative overflow-hidden p-5"
                    ref={wrapperRef}
                >
                    <div className='w-full h-fit border-b flex justify-between items-center pb-2'>
                        <p className='text-slate-950 font-semibold text-lg'>{title}</p>
                        <span 
                            onClick={()=>{ setActive(false) }}
                            className='text-slate-600 font-semibold text-xl cursor-pointer'
                        >
                            <FiX/>
                        </span>
                    </div>
                    {description && <div className='w-full h-full flex justify-start items-start py-3'>
                        <p className='text-slate-950 font-normal text-base'>{description}</p>
                    </div>}
                    <div className="w-full h-fit relative">
                        {children}
                    </div>
                    
                </div>

            </div>
        )

    }
)

ModalBasic.displayName = "ModalBasic"

export default ModalBasic