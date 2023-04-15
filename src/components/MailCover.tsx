import React from "react"

import In from 'mdi-react/ImportIcon'
import Out from 'mdi-react/ExportIcon'

interface MailCoverProps {
    title: string
    mid: string
    size: string
    sender: string
    receiver: string
    sendTime: string
    selected?: boolean
}

const MailCover = (props: MailCoverProps) => {

    const Icon = props.sender == "Violet Evergarden" ? Out : In
    const iconStyle = props.sender == "Violet Evergarden" ? "text-violet-200" : "text-violet-400"

    return (
        <div className={`flex rounded-lg p-4 mb-2 shadow-lg border bg-white border-violet-900 hover:bg-violet-50 transition-colors ${props.selected ? "bg-gradient-to-r from-white to-violet-50" : ""}`}>
            <div className="mr-2">
                <Icon className={`${iconStyle}`} size={48} />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2 line-clamp-1 cursor-pointer">{props.title}</h2>
                <div>
                    <span className="text-stone-800 mb-2 mr-1">MID:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.mid}</span>
                    <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
                    <span className="text-stone-800 mb-2 mr-1">Size:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.size}</span>
                    <br />
                    <span className="text-stone-800 mb-2 mr-1">Sender:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.sender}</span>
                    <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
                    <span className="text-stone-800 mb-2 mr-1">Receiver:</span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.receiver}</span>
                </div>
                <p className="text-stone-700 line-clamp-3">
                    <span>Send At: </span>
                    <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{props.sendTime}</span>
                </p>
            </div>
        </div>
    )
}

export default MailCover