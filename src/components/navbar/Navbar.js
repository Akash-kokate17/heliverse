import React from "react";
import logo from "./motionarteffect-img2.png";

export default function Navbar(props) {
  return (
    <>
      <div className="flex flex-wrap w-full bg-[#262626] sticky top-0">
        <div className="h-[54px] flex justify-between items-center w-full ">
          <div className="text-white flex flex-wrap relative cursor-pointer">
            <img
              src={logo}
              alt="logoPhoto"
              className="h-[50px] bg-transparent"
            />
            <div className="absolute ms-9 mt-2">
              <span className="text-2xl">envato</span>
              <span className="text-[#79A558] text-2xl font-normal">
                market
              </span>
            </div>
          </div>
          <button className="text-white bg-[#82B440]  rounded-md outline-none h-[31px] w-[93px] me-5 text-center">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}
