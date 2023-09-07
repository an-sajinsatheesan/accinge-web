import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import IndustryList from './../data.json';


const Industries: React.FC = () => {

    const [List, setIndustryList] = useState<any>(IndustryList.industries);

    console.log()
    return (
        <>
            <div className="bg-[#eff3ff] py-16 overflow-hidden">
                <h1 className='max-w-6xl mx-auto w-100 grid justify-center'>Industries</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                    {List?.length && List.map((item: any, index: any) => (
                        <div className='industry-card-sec' key={item.id}>
                            <div className="grid grid-cols-1">
                                <div className="img-sec">
                                    <Image src={item.Img} alt="" width={350} height={240} className='w-100 rounded-t-[10px]' />
                                </div>
                                <div className="detail-sec p-2">
                                    <p>{item.title}</p>
                                    <p>{item.Description}</p>
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