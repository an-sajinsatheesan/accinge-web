import SectionHeading from '@/components/common/section-heading';
import Image from 'next/image';
import React, { useState } from 'react';
import IndustryHeadingList from './../../shared/json/heading.json';



const AboutUs: React.FC = () => {
    const [heading, setHeading] = useState<Heading>(IndustryHeadingList.aboutUs);


    return (
        <>
            <div className="contact-card h-[300px]">
                <div className="flex flex-col w-full md:w-10/12 items-center justify-around md:flex-row p-3 md:p-0 gap-2">
                    <div className="max-w-lg text-4xl font-semibold leading-9">
                        About Us
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-20'>
                <div className="flex gap-4">
                    <Image src="/static/assets/choose-us.png" alt="" width={460} height={460} className='drop-shadow-lg shadow-gray-600/10' />
                    <div className="flex flex-col ">
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 py-1.5 flex gap-6 items-center z-[9]" >
                                <div className='w-[3.5px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Agile methodology</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'> Client Relationships</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Transparent approach</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3.5px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Scalability</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Customer-centric</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Collaboration</h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>

    );
};

export default AboutUs;