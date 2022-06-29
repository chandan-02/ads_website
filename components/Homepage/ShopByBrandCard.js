import React from "react";

const ShopByBrandCard = () => {
  return (
    <div className="relative md:h-[14rem] md:w-[17rem] md:mx-[1.5rem]">
      <img
        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="md:h-[14rem] md:w-[17rem]"
        alt="Brand"
      />
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.50)] inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#FFFFFF] font-bold text-[0.8rem] md:text-[1.7rem]">
            Zotac
          </span>
          <span className="underline underline-offset-4 text-[#FFFFFF] font-bold md:text-[1rem] md:text-2xl">
            Shop Now
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-0 m-[0.5rem]">
        <div className="bg-[#EE2841] md:py-[0.3rem] md:px-[0.5rem] py-[0.1rem] px-[0.5rem] flex justify-center item-center md:rounded-[0.313rem] rounded-[0.2rem]">
          <h1 className="m-[0rem] text-[#FFFFFF] font-bold text-[0.5rem] md:text-[0.8rem]">
            10% Off
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrandCard;
