import React from "react";

interface NoteCoverProps {
  title: string;
  nid: string;
  segments: number;
  size: string;
  tags: string[];
  description: string;
  selected?: boolean;
}

const NoteCover = (props: NoteCoverProps) => {
  return (
    <div
      className={`rounded-lg p-4 mb-2 shadow-lg border border-violet-900 hover:bg-violet-50 transition-colors ${
        props.selected ? "bg-gradient-to-r from-white to-violet-50" : ""
      }`}
    >
      <h2 className="text-2xl font-bold mb-2 line-clamp-1 cursor-pointer">
        {props.title}
      </h2>
      <div>
        <span className="text-stone-800 mb-2 mr-1">NID:</span>
        <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
          {props.nid}
        </span>
        <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
        <span className="text-stone-800 mb-2 mr-1">Segments:</span>
        <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
          {props.segments}
        </span>
        <span className="mx-2 relative -top-0.5 text-stone-600">|</span>
        <span className="text-stone-800 mb-2 mr-1">Size:</span>
        <span className="text-stone-400 px-1 py-0.5 cursor-pointer rounded-md text-md">
          {props.size}
        </span>
      </div>
      <div className="flex flex-wrap mb-2">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="text-violet-900 font-extrabold py-1 px-2 mr-2 mb-2 border-b border-violet-900 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-stone-700 line-clamp-3">{props.description}</p>
    </div>
  );
};

export default NoteCover;
