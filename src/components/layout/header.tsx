import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return <header>
        <nav className="bg-[#eff3ff] shadow-[0_0_10px_#dde3f5] p-3 w-full fixed z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                <div className='flex'>
                    <a href="#" className="text-[#00a669] text-2xl font-bold">
                        ACC<span className='text-black'>INGE</span>
                        <p className='text-black text-xs'>TECHNOLOGIES</p>
                    </a>
                    <Image src="/static/assets/logo-removebg-preview.png" alt="" width={70} height={70} />
                    {/* <img src="../../assets/logo-removebg-preview.png" alt="logo" /> */}
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-black">Home</a></li>
                    <li><a href="#" className="text-black">About</a></li>
                    <li><a href="#" className="text-black">Services</a></li>
                    <li><a href="#" className="text-black">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>;
};

export default Header;