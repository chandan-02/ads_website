import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const RecomProductSlider = () => {
  const [click, setClick] = useState(1);
  return (
    <div className="flex justify-center items-center">
    <div className="w-[80%] relative md:p-0   ">
      <img
        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="rounded-md"
        alt="Gaming-Rigs"
      />

      {click == 0 ? (
        <div
          className="bg-[#FFFFFF] absolute cursor-pointer m-[0.7rem] top-0 right-0  rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
          onClick={() => {
            setClick(1);
          }}
        >
          <HeartFilled
            className=""
            style={{ fontSize: "1.5rem", color: "red" }}
          />
        </div>
      ) : (
        <div
          className="bg-[#FFFFFF] cursor-pointer absolute top-0 right-0  m-[0.7rem] rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
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

      <div className="flex  flex-col  absolute  bottom-[1rem] w-[100%] md:px-[1.5rem] md:gap-1">
        <div className="flex flex-col gap-1 ">
          <p className="m-0 text-[1rem] text-[#FFFFFF]">MSI B450 Tomhawk</p>
          <p className="m-0 text-[1.25rem] text-[#FFFFFF] font-bold">₹ 16,000</p>
        </div>
        <button className=" bg-[#151D20]hover:bg-[#ffff] text-[#FFFFFF] border-[#FFFFFF] border-2  md:text-[1rem] rounded-md font-medium  h-[2.7rem] w-[100%] ">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default RecomProductSlider;