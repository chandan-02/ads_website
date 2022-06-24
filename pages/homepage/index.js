import React from "react";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Slider from '../../components/homepage/slider'
import Banner from "../../components/Homepage/Banner";
import Bannergrid from "../../components/Homepage/Bannergrid";
import Secondcourisal from "../../components/Homepage/SecondCarousel";
import Review from "../../components/Homepage/Review";
import GamingRigsCard from "../../components/Homepage/GamingRigsCard";
import ComingSoon from "../../components/Homepage/ComingSoon";

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
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const carouselDecider = () => {
    if(typeof window !== "undefined" && window.innerWidth >= "1000"){
      return <ComingSoon/>;
    }else{
      return <Carousel><ComingSoon/></Carousel>;
    }
  }
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
        <span className="flex justify-center items-center text-[2.5rem] font-bold gap-2 my-10 ">
          Today’s <span className="text-red-600"> Deal</span>
        </span>
        <Slider />
        <div>
          <Banner />
          <div className="md:grid md:grid-cols-3 justify-items-center justify-evenly gap-[1.8rem] mt-[1.8rem] grid grid-cols-2">
            <Bannergrid />
            <Bannergrid />
            <div className="col-span-2 md:col-span-1">
              <Bannergrid />
            </div>
          </div>
          <Secondcourisal />
         
          <div className="flex justify-between items-center mt-[1.2rem] ">
        <div className="flex gap-[0.5rem] items-center">
          <span className="md:text-[2.2rem] text-[#000000] text-[0.8rem]">Upgrade your</span>
          <span className="text-[#EE2841] font-bold text-[0.8rem] md:text-[2.2rem]">
            Existing Gaming Rigs
          </span>
        </div>

        <div>
        <div className="flex items-end">
          <span className="underline underline-offset-4 text-[#000000] font-bold md:text-[1.1rem] md:text-2xl">
            See More
          </span>
          <RightOutlined
            style={{ color: "#EE2841", font: "bold", fontSize: "" }}
            className="md:text-[1.5rem] text-[1rem]"
          />
          
        </div>
        
        </div>
        
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 md:gap-10 gap-4 ">
      <GamingRigsCard/>
        <GamingRigsCard/>
        <GamingRigsCard/>
        <GamingRigsCard/>
        <GamingRigsCard/>
        
      </div>
        
        </div>

      </div>

      <div>
        <Review/>
      </div>
      <div>
        {carouselDecider()}
      </div>
    </div>
  );
};

export default index;
