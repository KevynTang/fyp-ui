import React from "react";
import UserCard from "../components/UserCard";

import FileManage from "mdi-react/FileEditIcon";
import FileAdd from "mdi-react/FileUploadIcon";
import Filter from "mdi-react/FilterIcon";
import FileCover from "../components/FileCover";
import CheckIcon from "mdi-react/UpdateIcon";
import FileDoc from "mdi-react/FileDocumentIcon";
import SearchIcon from "mdi-react/SearchIcon";
import FileEditIcon from "mdi-react/FileEditIcon";
import DeleteIcon from "mdi-react/DeleteIcon";

import History from "mdi-react/HistoryIcon";
import UploadIcon from "mdi-react/UploadIcon";

import { useOutletContext } from "react-router-dom";

const Archive = () => {
  const [
    displayMenu,
    setDisplayMenu,
    displayLoading,
    setDisplayLoading,
    setMenuType,
  ] = useOutletContext<any[]>();

  return (
    <div className="flex h-full max-h-full">
      <div className="h-full w-24 pt-4 bg-stone-100">
        <div className="relative top-[1000px]">
          <History
            className="mx-auto my-4 p-2 text-stone-50 rounded-full shadow-lg bg-violet-300"
            size={48}
          />
          <UploadIcon
            className="mx-auto my-4 p-2 text-stone-50 rounded-full shadow-lg bg-violet-300"
            size={48}
          />
          <CheckIcon
            className="mx-auto my-4 p-2 text-stone-50 rounded-full shadow-lg bg-violet-300"
            size={48}
          />
        </div>
      </div>
      <div className="h-full w-full max-h-full grid grid-cols-12">
        <div className=" col-span-9 bg-stone-50 p-8 max-h-full overflow-scroll scrollbar-thin">
          <div className="flex">
            <div>
              <UserCard />
              <div className="w-full flex ml-8">
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold cursor-pointer bg-violet-100 border text-violet-900 transition-colors flex">
                  All
                </div>
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
                  Doc
                </div>
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
                  Images
                </div>
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
                  Video
                </div>
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
                  Audio
                </div>
                <div className="text-center rounded-lg py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
                  Other
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-full h-full mb-8 flex flex-col justify-end">
                <div className="flex my-4 justify-end mr-4">
                  <input
                    type="text"
                    placeholder="Search Note"
                    className="w-1/3 py-2 pr-8 pl-3 border border-stone-300 rounded-lg shadow-sm text-md focus:outline-none focus:border-violet-400"
                  />
                  <SearchIcon
                    className="ml-2 text-violet-400 border-b border-violet-900 cursor-pointer"
                    size={48}
                  />
                </div>
                <div className="w-full flex justify-end">
                  <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
                    <Filter
                      className="text-violet-400 ml-1 inline-block"
                      size={32}
                    />
                    <span className="ml-2 text-md font-sans font-bold">
                      More Actions
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setMenuType("2");
                      setDisplayMenu(true);
                    }}
                    className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4"
                  >
                    <FileAdd
                      className="text-violet-400 ml-1 inline-block"
                      size={32}
                    />
                    <span className="ml-2 text-md font-sans font-bold">
                      Upload
                    </span>
                  </div>
                  <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
                    <FileManage
                      className="text-violet-400 ml-1 inline-block"
                      size={32}
                    />
                    <span className="ml-2 text-md font-sans font-bold">
                      Manage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 max-h-full">
            <FileCover
              type="video"
              size={4}
              name="precious memory with gilbert.mp4"
              fileSize="24MB"
            />
            <FileCover
              type="doc"
              size={1}
              name="the letter that changed my life.docx"
              fileSize="25KB"
            />
            <FileCover
              type="image"
              size={1}
              name="first selfie.jpg"
              fileSize="30KB"
            />
            <FileCover
              type="audio"
              size={2}
              name="my voice for you.wav"
              fileSize="5MB"
            />
            <FileCover
              type="doc"
              size={1}
              name="how to be a good auto memoir doll.docx"
              fileSize="51KB"
            />
            <FileCover
              type="other"
              size={2}
              name="most treasured gift.zip"
              fileSize="5MB"
            />
            <FileCover
              type="audio"
              size={1}
              name="Yolanda's Song.mp3"
              fileSize="5.2MB"
            />
            <FileCover
              type="doc"
              size={1}
              name="my professional resume.docx"
              fileSize="20KB"
            />
            <FileCover
              type="image"
              size={1}
              name="my friends who support me.jpg"
              fileSize="404KB"
            />
            <FileCover
              type="video"
              size={2}
              name="dangerous mission report.mov"
              fileSize="60MB"
            />
            <FileCover
              type="doc"
              size={4}
              name="the letters i wrote for others.docx"
              fileSize="2MB"
            />
            <FileCover
              type="doc"
              size={2}
              name="personal journal.docx"
              fileSize="50KB"
            />
            <FileCover
              type="other"
              size={1}
              name="the song that makes me happy.mid"
              fileSize="10KB"
            />
            <FileCover
              type="doc"
              size={1}
              name="my certificate of completion.docx"
              fileSize="30KB"
            />
            <FileCover
              type="other"
              size={1}
              name="my favorite wallpaper.png"
              fileSize="2MB"
            />
            <FileCover
              type="image"
              size={1}
              name="the flower that represents me.jpg "
              fileSize="200KB"
            />
            <FileCover
              type="audio"
              size={4}
              name="my interview with the radio.mp3 "
              fileSize="20MB"
            />
            <FileCover
              type="image"
              size={2}
              name="my adventure with leon.jpg "
              fileSize="500KB"
            />
            <FileCover
              type="video"
              size={2}
              name="my bond with ann.mov "
              fileSize="800MB"
            />
            <FileCover
              type="doc"
              size={1}
              name="the poem i wrote for you.docx "
              fileSize="15KB"
            />
            <FileCover
              type="audio"
              size={1}
              name="my conversation with claudia.wav "
              fileSize="10MB"
            />
            <FileCover
              type="doc"
              size={2}
              name="my military record.docx "
              fileSize="40KB"
            />
            <FileCover
              type="other"
              size={1}
              name="the game i like to play.exe "
              fileSize="100MB"
            />
            <FileCover
              type="doc"
              size={1}
              name="my contract with the CH postal company.docx "
              fileSize="35KB"
            />
            <FileCover
              type="image"
              size={2}
              name="my smile with hodgins.jpg"
              fileSize="600KB "
            />
          </div>
        </div>
        <div className="col-span-3 p-8">
          <FileDoc
            size={200}
            className="mx-auto mt-16 mb-4 text-violet-800 rounded-full p-4 border border-violet-400"
          />
          <h2 className="text-xl font-bold text-center cursor-pointer text-stone-900 mb-8">
            how to be a good auto memoir doll.docx
          </h2>
          <div className="w-full flex justify-end mb-4">
            <div className="w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4">
              <FileEditIcon
                className="text-violet-400 mb-1 ml-1 inline-block"
                size={32}
              />
              <span className="ml-2 text-md font-sans font-bold">Edit</span>
            </div>
            <div className="w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4">
              <DeleteIcon
                className="text-violet-400 mb-1 ml-1 inline-block"
                size={32}
              />
              <span className="ml-2 text-md font-sans font-bold">Delete</span>
            </div>
          </div>
          <div>
            <div className="flex p-2">
              <div>
                <span className="text-stone-800 mb-1 mr-1">FID:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  c54f3511840cdd94b59f9986801409e9
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div>
                <span className="text-stone-800 mb-1 mr-1">Segments:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  1
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div>
                <span className="text-stone-800 mb-1 mr-1">Size:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  51KB
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div>
                <span className="text-stone-800 mb-1 mr-1">Category:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  Doc
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div className="flex-shrink-0">
                <span className="text-stone-800 mb-1 mr-1">Upload At:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  2023 / 08 / 01 22:11:28
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div className="flex-shrink-0 mr-8">
                <span className="text-stone-800 mb-1 mr-1">Description:</span>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                  I wrote a letter for a woman who wanted to reject a man’s
                  proposal. I did not understand her feelings, so I wrote her
                  words literally. She was angry with me and said I ruined her
                  chances. I learned that writing letters is not easy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
