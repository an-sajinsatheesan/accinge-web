


const SectionHeading = ({ heading, mainTitle, subTitle }: Heading) => {
    return <>
        <h1 className='max-w-6xl mx-auto w-100 grid justify-center sub-green-heading '>{heading}</h1>
        <h1 className='max-w-6xl mx-auto w-100 grid justify-center banner-title p-3 md:py-6 text-center'>{mainTitle}</h1>
        <h1 className='max-w-4xl mx-auto w-100 banner-subtitle text-center p-3 md:pb-4'>{subTitle}</h1>
    </>
}

export default SectionHeading