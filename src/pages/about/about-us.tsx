import SectionHeading from '@/components/common/section-heading';
import Image from 'next/image';
import React, { useState } from 'react';
import IndustryHeadingList from './../../shared/json/heading.json';
import Digitalization from '../home/landing-digitalization/digitilization';
import ConatactUs from '../home/landing-contact-us/ContactUs';



const AboutUs: React.FC = () => {
    const [heading, setHeading] = useState<Heading>(IndustryHeadingList.aboutUs);


    return (
        <>
            <div className="bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-no-repeat bg-center bg-cover overflow-hidden h-[350px]">
                <div className="flex flex-col w-full h-full items-center justify-around md:flex-row p-3 md:p-0 gap-2">
                    <div className="max-w-lg text-4xl font-semibold leading-9">
                        About Us
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-20'>
                <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 pb-44">
                    <div className="col-span-2 grid items-center justify-center gap-4">
                        <h5 className='text-8xl font-semibold tracking-widest text-[#c1b7b7]'>OUR</h5>
                        <h5 className='text-8xl text-slate-800 font-semibold tracking-widest'>MISSION</h5>
                    </div>
                    <div className="col-span-2 grid items-center justify-center">
                        <h5 className='text-lg text-slate-800 font-semibold tracking-widest'> &ldquo; We endeavor to come up with cutting-edge solutions that not only meet but surpass our clients expectations, with an uncompromising dedication to excellence. Our skilled team utilizes the power of technological advances to create high-quality, scalable, and efficient software products. Take part in us as we define the future of software development through innovation,
                            creativity, and a never-ending quest of perfection.&rdquo;</h5>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 pb-44">
                    <div className="col-span-2 grid items-center justify-center">
                        <h5 className='text-lg text-slate-800 font-semibold tracking-widest'> &ldquo;We aspire to establish a future in which innovative technology can be seamlessly incorporated into everyday life. We are devoted to developing software solutions that transcend borders, improve user experiences, and drive company success by encouraging innovation and embracing evolving trends. Join us in creating a digital environment that expands opportunities and enhances the globe.&rdquo;</h5>
                    </div>
                    <div className="col-span-2 grid items-center justify-center gap-4">
                        <h5 className='text-8xl font-semibold tracking-widest text-[#c1b7b7]'>OUR</h5>
                        <h5 className='text-8xl text-slate-800 font-semibold tracking-widest'>VISION</h5>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 pb-10">
                    <Image src="/static/assets/choose-us.png" alt="team" width={460} height={460} className='drop-shadow-lg shadow-gray-600/10' />
                    <div className="flex flex-col ">
                        <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 py-1.5 flex gap-6 items-center z-[9]" >
                                <div className='w-[3.5px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Agile methodology</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'> Client Relationships</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Transparent approach</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3.5px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Scalability</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Customer-centric</h1>
                            </div>
                            <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 flex py-1.5 gap-6 items-center z-[9]" >
                                <div className='w-[3px] h-[40px] bg-[#FF9800] rounded-lg'></div>
                                <h1 className='text-sm'>Collaboration</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <ConatactUs />

        </>

    );
};

export default AboutUs;