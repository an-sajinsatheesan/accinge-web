import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return <header>
        <nav className=" p-3 w-full fixed z-10 border-b border-gray-100 bg-white/50 backdrop-blur ">
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                <div className='flex'>
                    <a href="#" className="text-[#00a669] text-2xl font-medium">
                        ACC<span className='text-black'>INGE</span>
                        <p className='text-black text-xs'>TECHNOLOGIES</p>
                    </a>
                    <Image src="/static/assets/logo-removebg-preview.png" alt="" width={70} height={70} />
                </div>
                <ul className="flex space-x-4">
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