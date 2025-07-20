import { twMerge } from "tailwind-merge"
import useResponsive from "@/app/utils/hooks/useResponsive"
import Ecosystem from "./components/ecosystem"
import Automatization from "./components/automatization"

const HomeMain = () => {

      const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    return(
        <div className={twMerge([
            "w-full flex flex-col justify-start items-center relative",
            isTabletOrMobile ? "pt-10 gap-5" : "pt-20 gap-10"
        ])}>
            <Automatization/>
            <Ecosystem/>
        </div>
    )
}

export default HomeMain