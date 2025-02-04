import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Graph from "../assets/Graph.png";
import {
  ChartNoAxesColumn,
  ShoppingCart,
  ShoppingBag,
  ChartLine,
  MessageSquareMore,
  Settings,
  LogOut,
} from "lucide-react";
import Logo2 from "../assets/Logo2.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger menu button */}
      <button
        className="fixed bg-gray-100 text-[#5D5FEF] lg:hidden top-16 left-0 z-50 p-2 rounded-md "
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 z-30 lg:top-0 left-0 h-full w-58 lg:w-72 bg-white text-gray-400 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="p-4">
          <div className="mb-8 ml-6 sm:mt-10 flex items-center space-x-2 ">
            <img src={Logo} alt="" />
            <h1 className=" font-semibold text-3xl text-[#151D48] ">DABANG</h1>
          </div>

          <button className="flex items-center space-x-2 mx-auto py-2 px-10 bg-[#5D5FEF] hover:bg-[#5c5feece] rounded-md">
            <img src={Graph} alt="" />
            <p className=" font-semibold text-lg text-[#fff] ">Dashboard</p>
          </button>

          <ul className="text-left ml-6 mt-10">
            <li className="">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <ChartNoAxesColumn className="inline-block mr-5" />
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <ShoppingCart className="inline-block mr-5" />
                order
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <ShoppingBag className="inline-block mr-5" />
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <ChartLine className="inline-block mr-5" />
                Sales Report
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <MessageSquareMore className="inline-block mr-5" />
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <Settings className="inline-block mr-5" />
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded-md">
                <LogOut className="inline-block mr-5" />
                Sign Out
              </a>
            </li>
          </ul>
        </nav>

        <div className="w-[238px] h-[261px] px-12 mx-auto my-10 relative overflow-hidden  rounded-3xl bg-[#5D5FEF]">
          <div className="bg-[#ffffff42] w-[306px] h-[306px] rounded-full ml-10 mt-10 absolute -top-[80%] left-[30%]  "></div>
          <div className="text-center py-10">
            <img className="mx-auto" src={Logo2} alt="" />
            <b className="text-[#fff] font-semibold text-xl mt-5">Dabang Pro</b>
            <p className="text-[#fff] text-sm mt-2">
              Get access to all features on tetumbas
            </p>
            <button className="bg-white text-[#5D5FEF] font-semibold text-[16px] w-[126px] h-[46px] rounded-lg mt-5 ">
              Get Pro
            </button>
          </div>
          <div className="bg-[#ffffff42] w-[306px] h-[306px] rounded-full ml-10 mt-10 absolute -bottom-[80%] right-[30%]  "></div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className=" lg:hidden" onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;
