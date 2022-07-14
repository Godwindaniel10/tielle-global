import React from "react";
import { useDropzone } from "react-dropzone";
import { IconContext } from "react-icons";
import { MdCloudUpload } from "react-icons/md";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */
  const getClassName = (className, isActive) => {
    if (!isActive) return className;
    return `${className} ${className}-active`;
  };

  return (
    <div
      className="border-2 border-[#5545A8] border-dashed h-auto w-full rounded-[10px] p-[20px] drop-zone"
      {...getRootProps()}
    >
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <div className="text-center">
            <IconContext.Provider
              value={{ color: "#5545A8", className: "upload-icon" }}
            >
              <div>
                <MdCloudUpload />
              </div>
            </IconContext.Provider>
            <p className="dropzone-content text-[#696969] font-semibold text-[16px] mt-[0.5rem]">
              Drag & drop your files here
            </p>
            <p className="text-[#646464] font-semibold text-[16px] mt-[0.7rem] mb-[0.7rem]">
              OR
            </p>
            <button className="py-[13px] px-[30px] outline-none border-none rounded-[6px] bg-[#5545A8] text-[16px] text-center text-[#ffffff] font-semibold browse-file-btn">
              Browse Files
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
