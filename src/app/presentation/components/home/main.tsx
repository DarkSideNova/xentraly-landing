import { twMerge } from "tailwind-merge"
import useResponsive from "@/app/utils/hooks/useResponsive"
import Ecosystem from "./components/ecosystem"
import Automatization from "./components/automatization"
import BusinessModels from "./components/business-models"
import Header from "./components/header"
import Brands from "./components/brands"

const HomeMain = () => {

    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-center relative",
            isTabletOrMobile ? "gap-5" : "gap-10"
        ])}>
            <Header />
            <Automatization />
            <Ecosystem />
            <div className="w-full flex flex-col justify-center items-center relative">
                <BusinessModels />
                <Brands />
            </div>
        </div>
    )
}

export default HomeMain