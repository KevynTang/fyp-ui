import React from "react"

import FileDoc from 'mdi-react/FileDocumentIcon'
import FileVideo from 'mdi-react/FileVideoIcon'
import FileImage from 'mdi-react/FileImageIcon'
import FileAudio from 'mdi-react/FileMusicIcon'
import File from 'mdi-react/FileIcon'

interface FileCoverProps {
    size: 1 | 2 | 4
    type: "doc" | "image" | "video" | "audio" | "other"
    name: string
    fileSize: string
}

const FileCover = (props: FileCoverProps) => {

    let color = "bg-stone-100 hover:bg-stone-200"
    let contentStyle = "text-stone-400 font-bold"
    let iconStyle = "border border-stone-400"
    let Icon = File
    if (props.type == "doc") {
        color = "bg-yellow-100 hover:bg-yellow-200"
        contentStyle = "text-yellow-400 font-bold"
        iconStyle = "border border-yellow-400"
        Icon = FileDoc
    } else if (props.type == "image") {
        color = "bg-lime-100 hover:bg-lime-200"
        contentStyle = "text-lime-400 font-bold"
        iconStyle = "border border-lime-400"
        Icon = FileImage
    } else if (props.type == "video") {
        color = "bg-indigo-100 hover:bg-indigo-200"
        contentStyle = "text-indigo-400 font-bold"
        iconStyle = "border border-indigo-400"
        Icon = FileVideo
    } else if (props.type == "audio") {
        color = "bg-rose-100 hover:bg-rose-200"
        contentStyle = "text-rose-400 font-bold"
        iconStyle = "border border-rose-400"
        Icon = FileAudio
    }

    if (props.name == 'how to be a good auto memoir doll.docx') {
        color += " border-2 border-yellow-200 shadow-lg"

    }

    let h = "aspect-square"
    let span = ""
    let content = (
        <div className={`${contentStyle}`}>
            <Icon className={`rounded-full mx-auto p-2 ${iconStyle}`} size={72} />
            <div className="mt-2 mx-4 max-w-full">
                <div className="max-w-full w-full text-center">{props.name}</div>
                <div className="line-clamp-2 text-center">Size: {props.fileSize}</div>
            </div>
        </div>
    )
    if (props.size == 2) {
        h = "aspect-[2/1]"
        span = "col-span-2"
        content = (
            <div className={`${contentStyle} w-full flex pl-8`}>
                <Icon className={`rounded-full p-2 ${iconStyle}`} size={128} />
                <div className="relative top-6 mx-6">
                    <div className="text-left mb-2 line-clamp-2 text-xl">{props.name}</div>
                    <div className="line-clamp-2 text-left">Size: {props.fileSize}</div>
                </div>
            </div>
        )
    } else if (props.size == 4) {
        span = "col-span-2 row-span-2"
        content = (
            <div className={`${contentStyle}`}>
                <Icon className={`rounded-full mx-auto p-2 ${iconStyle}`} size={200} />
                <div className="mt-2 mx-8 line-clamp-3 text-center text-2xl">{props.name}</div>
                <div className="mt-2 mx-8 line-clamp-2 text-center text-lg">Size: {props.fileSize}</div>
            </div>
        )
    }

    return (
        <div className={`w-full ${h} ${span} p-4`}>
            <div className={`h-full w-full ${color} rounded rounded-tl-3xl hover:shadow-lg transition-all grid grid-cols-1 place-items-center`}>
                {content}
            </div>
        </div>
    )
}

export default FileCover