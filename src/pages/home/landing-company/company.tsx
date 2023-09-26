import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';



const Company: React.FC = () => {


    return (
        <>
            {/* <Image src="/static/assets/overlayMd.webp" alt="" width={1580} height={300} className='w-100' layout="responsive"/> */}
            <div className="asasas">
                <div className="rounded-lg bg-[#f9e3f8] max-w-6xl mx-auto mt-4 md:mt-20" >
                    <div className="flex flex-col w-full items-center justify-around md:flex-row py-12 px-3 gap-2">
                        <div className="max-w-none md:max-w-lg flex flex-col">
                            <h1 className='w-100 grid justify-start font-semibold text-[13px]  mb-3 tracking-[1.5px] leading-4 text-[#fe6f46]'>OUR COMPANY</h1>
                            <h1 className='text-[17px] tracking-[1px] leading-8'>Accinge provides software solutions as well as bespoke software development
                                services for corporate establishments and government sectors in UAE and EMEA region.</h1>
                        </div>
                        <div className="w-full md:w-2/4 md:w-1/3"> <h1 className='text-gray-600 leading-7 mt-3 italic'>
                            Accinge is a product engineering services company focused on high quality AGILE software product development starting from software blueprinting and
                            wireframing to deployments at scale.
                            We partner with global enterprises, helping them to apply innovation in every facet of business.</h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-100 pb-8 items-center justify-center gap-2">
                        <h1 className="text-center cursor-pointer text-teal-950">Your search for the right innovation partner ends here.</h1>
                        <Link href="about">
                            <div className="flex items-center justify-center gap-2">
                                <span className='text-[#fe6f46] font-extrabold'> Find out more about Us </span>
                                <Image src="/static/assets/arrow.svg" alt="Arrow" width={25} height={25} className='animate-ping arrow-col' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Company;