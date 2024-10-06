import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/github/theme/ThemeContextPro";
import { GithubContext } from "../../context/github/GithubContextPro";
import { Link } from "react-router-dom";
import { MdHome, MdAnnouncement } from "react-icons/md";
const BurgerMenu = () => {
  const { isOpen, setIsopen, setHumber, humber, s, setS } =
    useContext(GithubContext);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth >= 992) {
        setHumber(false);
        setIsopen(false);
      } else if (window.innerWidth < 992) {
        setHumber(true);
      }
    };
  }, []);

  {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "unset");
  }

  return (
    <div
      onClick={(e) => {
        setIsopen(false);
      }}
      className={`overlay opacity-1   ${!isOpen ? "hidden-modal " : ""}  `}
    >
      <div className="drawer-side beha scroll-smooth ">
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`tr bg-base-200 w-80 min-h-[100vh] transition-all duration-300   ${
            isOpen ? "openBurger" : "translate-x-[-20rem]"
          }`}
        >
          <div className="h-[3.8rem]"></div>
          <div className="px-4"></div>
          <div className="  w-5/6 mx-auto h-1 border-b-2 border-base-content "></div>
          <div className="py-6 leading-4 ">
            <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1">
              <li
                onClick={() => {
                  setIsopen(false);
                }}
                className="leading-5 "
              >
                <Link className={`px-4   pl-2`} to="/">
                  <MdHome className=" text-lg self-center" />
                  Home
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsopen(false);
                }}
                className="leading-5 text-base"
              >
                <Link className={` px-4 pl-2 `} to="/about">
                  {" "}
                  <MdAnnouncement className="text-lg self-center " /> Aboute
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BurgerMenu;
