import SectionHeading from '@/components/common/section-heading';
import Image from 'next/image';
import React, { useState } from 'react';
import IndustryHeadingList from './../../shared/json/heading.json';
import ConatactUs from '../home/landing-contact-us/ContactUs';
import { PageHeading } from '@/components/common/page-heading';
import { Mission } from './mission';
import { Vision } from './vision';
import { ColumnCard } from '@/components/common/column-card';
import Digitalization from '../home/landing-digitalization/digitilization';

const arr = [
    { title: "Agile methodology" },
    { title: "Client Relationships" },
    { title: "Transparent approach" },
    { title: "Scalability" },
    { title: "Customer-centric" },
    { title: "Collaboration" },
]

const AboutUs: React.FC = () => {
    const [heading, setHeading] = useState<Heading>(IndustryHeadingList.aboutUs);


    return (
        <>
            <PageHeading Title={'About Us'} />
            <div className='max-w-7xl mx-auto py-20'>
                <Mission />
                <Vision />
                <div className="flex flex-col lg:flex-row gap-4 pb-10">
                    <Image src="/static/assets/choose-us.png" alt="team" width={460} height={460} className='drop-shadow-lg shadow-gray-600/10' />
                    <div className="flex flex-col ">
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">

                            {
                                arr.map((item, index) => {
                                    return (
                                        <ColumnCard cardItem={item} key={index} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div >
            {/* <Digitalization isShowHeading={true}/> */}
            <ConatactUs />

        </>

    );
};

export default AboutUs;