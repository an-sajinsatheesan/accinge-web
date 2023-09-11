import React, { useState } from 'react';
import Image from 'next/image';
import DigitalList from './../data.json';


const ClientFeedback: React.FC = () => {
    const [digital, setDigitalList] = useState<any>(DigitalList.digital);

    return (
        <>
            <div className=" pb-40 overflow-hidden  ">
                <Image src="/static/assets/overlayMd.webp" alt="" width={1580} height={300} className='w-100' />
                <div className="max-w-6xl mx-auto">
                    <h1 className='w-100 grid justify-center banner-title'>See What Our Clients Believe</h1>
                    <h1 className='banner-subtitle text-center py-4 max-w-4xl mx-auto w-100 banner-subtitle text-center'>Step into our world and witness the invincible trust in our services, an affirmation to our passion as well as excellence in what we do.</h1>
                    <div className="grid grid-rows-2 grid-flow-col gap-8">
                        <div className="row-span-3">
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 drop-shadow-lg shadow-grey-300/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                <Image src="/static/assets/client-color/itc_logo.png" alt="" width={180} height={40} />
                                <div className="e">Their extensive technology capabilities proved invaluable in the project, as they exponentially enhanced the initial project ideas, exceeding what we had hoped for.</div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 drop-shadow-lg shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                <Image src="/static/assets/client-color/itc_logo.png" alt="" width={180} height={40} />
                                <div className="e">Their extensive technology capabilities proved invaluable in the project, as they exponentially enhanced the initial project ideas, exceeding what we had hoped for.</div>
                            </div>
                        </div>
                        <div className="row-span-2 col-span-1">
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 drop-shadow-lg shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                <Image src="/static/assets/client-color/itc_logo.png" alt="" width={180} height={40} />
                                <div className="e">Their extensive technology capabilities proved invaluable in the project, as they exponentially enhanced the initial project ideas, exceeding what we had hoped for.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ClientFeedback;