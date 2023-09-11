import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
    return <footer className="border-t border-gray-100 pt-24 pb-8">
        <div className="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
                <div className="col-span-8 md:col-span-2 lg:col-span-4">
                    <div className="flex h-full items-center justify-between gap-6 py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                        <div className='flex flex-col'>
                            <div className="flex ">
                                <a href="#" className="text-[#00a669] text-2xl font-medium">
                                    ACC<span className='text-black'>INGE</span>
                                    <p className='text-black text-xs'>TECHNOLOGIES</p>
                                </a>
                                <Image src="/static/assets/logo-removebg-preview.png" alt="" width={70} height={70} />
                            </div>
                            <h5 className="banner-subtitle max-w-md py-4">Enhancing your digital transformation process through product development, we turn your ideas into innovative solutions that drive growth and success.</h5>
                            <div className="flex gap-6">
                            <a href="#" target="blank" aria-label="github" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>

                            </a>
                            <a href="#" target="blank" aria-label="twitter" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                            <a href="#" target="blank" aria-label="medium" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </a>
                        </div>
                        </div>

                        {/* <div className="flex gap-6">
                            <a href="#" target="blank" aria-label="github" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>

                            </a>
                            <a href="#" target="blank" aria-label="twitter" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                            <a href="#" target="blank" aria-label="medium" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="col-span-8 md:col-span-6 lg:col-span-4">
                    <div className="grid grid-cols-4 gap-6 pb-16">
                        <div className='col-span-2'>
                            <h2 className="text-base font-medium text-gray-800">Company</h2>
                            <ul className="mt-4 list-outside space-y-4">
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Products</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Industries</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Partners</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <h2 className="text-base font-medium text-gray-800">Products</h2>
                            <ul className="mt-4 list-outside space-y-4">
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Human Resource Management System</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Enterprise Resource Planning</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Training Management</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-cyan-900">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>© Accinge</span>
                        <span>All right reserved</span>
                    </div>
                </div>
            </div>
        </div>

    </footer>;
};

export default Footer;
