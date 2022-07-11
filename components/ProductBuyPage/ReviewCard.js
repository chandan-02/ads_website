import React from "react";
import { Avatar, Input } from "antd";
import ReviewStars from "../Homepage/ReviewStars";

const RandomColor = () => {
  var colors = ["#D6EFED", "#C694FF","#FCF8E8","#FED1EF","#FFF6F6","#E5ECF2"];
  return(colors[Math.floor(Math.random() * colors.length)]);
};
RandomColor();

const ReviewCard = () => {
  return (
    <div className="2xl:w-[25rem] 2xl:h-[15rem] lg:w-[22rem] lg:h-[15rem] md:w-[22rem] md:h-[15rem] rounded-xl 2xl:m-0 w-[20.5rem] h-[17rem] " style={{backgroundColor:`${RandomColor()}`}} >
      <div className="flex flex-col justify-center items-center md:p-[1rem] md:gap-[1rem] p-[2rem] gap-[0.8rem]  w-full ">
        <p className="m-0 text-[000000] text-[1rem] md:w-[20rem] text-[#000]">
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s”{" "}
        </p>
        <div className="cursor-pointer">
        <ReviewStars stars={5} size={20}  />
        </div>
        <p className="m-0 text-[1.125rem] text-[000000] font-bold text-[#000]">
          Mark Zubukbuk
        </p>
        <div className="border-solid border-[000000] rounded-full">
          <Avatar className="cursor-pointer" size={50}>
            CY
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
