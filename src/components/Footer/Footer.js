import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className='bg-[rgb(247,247,247)] w-full h-[200px] flex justify-center items-center'>
      <div className="w-[1110px] h-auto flex justify-between items-center">
        <p className='text-[14px] text-[#404040]'>Copyright Tielle Global Enterprise 2018. All rights reserved.</p>
        <div className='flex justify-between items-center w-[180px]'>
          <div className='bg-[#fff] p-[10px] rounded-full'>
          <IconContext.Provider
              value={{ color: "#5545A8", className: "text-[20px]"  }}
            >
              <FaFacebookF />
            </IconContext.Provider>
          </div>
          <div className='bg-[#fff] p-[10px] rounded-full'>
          <IconContext.Provider
              value={{ color: "#5545A8", className: "text-[20px]"  }}
            >
              <BsTwitter />
            </IconContext.Provider>
          </div>
          <div className='bg-[#fff] p-[10px] rounded-full'>
          <IconContext.Provider
              value={{ color: "#5545A8", className: "text-[20px]"  }}
            >
              <RiInstagramFill />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
