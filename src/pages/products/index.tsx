import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page";
import Products from "../home/landing-products/products";
import Industries from "../home/landing-industries/industries";
import ConatactUs from "../home/landing-contact-us/ContactUs";
import { PageHeading } from "@/components/common/page-heading";
import ProductsServices from "./service-product";



const Product: NextPageWithLayout = () => {
    return (
        <> 
            <PageHeading Title={'Products & Services'}/>
            <ProductsServices/>
            <ConatactUs />
        </> 
    );
};

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Product;