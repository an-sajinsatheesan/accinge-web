import React from 'react';
import styles from './landing.module.scss';
import Image from 'next/image';


const Products: React.FC = () => {
    return (
        <>
            <div className="bg-[#eff3ff] py-16 overflow-hidden product relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-8">
                    <div className='card-sec'>
                        <div className="grid grid-cols-2 items-center justify-between">
                            <div className="col-span-1 ">
                                <h4>Human Resource Management System</h4>
                                <p>With our comprehensive Human Resource Management System, which is created to
                                    streamline administration and promote
                                    organizational success, you can transform your HR procedures and promote
                                    productivity among your employees.</p>
                                <button className="border-btn">Learn more </button>
                            </div>

                            <div className="grid justify-center">
                                <Image src="/static/assets/promo.png" alt="" width={140} height={155} />
                            </div>
                            {/* <img className="img-fluid" src="./assets/images/promo.png" alt="image"> */}

                        </div>
                    </div>
                    <div className='card-sec'>
                        <div className="grid grid-cols-2 items-center justify-between">
                            <div className="col-span-1 ">
                                <h4>Human Resource Management System</h4>
                                <p>With our comprehensive Human Resource Management System, which is created to
                                    streamline administration and promote
                                    organizational success, you can transform your HR procedures and promote
                                    productivity among your employees.</p>
                                <button className="border-btn">Learn more </button>
                            </div>

                            <div className="grid justify-center">
                                <Image src="/static/assets/promo.png" alt="" width={140} height={155} />
                            </div>
                            {/* <img className="img-fluid" src="./assets/images/promo.png" alt="image"> */}

                        </div>  
                    </div>
                </div>
            </div>
        </>

    );
};

export default Products;