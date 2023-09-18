import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Hamburger from './../../../public/static/assets/hamburger.svg'
import Close from './../../../public/static/assets/close.svg'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter(); 
    const [clickEvent, setHamburgerClick] = useState<any>(false);
    const [clickServiceEvent, setServiceEvent] = useState<any>(false);

    const handleHamburger = () => {
        setHamburgerClick(!clickEvent);
    };

    const handleServiceEvent = () => {
        setServiceEvent(!clickServiceEvent);
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
                        <Link href="/" className="text-[#00a669] text-2xl font-medium">
                            ACC<span className='text-black'>INGE</span>
                            <p className='text-black text-xs'>TECHNOLOGIES</p>
                        </Link >
                        <Image src="/static/assets/logo-removebg-preview.webp" alt="" width={70} height={70} />
                    </div>
                    <ul className="hidden gap-12 md:flex">
                        <li><Link href="home" className="text-black">Home</Link ></li>
                        <li><Link href="products" className="text-black">Services</Link ></li>
                        <li><Link href="about" className="text-black">About</Link ></li>
                        <li><Link href="#" className="text-black">Contact Us</Link ></li>
                    </ul>
                </div>
                {clickEvent && <div className="absolute h-[32rem] w-full bg-white flex flex-col rounded-3xl drop-shadow-lg shadow-gray-600/10 transition-all ease-in duration-300 delay-150">
                    <div className="flex flex-col gap-8 rounded-3xl p-10">
                        <div className='p-2'><Link href="home" className="text-gray-600 text-xl">Home</Link ></div>
                        <div className='p-2'><Link href="products" className="text-gray-600 text-xl">Services</Link ></div>
                        <div className='p-2'><Link href="about" className="text-gray-600 text-xl">About</Link ></div>
                        <div className='p-2 w-full'><div className="text-white border-btn text-lg w-full text-center">Contact Us</div></div>
                    </div>
                </div>}


            </div>
        </nav>
    </header>;
};

export default Header;