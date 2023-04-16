import React from "react"
import Image from 'mdi-react/ImageIcon'
import { MdiReactIconComponentType } from "mdi-react"

interface AccountTagProps {
    icon: MdiReactIconComponentType
    name: string
    description: string
}

const AccountTag = (props: AccountTagProps) => {
    const Icon = props.icon
    return (
        <div className={`flex flex-shrink-0 mb-2 rounded-lg p-8 w-96 shadow-sm h-fit`}>
            <Icon className="flex-shrink-0 border border-violet-200 text-violet-400 rounded-full p-4" size={100} />
            <div className='ml-4'>
                <div className='cursor-pointer'>
                    <span className='text-xl font-sans font-bold'>{props.name}</span>
                </div>
                <div className='mt-1 mb-1'>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default AccountTag