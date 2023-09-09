import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import IndustryList from '../data.json';


const Industries: React.FC = () => {

    const [List, setIndustryList] = useState<any>(IndustryList.industries);

    console.log()
    return (
        <>
            <div className=" pb-40 overflow-hidden relative">
                {/* <div className="absolute inset-0 top-40 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                    <div className="h-40 bg-gradient-to-br from-[#1565c0] to-[#c084fc] blur-[106px] dark:from-blue-700"></div>
                    <div className="h-60 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                </div> */}
                <h1 className='max-w-6xl mx-auto w-100 grid justify-center sub-green-heading'>Industries</h1>
                <h1 className='max-w-6xl mx-auto w-100 grid justify-center banner-title  py-8'>We are touch with</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                    {List?.length && List.map((item: any, index: any) => (
                        <div className='industry-card-sec drop-shadow-lg shadow-gray-600/10' key={item.id}>
                            <div className="grid grid-cols-1">
                                <div className="img-sec">
                                    <Image src={item.Img} alt="" width={350} height={240} className='w-100 rounded-t-[10px] brightness-50' />
                                </div>
                                <div className="detail-sec p-3">
                                    <p className='card-heading'>{item.title}</p>
                                    <p className='card-subheading'>{item.Description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>

    );
};

export default Industries;