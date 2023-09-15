import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import ServiceList from './../../../shared/json/data.json';
import { ColumnCard } from '@/components/common/column-card';
import SectionHeading from '@/components/common/section-heading';
import TechnologyHeading from './../../../shared/json/heading.json'


const Technologies: React.FC = () => {

    const [List, setServiceList] = useState<any>(ServiceList.services);
    const [heading, setHeading] = useState<Heading>(TechnologyHeading.Technology);

    console.log()
    return (
        <>
            <div className="pb-12 md:pb-40 overflow-hidden py-8 relative">
                <div className="max-w-6xl mx-auto w-100 flex justify-center">
                    <div className='w-full py-3 md:w-8/12 md:p-0 flex flex-col justify-center items-center'>
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                            {List?.length && List.map((item: any, index: any) => {
                                return (
                                    <ColumnCard cardItem={item} key={index} />
                                )
                            })}
                            {/* {List?.length && List.map((item: any, index: any) => (
                                <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white py-3.5 px-4 flex gap-2 items-center z-[9]" key={item.id}>
                                    <Image src={item.Img} alt="" width={18} height={18} placeholder={!item.Img ? "blur" : "empty"}/>
                                    <h1 className=''>{item.title}</h1>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                    <div className="h-50 bg-gradient-to-br from-[#1565c0] to-purple-300 blur-[106px] dark:from-blue-700"></div>
                    <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                </div>
            </div>

        </>

    );
};

export default Technologies;