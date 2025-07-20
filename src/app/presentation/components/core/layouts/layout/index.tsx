import { cn } from "@/app/utils/cn"
import { forwardRef } from "react"
import { Navigation } from "../../navigation";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
    ({ children, ...props }, ref) => {

        return (
            <div
                className={cn(
                    "w-full h-screen relative bg-white box-border flex flex-col justify-start items-start overflow-y-auto"
                )}
                ref={ref}
                {...props}
            >
                <Navigation.Navbar/>
                <div
                    className="w-full h-fit relative"
                >
                    {children}
                </div>
                <Navigation.Footer/>
            </div>
        )
    }
)
Layout.displayName = "Layout"

export { Layout }