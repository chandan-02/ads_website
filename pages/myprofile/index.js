import React from "react";
import { UilEdit } from "@iconscout/react-unicons";
import { RightOutlined } from "@ant-design/icons";

export const Index = () => {
  return (
    <div className="my-[2rem]">
      <div className="flex flex-col justify-start items-center bg-[#CACACA] h-[13.563rem]">
        <div className="flex justify-end w-full">
          <UilEdit size="30" className="m-[1.25rem]" />
        </div>
        <div className="">
          <img
            src="https://avatarfiles.alphacoders.com/297/297557.png"
            className="rounded-full w-[16.375rem] h-[16.375rem] object-cover border-4 border-white"
          />
          <h1>Elon Chusk</h1>
          <apan>@zenistu_th</apan>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <div className="flex justify-between items-center mt-[1.2rem]">
            <span className="text-[1.125rem] text-[#000000]">
              Latest Notifications
            </span>
            <div className="flex items-end">
              <span className="underline underline-offset-4 text-[#000000] font-bold md:text-[1.1rem] md:text-2xl">
                See More
              </span>
              <RightOutlined
                style={{ color: "#EE2841", font: "bold", fontSize: "" }}
                className="md:text-[1.5rem] text-[1rem]"
              />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
