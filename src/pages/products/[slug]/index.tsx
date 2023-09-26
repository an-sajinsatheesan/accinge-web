import SectionHeading from "@/components/common/section-heading";
import Industries from "../../home/landing-industries/industries";
import { useState } from "react";
import FeildHeading from '../../../shared/json/heading.json'
import ServiceList from '../../../shared/json/feild-card.json';
import ConatactUs from "../../home/landing-contact-us/ContactUs";
import FeildCard from "@/components/common/feild-card";
import Image from "next/image";
import SpecialFeature from "@/components/common/special-feature-card";
import { NextPageWithLayout } from "@/types/page";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";


const ProductsAndServices: NextPageWithLayout = () => {
    const [heading, setHeading] = useState<Heading>(FeildHeading.products);
    const [benefits, setBenefits] = useState<Heading>(FeildHeading.benefits);
    const [intro, setintro] = useState<Heading>(FeildHeading.expertise);
    const [List, setServiceList] = useState<any>(ServiceList.featureSector);

    const router = useRouter();

    const handleContactUsClick = () => {
        router.push('/contactUs');
    };


    return (
        <>
            <div className="bg-[url('./../../public/static/assets/beams-pricing.webp')] bg-no-repeat bg-center bg-cover overflow-hidden h-[430px] mb-16">
                <div className="max-w-6xl mx-auto flex flex-col w-full h-full items-start justify-center md:p-0 gap-2 asasas">
                    <div className="max-w-lg text-4xl font-semibold leading-[3rem] pt-10">
                        Human Resource Management System
                    </div>
                    <div className='w-[120px] h-[5px] bg-[#FF9800] rounded-lg'></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={handleContactUsClick}>
                        <h1 className="text-lg text-black font-semibold tracking-[1px]">CONTACT US</h1>
                        <Image src="/static/assets/arrow.svg" alt="Arrow" width={35} height={35} className='animate-ping' />
                    </div>
                </div>
            </div>
            <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
            <div className="p-8"></div>
            <div className="text-4xl font-semibold leading-[3rem] text-center py-4">KEY <span className="text-[#FF9800] text-4xl font-semibold leading-[3rem]">FEATURES</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto gap-8 asasas">
                {List?.length && List.map((item: any, index: any) => (
                    <div key={item.id}>
                        <FeildCard col={item.col} img={item.img} mainTitle={item.mainTitle} subTitle={item.subTitle} key={item.id} />
                    </div>
                ))}
            </div>
            <div className="p-8"></div>
            <div className="mt-20 bg-[#fff1fe] h-full md:px-4 md:py-20 asasas">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading heading={intro.heading} mainTitle={intro.mainTitle} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/approval.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-6">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/allocation.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/approval.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-6">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/monitoring.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-6">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/approval.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-6">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/static/assets/approval.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-6">Right from blueprinting the mobile app’s user interface to developing the backend that runs on the cloud,
                                we offer end-to-end mobile application development services.</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="p-8"></div>
            <div className="mt-20">
                <SectionHeading heading={benefits.heading} mainTitle={benefits.mainTitle} />
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto gap-8 asasas">
                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />
                    <SpecialFeature />
                </div>

            </div >
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 asasas">
                <div className="col-span-2 grid items-center justify-center gap-2">
                    {/* <h5 className='text-4xl font-semibold tracking-widest text-[#c1b7b7]'>Application Management and Administration</h5> */}
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px]'>Application Management and Administration</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center">
                    <h5 className='text-base text-black leading-8'> Application Management and Administration of a Human Resource Management System (HRMS) involves overseeing the entire HR technology ecosystem. This encompasses configuration, updates, data management, and user support. It ensures seamless integration, compliance, and optimization, allowing organizations to streamline HR processes, enhance workforce productivity, and make data-driven decisions for strategic HR planning.
                        Effective HRMS management is critical for maintaining data accuracy, security, and delivering an exceptional employee experience.</h5>
                </div>
            </div>
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 asasas pls-work">
                <div className="col-span-2 grid items-center justify-center">
                    <h5 className='text-base text-black leading-8'>Digital Fulfillment for HRMS customers involves providing a seamless, self-service experience. Users can access, customize, and manage HR-related processes online, from onboarding to benefits enrollment and performance management. This enhances user autonomy, efficiency, and reduces administrative burden,
                        ultimately empowering organizations to deliver a more agile and employee-centric HR service.</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center gap-2">
                    {/* <h5 className='text-4xl font-semibold tracking-widest text-[#c1b7b7]'>Application Management and Administration</h5> */}
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px]'>Digital Fulfillment for Customers</h5>
                </div>

            </div>
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 asasas">
                <div className="col-span-2 grid items-center justify-center gap-2">
                    {/* <h5 className='text-4xl font-semibold tracking-widest text-[#c1b7b7]'>Application Management and Administration</h5> */}
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px]'>Flexible and scalable For Customers</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center">
                    <h5 className='text-base text-black leading-8'> A flexible and scalable HRMS is designed to adapt to varying organizational needs. It accommodates growth, easily integrates with existing systems, and allows customization to match specific HR processes. This empowers customers to tailor their HR technology to evolving
                        requirements, ensuring long-term efficiency and effectiveness in workforce management.</h5>
                </div>
            </div>

            <ConatactUs />

        </>

    );
};

ProductsAndServices.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};


export default ProductsAndServices;