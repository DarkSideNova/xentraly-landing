import { useTitle } from "@/app/utils/hooks/useTitle";
import { Layout } from "../../components/core/layouts/layout";
import ProductsMain from "../../components/products/main";

const ProductsIndex = () => {

    useTitle('Productos');

    return (
        <Layout>
            <ProductsMain />
        </Layout>
    );
};

export default ProductsIndex;