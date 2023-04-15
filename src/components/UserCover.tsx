import React from "react"
import userIcon from '../assets/user.png'

interface UserCoverProps {
    userIcon: string
    username: string
    uid: string
    sent: number
    received: number
    selected?: boolean
}

const UserCover = (props: UserCoverProps) => {
    return (
        <div className={`flex flex-shrink-0 mb-2 rounded-lg p-2 hover:bg-violet-50 w-full ${props.selected ? "bg-gradient-to-r from-white to-violet-50" : ""}`}>
            <img src={props.userIcon} alt="" className='h-24 w-24 rounded-full p-1 bg-white shadow-md cursor-pointer' />
            <div className='relative top-2.5 left-6'>
                <div className='cursor-pointer'>
                    <span className='text-xl font-sans font-bold'>{ props.username }</span>
                </div>
                <div className='mt-1 mb-1'>
                <span className="text-stone-800 mb-2 mr-1">UID:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{ props.uid }</span>
                </div>
                <div >
                    <span className="text-stone-800 mb-2 mr-1">Sent:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{ props.sent }</span>
                    <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
                    <span className="text-stone-800 mb-2 mr-1">Received</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{ props.received }</span>
                </div>
            </div>
        </div>
    )
}

export default UserCover