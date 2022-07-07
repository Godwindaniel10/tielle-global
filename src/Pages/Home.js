import React from "react";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <div className="bg-[#F7F7F7] w-full h-[120vh]">
          <Navbar/>
        <div className="px-[7rem] flex flex-col justify-center items-center relative">
          <div className="w-[135px] h-[12px] bg-[#FAD051] absolute top-[3rem] right-[26.3rem]"></div>
          <h1 className="header-home z-10 ">
            Are you planning to print? <br /> You have come to the right place
          </h1>
          <p className="w-[600px] text-center mt-[1.5rem] text-[#282828]">
            Name Global Enterprise is an international oriented firm with the
            ability, team and network to project and position our stakeholders
            in global vantage
          </p>
          <button className="bg-[#5545A8] text-[#fff] py-[17px] px-[50px] mt-[3.5rem] rounded-full font-semibold">
            Send an inquiry
          </button>
          <img
            src="/images/Metal-Flask-Bottle.png"
            alt=""
            width={700}
            className="absolute top-[6rem] left-[-5rem] bottle"
          />
          <img
            src="/images/business-card.png"
            alt=""
            width={700}
            className="absolute top-[8rem] right-[0]"
          />
        </div>
    </div>
  );
}
