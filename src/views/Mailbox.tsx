import React from "react"
import UserCard from "../components/UserCard"
import SendIcon from "mdi-react/SendIcon"
import MailCover from "../components/MailCover"

import gb from "../assets/gb.jpg"
import ch from "../assets/ch.jpg"
import db from "../assets/db.jpg"
import ve from "../assets/user.png"
import y from '../assets/yj.jpg'
import cb from '../assets/cb.jpg'

import Mails from 'mdi-react/EmailMultipleIcon'
import New from 'mdi-react/EmailAddIcon'
import Filter from 'mdi-react/FilterIcon'
import Search from 'mdi-react/SearchIcon'
import UserCover from "../components/UserCover"
import Reply from 'mdi-react/ReplyIcon'
import Delete from 'mdi-react/DeleteIcon'
import UserAdd from 'mdi-react/AccountPlusIcon'
import UserManage from 'mdi-react/AccountGroupIcon'
import Reset from 'mdi-react/RestoreIcon'
import InsetLink from 'mdi-react/InsertLinkIcon'
import InsetPhoto from 'mdi-react/InsertPhotoIcon'
import InsetFile from 'mdi-react/InsertDriveFileIcon'
import InsertEmotion from 'mdi-react/InsertEmoticonIcon'
import InsertInvitation from 'mdi-react/InsertInvitationIcon'
import Cancel from 'mdi-react/CancelIcon'
import Previewer from "../components/MarkdownPreview"


