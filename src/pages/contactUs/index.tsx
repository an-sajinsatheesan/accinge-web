import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page";
import { PageHeading } from "@/components/common/page-heading";
import ConatctDetails from "./contact-page";
import ConatactUs from "../home/landing-contact-us/ContactUs";



const Contact: NextPageWithLayout = () => {
    return (
        <> 
            <PageHeading Title={'Contact Us'}/>
            <ConatctDetails/>
            <ConatactUs />
        </> 
    );
};

Contact.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Contact;