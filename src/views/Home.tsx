import React from "react"
import wallpaper from '../assets/home.jpg'
import Login from 'mdi-react/LoginIcon'
import Learn from 'mdi-react/LearnIcon'
import HomeTag from "../components/HomeTag"

import ImageStorage from 'mdi-react/ImageAreaIcon'
import NoteStorage from 'mdi-react/NoteTextIcon'
import FileStorage from 'mdi-react/FolderIcon'
import MailShare from 'mdi-react/EmailIcon'

function Home() {
    return (
        <div className="w-full h-full grid grid-cols-2 bg-gradient-to-br from-white to-violet-50">
            <div className="h-[110%] w-[110%] relative -top-24 -left-40 shadow-2xl rotate-[5deg] bg-violet-900">
                <img className="h-full relative object-cover hover:opacity-80 hover:blur-sm transition-all" src={wallpaper} />
            </div>
            <div className="h-full w-full">
                <div className="flex ml-40 mt-16">
                    <div className="bg-violet-200 rounded-full h-40 w-40"></div>
                    <div className="ml-8 mt-8">
                        <div className="flex">
                            <div className="text-4xl font-bold border-b border-violet-400 pb-4 w-fit">On-chain Cloud Storage</div>
                            <div className="text-md w-fit h-fit font-bold px-2 py-1 ml-4 mt-2 bg-gradient-to-r to-pink-700 from-violet-700 cursor-pointer transition-all text-stone-50 rounded-xl">Prototype</div>
                        </div>
                        <div className="text-2xl font-bold mt-1 text-violet-400">Powered by the Internet Computer</div>
                    </div>
                </div>
                <div className="max-h-full text-xl ml-32 mr-40 mt-8 pl-8 border-l-4 border-violet-400 text-stone-400 text-justify">
                    Welcome to our cutting-edge on-chain cloud storage dapp! Our prototype is a groundbreaking solution that leverages the power of blockchain technology to provide you with secure, transparent, and decentralized storage and communication. With our innovative on-chain account management system, you have full control over your digital assets, allowing for seamless funding and linking. Say goodbye to traditional cloud storage and embrace the future with our revolutionary dapp. Store your images, notes, files, and share them securely with others, all on the blockchain. Our dapp offers unprecedented levels of data security, immutability, and transparency, ensuring that your digital assets are protected at all times. Join us today and experience the future of cloud storage with our cutting-edge on-chain cloud storage dapp.
                </div>
                <div className="w-full py-16 grid grid-cols-1 place-items-center">
                    <div className="flex">
                        <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-violet-700 hover:shadow-lg transition-all border-violet-900 mx-4'>
                            <Login className='text-stone-50 ml-1 inline-block' size={32} />
                            <span className='ml-2 text-md text-stone-50 font-sans font-bold relative top-0.5'>Login with Internet Identity</span>
                        </div>
                        <div className='w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg hover:shadow-lg transition-all border-violet-900 mx-4'>
                            <Learn className='text-violet-400 ml-1 inline-block' size={32} />
                            <span className='ml-2 text-md font-sans font-bold relative top-0.5'>Learn More</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-96 pr-24 pl-8 ">
                    <div className="w-full text-center text-2xl font-bold text-violet-400 border-b border-violet-400 pb-4 mb-4">Main Features</div>
                    <div className="w-full h-full grid grid-cols-2 place-items-center">
                        <HomeTag icon={ImageStorage} name="Gallery" description="Upload images to the canister, and get the on-chain images just like accessing them on Web2 apps" />
                        <HomeTag icon={NoteStorage} name="Journam" description="Upload notes in markdown format to the canister, and link images from the Gallery or other sources" />
                        <HomeTag icon={FileStorage} name="Archive" description="Upload general files such as videos, zips, etc. The files in Archive often need to be stored as separated chunks." />
                        <HomeTag icon={MailShare} name="Mailbox" description="Send messages to other users on-chain or share files in an open-access way." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
