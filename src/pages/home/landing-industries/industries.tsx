import Image from 'next/image';
import React, { useState } from 'react';
import IndustryHeadingList from './../../../shared/json/heading.json';
import SectionHeading from '@/components/common/section-heading';
import { useRouter } from 'next/router';

interface IndustriesInterface {
    isShowHeading: boolean;
    IndustryList: any
}


const Industries: React.FC<IndustriesInterface> = ({ isShowHeading, IndustryList }: IndustriesInterface) => {
    const [List, setIndustryList] = useState<any>(IndustryList);
    const [heading, setHeading] = useState<Heading>(IndustryHeadingList.industryHeading);

    const router = useRouter();

    const handleContactUsClick = (url:any) => {
        router.push(`/products/${url}`);
    };


    return (
        <>
            <div className=" pb-12 md:pb-40 overflow-hidden group relative">
                {isShowHeading && <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 p-3 sm:p-0 md:p-0 lg:p-0">
                    {List?.length && List.map((item: any, index: any) => (
                        <div className='industry-card-sec drop-shadow-lg shadow-gray-600/10 content-div' key={item.id}>
                            <div className="grid grid-cols-1 relative h-full">
                                <div className="img-sec">
                                    <Image src={item.Img} alt="" width={350} height={240} className='w-100 rounded-t-[10px]' layout="responsive" />
                                </div>
                                <div className="detail-sec p-3">
                                    <p className='card-heading '>{item.title}</p>
                                    <p className='card-subheading'>{item.Description}</p>
                                </div>
                                <div className="absolute know-more">
                                    <span className="text-2xl p-2 font-semibold text-black tracking-wider leading-tight font-sans">{item.title}</span>
                                    <div className="pt-8 text-center">
                                        <button className="text-center rounded-lg p-3 bg-white text-gray-700 font-bold text-sm" onClick={() => handleContactUsClick(item.url)}>Learn more</button>
                                    </div>
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