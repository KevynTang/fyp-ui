import React, { useState } from "react";

import Checked from "mdi-react/CheckIcon";
import Tags from "mdi-react/TagMultipleIcon";
import Tag from "mdi-react/TagArrowUpIcon";
import Filter from "mdi-react/FilterIcon";

import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";
import c13 from "../assets/c13.png";
import c14 from "../assets/c14.png";
import c15 from "../assets/c15.png";
import c16 from "../assets/c16.png";

import c21 from "../assets/c21.png";
import c22 from "../assets/c22.png";
import c23 from "../assets/c23.png";
import c24 from "../assets/c24.png";
import c25 from "../assets/c25.png";
import c26 from "../assets/c26.png";

import c31 from "../assets/c31.png";
import c32 from "../assets/c32.png";
import c33 from "../assets/c33.png";
import c34 from "../assets/c34.png";
import c35 from "../assets/c35.png";
import c36 from "../assets/c36.png";

import UserCard from "../components/UserCard";
import DeleteIcon from "mdi-react/DeleteIcon";
import FileEditIcon from "mdi-react/FileEditIcon";
import ImageUpload from "mdi-react/UploadIcon";
import { useOutletContext } from "react-router-dom";
import ImageCover from "../components/ImageCover";

interface ImageDetails {
  src: string;
  name: string;
  iid: string;
  tags: string[];
  description: string;
  segments: number;
  size: string;
  uploadAt: string;
}

