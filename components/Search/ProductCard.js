import React from "react";
import ReviewStars from "../../components/Homepage/ReviewStars";

export const ProductCard = () => {
  return (
    <div className="flex flex-col gap-4 border rounded-[5px] py-[1rem] px-[1.2rem]">
      <div className="w-full h-auto">
        <img
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
          className="w-full h-full"
          alt="product"
        />
      </div>
        <div className="">
          <p className="m-0 md:text-[1rem] font-bold text-[1rem]">
            Amd Ryzen 9 5950x - processor
          </p>
          <p className="m-0 lg:text-[1.5rem] md:text-[1.2rem] font-bold text-[1rem]">
            ₹ 33,760
          </p>
          <p className="m-0 text-[#787885] md:text-[0.8rem]">
            Eligible for Shipping To Mars or somewhere else
          </p>
          <div className="flex justify-between items-center gap-[1rem]">
            <ReviewStars stars={5} size={18} />
            <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[0.9rem] rounded-md font-bold  text-[0.9rem]  w-[5rem] h-[1.9rem]  ">
              Buy
            </button>
          </div>
        </div>
    </div>
  );
};
