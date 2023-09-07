import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import BrandList from './../data.json';



const BaseBody: React.FC = () => {

    const [brands, setBrandslist] = useState<any>(BrandList.brands);

    return (
        <>
            <div className="bg-[#eff3ff] relative overflow-hidden h-screen">
                <div className="max-w-6xl mx-auto py-28">
                    <div className="flex gap-36 items-center">
                        <div className="">
                            <h1 className='banner-title'>Solution For</h1>
                            <h2 className='banner-title'>Every IT Bussiness</h2>
                            <h5 className="m-0 text-lg max-w-md py-4"> Enhancing your digital transformation process through product development.</h5>
                            <h5 className="text-lg mb-4">Acknowledged by,</h5>
                            <div className="flex gap-2">
                                {brands?.length && brands.map((item: any, index: any) => (

                                    <div key={item.id}>
                                        <Image src={item.Img} alt="" width={50} height={50} />
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="">
                            <Image src="/static/assets/banner_image.png" alt="" width={540} height={540} />
                        </div>

                    </div>

                </div>
                <div className=''>
                    <div className="absolute h-96 w-96 bg-[#115CFF12] rounded-[70px] origin-center rotate-45 one"></div>
                    <div className="absolute h-96 w-96 bg-[#115CFF12] rounded-[70px] origin-center rotate-45 two"></div>
                </div>
            </div>


        </>

    );
};

export default BaseBody;