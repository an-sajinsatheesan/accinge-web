import React from 'react';

const HomeBody: React.FC = () => {
    return (
        <>

            <div className="bg-[#eff3ff] relative overflow-hidden h-screen">
                <div className="max-w-6xl mx-auto py-28">
                    <div className="flex gap-8 items-center">
                        <div className="">
                            <h1 className=''>Solution For</h1>
                            <h2 className='text-4xl font-extrabold'>Every IT Bussiness</h2>
                            <p className="m-0 text-lg max-w-sm py-4"> Enhancing your digital transformation process through product development.</p>
                            <p className="text-lg">Acknowledged by,</p>
                        </div>
                        <div className="">
                            <img src="" alt="img" />
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

export default HomeBody;