import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import ServiceList from './../../../shared/json/feild-card.json';
import { ColumnCard } from '@/components/common/column-card';
import SectionHeading from '@/components/common/section-heading';
import FeildHeading from './../../../shared/json/heading.json'
import FeildCard from '@/components/common/feild-card';


const ProminentFeilds: React.FC = () => {

    const [List, setServiceList] = useState<any>(ServiceList.serviceSector);
    const [heading, setHeading] = useState<Heading>(FeildHeading.feilds);

    console.log()
    return (
        <>
            <div className="pb-12 md:pb-40 overflow-hidden py-8 relative asasas">
                <div className="max-w-[93rem] mx-auto w-100 flex justify-center">
                    <div className='w-full py-3 md:w-8/12 md:p-0 flex flex-col justify-center items-center'>
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8">
                            {List?.length && List.map((item: any, index: any) => (
                                <div key={item.id}>
                                    <FeildCard col={item.col} img={item.img} mainTitle={item.mainTitle} subTitle={item.subTitle} key={item.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default ProminentFeilds;