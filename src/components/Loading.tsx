import React, { ChangeEvent, useState } from "react"
import LoadingGif from "../assets/loading.gif"

interface LoadingProps {
    display: boolean
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const Loading = (props: LoadingProps) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const selectImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageSrc = e.target?.result as string;
                setSelectedImage(imageSrc);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`${props.display ? "grid grid-cols-1" : "hidden"} w-full h-full fixed top-0 left-0 z-50 bg-opacity-20 bg-violet-900 transition-all place-items-center`}>
            <div>
            <img className="w-40 h-40 mx-auto select-none" src={LoadingGif} alt="" />
            <div className="text-white font-bold text-xl text-center select-none">Please wait...</div>
            </div>
            
        </div>
    )
}

export default Loading