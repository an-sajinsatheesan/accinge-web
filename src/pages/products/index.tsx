import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page";
import ProductsAndServices from "./products";



const Product: NextPageWithLayout = () => {
    return (
        <>
        <ProductsAndServices/>
        </>

    );
};

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Product;