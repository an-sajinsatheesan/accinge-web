import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page";
import Products from "../home/landing-products/products";
import Industries from "../home/landing-industries/industries";



const Product: NextPageWithLayout = () => {
    return (
        <>
            <div className="bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-no-repeat bg-center bg-cover overflow-hidden h-[350px]">
                <div className="flex flex-col w-full h-full items-center justify-around md:flex-row p-3 md:p-0 gap-2">
                    <div className="max-w-lg text-4xl font-semibold leading-9">
                        Products & Services
                    </div>
                </div>
            </div>
            <Industries isShowHeading={false} />
        </>

    );
};

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Product;