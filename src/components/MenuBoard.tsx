import React, { ChangeEvent, useState } from "react"
import TitleIcon from "mdi-react/SettingsIcon"
import ImgSelection from "mdi-react/ImageAddIcon"
import Submit from 'mdi-react/HandOkayIcon'
import Cancel from 'mdi-react/CancelBoxIcon'

interface MenuBoardProps {
    display: boolean
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuBoard = (props: MenuBoardProps) => {

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

    const imageDetails = {
        src: "",
        iid: "b9a4c3e20f7f18d306a85e28394d6b12",
        name: "travel_the_world.jpg",
        description: "a beautiful travel photo",
        segments: 2,
        tags: ["Travel", "Beauty", "Lifestyle"],
        size: "1.2MB",
        uploadAt: "2023/03/17 09:23:45",
    }

    return (
        <div className={`${props.display ? "grid grid-cols-1" : "hidden"} w-full h-full fixed top-0 left-0 z-40 bg-opacity-20 bg-violet-900 transition-all place-items-center`}>
            <div className="bg-stone-50 h-2/3 w-3/4 rounded-lg shadow-lg mt-8 p-2 flex flex-col">
                <div className="ml-2">
                    <TitleIcon className='text-violet-400 ml-1 inline-block' size={48} />
                    <div className="inline-block text-2xl mt-4 ml-2 font-bold relative top-1">Upload Image</div>
                </div>
                <div className="p-4 w-full h-full rounded-lg overflow-hidden">
                    <div className="w-full h-full rounded-lg bg-stone-100 grid grid-cols-3">
                        <div
                            onClick={() => document.getElementById("image-input")?.click()}
                            className="w-full h-full col-span-2 bg-violet-50 grid grid-cols-1 place-items-center cursor-pointer hover:bg-violet-100 hover:shadow-lg transition-all">
                            <div className={`${selectedImage ? "hidden" : ""}`}>
                                <ImgSelection className='text-violet-400 ml-1 inline-block' size={64} />
                                <input
                                    id="image-input"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={selectImage}
                                />
                            </div>
                            <img
                                className={`${selectedImage ? "" : "hidden"} m-4 object-contain`}
                                src={selectedImage as string}
                                alt="Selected Image"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex-shrink-0 w-full h-3/4 p-1">
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">IID:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{imageDetails.iid}</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Tags:</span></div>
                                    <div className="flex justify-end w-full">
                                        <div className="flex flex-wrap mb-2">
                                            {imageDetails.tags.map((tag, index) => <span key={index} className="text-violet-900 font-extrabold py-1 px-2 mr-2 mb-2 border-b border-violet-900 cursor-pointer">{tag}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Description:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{imageDetails.description}</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Segments:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{imageDetails.segments}</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Size:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{imageDetails.size}</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Upload At:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>{imageDetails.uploadAt}</span></div>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-end">
                                <div className="flex justify-end p-4">
                                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-violet-50 hover:bg-violet-100 hover:shadow-lg transition-all border-violet-900 mx-4'>
                                        <Submit className='text-violet-400 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Upload</span>
                                    </div>
                                    <div onClick={() => { props.setDisplay(false) }} className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-stone-50 hover:bg-stone-100 hover:shadow-lg transition-all border-violet-900 mx-4'>
                                        <Cancel className='text-violet-400 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Cancel</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBoard