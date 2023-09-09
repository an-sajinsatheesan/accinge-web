import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import IndustryList from '../data.json';


const Technologies: React.FC = () => {

    const [List, setIndustryList] = useState<any>(IndustryList.industries);

    console.log()
    return (
        <>
            <div className=" pb-40 overflow-hidden py-8 relative">
                <div className="max-w-6xl mx-auto w-100 flex justify-center">
                    <div className='w-8/12 flex flex-col justify-center items-center'>
                        <h1 className='sub-green-heading py-4'>Technology</h1>
                        <h1 className='banner-title py-2'>Services We Offer</h1>
                        <h1 className='banner-subtitle text-center py-4'>We assist clients to implement robust solutions that are aligned with their digital strategy by building on our years of expertise in application design and development.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                            <div className="rounded-3xl border border-gray-100 bg-white py-3.5 px-4 shadow-lg shadow-cyan-500/50 flex gap-2 align-center z-[99]">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                Web Development
                            </div>
                            <div className="service-card-sec">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                App Development
                            </div>
                            <div className="service-card-sec">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                Data Security
                            </div>
                            <div className="service-card-sec">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                UI/UX Design
                            </div>
                            <div className="service-card-sec">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                Graphic Design
                            </div>
                            <div className="service-card-sec">
                                <Image src="/static/assets/icons/mobile.svg" alt="" width={18} height={18} />
                                Digital Marketing
                            </div>
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