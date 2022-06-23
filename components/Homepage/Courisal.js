import React from 'react'
import Image from "next/image";

const Courisal = ({img,title,desc,price}) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
      });
  return (
    <div>
    <div className="md:flex md:justify-center  md:gap-[3.7rem]">
    <img
          src={img}
          className="rounded-md"
          height={541}
          width={858}
        />
      <div className="flex flex-col md:gap-3.5 gap-[0.3rem]">
        <span className="md:text-left md:text-4xl font-bold text-[1.3rem] ">
          {title}
        </span>
        <span className="md:text-left md:text-[1.375rem] md:w-[42.938rem] text-[#404040]">
         {desc}
        </span>
        <div className="flex gap-[0.7rem] md:gap-7 align-baseline items-baseline">
          <del className="text-red-600 text-[1.3rem]  md:text-3xl">{formatter.format(price ?? 0)}</del>
          <span className="md:text-[2.5rem] text-[1.8rem] md:font-bold">{formatter.format(price ?? 0)}</span>
        </div>
        <div className="flex md:gap-7 gap-[0.7rem]">
          <span className="underline underline-offset-4 text-[#404040] text-[1.1rem] md:text-2xl">
            Add to cart
          </span>
          <span className="underline underline-offset-4 text-[#404040] text-[1.1rem] md:text-2xl">
            Add to wishlist
          </span>
        </div>
        <button className="bg-[#EE2841] text-[#FFFFFF] md:text-[1.5rem] md:w-[11rem] md:h-[4rem] rounded-md font-bold md:mt-[1.5rem] text-[1.1rem]  w-[8rem] h-[2.7rem] mt-[1rem] ">
          Buy Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default Courisal