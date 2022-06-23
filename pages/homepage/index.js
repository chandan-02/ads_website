import React from "react";
import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from '../../components/homepage/slider'
import Banner from "../../components/Homepage/Banner";
import Bannergrid from "../../components/Homepage/Bannergrid";
import Secondcourisal from "../../components/Homepage/SecondCarousel";

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
        </div>

      </div>
    </div>
  );
};

export default index;
