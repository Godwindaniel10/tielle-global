import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import DropZone from "../DropZone/DropZone";
import FileList from "../FileList/FileList";
import { IconContext } from "react-icons";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// cuid is a simple library to generate unique IDs
import cuid from "cuid";

const products = [
  {
    value: "Business Card",
    label: "Business Card",
  },
  {
    value: "Water Bottle",
    label: "Water Bottle",
  },
  {
    value: "Brochure",
    label: "Brochure",
  },
  {
    value: "Paper Bag",
    label: "Paper Bag",
  },
];

const productQuantities = [
  {
    value: "20",
    label: "20",
  },
  {
    value: "50",
    label: "50",
  },
  {
    value: "100",
    label: "100",
  },
  {
    value: "200",
    label: "200",
  },
];

export default function Inquiry() {
  const [product, setProduct] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setProduct(event.target.value);
    setProductQuantity(event.target.value);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles((prevState) => [
          ...prevState,
          { id: cuid(), name: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
    //console.log(acceptedFiles);
  }, []);

  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <div className="inquiry-bg relative">
        {/*<div className="w-full h-screen bg-[#5545A8] flex justify-center items-center">
          <div className="bg-[#fff] w-[450px] h-auto rounded-[30px] p-[30px]">
            <h1 className="text-[20px] text-center text-[#5545A8] font-bold uppercase">
              Upload files
            </h1>
            <p className="text-[16px] text-center text-[#5645a89e] mb-[1.5rem] font-bold ">
              Upload files you want to print
            </p>
            <DropZone onDrop={onDrop} accept={"image/*"} />
            {files.length > 0 ? (
              <p className="text-[16px] text-start text-[#5645a89e] mb-[1.5rem] mt-[1.5rem] font-bold ">
                {files.length > 1 ? "Uploaded files" : "Uploaded file"}
              </p>
            ) : null}
            <FileList files={files} />
          </div>
          <div>
            <img src="/images/girl-on-chair.gif" alt="girl on chair" width={300}/>
          </div>
        </div> */}
        <div className="w-[500px] h-auto flex justify-center items-center p-[40px] bg-[#fff] absolute right-0 bottom-0 top-0">
          <form className=" w-full ">
            <div className="flex justify-between items-center">
              <h1 className="text-[30px] font-bold text-[#3a3a3a]">
                Make Inquiry
              </h1>
              <div
                className="rounded-full p-[10px] text-center cursor-pointer cancel-btn"
                onClick={handleClick}
              >
                <IconContext.Provider
                  value={{ color: "#452D07", className: "back-icon" }}
                >
                  <div>
                    <IoMdArrowRoundBack />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className="flex w-full mb-[2rem] mt-[3rem]">
              <div className="w-full rounded-[6px]">
                <TextField
                  id="demo-helper-text-aligned"
                  label="Name"
                  className="w-full"
                />
              </div>
              <div className="w-full rounded-[6px] ml-[20px]">
                <TextField
                  id="demo-helper-text-aligned"
                  label="Email"
                  className="w-full"
                />
              </div>
            </div>
            <TextField label="Phone" className="w-full rounded-[6px]" />

            <br />
            <div className="flex w-full mt-[2rem]">
              <TextField
                id="outlined-select-currency"
                select
                label="Products"
                value={products}
                onChange={handleChange}
                helperText="Please select your product"
                className="w-full rounded-[6px]"
              >
                {products.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <div className="w-full rounded-[6px] ml-[20px]">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Quantity"
                  value={productQuantities}
                  onChange={handleChange}
                  helperText="Please select product quantity"
                  className="w-full rounded-[6px]"
                >
                  {productQuantities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="mt-[2rem]">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter full inquiry description"
                className="border-[1px] border-[#C4C4C4] w-full p-[20px] rounded-[3px]"
              />
            </div>

            <div className="flex justify-between items-center mt-[3rem]">
              <button className="py-[13px] w-full outline-none border-none rounded-[6px] text-[18px] text-center text-[#452D07] font-semibold cancel-btn">
                Cancel
              </button>
              <button className="py-[13px] w-full outline-none border-none rounded-[6px] bg-[#452D07] text-[18px] text-center text-[#ffffff] font-semibold ml-[2rem]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
