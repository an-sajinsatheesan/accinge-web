import React, { useState } from 'react';
import Image from 'next/image';
import DigitalList from './../data.json';


const Digitalization: React.FC = () => {
    const [digital, setDigitalList] = useState<any>(DigitalList.digital);

    return (
        <>
            <div className="bg-[#eff3ff] pb-40 overflow-hidden">
                <h1 className='max-w-6xl mx-auto w-100 grid justify-center banner-title  py-8'>Together Towards Digitalization</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-6xl mx-auto gap-8">
                    {digital?.length && digital.map((item: any, index: any) => (
                        <div className='card-digital' key={item.id}>
                            <Image src={item.Img} alt="logo" width={item.width} height={item.height} className='px-3' />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Digitalization;