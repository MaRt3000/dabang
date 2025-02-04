import React from "react";
import Progress from "../ui/Progress";
import MapImg from "../assets/map.png";
import VolumeVsServiceChart from "../ui/VolumeVsServiceChart";

const ProBar = () => {
  return (
    <section className="lg:max-w-[1100px]  bg-[#F8F9FA] border-[#C3D3E2] pb-3 lg:ml-[320px] lg:grid lg:grid-cols-[2fr_1fr_1fr] ">
      <Progress />
      <div className="bg-white border-[1] shadow-md shadow-[#F8F9FA] rounded-lg mx-2 p-2 ">
        <h1 className="font-bold pb-5 text-lg text-[#05004E] ">
          Sales Mapping by Country
        </h1>
        <img src={MapImg} alt="world map" />
      </div>
      <VolumeVsServiceChart />
    </section>
  );
};

export default ProBar;
