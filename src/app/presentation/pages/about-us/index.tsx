import { useTitle } from "@/app/utils/hooks/useTitle";
import { Layout } from "../../components/core/layouts/layout";
import AboutUsMain from "../../components/about-us/main";

const AboutUsIndex = () => {

    useTitle('Sobre');

    return (
        <Layout>
            <AboutUsMain />
        </Layout>
    );
};

export default AboutUsIndex;