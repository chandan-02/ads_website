import React from "react";
import { Input } from "antd";

const ProductRightSection = () => {
  return (
    <div>
      <div className="flex flex-col md:gap-6 gap-4">
        <span className="m-0 md:text-[1.313rem] text-[1rem] font-semibold leading-5">AMD</span>
        <span className="m-0 md:text-[2.5rem] text-[2rem] font-semibold leading-5">
          Ryzen 9 5900x
        </span>
        <div className="flex items-center">
          <p className="m-0">star</p>
          <p className="md:text-[1.1rem] text-[0.9rem] m-0">(19,230)</p>
        </div>

        <div className="flex gap-[0.7rem] md:gap-3 align-baseline items-baseline">
          <del className="text-red-600 text-[1.2rem]  md:text-[1.563rem] leading-5">
            19000
          </del>
          <span className="md:text-[2rem] text-[1.7rem] md:font-bold leading-5">
            19000
          </span>
          <span className="md:text-[0.9rem] text-[0.7rem] leading-5">( incl. GST )</span>
        </div>

        <div className="flex gap-[3rem]">
          <div className="flex gap-3 items-center">
            <span className="font-semibold">Quantity:</span>
            <Input
              defaultValue={1}
              style={{ width: 35, borderRadius: "5px", height: 25 }}
            />
          </div>

          <div>
            <Input
              allowClear={true}
              placeholder="Pincode..."
              style={{ borderRadius: "5px", height: 35 }}
            />
          </div>
        </div>

        <div className="flex items-baseline gap-[1.37rem]">
          <button className="bg-[#ffff] text-[#EE2841] border-[#EE2841] border-2  md:text-[1rem] md:w-[8rem] md:h-[2.5rem] rounded-md   text-[1.1rem]  w-[7rem] h-[2.7rem]  ">
            Add to Cart
          </button>
          <span className="underline underline-offset-4 text-[#EE2841] text-[1rem] ">
            Add to Wishlist
          </span>
        </div>
        <div className="flex md:flex md:flex-col md:items-start ">
          <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[1.2rem] md:w-[11rem] md:h-[3.5rem] rounded-md font-bold  text-[1rem]  w-[14rem] h-[2.7rem]  ">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-[1.5rem] font-bold m-0 leading-5">Details</p>
          <div className="flex items-center gap-2">
            <div className="bg-[#ee2841] opacity-[0.4] rounded-full w-[0.5rem] h-[0.5rem] leading-5"></div>
            <p className="m-0 leading-5 text-[1.1rem]">100% Genuie Product</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#ee2841] opacity-[0.4] rounded-full w-[0.5rem] h-[0.5rem]"></div>
            <p className="m-0 leading-5 text-[1.1rem] ">Easy Returns</p>
            <span className="underline underline-offset-4 text-[#EE2841] text-[1.2rem] leading-5 ">
              learn more
            </span>
          </div>
        </div>
      </div>
      <style>
        {`
                 .success:focus {
                    border:2px solid red;
                   }
                    .ant-input-suffix{
                      display:flex

                   }
                `}
      </style>
    </div>
  );
};

export default ProductRightSection;
