/* eslint-disable @next/next/no-img-element */
import React from "react";
// import "./index.css";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const contentStyle = {
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff"
};

import Image from "next/image";
// from https://react-slick.neostack.com/docs/example/custom-arrows
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715"
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, color: "black",
        fontSize: "15px",
        lineHeight: "1.5715"
      }}
      onClick={onClick}
    ><LeftOutlined /></div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} arrows {...settings}>
      <div className="md:flex md:flex-row md:gap-16">
        <img
          alt="img"
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={541}
          width={858}
        />
        <div className="md:flex md:flex-col md:gap-3.5">
          <p className="md:text-left md:text-4xl md:font-bold">
            AMD Ryzen 9 5950x{" "}
          </p>
          <p className="md:text-left md:text-[1.375rem] md:w-[42.938rem] text-[#404040]    ">
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


      <style>{`
      .ant-carousel .slick-dots li button {
        background: #ff4ef6;
        opacity: 0.4;
    }
    
        .ant-carousel .slick-dots li.slick-active button {
            opacity: 1;
            background: #ff4ef6;
        }
        .slick-arrow .slick-next::before {
            content: '';
        }
        .slick-arrow .slick-prev::before { 
            content: '';
        }
      `}</style>
    </Carousel>
  );
};

export default App;
