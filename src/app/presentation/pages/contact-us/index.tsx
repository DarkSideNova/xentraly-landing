import { useTitle } from "@/app/utils/hooks/useTitle";
import { Layout } from "../../components/core/layouts/layout";
import ContactUsMain from "../../components/contact-us/main";

const ContactUsIndex = () => {

    useTitle('Contáctanos');

    return (
        <Layout>
            <ContactUsMain />
        </Layout>
    );
};

export default ContactUsIndex;