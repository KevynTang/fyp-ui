import React from "react"
import userIcon from '../assets/user.png'

const UserCard = () => {
    return (
        <div className='flex flex-shrink-0 mb-8 w-fit p-2'>
            <img src={userIcon} alt="" className='h-32 w-32 rounded-full p-1 bg-white shadow-md cursor-pointer' />
            <div className='relative top-6 left-6'>
                <div className='cursor-pointer'>
                    <span className='text-3xl font-sans font-bold'>Violet_0925</span>
                    <span className='ml-2 text-xl relative bottom-1.5 font-extrabold rounded-md bg-lime-600 text-white px-1.5'>lv 4</span>
                </div>
                <div className='mt-1 mb-1'>
                    <span className='font-bold text-stone-600 text-md'>UID: </span>
                    <span className='bg-violet-400 text-white px-1 py-0.5 cursor-pointer rounded-md text-md'>30859s32...8195d5b2</span>
                </div>
                <div >
                    <span className="text-stone-800 mb-2 mr-1">Total Space Usage:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>135.6MB&nbsp;/&nbsp;256MB</span>
                </div>
            </div>
        </div>
    )
}

export default UserCard