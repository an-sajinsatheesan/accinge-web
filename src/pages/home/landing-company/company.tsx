import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';



const Company: React.FC = () => {


    return (
        <>
            {/* <Image src="/static/assets/overlayMd.webp" alt="" width={1580} height={300} className='w-100' layout="responsive"/> */}
            <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-top bg-cover ">
                <div className="flex flex-col w-full items-center justify-around md:flex-row py-16 px-20 gap-2">
                    <div className="max-w-lg flex flex-col">
                        <h1 className='w-100 grid justify-start font-semibold text-[13px] text-[#FF9800] mb-3 tracking-[1.5px] leading-6'>OUR COMPANY</h1>
                        <h1 className='text-[23px] tracking-[1px] leading-8'>Accinge provides software solutions as well as bespoke software development
                            services for corporate establishments and government sectors in UAE and EMEA region.</h1>
                    </div>
                    <div className="w-full sm:w-2/4 md:w-1/3"> <h1 className='text-gray-600 leading-[22px] mt-3'>
                        Accinge is a product engineering services company focused on high quality AGILE software product development starting from software blueprinting and
                        wireframing to deployments at scale.
                        We partner with global enterprises, helping them to apply innovation in every facet of business.</h1>
                    </div>
                </div>
                <h1 className="w-100 text-center pb-6 cursor-pointer text-teal-950">Your search for the right innovation partner ends here. <Link href="about"><span className='text-teal-950 font-extrabold'> Find out more about Us </span></Link></h1>
            </div>

        </>

    );
};

export default Company;