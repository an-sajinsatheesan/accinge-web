import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return <footer className="border-t border-gray-100 pt-8 md:pt-24 pb-8">
        <div className="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
                <div className="col-span-8 md:col-span-4 lg:col-span-4">
                    <div className="flex flex-col md:flex-row h-full items-start justify-between gap-6 py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                        <div className='flex flex-col'>
                            <div className="flex ">
                                <Link href="/" className="text-[#00a669] text-2xl font-medium">
                                    ACC<span className='text-black'>INGE</span>
                                    <p className='text-black text-xs'>TECHNOLOGIES</p>
                                </Link >
                                <Image src="/static/assets/logo-removebg-preview.webp" alt="" width={70} height={70} />
                            </div>
                            {/* <h5 className="banner-subtitle max-w-md pt-2">Accinge provides software solutions as well as bespoke software development services for corporate establishments and government sectors in UAE and EMEA region.</h5> */}
                            <div className="flex flex-col">
                                {/* <h2 className="text-base font-medium text-gray-900 py-2 font-bold">Contact Us</h2> */}
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 py-2">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                        <div className="text-base font-sm text-gray-600 pl-2">info@accinge.com</div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 py-2">

                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                        <div className="text-base font-sm text-gray-600 pl-2">04 454 8909</div>
                                    </div>
                                </div>
                                <h2 className="text-base banner-subtitle font-sm text-gray-600 max-w-xs">2002, Prism Tower, Business Bay,<br></br> PO Box: 183570, Dubai, AE</h2>
                            </div>
                        </div>

                        <div className="flex gap-6 pt-3">
                            <Link href="https://www.facebook.com/accinge/" target="blank" aria-label="Facebook" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>

                            </Link >
                            <Link href="https://www.instagram.com/accingetech/?hl=en" target="blank" aria-label="twitter" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </Link >
                            <Link href="https://www.linkedin.com/company/accinge-technologies-llc/about/" target="blank" aria-label="medium" className="hover:text-cyan-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </Link >
                        </div>
                    </div>
                </div>
                <div className="col-span-8 md:col-span-4 lg:col-span-4">
                    <div className="grid grid-cols-4 gap-6 pb-16">
                        <div className='col-span-2'>
                            <h2 className="text-base font-medium text-gray-800">Company</h2>
                            <ul className="mt-4 list-outside space-y-4">
                                <li>
                                    <Link href="about" className="text-sm hover:text-cyan-900">About</Link >
                                </li>
                                <li>
                                    <Link href="products" className="text-sm hover:text-cyan-900">Products</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Industries</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Partners</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Careers</Link >
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <h2 className="text-base font-medium text-gray-800">Products</h2>
                            <ul className="mt-4 list-outside space-y-4">
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">About</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Human Resource Management System</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Enterprise Resource Planning</Link >
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:text-cyan-900">Training Management</Link >
                                </li>
                                <li>
                                    <Link href="/contactUs" className="text-sm hover:text-cyan-900">Contact Us</Link >
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
