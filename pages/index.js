import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { Carousel, Skeleton } from "antd";
import Slider from "../components/Homepage/Slider";
import Banner from "../components/Homepage/Banner";
import Bannergrid from "../components/Homepage/Bannergrid";
import Secondcourisal from "../components/Homepage/SecondCarousel";
import Review from "../components/Homepage/Review";
import GamingRigsCard from "../components/Homepage/GamingRigsCard";
import ComingSoon from "../components/Homepage/ComingSoon";
import GamingRigsSlides from "../components/Homepage/GamingRigsSlides";
import ShopByBrand from "../components/Homepage/ShopByBrand";
import NewLaunches from "../components/Homepage/NewLaunches";
import NewLaunchesCompo from "../components/Homepage/NewLaunchesCompo";
import NewsLetter from "../components/Homepage/NewsLetter";
import axios from "../helper/axios";
import { data } from "autoprefixer";
import Link from "next/link";

const Index = () => {
  const [homeImages, setHomeImages] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />;
  };
  const ProductSkeleton = () => {
    return (
      <div className="flex justify-center w-full gap-2">
        <Skeleton.Image className="w-full h-full" active />
        <div className="w-2/6">
          <Skeleton paragraph={{ rows: 2 }} active />
          <Skeleton.Button active />
        </div>
      </div>
    );
  };
  const GetHomeImages = async () => {
    // setLoading(true)
    setDataLoading(true);
    try {
      const userUpdated = await axios.get(`/pages/front_dashboard/`);
      if (userUpdated?.data?.success) {
        // Notification('Success', "User updated successfully", 'success');
        // clearState();
        // setModal({ editVisible: false });
        // setLoading(false);
        setHomeImages(userUpdated?.data?.data[0]?.sectionOne);
        setDataLoading(false);
      }
    } catch (error) {
      if (error?.response?.data) {
        alert("Error", error?.response?.data?.data, "error");
      } else {
        alert("Error", error?.message, "error");
      }
      // setLoading(false);
    }
  };
  useEffect(() => {
    GetHomeImages();
  }, []);

  return (
    <div className="md:p-8 p-4">
      <div className=" grid  grid-cols-2 grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-6">
        <div className=" row-span-2 col-span-2 md:col-span-2 md:row-span-2 h-full">
          {!dataLoading ? (
            <img
              src={homeImages?.leftSideImage}
              className="rounded-md h-full w-full"
              alt="left-banner"
            />
          ) : (
            ImageSkeleton()
          )}
        </div>

        <div className="w-full h-full">
          {!dataLoading ? (
            <img
              src={homeImages?.rtOneImage}
              className="rounded-md w-full h-full"
              alt="right-banner-1"
            />
          ) : (
            ImageSkeleton()
          )}
        </div>

        <div className="w-full h-full">
          {!dataLoading ? (
            <img
              src={homeImages?.rtTwoImage}
              className="rounded-md w-full h-full"
              alt="right-banner-2"
            />
          ) : (
            ImageSkeleton()
          )}
        </div>

        <div className="w-full h-full">
          {!dataLoading ? (
            <img
              src={homeImages?.rtThreeImage}
              className="rounded-md w-full h-full"
              alt="right-banner-3"
            />
          ) : (
            ImageSkeleton()
          )}
        </div>

        <div className="w-full h-full">
          {!dataLoading ? (
            <img
              src={homeImages?.rtFourImage}
              className="rounded-md w-full h-full"
              alt="right-banner-4"
            />
          ) : (
            ImageSkeleton()
          )}
        </div>
      </div>

      <div className="m-[1rem]" >
        <span className="flex justify-center items-center text-[2.5rem] font-bold gap-2 my-10 text-[#000] ">
          Today’s <span className="text-red-600"> Deal</span>
        </span>
        <Slider />
        <div >
          {!dataLoading ? <Banner /> : ImageSkeleton()}
          <div className="md:grid md:grid-cols-3 justify-items-center justify-evenly gap-[1.8rem] mt-[1.8rem] grid grid-cols-2" >
            {!dataLoading ? <Bannergrid /> : ImageSkeleton()}
            {!dataLoading ? <Bannergrid /> : ImageSkeleton()}
            <div className="col-span-2 md:col-span-1">
              {!dataLoading ? <Bannergrid /> : ImageSkeleton()}
            </div>
          </div>
          <Secondcourisal />

          <div className="flex justify-between items-center mt-[1.2rem] "data-aos="fade-right">
            <div className="flex gap-[0.5rem] md:flex-row md:items-center flex-col">
              <span className="md:text-[2.2rem] text-[#000000] text-[1rem] ">
                Upgrade your
              </span>
              <span className="text-[#EE2841] font-bold text-[1rem] md:text-[2.2rem]">
                Existing Gaming Rigs
              </span>
            </div>
            <div className="flex items-end">
            <Link
            href='/search'>
              <span className="underline underline-offset-4 text-[#000000] font-bold md:text-[1.1rem] md:text-2xl cursor-pointer">
                See More
              </span>
            </Link>
              <RightOutlined
                style={{ color: "#EE2841", font: "bold", fontSize: "" }}
                className="md:text-[1.5rem] text-[1rem]"
              />
            </div>
          </div>
          <div className="" data-aos="fade-right">
            <GamingRigsSlides />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[2rem]">
        <div className="flex justify-between items-center mt-[2rem] ">
          <div className="flex gap-[0.5rem] items-center">
            <span className="md:text-[2.2rem] font-bold text-[#000000] text-[1.5rem]">
              New
            </span>
            <span className="text-[#EE2841] font-bold text-[1.5rem] md:text-[2.2rem]">
              Launches
            </span>
          </div>

          <div className="flex items-end cursor-pointer">
            <Link
            href='/search'>
            <span className="underline underline-offset-4 text-[#000000] font-bold md:text-[1.1rem] md:text-2xl">
              See More
            </span>
            </Link>
           
            <RightOutlined
              style={{ color: "#EE2841", font: "bold", fontSize: "" }}
              className="md:text-[1.5rem] text-[1rem]"
            />
          </div>
        </div>
        <NewLaunchesCompo />
      </div>

      <div className="mt-[1.5rem]">
        <div className="flex gap-[0.5rem] items-center justify-center">
          <span className="md:text-[2.2rem] font-bold text-[#000000] text-[1.5rem]">
            Shop By
          </span>
          <span className="text-[#EE2841] font-bold text-[1.5rem] md:text-[2.2rem]">
            Brand
          </span>
        </div>
        <div className="grid 2xl:grid-cols-6 justify-items-center md:gap-y-[1.6rem] mt-[1.5rem] grid-cols-2 md:grid-cols-4 gap-[1.5rem]">
          <div className="2xl:col-start-2">
            {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}
          </div>
          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}

          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}

          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}

          <div className="2xl:col-end-3">
            {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}
          </div>
          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}
          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}
          {!dataLoading ? <ShopByBrand /> : ImageSkeleton()}
        </div>
      </div>

      <Review />

      <ComingSoon />

      <NewsLetter />
    </div>
  );
};

export default Index;
