import React from "react";
import { IconContext } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ReactDeleteRow from "react-delete-row";

// Rendering individual images
const Image = ({ file }) => {
  const trimText = (value) => {
    if (value.length <= 25) {
      return value;
    } else {
      return `${value.substring(0, 25)}...`;
    }
  };
  return (
    <div className="file-container">
      <div className="py-[10px] w-full h-auto flex justify-center items-center">
        <IconContext.Provider
          value={{ color: "#5545A8", className: "file-icon" }}
        >
          <div>
            <AiFillFileText />
          </div>
        </IconContext.Provider>
        <p className="text-[#414141] ml-[1rem] text-center">
          {trimText(file.name)}
        </p>
      </div>
    </div>
  );
};

// ImageList Component
const ImageList = ({ files }) => {
  // render each image by calling Image component
  const renderFile = (file, index) => {
    return (
      <>
        <ReactDeleteRow
          key={index}
          delete={file}
          deleteElement={<IconContext.Provider
            value={{ color: "#5545A8", className: "delete-icon" }}
          >
            <div>
              <RiDeleteBin6Fill />
            </div>
          </IconContext.Provider>}
          iconClassName="text-danger"
          className="text-success"
          onDelete={(file) => {
            return window.confirm(`Are you sure?`);
          }}
        >
          <Image file={file} key={`${file.id}`} />
        </ReactDeleteRow>
      </>
    );
  };

  // Return the list of files
  return <section className="file-list">{files.map(renderFile)}</section>;
};

export default ImageList;
