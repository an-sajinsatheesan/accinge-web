import SectionHeading from "@/components/common/section-heading";
import Industries from "../../home/landing-industries/industries";
import { useState } from "react";
import FeildHeading from './../../../shared/json/heading.json'
import ServiceList from './../../../shared/json/feild-card.json';
import ConatactUs from "../../home/landing-contact-us/ContactUs";
import FeildCard from "@/components/common/feild-card";
import Image from "next/image";
import SpecialFeature from "@/components/common/special-feature-card";


const ProductsAndServices: React.FC = () => {
    const [heading, setHeading] = useState<Heading>(FeildHeading.products);
    const [benefits, setBenefits] = useState<Heading>(FeildHeading.benefits);

    const [List, setServiceList] = useState<any>(ServiceList.serviceSector);


    return (
        <>
            {/* <div className="bg-[url('https://tailwindui.com/img/beams-pricing.webp')] bg-no-repeat bg-center bg-cover overflow-hidden h-[350px]">
                <div className="flex flex-col w-full h-full items-center justify-around md:flex-row p-3 md:p-0 gap-2">
                    <div className="max-w-lg text-4xl font-semibold leading-9">
                        Products & Services
                    </div>
                </div>
            </div>
            <Industries isShowHeading={false} /> */}

            <div className="bg-[url('./../../public/static/assets/beams-pricing.webp')] bg-no-repeat bg-center bg-cover overflow-hidden h-[400px] mb-4">
                <div className="flex flex-col w-full h-full items-start justify-center p-3 md:p-0 gap-2">
                    <div className="max-w-lg text-4xl font-semibold leading-[3rem] pl-10">
                        Human Resource Management System
                    </div>
                    <div className='w-[120px] h-[5px] bg-[#FF9800] rounded-lg ml-10'></div>
                </div>
            </div>
            <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-8">
                {List?.length && List.map((item: any, index: any) => (
                    <div key={item.id}>
                        <FeildCard col={item.col} img={item.img} mainTitle={item.mainTitle} subTitle={item.subTitle} key={item.id} />
                    </div>
                ))}
            </div>
            <div className="mt-20">
                <SectionHeading heading={benefits.heading} mainTitle={benefits.mainTitle} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto gap-8">
                    {/* <div className=" border-4 border-t-[#FF9800] text-center p-3 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                        <h1 className='font-semibold my-2.5'>End-to-End Development</h1>
                        <h1 className='text-xs leading-5'>Right from blueprinting the mobile app’s user interface to developing the backend that
                            runs on the cloud, we offer end-to-end mobile application development services.</h1>
                    </div> */}

                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />

                </div>

            </div >
            <ConatactUs />

        </>

    );
};

export default ProductsAndServices;