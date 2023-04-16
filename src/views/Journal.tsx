import React from "react";

import Notes from "mdi-react/NoteEditIcon";
import Add from "mdi-react/NoteAddIcon";
import Filter from "mdi-react/FilterIcon";
import Search from "mdi-react/SearchIcon";
import NoteCover from "../components/NoteCover";
import UserCard from "../components/UserCard";
import Previewer from "../components/MarkdownPreview";
import HistoryIcon from "mdi-react/HistoryIcon";
import UploadIcon from "mdi-react/UploadIcon";
import CheckIcon from "mdi-react/CheckIcon";
import UpdateIcon from "mdi-react/UpdateIcon";
import { useOutletContext } from "react-router-dom";

const NoteBook = () => {
  const [
    displayMenu,
    setDisplayMenu,
    displayLoading,
    setDisplayLoading,
    setMenuType,
  ] = useOutletContext<any[]>();
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-3 h-full p-4 max-h-full flex flex-col">
        <UserCard />
        <div className="h-full max-h-full flex-grow-0 overflow-scroll scrollbar-thin border-b border-violet-900 mb-4">
          <div className="flex my-4">
            <input
              type="text"
              placeholder="Search Note"
              className="w-full py-2 pr-8 pl-3 border border-stone-300 rounded-lg shadow-sm text-md focus:outline-none focus:border-violet-400"
            />
            <Search
              className="ml-2 text-violet-400 border-b border-violet-900 cursor-pointer"
              size={48}
            />
          </div>
          <div className="w-full mb-8 flex justify-end">
            <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
              <Filter className="text-violet-400 ml-1 inline-block" size={32} />
              <span className="ml-2 text-md font-sans font-bold">
                More Actions
              </span>
            </div>
            <div
              onClick={() => {
                setMenuType("1");
                setDisplayMenu(true);
              }}
              className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4"
            >
              <Add className="text-violet-400 ml-1 inline-block" size={32} />
              <span className="ml-2 text-md font-sans font-bold">Add</span>
            </div>
            <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
              <Notes className="text-violet-400 ml-1 inline-block" size={32} />
              <span className="ml-2 text-md font-sans font-bold">Manage</span>
            </div>
          </div>
          <NoteCover
            title="The Art of Letter Writing"
            nid="23890f45...7821b8d5"
            segments={2}
            size="2.4MB"
            tags={["Writing", "Art"]}
            description="Discover the beauty and power of letter writing. Whether it's a heartfelt thank-you note, a love letter, or simply staying in touch with loved ones, letter writing is a timeless form of communication that allows you to express your thoughts and feelings in a personal and meaningful way."
          />
          <NoteCover
            selected
            title="March 21, Violet's Diary: Busy Day"
            nid="90456h23...6721e9c1"
            segments={4}
            size="5.6MB"
            tags={["Violet", "Dairy", "BusyDay", "Advanture"]}
            description="A diary entry written by Violet Evergarden, an Auto Memory Doll who writes letters for people. She reflects on her assignments, her learnings, and her questions about life and love. "
          />
          <NoteCover
            title="How to Bake a Cake"
            nid="30859s32...8195d5b2"
            segments={1}
            size="156KB"
            tags={["Baking", "Desserts", "Food"]}
            description="Learn how to make a delicious cake from scratch with this easy-to-follow recipe. With simple ingredients and step-by-step instructions, you'll have a moist and fluffy cake in no time. Perfect for birthdays, holidays, or any special occasion."
          />
        </div>
      </div>
      <div className=" bg-stone-100 col-span-9 h-full pt-8 overflow-scroll scrollbar-thin">
        <div className="bg-white w-[24cm] h-[34cm] mb-4 p-8 rounded-sm shadow-lg mx-auto">
          <div className="overflow-scroll scrollbar-thin max-h-full h-full border-b border-violet-900">
            <Previewer tmp={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteBook;
