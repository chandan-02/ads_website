import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import ReviewStars from "../Homepage/ReviewStars";

const ShopByBrandSlider = () => {
  const [dataLoading, setDataLoading] = useState(false);

  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />;
  };

  return (
    <div className="flex flex-col gap-4">
      {!dataLoading ? (
        <div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
              className="2xl:w-[10rem] 2xl:h-[7rem] 2xl:rounded-[0.3rem] w-[15rem] h-[10rem] xl:w-[12rem] xl:h-[8rem]"
              alt="product"
            />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className="md:w-[12rem] flex flex-col gap-[0.2rem] w-[15rem] ">
              <p className="m-0 md:text-[1rem] font-bold text-[1rem]">
                Amd Ryzen 9 5950x - processor
              </p>
              <p className="m-0 md:text-[1.5rem] font-bold text-[1.2rem]">₹ 33,760</p>
              <p className="m-0 text-[#787885] md:text-[0.8rem]">
                Eligible for Shipping To Mars or somewhere else
              </p>
              <div className="flex items-center gap-[1rem]">
                <ReviewStars stars={5} size={18} />
                <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[0.9rem] rounded-md font-bold  text-[0.9rem]  w-[5rem] h-[1.9rem]  ">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ImageSkeleton()
      )}
    </div>
  );
};

export default ShopByBrandSlider;
