/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/app/utils/cn';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { IModalContext, ModalContext } from './context/ModalContext';
import Policy from '@/app/domain/core/entities/policy/policy.interface';
import moment from 'moment';

export interface ModalSearchProps extends React.HTMLAttributes<HTMLDivElement> {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSearch = React.forwardRef<HTMLDivElement, ModalSearchProps>(
    ({ active, setActive, ...props }, ref) => {

        const [word, setWord] = useState("");

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
                    className="w-[50%] h-[70vh] bg-white rounded-lg border relative overflow-hidden"
                    ref={wrapperRef}
                >
                    <Input word={word} setWord={setWord} />
                    <List word={word} />
                </div>

            </div>
        )

    }
)
export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>;
}

const Input = React.forwardRef<HTMLDivElement, InputProps>(
    ({ word, setWord, ...props }, ref) => {

        const { dispatch, actions, state } = useContext<IModalContext>(ModalContext);
        const { searchPolicy } = actions
        const { loading } = state.policies

        return (
            <div
                ref={ref}
                {...props}
                className={cn([
                    "transition-all w-full h-[8vh] flex justify-between items-center rounded-tr-md rounded-tl-md text-base relative overflow-hidden border-b border-slate-300",
                    "ring-offset-white relative"
                ])}
            >
                <input
                    placeholder='Buscar nro. de póliza...'
                    onChange={(e) => setWord(e.target.value)}
                    value={word}
                    type="text"
                    className={cn(
                        "bg-transparent",
                        "w-full h-full pl-6 py-5",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        "focus:outline-none"
                    )}
                />
                <button
                    disabled={!word || loading}
                    onClick={() => {
                        searchPolicy({
                            numberPolicy: word
                        })(dispatch)
                    }}
                    className="size-[50px] bg-primary text-white text flex flex-col justify-center items-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FiSearch size={21} />
                </button>
            </div>
        )

    }
)

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    word: string;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ word, ...props }, ref) => {

        const { state } = useContext<IModalContext>(ModalContext);
        const { data: list, loading, successful } = state.policies

        return (
            <div
                ref={ref}
                {...props}
                className={cn([
                    "w-full h-full overflow-y-auto relative flex flex-col justify-start items-center"
                ])}
            >

                <div className='w-full h-fit flex justify-start items-center px-5 py-3 border-b'>
                    <p className='text-sm text-slate-900 font-normal'>Resultados para: <b>{word}</b></p>
                </div>
                {loading && <div className='w-full h-full flex flex-col justify-center items-center'>
                    <p className='text-slate-950 font-semibold text-lg'>Cargando...</p>
                    <p className='text-slate-950 font-normal text-base'>Estamos buscando las polizas por el numero de póliza: <b>{word}</b></p>
                </div>}
                {(word && !successful && !loading) && <div className='w-full h-full flex flex-col justify-center items-center'>
                    <p className='text-slate-950 font-semibold text-lg'>Busca una póliza</p>
                    <p className='text-slate-950 font-normal text-base'>Ingresa una valor en el campo de busqueda y busca una póliza</p>
                </div>}
                {(successful && list.length === 0 && word && !loading) && <div className='w-full h-full flex flex-col justify-center items-center'>
                    <p className='text-slate-950 font-semibold text-lg'>Ho hay polizas</p>
                    <p className='text-slate-950 font-normal text-base'>No hemos encontrado resultados para el numero de póliza: {word}</p>
                </div>}
                {(!loading && list.length > 0) && list.map((elem, i) => <Item data={elem} key={i} />)}
            </div>
        )

    }
)

export interface ItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    data: Policy
}

const Item = React.forwardRef<HTMLAnchorElement, ItemProps>(
    ({ data, ...props }, ref) => {

        const validitySince = useMemo(() => moment(data.validitySince).format("DD/MM/YYYY"), [data.validitySince])
        const validityUntil = useMemo(() => moment(data.validityUntil).format("DD/MM/YYYY"), [data.validityUntil])

        return (
            <a
                href={`/policies/detail?id=${data.id}&typeQuery=number`}
                ref={ref}
                {...props}
                className={cn([
                    "transition-all cursor-pointer w-full h-[17vh] relative flex flex-col justify-center items-start flex-none bg-white border-b px-5",
                    "hover:bg-slate-200"
                ])}
            >
                <p className='text-base text-slate-950 font-semibold'>{data.insured}</p>
                <div className="w-full grid grid-cols-3 gap-3 relative items-start">
                    <div className='flex flex-col justify-center items-start relative'>
                        <p className='text-slate-500 font-normal text-xs'>Ramo</p>
                        <p className='text-xs text-slate-950 font-semibold line-clamp-2'>{data.branch}</p>
                    </div>
                    <div className='flex flex-col justify-center items-start relative'>
                        <p className='text-slate-500 font-normal text-xs'>Sub-Ramo</p>
                        <p className='text-xs text-slate-950 font-semibold line-clamp-2'>{data.subBranch}</p>
                    </div>
                    <div className='flex flex-col justify-center items-start relative'>
                        <p className='text-slate-500 font-normal text-xs'>Vigencia</p>
                        <p className='text-xs text-slate-950 font-semibold'>{validitySince} - {validityUntil}</p>
                    </div>
                </div>
            </a>
        )

    }
)

ModalSearch.displayName = "ModalSearch"

export default ModalSearch