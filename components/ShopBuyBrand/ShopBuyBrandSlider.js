import React from "react";

const ShopBuyBrandSlider = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
          className="2xl:w-[10rem] 2xl:h-[7rem] 2xl:rounded-[0.3rem] w-[8rem] h-[6rem] xl:w-[12rem] xl:h-[8rem]"
          alt="product"
        />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <div className="md:w-[12rem] flex flex-col gap-[0.2rem]">
        <p className="m-0 md:text-[1rem] font-bold">
          Amd Ryzen 9 5950x - processor
        </p>
        <p className="m-0 md:text-[1.5rem] font-bold">₹ 33,760</p>
        <p className="m-0 text-[#787885] md:text-[0.8rem]">Eligible for Shipping To Mars or somewhere else</p>
        <div className="flex items-center gap-[1rem]">
          <div>star</div>
          <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[0.9rem] rounded-md font-bold  text-[0.9rem]  w-[5rem] h-[1.9rem]  ">
            Buy
          </button>
        </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default ShopBuyBrandSlider;
