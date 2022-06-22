import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from '@mantine/core';

const index = () => {
  const data = [
    {
      scr: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      scr: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      scr: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      scr: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      scr: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <div className="p-8">
      <div className=" grid  grid-cols-2 grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-6">
        <div className=" row-span-2 col-span-2 md:col-span-2 md:row-span-2  ">
          <img
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
            className="rounded-md"
          />
        </div>

        <Image
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={259}
          width={456}
        />
        <Image
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={259}
          width={456}
        />
        <Image
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={259}
          width={456}
        />
        <Image
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={259}
          width={456}
        />
      </div>

      <div>
        <p className="flex justify-center items-center text-[2.5rem] font-bold gap-2 py-9">
          Today’s <span className="text-red-600"> Deal</span>
        </p>

        <Carousel
          showArrows={true}
          // autoPlay={true}
          swipeable={true}
          className="p-6"
          
        >
          <div className="md:flex md:gap-16">
            <Image
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded-md"
              height={541}
              width={858}
            />
            <div className="md:flex md:flex-col md:gap-3.5">
              <p className="md:text-left md:text-4xl md:font-bold">
                AMD Ryzen 9 5950x{" "}
              </p>
              <p className="md:text-left md:text-[1.375rem] md:w-[42.938rem] text-[#404040]	">
                AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32
                Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series
                chipset (100-100000061WOF)
              </p>
              <div className="md:flex md:gap-7 md:items-center">
                <del className="md:text-red-600 md:text-3xl">₹ 19,000</del>{" "}
                <p className="md:text-[2.5rem] md:font-bold">₹ 16,000</p>
              </div>
              <div className="flex gap-7 ">
                <p className="underline underline-offset-4 text-[#404040] text-2xl">Add to cart</p>
                <p className="underline underline-offset-4 text-[#404040] text-2xl">Add to wishlist</p>
              </div>
              <button className="bg-[#EE2841] text-[#FFFFFF] text-[1.5rem] w-[14rem] h-[4rem] rounded-md font-bold mt-[1.5rem]">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <div className="md:flex md:gap-16">
              <Image
                src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="rounded-md"
                height={541}
                width={858}
              />
              <div className="md:flex md:flex-col md:gap-3.5">
                <p className="md:text-left md:text-4xl md:font-bold">
                  AMD Ryzen 9 5950x
                </p>
                <p className="md:text-left md:text-2xl md:w-350	">
                  AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32
                  Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500
                  Series chipset (100-100000061WOF)
                </p>
                <div className="md:flex md:gap-5 md:items-center">
                  <del className="text-red-600 text-3xl">₹ 19,000</del>
                  <p className="text-4xl">₹ 16,000</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <style>{`
          .carousel .control-next.control-arrow:before { border-left: 8px solid #EE2841 }
          .carousel .control-prev.control-arrow:before{ border-right: 8px solid #EE2841 }
          .carousel .control-dots .dot{
            transition: opacity .25s ease-in;
            opacity: .3;
            filter: alpha(opacity=30);
            box-shadow: 1px 1px 2pxrgba(0,0,0,0.9);
            background: red;
            border-radius: 0.313rem;
            width: 74px;
            height: 8px;
            cursor: pointer;
            display: inline-block;
            margin: 0 8px;
          }
        
          


        `}</style>
    </div>
  );
};

export default index;
