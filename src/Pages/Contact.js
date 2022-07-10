import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div className="w-full h-auto py-[7rem] flex justify-center items-center" id="contact-us">
      <div className="w-[1110px] h-auto contact">
        <div className=" h-auto">
          <img src="/images/tielle-logo.png" alt="" width={250} className="object-cover"/>
        </div>
        <div className=" h-auto">
          <p className="text-start text-[#242424] w-[200px]">
            12, Razak Balogun Street, Surulere, Lagos, Nigeria.
          </p>
          <p className="text-start mt-[1.5rem] text-[#555555]">
            Monday - Saturday: 8AM - 5PM
          </p>
        </div>
        <div className=" h-auto">
          <div className=" flex justify-between items-center">
            <IconContext.Provider
              value={{ color: "#5545A8", className: "star__icon" }}
            >
              <BsTelephoneForwardFill />
            </IconContext.Provider>
            <p className="text-start text-[#242424] text-[25px] font-semibold">
              +234 (0)81 6732 0739
            </p>
          </div>
          <div className=" flex justify-between items-center mt-[1.5rem]">
            <IconContext.Provider
              value={{ color: "#5545A8", className: "star__icon" }}
            >
              <MdEmail />
            </IconContext.Provider>
            <p className="text-start text-[#292929] underline ml-[2rem]">
            info@tielleglobal.com
          </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}
