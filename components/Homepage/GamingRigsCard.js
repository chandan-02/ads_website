import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const GamingRigsCard = () => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  const [click, setClick] = useState(1);
  return (
    <div className="mt-[0rem] mx-[1rem] ">
      <div className="mainborder mt-[1.8rem] flex flex-col ">
        <div className="md:p-[1.2rem] p-2 flex flex-col gap-[0.8rem]">
          <div className="w-[100%] relative">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded-md h-[14.2rem]"
            />
            {click == 0 ? (
              <div
                className="bg-[#FFFFFF] absolute top-0 right-0 m-[0.7rem] rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
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
                className="bg-[#FFFFFF] absolute top-0 right-0 m-[0.7rem] rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
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

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-[0.9rem] text-[#000000] font-medium">
              Royal kludge rk69
            </span>
            <span className="text-[0.8rem] text-[#3D3D3D] font-medium">
              Space for product description
            </span>

            <div className="flex gap-[0.7rem] md:gap-3 align-baseline items-baseline">
              <del className="text-red-600 text-[0.8rem]  md:text-[1rem]">
                19000
              </del>
              <span className="md:text-[1.2rem] text-[1.25rem] md:font-bold">
                19000
              </span>
            </div>

            <button className="bg-[#151D20] text-[#FFFFFF] md:text-[1rem] rounded-md font-medium  h-[2.7rem]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
                .mainborder{
                    border: 1px solid #D2D2D2;
                    border-radius: 5px;
                }
                . borderofheart{
                  border: 1px solid #E9E9E9;
                }
                `}
      </style>
    </div>
  );
};

export default GamingRigsCard;
