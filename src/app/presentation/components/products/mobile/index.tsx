import { twMerge } from "tailwind-merge"
import Card from "./components/card"
import listOfProducts from "../list"

const ProductsMobile = () => {

    return (
        <div className={twMerge([
            "w-full flex flex-col justify-start items-center relative bg-[#151C2F]",
            "gap-5 px-5 py-4"
        ])}>
            <div className="w-full flex flex-col justify-center items-center relative">
                <h3 className="text-[26px] font-medium text-white text-center">Nuestros Productos</h3>
                <p className="text-[12px] font-light text-white text-center">Descubre la plataformas que hemos desarrollado para conectar algunos ecosistemas</p>
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

export default ProductsMobile