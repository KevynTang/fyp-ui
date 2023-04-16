import React, { ChangeEvent, useState } from "react";
import ImageUploadMenu from "./ImageUploadMenu";
import NoteUploadMenu from "./NoteUploadMenu";
import FileUploadMenu from "./FileUploadMenu";

interface MenuBoardProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  menuType: string;
  setMenuType: React.Dispatch<React.SetStateAction<string>>;
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

  const selectMenu = () => {
    if (props.menuType === "0") {
      return (
        <ImageUploadMenu
          display={props.display}
          setDisplay={props.setDisplay}
        />
      );
    } else if (props.menuType === "1") {
      return (
        <NoteUploadMenu display={props.display} setDisplay={props.setDisplay} />
      );
    } else if (props.menuType === "2") {
      return (
        <FileUploadMenu display={props.display} setDisplay={props.setDisplay} />
      );
    }
  };

  return (
    <div
      className={`${
        props.display ? "grid grid-cols-1" : "hidden"
      } w-full h-full fixed top-0 left-0 z-40 bg-opacity-20 bg-violet-900 transition-all place-items-center`}
    >
      <div className="bg-stone-50 h-2/3 w-3/4 rounded-lg shadow-lg mt-8 p-2 flex flex-col">
        {selectMenu()}
      </div>
    </div>
  );
};

export default MenuBoard;
