import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Hamburger from './../../../public/static/assets/hamburger.svg'
import Close from './../../../public/static/assets/close.svg'

const Header: React.FC = () => {

    const [clickEvent, setHamburgerClick] = useState<any>(false);

    const handleHamburger = () => {
        setHamburgerClick(!clickEvent);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const header = document.querySelector('nav');

            if (header) {
                if (scroll >= 60) {
                    header.classList.add('border-b', 'border-gray-100', 'bg-white/50', 'backdrop-blur');
                } else {
                    header.classList.remove('border-b', 'border-gray-100', 'bg-white/50', 'backdrop-blur');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <header>
        <nav className=" p-3 w-full fixed z-10" id='header-sec'>
            <div className="relative">
                <div className="max-w-6xl mx-auto flex justify-between items-center relative">
                    <Image src={clickEvent ? Close : Hamburger} alt="" width={50} height={50} className='block md:hidden' onClick={() => handleHamburger()} />
                    <div className='flex'>
                        <a href="#" className="text-[#00a669] text-2xl font-medium">
                            ACC<span className='text-black'>INGE</span>
                            <p className='text-black text-xs'>TECHNOLOGIES</p>
                        </a>
                        <Image src="/static/assets/logo-removebg-preview.png" alt="" width={70} height={70} />
                    </div>
                    <ul className="hidden gap-12 md:flex">
                        <li><a href="#" className="text-black">Home</a></li>
                        <li><a href="#" className="text-black">Products</a></li>
                        <li><a href="#" className="text-black">Services</a></li>
                        <li><a href="#" className="text-black">About</a></li>
                        <li><a href="#" className="text-white border-btn">Contact</a></li>
                    </ul>
                </div>
                {/* <div id="layer" aria-hidden="true" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div> */}
                { clickEvent && <div className="absolute h-[32rem] w-full bg-white flex flex-col rounded-3xl drop-shadow-lg shadow-gray-600/10 transition-all ease-in duration-300 delay-150">
                    <div className="flex flex-col gap-8 rounded-3xl p-10">
                        <div className='p-2'><a href="#" className="text-gray-600 text-xl">Home</a></div>
                        <div className='p-2'><a href="#" className="text-gray-600 text-xl">Products</a></div>
                        <div className='p-2'><a href="#" className="text-gray-600 text-xl">Services</a></div>
                        <div className='p-2'><a href="#" className="text-gray-600 text-xl">About</a></div>
                        <div className='p-2 w-full'><div className="text-white border-btn text-lg w-full text-center">Contact US</div></div>
                    </div>
                </div>}


            </div>
        </nav>
    </header>;
};

export default Header;