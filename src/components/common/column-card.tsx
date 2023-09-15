 
export const ColumnCard = ({ cardItem }: any) => {
    return <>
        <div className="rounded-lg drop-shadow-lg border border-gray-100 bg-white pr-10 pl-2.5 py-1.5 flex gap-6 items-center z-[9]" >
            <div className='w-[3.5px] h-[40px] bg-[#FF9800] rounded-lg'></div>
            <h1 className='text-sm'>{cardItem.title}</h1>
        </div>
    </>
}
