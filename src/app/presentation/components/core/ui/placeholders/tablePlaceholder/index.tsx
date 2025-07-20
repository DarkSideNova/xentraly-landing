import { forwardRef } from "react"
import { FiLoader } from "react-icons/fi"

export interface TablePlaceholderProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
    description: string;
    loading?: boolean;
}

const TablePlaceholder = forwardRef<HTMLDivElement, TablePlaceholderProps>(
    ({title, description, loading, ...props}, ref) => {
        return(
            <div 
                ref={ref}
                {...props}
                className='w-full h-fit flex flex-col gap-2 justify-center items-center text-center'
            >
                {loading && <span className='text-2xl animate-spin text-primary'><FiLoader/></span>}
                <p className='font-semibold text-xl text-slate-950'>{title}</p>
                <p className='font-light text-base text-slate-500'>{description}</p>
            </div>
        )
    }
)

TablePlaceholder.displayName = "TablePlaceholder"

export default TablePlaceholder