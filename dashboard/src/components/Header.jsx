import React, { useState } from "react";
import SearchBar from "../ui/Search";
import RegionPicker from "../ui/Region";
import Notification from "../assets/Notifications.png";
import Image from "../assets/image.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:max-w-[1440px] flex flex-col lg:flex-row gap-5 items-end lg:items-center bg-white py-5 lg:ml-[320px] text-left fixed w-full lg:sticky z-20">
      {/* Header Content */}
      <div className="flex justify-between w-full lg:w-auto">
        <h1 className="font-extrabold text-4xl text-[#151D48] mr-20">
          Dashboard
        </h1>
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden focus:outline-none mt-12"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hamburger Icon */}
            {!isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            ) : (
              // X Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Hidden Content for Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:gap-7 w-[40%] lg:w-auto mt-4 lg:mt-0 `}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
            {" "}
            <SearchBar />
            <RegionPicker />
          </div>
          <img src={Notification} alt="notification" className="w-10 " />
          <div className="flex gap-2">
            <img src={Image} alt="" />
            <div className="flex flex-col justify-between">
              <b>Musfiq</b>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
