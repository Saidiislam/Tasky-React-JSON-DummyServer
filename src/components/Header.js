import React from 'react'

const Header = () => {
    return (
        <>
            <div className="w-auto py-3 flex justify-center border-b-2 border-black bg-stone-100 mb-2 box-border font-serif">
                <div className="w-[80rem] text-grey-800 px-6 font-bold">
                    <ul className="flex flex-row justify-between items-center">
                        <ul><a href="#" className= 'text-2xl'>INSTITUTE</a></ul>
                        <ul className='flex flex-row justify-between'>
                            <li><a href="#" className='ml-12'>Home</a></li>
                            <li><a href="#" className='ml-12'>About</a></li>
                            <li><a href="#" className='ml-12'>Contact</a></li>
                            
                        </ul>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header