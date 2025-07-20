import { useTitle } from "@/app/utils/hooks/useTitle";
import { Layout } from "../../components/core/layouts/layout";
import HomeMain from "../../components/home/main";

const HomeIndex = () => {

    useTitle('Inicio');

    return (
        <Layout>
            <HomeMain/>
        </Layout>
    );
};

export default HomeIndex;