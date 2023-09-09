import Image from 'next/image';
import React, { useState } from 'react';



const ConatactUs: React.FC = () => {


    return (
        <>
            <div className="contact-card">
                <div className="flex w-10/12 items-center justify-around">
                    <div className="max-w-lg text-[20px] leading-9">
                        Stay ahead of the curve with news, insights and updates from us about issues relevant to our organization and its work.
                    </div>
                    <div className="w-1/3 relative">
                        <Image src="/static/assets/arrow.svg" alt="Arrow" width={40} height={40} className='absolute arrow-img'/>
                        <input type="email" placeholder='Your Email Address' className='border-ip' />
                    </div>
                </div>

            </div>

        </>

    );
};

export default ConatactUs;