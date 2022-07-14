import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Inquiry from "../components/Inquiry/Inquiry";
//import Box from "@mui/material/Box";
//import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";

export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/inquiry");
  }
  //const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F7F7] w-full h-[100vh] relative pt-[8rem] home">
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
          <button
            className="bg-[#5545A8] text-[#fff] py-[17px] px-[50px] mt-[3.5rem] rounded-full font-semibold"
            onClick={handleClick}
          >
            Send an inquiry
          </button>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
            className="absolute top-[6rem] left-[-5rem]"
          >
            <img
              src="/images/Metal-Flask-Bottle.png"
              alt=""
              width={700}
              className="bottle"
            />
          </motion.div>

          <img
            src="/images/business-card.png"
            alt=""
            width={700}
            className="absolute top-[8rem] right-[0]"
          />
        </div>
      </div>
    </>
  );
}
