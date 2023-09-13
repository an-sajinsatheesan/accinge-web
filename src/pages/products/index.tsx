import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page";
import Products from "../landing/landing-products/products";
import Industries from "../landing/landing-industries/industries";



const Product: NextPageWithLayout = () => {
    return (
        <>
            <Industries isShowHeading={false} />
        </>

    );
};

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Product;