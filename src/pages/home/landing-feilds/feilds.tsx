import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import ServiceList from './../../../shared/json/data.json';
import { ColumnCard } from '@/components/common/column-card';
import SectionHeading from '@/components/common/section-heading';
import FeildHeading from './../../../shared/json/heading.json'


const ProminentFeilds: React.FC = () => {

    const [List, setServiceList] = useState<any>(ServiceList.services);
    const [heading, setHeading] = useState<Heading>(FeildHeading.feilds);

    console.log()
    return (
        <>
            <div className="pb-12 md:pb-40 overflow-hidden py-8 relative">
                <div className="max-w-[93rem] mx-auto w-100 flex justify-center">
                    <div className='w-full py-3 md:w-8/12 md:p-0 flex flex-col justify-center items-center'>
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8">
                            <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-center bg-cover rounded-3xl">
                                <div className='rounded-3xl text-center border border-gray-100 p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                    <div className='items-center flex w-100 justify-center'>
                                        <Image src="/static/assets/govt.svg" alt="ITC logo" width={40} height={40} className='fill-[#FF9800]'/>
                                    </div>
                                    <h1 className='font-semibold my-2.5'>Government</h1>
                                    <h1 className='text-xs leading-5'> We provide tailored solutions and expertise to streamline operations and enhance efficiency within government agencies</h1>
                                </div>
                            </div>
                            <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-center bg-cover rounded-3xl">
                                <div className='rounded-3xl text-center border border-gray-100 p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                    <div className='items-center flex w-100 justify-center'>
                                        <Image src="/static/assets/bank.svg" alt="ITC logo" width={40} height={40} />
                                    </div>
                                    <h1 className='font-semibold my-2.5'>Banking</h1>
                                    <h1 className='text-xs leading-5'> We provide tailored solutions and expertise to streamline operations and enhance efficiency within government agencies</h1>
                                </div>
                            </div>
                            <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-center bg-cover rounded-3xl">
                                <div className='rounded-3xl text-center border border-gray-100 p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                    <div className='items-center flex w-100 justify-center'>
                                        <Image src="/static/assets/construct.svg" alt="ITC logo" width={40} height={40} />
                                    </div>
                                    <h1 className='font-semibold my-2.5'>Construction</h1>
                                    <h1 className='text-xs leading-5'> We provide tailored solutions and expertise to streamline operations and enhance efficiency within government agencies</h1>
                                </div>
                            </div>
                            <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-center bg-cover rounded-3xl">
                                <div className='rounded-3xl text-center border border-gray-100 p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                    <div className='items-center flex w-100 justify-center'>
                                        <Image src="/static/assets/retail.svg" alt="ITC logo" width={40} height={40} />
                                    </div>
                                    <h1 className='font-semibold my-2.5'>Retail</h1>
                                    <h1 className='text-xs leading-5'> We provide tailored solutions and expertise to streamline operations and enhance efficiency within government agencies</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ProminentFeilds;