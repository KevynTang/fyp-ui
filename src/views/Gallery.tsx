import React from 'react';

import Checked from 'mdi-react/CheckIcon'
import Tags from 'mdi-react/TagMultipleIcon'
import Tag from 'mdi-react/TagArrowUpIcon'
import Filter from 'mdi-react/FilterIcon'

import c11 from '../assets/c11.png'
import c12 from '../assets/c12.png'
import c13 from '../assets/c13.png'
import c14 from '../assets/c14.png'
import c15 from '../assets/c15.png'
import c16 from '../assets/c16.png'

import c21 from '../assets/c21.png'
import c22 from '../assets/c22.png'
import c23 from '../assets/c23.png'
import c24 from '../assets/c24.png'
import c25 from '../assets/c25.png'
import c26 from '../assets/c26.png'

import c31 from '../assets/c31.png'
import c32 from '../assets/c32.png'
import c33 from '../assets/c33.png'
import c34 from '../assets/c34.png'
import c35 from '../assets/c35.png'
import c36 from '../assets/c36.png'


import UserCard from '../components/UserCard';
import DeleteIcon from 'mdi-react/DeleteIcon';
import FileEditIcon from 'mdi-react/FileEditIcon';
import ImageUpload from 'mdi-react/UploadIcon'
import { useOutletContext } from 'react-router-dom';

const Gallery = () => {

    const [displayMenu, setDisplayMenu] = useOutletContext<any[]>()

    return (
        <div className='grid grid-cols-2 space-x-8 p-8 h-full'>
            <div className=' max-h-full overflow-scroll scrollbar-thin'>
                <UserCard />
                <div className='w-full mb-8 flex justify-end'>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Filter className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>More Actions</span>
                    </div>
                    <div onClick={() => setDisplayMenu(true)} className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <ImageUpload className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Upload</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Tags className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Edit Tags</span>
                    </div>
                </div>
                <div className='w-full flex'>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Daily</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Fashion</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Beauty</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Lifestyle</div>
                    <div className='text-center py-4 px-8 text-xl font-bold cursor-pointer bg-violet-100 border border-violet-400 text-violet-900 transition-colors flex'><Checked className='mr-2 relative top-0.5 bottom-2' size={24} /> Travel</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Fitness</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Dance</div>
                    <div className='text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors'>Art</div>
                </div>
                <div className="grid grid-cols-3 bg-stone-50 p-1 gap-4">
                    <div className="flex flex-col items-center h-fit">
                        <img src={c11} alt="" className="mb-4 w-full" />
                        <img src={c12} alt="" className="mb-4 w-full border-4 border-violet-500" />
                        <img src={c13} alt="" className="mb-4 w-full" />
                        <img src={c14} alt="" className="mb-4 w-full" />
                        <img src={c15} alt="" className="mb-4 w-full" />
                        <img src={c16} alt="" className="mb-4 w-full" />
                    </div>
                    <div className="flex flex-col items-center h-fit">
                        <img src={c21} alt="" className="mb-4 w-full" />
                        <img src={c22} alt="" className="mb-4 w-full" />
                        <img src={c23} alt="" className="mb-4 w-full" />
                        <img src={c24} alt="" className="mb-4 w-full" />
                        <img src={c25} alt="" className="mb-4 w-full" />
                        <img src={c26} alt="" className="mb-4 w-full" />
                    </div>
                    <div className="flex flex-col items-center h-fit">
                        <img src={c31} alt="" className="mb-4 w-full" />
                        <img src={c32} alt="" className="mb-4 w-full" />
                        <img src={c33} alt="" className="mb-4 w-full" />
                        <img src={c34} alt="" className="mb-4 w-full" />
                        <img src={c35} alt="" className="mb-4 w-full" />
                        <img src={c36} alt="" className="mb-4 w-full" />
                    </div>
                </div>
            </div>

            <div className='max-h-full overflow-scroll scrollbar-none'>
                <div className='h-1/2 w-full bg-stone-100 mb-8 rounded-md'>
                    <img src={c12} alt="" className='h-full mb-8 mx-auto' />
                </div>
                <div className='w-full mb-8'>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex-shrink-0">
                            <div className='flex mb-2'>
                                <h2 className="text-3xl font-bold mb-4 flex-shrink-0 cursor-pointer">Another Day of Missing the Major</h2>
                                <div className='w-full flex justify-end'>
                                    <div className='w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4'>
                                        <FileEditIcon className='text-violet-400 mb-1 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold'>Edit</span>
                                    </div>
                                    <div className='w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4'>
                                        <DeleteIcon className='text-violet-400 mb-1 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold'>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">FID:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>a875b6f10e8e14f207b96f17478faa10</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Segments:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>1</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Size:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>8.28KB</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div><span className="text-stone-800 mb-1 mr-1">Category:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>Doc</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Upload At:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>2023 / 08 / 01 22:11:28</span></div>
                                </div>
                                <div className="flex p-2">
                                    <div className="flex-shrink-0 mr-8"><span className="text-stone-800 mb-1 mr-1">Description:</span></div>
                                    <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>
                                        I wrote a letter for a woman who wanted to reject a man’s proposal. I did not understand her feelings, so I wrote her words literally. She was angry with me and said I ruined her chances. I learned that writing letters is not easy
                                    </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;