const Mailbox = () => {
    return (
        <div className="h-full max-h-full grid grid-cols-12">
            <div className="h-full col-span-3 p-8">
                <UserCard />
                <div className="flex my-4">
                    <input
                        type="text"
                        placeholder="Search User"
                        className="w-full py-2 pr-8 pl-3 border border-stone-300 rounded-lg shadow-sm text-md focus:outline-none focus:border-violet-400"
                    />
                    <Search className="ml-2 text-violet-400 border-b border-violet-900 cursor-pointer" size={48} />
                </div>
                <div className='w-full mb-8 flex justify-end'>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Filter className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>More Actions</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <UserAdd className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Link</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <UserManage className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Manage</span>
                    </div>
                </div>
                <UserCover userIcon={ch} username="Claudia Hodgins" uid="a23cF6cd...f9b8e12d" sent={2} received={1} />
                <UserCover userIcon={db} username="Dietfried Bougainvillea" uid="b74gH9ef...g6h4j23k" sent={2} received={3} />
                <UserCover 
                    selected
                    userIcon={gb}
                    username="Gilbert Bougainvillea"
                    uid="e81dB9eb...d5a7f04e"
                    sent={4}
                    received={6}
                />
                <UserCover userIcon={ve} username="Violet Evergarden" uid="30859s32...8195d5b2" sent={14} received={14} />
                <UserCover 
                    userIcon={y}
                    username="Adnaloy Nyvek"
                    uid="0pe2x251...s15878e8"
                    sent={1}
                    received={1}
                />
                <UserCover 
                    userIcon={cb}
                    username="Cattleya Baudelaire"
                    uid="7c4b8e6f...1a9d3b5e"
                    sent={2}
                    received={5}
                />
            </div>
            <div className=" col-span-4 p-8 bg-stone-50 overflow-scroll pb-16">
                <div className="flex my-4">
                    <input
                        type="text"
                        placeholder="Search Mail"
                        className="w-full py-2 pr-8 pl-3 border border-stone-300 rounded-lg shadow-sm text-md focus:outline-none focus:border-violet-400"
                    />
                    <Search className="ml-2 text-violet-400 border-b border-violet-900 cursor-pointer" size={48} />
                </div>
                <div className='w-full mb-8 flex justify-end'>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Filter className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>More Actions</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <New className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>New</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Mails className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Manage</span>
                    </div>
                </div>
                <MailCover title="The Future I Hope for Us" mid="g90no456…56pqr789" sender="Violet Evergarden" receiver="Gilbert Bougainvillea" size={"9KB"} sendTime={"2023 / 08 / 28 17:20:13"} />
                <MailCover selected title="Sincerely" mid="c12fg901…01fgh345" sender="Violet Evergarden" receiver="Gilbert Bougainvillea" size={"2KB"} sendTime={"2023 / 07 / 15 16:45:32"} />
                <MailCover title="The Major's Last Words" mid="f78cd789…89mno345" sender="Gilbert Bougainvillea" receiver="Violet_0925" size={"21KB"} sendTime={"2023 / 07 / 07 17:20:13"} />
                <MailCover title="Promise" mid="a67bc456…45abc123" sender="Violet Evergarden" receiver="Gilbert Bougainvillea" size={"8KB"} sendTime={"2023 / 02 / 14 10:15:27"} />
                <MailCover title="Letter I Never Sent" mid="b89de678…6act1324" sender="Gilbert Bougainvillea" receiver="Violet Evergarden" size={"8KB"} sendTime={"2022 / 12 / 11 13:33:41"} />
                <MailCover title="Re: Tomorrow's Tasks" mid="f2ade678…67def234" sender="Violet Evergarden" receiver="Gilbert Bougainvillea" size={"9KB"} sendTime={"2022 / 09 / 30 07:28:23"} />
                <MailCover title="Tomorrow's Tasks" mid="1562e678…67de67z4" sender="Gilbert Bougainvillea" receiver="Violet Evergarden" size={"9KB"} sendTime={"2022 / 08 / 28 14:30:45"} />
            </div>
            <div className="col-span-5 p-8 h-full max-h-full flex flex-col">
                <div>
                    <div className={`flex rounded-lg p-4 mb-2 border-b border-violet-400 bg-white`}>
                        <div className="flex-shrink-0">
                            <h2 className="text-3xl font-bold mb-4 line-clamp-1 cursor-pointer">Sincerely</h2>
                            <div>
                                <span className="text-stone-800 mb-2 mr-1">MID:</span>
                                <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>c12fg901b8967def234de67801fgh345</span>
                                <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
                                <span className="text-stone-800 mb-2 mr-1">Size:</span>
                                <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>2.1KB</span>
                                <br />
                                <span className="text-stone-800 mb-2 mr-1">Sender:</span>
                                <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>Violet Evergarden</span>
                                <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
                                <span className="text-stone-800 mb-2 mr-1">Receiver:</span>
                                <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>Gilbert Bougainvillea</span>
                            </div>
                            <p className="text-stone-700 line-clamp-3">
                                <span>Send At: </span>
                                <span className='text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md'>2023 / 07 / 15 16:45:32</span>
                            </p>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className='w-full h-full mb-8 flex flex-col justify-end'>
                                <div className="w-full flex justify-end">
                                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                                        <Reply className='text-violet-400 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold'>Reply</span>
                                    </div>
                                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                                        <Delete className='text-violet-400 ml-1 inline-block' size={32} />
                                        <span className='ml-2 text-md font-sans font-bold'>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mx-4 mb-4 pt-8">
                    <Previewer tmp={2} />
                </div>

            </div>
            {/* <div className="col-span-5 h-full max-h-full flex flex-col mt-8">
                <div className='w-full mb-8 flex justify-end'>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <SendIcon className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Send</span>
                    </div>
                    <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4'>
                        <Cancel className='text-violet-400 ml-1 inline-block' size={32} />
                        <span className='ml-2 text-md font-sans font-bold'>Cancel</span>
                    </div>
                </div>
                <div className="flex-shrink-0 px-4 py-2 ">
                    <div className="flex flex-col">
                        <div>Subject</div>
                        <textarea className="h-16 w-full mb-8 bg-stone-100 rounded-lg px-4 py-2 mr-2 resize-none focus:outline-none"></textarea>
                        <div>Content</div>
                        <div className="w-full rounded-lg overflow-hidden shadow-lg">
                            <div className="p-2 flex gap-1 text-violet-400">
                                <Reset className="cursor-pointer" size={24} />
                                <InsetLink className="cursor-pointer" size={24} />
                                <InsetPhoto className="cursor-pointer" size={24} />
                                <InsetFile className="cursor-pointer" size={24} />
                                <InsertEmotion className="cursor-pointer" size={24} />
                                <InsertInvitation className="cursor-pointer" size={24} />
                            </div>
                            <textarea className="h-[800px] w-full mx-1 bg-stone-100 resize-none focus:outline-none"></textarea>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Mailbox