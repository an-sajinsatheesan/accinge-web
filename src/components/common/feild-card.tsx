import Image from "next/image"



const FeildCard = ({ img, mainTitle, subTitle }: Feilds) => {
    return <>
        <div className="bg-[url('./../../public/static/assets/beams-pricing.png')] bg-no-repeat bg-center bg-cover rounded-3xl">
            <div className='rounded-3xl text-center border border-gray-100 p-3 shadow-2xl shadow-gray-600/10 sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2'>
                <div className='items-center flex w-100 justify-center'>
                    <Image src={img} alt="ITC logo" width={40} height={40} className='fill-[#FF9800]' />
                </div>
                <h1 className='font-semibold my-2.5'>{mainTitle}</h1>
                <h1 className='text-xs leading-5'>{subTitle}</h1>
            </div>
        </div>
    </>
}

export default FeildCard