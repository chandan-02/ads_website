import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const NewLaunches = () => {
  const [click, setClick] = useState(1);
  return (
    <div className="2xl:p-[1.5rem] md:p-[1.5rem] xl:p-[1.5rem] py-[0.8rem] px-[0.8rem] mainborder">
      <div>
        <div className="flex gap-3">
          <img
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
            className="2xl:w-[15rem] 2xl:h-[9rem] 2xl:rounded-[0.3rem] w-[9rem] h-[6rem] xl:w-[12rem] xl:h-[8rem]"
          />
          <div className="w-full flex flex-col xl:gap-[0.4rem] 2xl:gap-[0.8rem] ">
            <div className="flex justify-between items-center w-full">
              <span className="md:text-[1.5rem] text-[1rem] font-bold leading-6	">
                Ryzen 9 5900x
              </span>
              {click == 0 ? (
                <div
                  className="bg-[#FFFFFF]"
                  onClick={() => {
                    setClick(1);
                  }}
                >
                  <HeartFilled
                    className="cursor-pointer"
                    style={{ fontSize: "1.5rem", color: "red" }}
                  />
                </div>
              ) : (
                <div
                  className="bg-[#FFFFFF] cursor-pointer"
                  onClick={() => {
                    setClick(0);
                  }}
                >
                  <HeartOutlined
                    className=""
                    style={{ fontSize: "1.5rem", color: "red" }}
                  />
                </div>
              )}
            </div>
            <div className="md:w-[20rem] 2xl:w-[25rem] w-[10rem]">
              <div className="md:text-[0.8rem] text-[0.6rem] overflow-hidden text-ellipsis whitespace-nowrap">
                AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24
                Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series
                chipset (100-100000061WOF)
              </div>
            </div>
            <p className="md:text-[1.2rem] font-bold m-[0rem]">₹ 36,000</p>
            <button className="bg-[#EE2841] hover:bg-[#912f3b] text-[#FFFFFF] md:text-[1rem] rounded-md font-bold  text-[0.9rem]  w-[7rem] h-[2rem]  ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLaunches;
