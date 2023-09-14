import React, { useState } from 'react';
import Image from 'next/image';
import DigitalList from './../../../shared/json/data.json';

interface SectionControlInterface {
    isShowHeading: boolean;
}

const Digitalization: React.FC<SectionControlInterface> = ({isShowHeading}: SectionControlInterface) => {
    const [digital, setDigitalList] = useState<any>(DigitalList.digital);

    return (
        <>
            <div className=" pb-32 overflow-hidden">
                {
                    isShowHeading &&
                    <>
                        <h1 className='sub-green-heading text-center p-0 md:py-4'>Partners</h1>
                        <h1 className='max-w-6xl mx-auto w-100 grid justify-center banner-title p-3 md:py-8 text-center'>Together Towards Digitalization</h1>
                        <h1 className='max-w-4xl mx-auto w-100 banner-subtitle text-center p-3 md:pb-4'>Join us on our journey towards digitalization, where we harness cutting-edge technology, innovation, and collaboration to create a future where connectivity and efficiency define every aspect of our world.</h1>
                    </>
                }

                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 max-w-6xl mx-auto gap-8 p-3 md:p-0">
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