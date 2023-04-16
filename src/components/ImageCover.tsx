import React, { MouseEventHandler } from "react";

interface ImageCoverProps {
    src: string
    selected: boolean
    onClick: MouseEventHandler<HTMLImageElement>
}

const ImageCover = (props: ImageCoverProps) => {
    return (
        <img onClick={props.onClick} src={props.src} alt="" className={`mb-4 w-full cursor-pointer hover:shadow-lg transition-all ${props.selected ? "border-4 border-violet-500" : ""}`} />
    )
}

export default ImageCover