import React from "react"
import UserCard from "../components/UserCard"

import ImageStorage from 'mdi-react/ImageAreaIcon'
import NoteStorage from 'mdi-react/NoteTextIcon'
import FileStorage from 'mdi-react/FolderIcon'
import MailShare from 'mdi-react/EmailIcon'

import EditAccount from 'mdi-react/AccountEditIcon'
import AccountTag from "../components/AccountTag"
import AccountRemoveIcon from "mdi-react/AccountRemoveIcon"
import LogoutIcon from "mdi-react/LogoutIcon"


const Account = () => {
    return (
        <div className="h-full w-full bg-stone-50">
            <div className="max-w-6xl bg-gradient-to-br from-white to-violet-50 shadow-lg h-screen mx-auto container">
                <div className="pt-16 pl-16 pb-4">
                    <UserCard />
                </div>
                <div className="px-8 py-4 m-8 rounded-lg bg-white">
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">UID:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>a875b6f10e8e14f207b96f17478faa10</span></div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Username:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>1</span></div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Register Time:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>8.28KB</span></div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">User Level:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>Doc</span></div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Last Login:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>2023 / 08 / 01 22:11:28</span></div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex-shrink-0"><span className="text-stone-800 mb-1 mr-1">Signature:</span></div>
                        <div className="flex justify-end w-full"><span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>I wrote a letter for a woman who wanted to reject a man’s proposal.</span></div>
                    </div>
                </div>
                <div className="p-16">
                    <div className="w-full grid grid-cols-2 place-items-center gap-y-8">
                        <AccountTag icon={ImageStorage} name="Gallery" description="18 / 100 images" />
                        <AccountTag icon={NoteStorage} name="Journam" description="3 / 100 notes" />
                        <AccountTag icon={FileStorage} name="Archive" description="101.2MB / 256MB" />
                        <AccountTag icon={MailShare} name="Mailbox" description="14 / 100 messages" />
                    </div>
                </div>

                <div className="w-full flex flex-col justify-end p-4">
                    <div className="flex justify-end p-4">
                        <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-violet-50 hover:bg-violet-100 hover:shadow-lg transition-all border-violet-900 mx-4'>
                            <EditAccount className='text-violet-400 ml-1 inline-block' size={32} />
                            <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Edit</span>
                        </div>
                        <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-pink-50 hover:bg-pink-100 hover:shadow-lg transition-all border-violet-900 mx-4'>
                            <AccountRemoveIcon className='text-violet-400 ml-1 inline-block' size={32} />
                            <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Delete</span>
                        </div>
                        <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-stone-50 hover:bg-stone-100 hover:shadow-lg transition-all border-violet-900 mx-4'>
                            <LogoutIcon className='text-violet-400 ml-1 inline-block' size={32} />
                            <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account