const Gallery = () => {
  const [
    displayMenu,
    setDisplayMenu,
    displayLoading,
    setDisplayLoading,
    setMenuType,
  ] = useOutletContext<any[]>();
  const [selectedImg, setSelectedImg] = useState(1);
  const [imageDetails, setImageDetails] = useState<ImageDetails>({
    src: c11,
    name: "beautifulday.jpg",
    iid: "2b9c5f3a8e7d6b4c1f0a9e8d7c6b5a40",
    description: "sample image",
    segments: 1,
    tags: ["Daily"],
    size: "257.18KB",
    uploadAt: "2023 / 03 / 01 21:11:28",
  });

  const imageDetail1 = {
    src: c11,
    name: "beautifulday.jpg",
    iid: "2b9c5f3a8e7d6b4c1f0a9e8d7c6b5a40",
    description: "sample image",
    segments: 1,
    tags: ["Daily"],
    size: "257.18KB",
    uploadAt: "2023 / 03 / 01 21:11:28",
  };

  const imageDetail2 = {
    src: c12,
    iid: "a875b6f10e8e14f207b96f17478faa10",
    name: "life_is_a_travel.jpg",
    description: "sample image",
    segments: 1,
    tags: ["Daily", "Travel"],
    size: "318.26KB",
    uploadAt: "2023 / 03 / 16 13:41:57",
  };

  const imageDetail3 = {
    src: c21,
    iid: "b9a4c3e20f7f18d306a85e28394d6b12",
    name: "travel_the_world.jpg",
    description: "a beautiful travel photo",
    segments: 2,
    tags: ["Travel", "Beauty", "Lifestyle"],
    size: "1.2MB",
    uploadAt: "2023/03/17 09:23:45",
  };

  // DF
  const clickOnImage = (
    imgKey: number,
    imgDetails: ImageDetails,
    time: number
  ) => {
    setDisplayLoading(true);
    setTimeout(() => {
      setSelectedImg(imgKey);
      setImageDetails(imgDetails);
      setDisplayLoading(false);
    }, time);
  };

  return (
    <div className="grid grid-cols-2 space-x-8 p-8 h-full">
      <div className=" max-h-full overflow-scroll scrollbar-thin">
        <UserCard />
        <div className="w-full mb-8 flex justify-end">
          <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
            <Filter className="text-violet-400 ml-1 inline-block" size={32} />
            <span className="ml-2 text-md font-sans font-bold">
              More Actions
            </span>
          </div>
          <div
            onClick={() => {
              setMenuType("0");
              setDisplayMenu(true);
            }}
            className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4"
          >
            <ImageUpload
              className="text-violet-400 ml-1 inline-block"
              size={32}
            />
            <span className="ml-2 text-md font-sans font-bold">Upload</span>
          </div>
          <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border-b border-violet-900 select-none hover:bg-violet-50 mx-4">
            <Tags className="text-violet-400 ml-1 inline-block" size={32} />
            <span className="ml-2 text-md font-sans font-bold">Edit Tags</span>
          </div>
        </div>
        <div className="w-full flex">
          <div className="text-center py-4 px-8 text-xl font-bold cursor-pointer bg-violet-100 border border-violet-400 text-violet-900 transition-colors flex">
            <Checked className="mr-2 relative top-0.5 bottom-2" size={24} />
            All
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Daily
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Fashion
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Beauty
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Lifestyle
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Travel
          </div>
          {/* <div className='text-center py-4 px-8 text-xl font-bold cursor-pointer bg-violet-100 border border-violet-400 text-violet-900 transition-colors flex'><Checked className='mr-2 relative top-0.5 bottom-2' size={24} /> Travel</div> */}
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Fitness
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Dance
          </div>
          <div className="text-center py-4 px-8 text-xl font-bold text-violet-900 cursor-pointer hover:bg-violet-50 transition-colors">
            Art
          </div>
        </div>
        <div className="grid grid-cols-3 bg-stone-50 p-1 gap-4">
          <div className="flex flex-col items-center h-fit">
            <ImageCover
              onClick={() => {
                clickOnImage(1, imageDetail1, 1326);
              }}
              src={c11}
              selected={selectedImg == 1}
            />
            <ImageCover
              onClick={() => {
                clickOnImage(2, imageDetail2, 1513);
              }}
              src={c12}
              selected={selectedImg == 4}
            />
            <ImageCover
              onClick={() => {
                setSelectedImg(7);
              }}
              src={c13}
              selected={selectedImg == 7}
            />
            <ImageCover
              onClick={() => {
                setSelectedImg(10);
              }}
              src={c14}
              selected={selectedImg == 10}
            />
            <ImageCover
              onClick={() => {
                setSelectedImg(13);
              }}
              src={c15}
              selected={selectedImg == 13}
            />
            <ImageCover
              onClick={() => {
                setSelectedImg(16);
              }}
              src={c16}
              selected={selectedImg == 16}
            />
          </div>
          <div className="flex flex-col items-center h-fit">
            <ImageCover
              src={c21}
              onClick={() => {
                clickOnImage(3, imageDetail3, 1826);
              }}
              selected={selectedImg == 2}
            />
            <ImageCover
              src={c22}
              onClick={() => {
                setSelectedImg(5);
              }}
              selected={selectedImg == 5}
            />
            <ImageCover
              src={c23}
              onClick={() => {
                setSelectedImg(8);
              }}
              selected={selectedImg == 8}
            />
            <ImageCover
              src={c24}
              onClick={() => {
                setSelectedImg(11);
              }}
              selected={selectedImg == 11}
            />
            <ImageCover
              src={c25}
              onClick={() => {
                setSelectedImg(14);
              }}
              selected={selectedImg == 14}
            />
            <ImageCover
              src={c26}
              onClick={() => {
                setSelectedImg(17);
              }}
              selected={selectedImg == 17}
            />
          </div>
          <div className="flex flex-col items-center h-fit">
            <ImageCover
              src={c31}
              onClick={() => {
                setSelectedImg(3);
              }}
              selected={selectedImg == 3}
            />
            <ImageCover
              src={c32}
              onClick={() => {
                setSelectedImg(6);
              }}
              selected={selectedImg == 6}
            />
            <ImageCover
              src={c33}
              onClick={() => {
                setSelectedImg(9);
              }}
              selected={selectedImg == 9}
            />
            <ImageCover
              src={c34}
              onClick={() => {
                setSelectedImg(12);
              }}
              selected={selectedImg == 12}
            />
            <ImageCover
              src={c35}
              onClick={() => {
                setSelectedImg(15);
              }}
              selected={selectedImg == 15}
            />
            <ImageCover
              src={c36}
              onClick={() => {
                setSelectedImg(18);
              }}
              selected={selectedImg == 18}
            />
          </div>
        </div>
      </div>

      <div className="max-h-full overflow-scroll scrollbar-none">
        <div className="h-1/2 w-full bg-stone-100 mb-8 rounded-md">
          <img src={imageDetails.src} alt="" className="h-full mb-8 mx-auto" />
        </div>
        <div className="w-full mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex-shrink-0">
              <div className="flex mb-2">
                <h2 className="text-3xl font-bold mb-4 flex-shrink-0 cursor-pointer">
                  {imageDetails.name}
                </h2>
                <div className="w-full flex justify-end">
                  <div className="w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4">
                    <FileEditIcon
                      className="text-violet-400 mb-1 ml-1 inline-block"
                      size={32}
                    />
                    <span className="ml-2 text-md font-sans font-bold">
                      Edit
                    </span>
                  </div>
                  <div className="w-fit pl-1 pr-2 py-1 cursor-pointer border-b border-violet-900 mx-4">
                    <DeleteIcon
                      className="text-violet-400 mb-1 ml-1 inline-block"
                      size={32}
                    />
                    <span className="ml-2 text-md font-sans font-bold">
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex p-2">
                  <div>
                    <span className="text-stone-800 mb-1 mr-1">IID:</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                      {imageDetails.iid}
                    </span>
                  </div>
                </div>
                <div className="flex p-2">
                  <div className="flex-shrink-0">
                    <span className="text-stone-800 mb-1 mr-1">Tags:</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="flex flex-wrap mb-2">
                      {imageDetails.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-violet-900 font-extrabold py-1 px-2 mr-2 mb-2 border-b border-violet-900 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex p-2">
                  <div>
                    <span className="text-stone-800 mb-1 mr-1">
                      Description:
                    </span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                      {imageDetails.description}
                    </span>
                  </div>
                </div>
                <div className="flex p-2">
                  <div>
                    <span className="text-stone-800 mb-1 mr-1">Segments:</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                      {imageDetails.segments}
                    </span>
                  </div>
                </div>
                <div className="flex p-2">
                  <div>
                    <span className="text-stone-800 mb-1 mr-1">Size:</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                      {imageDetails.size}
                    </span>
                  </div>
                </div>
                <div className="flex p-2">
                  <div className="flex-shrink-0">
                    <span className="text-stone-800 mb-1 mr-1">Upload At:</span>
                  </div>
                  <div className="flex justify-end w-full">
                    <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                      {imageDetails.uploadAt}
                    </span>
                  </div>
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
