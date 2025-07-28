import { twMerge } from "tailwind-merge"
import useResponsive from "@/app/utils/hooks/useResponsive"
import Card from "./components/card"
import listOfProducts from "./list"

const ProductsMain = () => {

    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-center relative bg-[#151C2F] px-[115px] py-[60px]",
            isTabletOrMobile ? "gap-5" : "gap-10"
        ])}>
            <div className="w-full flex flex-col justify-center items-center relative">
                <h3 className="text-[46px] font-medium text-white">Nuestros Productos</h3>
                <p className="text-[16px] font-light text-white">Descubre la plataformas que hemos desarrollado para conectar algunos ecosistemas</p>
            </div>
            {listOfProducts.map((elem, i) => 
                <Card
                    key={i}
                    data={elem}
                />
            )}
        </div>
    )
}

export default ProductsMain