import React, { ChangeEvent, useState } from "react";
import TitleIcon from "mdi-react/SettingsIcon";
import Submit from "mdi-react/HandOkayIcon";
import Cancel from "mdi-react/CancelBoxIcon";
import { upload } from "@testing-library/user-event/dist/upload";

interface MenuBoardProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteUploadMenu = (props: MenuBoardProps) => {
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

  const noteDetails = {
    src: "",
    nid: "276a31ba3b9f1c8d306a85e91cd31b2e",
    name: "note",
    description: "a description of your note",
    segments: 2,
    tags: ["Recepit", "Bills", "LifeMemo"],
    size: "240KB",
    uploadAt: "2023/03/19 12:32:41",
  };

  return (
    <div className="h-[90%]">
      <div className="ml-2">
        <TitleIcon className="text-violet-400 ml-1 inline-block" size={48} />
        <div className="inline-block text-2xl mt-4 ml-2 font-bold relative top-1">
          Upload Note
        </div>
      </div>
      <div className="p-4 w-full h-full rounded-lg overflow-hidden">
        <div className="w-full h-full rounded-lg bg-stone-100 grid grid-cols-3">
          <div className="w-full h-full col-span-2 grid grid-cols-1">
            <textarea
              id="body-input"
              className="w-full h-14 p-4 font-mono text-l"
              placeholder="Title"
            />
            <textarea
              id="text-input"
              className="w-full h-[490px] p-4 font-mono text-l"
              placeholder="Paragraph"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex-shrink-0 w-full h-3/4 p-1">
              <div className="flex p-2">
                <div>
                  <span className="text-stone-800 mb-1 mr-1">NID:</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                    {noteDetails.nid}
                  </span>
                </div>
              </div>
              <div className="flex p-2">
                <div className="flex-shrink-0">
                  <span className="text-stone-800 mb-1 mr-1">Tags:</span>
                </div>
                <div className="flex justify-end w-full">
                  <div className="flex flex-wrap mb-2">
                    {noteDetails.tags.map((tag, index) => (
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
                  <span className="text-stone-800 mb-1 mr-1">Description:</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                    {noteDetails.description}
                  </span>
                </div>
              </div>
              <div className="flex p-2">
                <div>
                  <span className="text-stone-800 mb-1 mr-1">Segments:</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                    {noteDetails.segments}
                  </span>
                </div>
              </div>
              <div className="flex p-2">
                <div>
                  <span className="text-stone-800 mb-1 mr-1">Size:</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                    {noteDetails.size}
                  </span>
                </div>
              </div>
              <div className="flex p-2">
                <div className="flex-shrink-0">
                  <span className="text-stone-800 mb-1 mr-1">Upload At:</span>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
                    {noteDetails.uploadAt}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-end">
              <div className="flex justify-end p-4">
                <div className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-violet-50 hover:bg-violet-100 hover:shadow-lg transition-all border-violet-900 mx-4">
                  <Submit
                    className="text-violet-400 ml-1 inline-block"
                    size={32}
                  />
                  <span className="ml-2 text-md font-sans font-bold relative top-0.5">
                    Upload
                  </span>
                </div>
                <div
                  onClick={() => {
                    props.setDisplay(false);
                  }}
                  className="w-fit h-fit py-2 pl-1 pr-4 cursor-pointer border rounded-lg bg-stone-50 hover:bg-stone-100 hover:shadow-lg transition-all border-violet-900 mx-4"
                >
                  <Cancel
                    className="text-violet-400 ml-1 inline-block"
                    size={32}
                  />
                  <span className="ml-2 text-md font-sans font-bold relative top-0.5">
                    Cancel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteUploadMenu;
