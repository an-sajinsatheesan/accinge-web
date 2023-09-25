import React, { useState } from 'react';
import Image from 'next/image';
import DigitalList from './../../../shared/json/data.json';
import SectionHeading from '@/components/common/section-heading';
import DigitalHeadingList from './../../../shared/json/heading.json'


interface SectionControlInterface {
    isShowHeading: boolean;
}

const Digitalization: React.FC<SectionControlInterface> = ({isShowHeading}: SectionControlInterface) => {
    const [digital, setDigitalList] = useState<any>(DigitalList.digital);
    const [heading, setHeading] = useState<Heading>(DigitalHeadingList.Digitilization);

    return (
        <>
            <div className=" pb-32 overflow-hidden">
                {
                    isShowHeading &&
                    <>
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                    </>
                }

                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto gap-8 p-3 md:p-0">
                    {digital?.length && digital.map((item: any, index: any) => (
                        <div className='card-digital drop-shadow-lg shadow-grey-300/50' key={item.id}>
                            <Image src={item.Img} alt="logo" width={item.width} height={item.height} className='px-3' />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Digitalization;