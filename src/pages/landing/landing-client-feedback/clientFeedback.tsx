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
                                <div className="mt-3">Their extensive technology capabilities proved invaluable in the project, as they exponentially enhanced the initial project ideas, exceeding what we had hoped for.<br></br><br></br> Their deep expertise and innovative approach not only met our expectations but also elevated the project to new heights.We were consistently impressed with their ability to adapt to challenges, provide creative solutions, and deliver results that far surpassed our initial vision. <br></br><br></br>
                                    We were consistently impressed with their ability to adapt to challenges, provide creative solutions, and deliver results that far surpassed our initial vision. 
                                    Their contribution went far beyond our expectations, and we highly recommend their services to anyone seeking a trusted partner for transformative technology projects.
                                    <br></br></div>
                                <div className="img-sec mt-3 flex gap-2">
                                    <Image src="/static/assets/user-img.jpg" alt="" width={50} height={50} className='rounded-full' />
                                    <div className="details-sec">
                                        {/* <div className="name">
                                            Lewis Hamilton
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            General Manager - ITC
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 drop-shadow-lg shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                <Image src="/static/assets/client-color/honda-logo.png" alt="" width={140} height={30} />
                                <div className="mt-4">Their team responded proactively to sudden market demands by offering insightful recommendations and delivering exceptional work.
                                    This partnership has set a new standard for excellence, and we look forward to many more collaborations in the future</div>
                                <div className="img-sec mt-3 flex gap-2 items-center">
                                    <Image src="/static/assets/user-img.jpg" alt="" width={50} height={50} className='rounded-full' />
                                    <div className="details-sec">
                                        {/* <div className="name">
                                            Max Verstappan
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            General Manager - Honda
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row-span-2 col-span-1">
                            <div className='rounded-3xl border border-gray-100 bg-white p-8 drop-shadow-lg shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                                <Image src="/static/assets/client-color/logo_cupola.png" alt="" width={140} height={30} />
                                <div className="mt-3">They displayed amazing reactivity to unanticipated market swings, providing insightful advice and constantly generating work of great quality.
                                    Their commitment to excellence made the entire process efficient and enjoyable.</div>
                                <div className="img-sec mt-4 flex gap-2">
                                    <Image src="/static/assets/user-img.jpg" alt="" width={50} height={50} className='rounded-full' />
                                    <div className="details-sec">
                                        {/* <div className="name">
                                            Charles Sergio 
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            General Manager - Cupola
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ClientFeedback;