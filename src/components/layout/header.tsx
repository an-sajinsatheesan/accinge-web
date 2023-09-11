import React, { useEffect } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {

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
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                <div className='flex'>
                    <a href="#" className="text-[#00a669] text-2xl font-medium">
                        ACC<span className='text-black'>INGE</span>
                        <p className='text-black text-xs'>TECHNOLOGIES</p>
                    </a>
                    <Image src="/static/assets/logo-removebg-preview.png" alt="" width={70} height={70} />
                </div>
                <ul className="flex gap-8">
                    <li><a href="#" className="text-black">Home</a></li>
                    <li><a href="#" className="text-black">Products</a></li>
                    <li><a href="#" className="text-black">Services</a></li>
                    <li><a href="#" className="text-black">About</a></li>
                    <li><a href="#" className="text-black">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>;
};

export default Header;