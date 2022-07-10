import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineFile } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [scrollStyle, setScrollStyle] = useState(false);

  useEffect(() => {
    const changeNavbarStyle = () => {
      if (window.scrollY >= 150) {
        setScrollStyle(true);
      } else {
        setScrollStyle(false);
      }
    };
    window.addEventListener("scroll", changeNavbarStyle);
  }, []);

  return (
    <>
      <nav
        className={
          scrollStyle
            ? "navigation sticky top-0 z-50 bg-[#fff] animate-fade-in-down"
            : "navigation bg-[#F7F7F7] animate-fade-in-up"
        }
      >
        <HashLink to="/" className="brand-name">
          <img src="/images/tielle-logo.png" alt="" width={200} className="object-cover"/>
        </HashLink>
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
              <HashLink to="/">Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="#about-us">
                About us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#our-work">
                Our works
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact-us">
                Contact us
              </HashLink>
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
