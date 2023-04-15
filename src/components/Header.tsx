import React, { useEffect, useState } from "react";
import HomeIcon from 'mdi-react/HomeIcon'
import ImageStorage from 'mdi-react/ImageAreaIcon'
import NoteStorage from 'mdi-react/NoteTextIcon'
import FileStorage from 'mdi-react/FolderIcon'
import MailShare from 'mdi-react/EmailIcon'
import { useNavigate } from "react-router-dom"


import AccountIcon from 'mdi-react/AccountIcon'

const Header = () => {

    const navigate = useNavigate()

    const [selectedMidButton, setSelectedMidButton] = useState<"" | "Gallery" | "Journal" | "Archive" | "Mailbox">()

    useEffect(() => {
        if (selectedMidButton == "Gallery") {
            navigate('/Gallery')
        } else if (selectedMidButton == "Journal") {
            navigate('/Journal')
        } else if (selectedMidButton == "Archive") {
            navigate('/Archive')
        } else if (selectedMidButton == "Mailbox") {
            navigate('/Mailbox')
        }
    }, [selectedMidButton])

    return (
        <header className="grid grid-cols-3 w-full p-2 text-white bg-gradient-to-r from-violet-600 to-sky-600 relative z-10">
            <div>
                <HomeIcon onClick={() => {navigate('/'); setSelectedMidButton("")}} className={`ml-2 cursor-pointer border border-slate-50 shadow-lg p-1 rounded-full`} size={46} />
            </div>
            <div className="grid grid-cols-1 place-items-center">
                <div className="h-12 w-64 rounded-full grid grid-cols-4 place-items-center">
                    <ImageStorage onClick={(e) => { setSelectedMidButton("Gallery") }} className={`cursor-pointer ${selectedMidButton == "Gallery" ? "bg-lime-600" : "hover:bg-lime-600"} shadow-lg p-1 rounded-full transition-colors`} size={46} />
                    <NoteStorage onClick={(e) => { setSelectedMidButton("Journal") }} className={`cursor-pointer ${selectedMidButton == "Journal" ? "bg-yellow-600" : "hover:bg-yellow-600"} shadow-lg rounded-full p-1 transition-colors`} size={46} />
                    <FileStorage onClick={(e) => { setSelectedMidButton("Archive") }} className={`cursor-pointer ${selectedMidButton == "Archive" ? "bg-amber-600" : "hover:bg-amber-600"} shadow-lg rounded-full p-1 transition-colors`} size={46} />
                    <MailShare onClick={(e) => { setSelectedMidButton("Mailbox") }} className={`cursor-pointer ${selectedMidButton == "Mailbox" ? "bg-pink-600" : "hover:bg-pink-600"} shadow-lg rounded-full p-1 transition-colors`} size={46} />
                </div>
            </div>
            <div className='flex justify-end'>
                <div className="flex space-x-4">
                    <div onClick={() => {navigate("/Account")}} className={`flex cursor-pointer hover:bg-violet-600 shadow-lg p-1 rounded-full transition-colors`}>
                        <AccountIcon size={46} />
                        <span className="text-2xl relative top-1.5 font-bold mr-2.5">Account</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header