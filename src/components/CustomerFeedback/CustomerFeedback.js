import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function CustomerFeedback() {
  return (
    <div className="w-full h-auto py-[7rem] absolute bottom-[-68rem] flex justify-center items-center">
      <div className="my-0 mx-auto">
        <div className="w-[1110px] h-auto flex justify-between items-end relative">
          <h1 className="text-[40px] about-header w-[300px] z-10">
            What our customer says
            <div className="w-[190px] h-[12px] bg-[#FAD051] absolute top-[6.2rem] left-[0rem] -z-10"></div>
          </h1>
          <div className="h-[auto]">
            <div className="flex justify-end items-center">
              <div className="w-[30px] h-auto">
                <IconContext.Provider
                  value={{ color: "#FAD051", className: "star__icon" }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              </div>
              <div className="w-[30px] h-auto">
                <IconContext.Provider
                  value={{ color: "#FAD051", className: "star__icon" }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              </div>
              <div className="w-[30px] h-auto">
                <IconContext.Provider
                  value={{ color: "#FAD051", className: "star__icon" }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              </div>
              <div className="w-[30px] h-auto">
                <IconContext.Provider
                  value={{ color: "#FAD051", className: "star__icon" }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              </div>
              <div className="w-[30px] h-auto">
                <IconContext.Provider
                  value={{ color: "#FAD051", className: "star__icon" }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              </div>
            </div>
            <p className="mt-[1.5rem] mb-[0.5rem] text-[#363636]">
              Average customer ratings (128 votes)
            </p>
          </div>
        </div>
        <div className="bg-[#5545A8] w-[1110px] h-[200px] mt-[5rem] relative">
            <img
              src="https://images.pexels.com/photos/725877/pexels-photo-725877.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Customer image"
              className="w-[80px] h-[80px] top-[-2.5rem] rounded-full object-cover absolute left-0 right-0 mx-auto"
            />
        </div>
      </div>
    </div>
  );
}
