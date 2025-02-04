import React from "react";
import {
  FolderUp,
  ChartNoAxesColumnIncreasing,
  ReceiptText,
  Tag,
  UserPlus,
} from "lucide-react";
import BarChart from "../ui/BarChart";

const Card = () => {
  return (
    <section className="lg:max-w-[1100px]  bg-[#F8F9FA] border-[#C3D3E2] py-3 lg:ml-[320px] flex flex-col lg:flex-row  text-left">
      <div className="bg-white border-[1] shadow-md w-full lg:w-[60%] shadow-[#F8F9FA] mt-24 lg:mt-0 rounded-lg p-2 my-5 mx-2">
        <div className="flex justify-between items-center w-full px- gap-5">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="font-semibold text-lg text-[#05004E] ">
              Today's Sales
            </h2>
            <p className="font-normal text-[16px] text-[#737791] ">
              Sales Summery
            </p>
          </div>
          <button className="bg-[#F8F9FA] rounded-lg py-0.5 px-3 border border-[#C3D3E2] text-[#0F3659] ">
            <FolderUp className="inline-block mr-2 text-[#0F3659]" size={12} />
            Export
          </button>
        </div>
        <div className="  w-full">
          <div>
            <div className="grid grid-cols-2  lg:grid-cols-4 gap-5">
              <div className="bg-[#FFE2E5] p-2 rounded-lg  w-[140px] flex flex-col gap-3">
                <ChartNoAxesColumnIncreasing
                  className="w-[40px] h-[40px] bg-[#FA5A7D] p-2 rounded-full "
                  size={25}
                  color="#fff"
                  absoluteStrokeWidth
                />
                <h2 className="text-[#151D48] text-2xl font-semibold ">$1k</h2>
                <p className="text-[#425166] font-medium text-[16px] ">
                  Total Sales
                </p>
                <p className="text-[#4079ed] font-medium text-[12px] ">
                  +8% from yesterday
                </p>
              </div>

              <div className="bg-[#FFF4DE] p-2 rounded-lg w-[140px] flex flex-col gap-3">
                <ReceiptText
                  className="w-[40px] p-2 h-[40px] bg-[#FF947A] rounded-full "
                  size={25}
                  color="#fff"
                  absoluteStrokeWidth
                />
                <h2 className="text-[#151D48] text-2xl font-semibold ">300</h2>
                <p className="text-[#425166] font-medium text-[16px] ">
                  Total Order
                </p>
                <p className="text-[#4079ed] font-medium text-[12px] ">
                  +5% from yesterday
                </p>
              </div>

              <div className="bg-[#DCFCE7] p-2 rounded-lg w-[140px] flex flex-col gap-3">
                <Tag
                  className="w-[40px] p-2 h-[40px] bg-[#3CD856] rounded-full "
                  size={25}
                  color="#fff"
                  absoluteStrokeWidth
                />
                <h2 className="text-[#151D48] text-2xl font-semibold ">5</h2>
                <p className="text-[#425166] font-medium text-[16px] ">
                  Product Sold
                </p>
                <p className="text-[#4079ed] font-medium text-[12px] ">
                  +1,2% from yesterday
                </p>
              </div>

              <div className="bg-[#F3E8FF] p-2 rounded-lg w-[140px] flex flex-col gap-3">
                <UserPlus
                  className="w-[40px] p-2 h-[40px] bg-[#BF83FF] rounded-full "
                  size={25}
                  color="#fff"
                  absoluteStrokeWidth
                />
                <h2 className="text-[#151D48] text-2xl font-semibold ">8</h2>
                <p className="text-[#425166] font-medium text-[13px] ">
                  New Customers
                </p>
                <p className="text-[#4079ed] font-medium text-[12px] ">
                  0,5% from yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-[1] shadow-md w-full lg:w-[40%] shadow-[#F8F9FA] rounded-lg mx-2 p-2 my-5">
        <h1 className="font-semibold pb-2 text-xl text-[#05004E] ">
          Visitor Insights
        </h1>
        <BarChart />
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-2 items-center">
            <span className="w-[10px] h-[10px] bg-[#A700FF] "></span>

            <p className="text-[#464E5F] font-medium text-[12px] ">
              Loyal Customers
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-[10px] h-[10px] bg-[#EF4444] "></span>

            <p className="text-[#464E5F] font-medium text-[12px] ">
              News Customers
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-[10px] h-[10px] bg-[#3CD856] "></span>

            <p className="text-[#464E5F] font-medium text-[12px] ">
              Unique Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
