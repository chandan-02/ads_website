import React from "react";
import { Avatar, Input } from "antd";
import ReviewStars from "../Homepage/ReviewStars";
const ReviewCard = () => {
  return (
    <div className="bg-[#9088EA] 2xl:w-[25rem] 2xl:h-[15rem] lg:w-[22rem] lg:h-[15rem] md:w-[22rem] md:h-[15rem] rounded-md 2xl:m-0 w-[20.5rem] h-[17rem]">
      <div className="flex flex-col justify-center items-center md:p-[1.5rem] md:gap-[1rem] p-[2rem] gap-[0.8rem]  w-full ">
        <p className="m-0 text-[#fff] text-[1rem] md:w-[20rem]">
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s”{" "}
        </p>
        <ReviewStars stars={5} size={20}/>
        <p className="m-0 text-[1.125rem] text-[#fff] font-bold">Mark Zubukbuk</p>
        <div className="border-solid border-[#fff] rounded-full">
          <Avatar className="cursor-pointer" size={50}>
            CY
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
