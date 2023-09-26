import Image from 'next/image';
import React, { useState } from 'react';



const ConatactUs: React.FC = () => {


    return (
        <>
            <Image src="/static/assets/overlayMd.webp" alt="Overlay" width={1580} height={300} className='w-100 rotate-180' layout="responsive"/>
            <div className="contact-card">
                <div className="flex flex-col w-full md:w-10/12 items-center justify-around md:flex-row padding-adj md:p-0 gap-2">
                    <div className="max-w-[38rem] text-[20px] leading-9">
                        Stay ahead of the curve with news, insights and updates from us about issues relevant to our organization and its work.
                    </div>
                    <div className="w-full sm:w-2/4 md:w-1/3 relative">
                        <Image src="/static/assets/arrow.svg" alt="Arrow" width={40} height={40} className='absolute arrow-img'/>
                        <input type="email" placeholder='Your Email Address' className='border-ip' />
                    </div>
                </div>

            </div>

        </>

    );
};

export default ConatactUs;