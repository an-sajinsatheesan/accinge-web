import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import IndustryList from '../data.json';


const Technologies: React.FC = () => {

    const [List, setIndustryList] = useState<any>(IndustryList.industries);

    console.log()
    return (
        <>
            <div className="bg-[#eff3ff] pb-40 overflow-hidden py-8">
                <div className="max-w-6xl mx-auto w-100 flex justify-center">
                    <div className='w-8/12 flex flex-col justify-center items-center'>
                        <h1 className='sub-green-heading py-4'>Technology</h1>
                        <h1 className='banner-title py-2'>Services We Offer</h1>
                        <h1 className='banner-subtitle text-center py-4'>We assist clients to implement robust solutions that are aligned with their digital strategy by building on our years of expertise in application design and development.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                            <div className="service-card-sec">
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
            </div>

        </>

    );
};

export default Technologies;