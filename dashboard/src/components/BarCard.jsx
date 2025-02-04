import React from "react";
import BarOne from "../ui/BarOne";
import BarTwo from "../ui/BarTwo";
import Blue from "../assets/blue.png";
import Green from "../assets/green.png";
import BarThree from "../ui/BarThree";
import Avatar from "../assets/Avatar.png";
import Avatar2 from "../assets/Avatar2.png";

const BarCard = () => {
  return (
    <section className="lg:max-w-[1100px]  bg-[#F8F9FA] border-[#C3D3E2] pb-3 lg:ml-[320px] lg:grid lg:grid-cols-[2fr_1fr_1fr] ">
      <div className="bg-white border-[1] shadow-md shadow-[#F8F9FA] rounded-lg mx-2 p-2 my-5">
        <h1 className="font-semibold pb-2 text-xl text-[#05004E] ">
          Total Revenue
        </h1>
        <BarOne />
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-2 items-center">
            <span className="w-[10px] h-[10px] bg-[#0095FF] rounded-full "></span>

            <p className="text-[#464E5F] font-medium text-[12px] ">
              Online Sales
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-[10px] h-[10px] bg-[#00E096] rounded-full "></span>

            <p className="text-[#464E5F] font-medium text-[12px] ">
              Offline Sales
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-[1] shadow-md shadow-[#F8F9FA] rounded-lg mx-2 p-2 my-5">
        <h1 className="font-semibold pb-2 text-xl text-[#05004E] ">
          Customer Satisfaction
        </h1>
        <BarTwo />
        <div className="flex gap-2 justify-center pt-2 items-center">
          <div>
            <div className="flex gap-2 items-center ">
              <span className="">
                <img src={Blue} alt="" />
              </span>

              <p className="text-[#464E5F] font-medium text-[12px] pr-2.5 border-r-1 ">
                Last Month{" "}
              </p>
            </div>
            <b className="pl-5 text-sm">$3,004</b>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <span className="">
                <img src={Green} alt="" />
              </span>

              <p className="text-[#464E5F] font-medium text-[12px] ">
                This Month
              </p>
            </div>
            <b className="pl-5 text-sm">$4,504</b>
          </div>
        </div>
      </div>

      <div className="bg-white border-[1] shadow-md shadow-[#F8F9FA] rounded-lg mx-2 p-2 my-5">
        <h1 className="font-semibold pb-2 text-xl text-[#05004E] ">
          Target vs Reality
        </h1>
        <BarThree />
        <div className="">
          <div className="flex gap-8 items-center justify-start">
            <div className="flex gap-2 items-center">
              <img src={Avatar} alt="" />
              <div>
                <b className="text-[12px] font-semibold text-[#151d48] ">
                  Reality Sales
                </b>
                <p className="text-[10px] font-normal text-[#757791] ">
                  Global
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#27AE60] ">8.823</p>
          </div>

          <div className="flex gap-8 items-center justify-start">
            <div className="flex gap-2 items-center">
              <img src={Avatar2} alt="" />
              <div>
                <b className="text-[12px] font-semibold text-[#151d48] ">
                  Target Sales
                </b>
                <p className="text-[10px] font-normal text-[#757791] ">
                  Commercial
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#FFA412] ">12.122</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarCard;
