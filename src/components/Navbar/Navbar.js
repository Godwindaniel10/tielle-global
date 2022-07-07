import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="brand-name">
          Logo
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/our-work">Our works</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
        <IconContext.Provider
          value={{ color: "#5545A8", className: "send-btn__file__icon" }}
        >
          <div>
            <button className="rounded-full py-[10px] px-[30px] bg-[#fff] flex justify-between items-center send-file__btn">
              Send files &nbsp; <AiOutlineFile />
            </button>
          </div>
        </IconContext.Provider>
      </nav>
    </>
  );
}
