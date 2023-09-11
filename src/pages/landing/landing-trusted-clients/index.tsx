import Image from 'next/image';
import React, { useState } from 'react';
import styles from './landing.module.scss';
import BrandList from './../data.json';



const TrustedBrands: React.FC = () => {

    const [brands, setBrandslist] = useState<any>(BrandList.brands);

    return (
        <>
            <div className="">
                <div className="border-y border-slate-300 text-center py-12">
                    <h5 className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">TRUSTED BY YOUR FAVORED TOP COMPANIES</h5>
                    <div className="flex gap-40 justify-center pt-12">
                        {brands?.length && brands.map((item: any, index: any) => (
                            <div key={item.id}>
                                <Image src={item.Img} alt="" width={50} height={50}/>
                            </div>

                        ))}
                    </div>
                </div>
            </div>


        </>

    );
};

export default TrustedBrands;