/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Carousel, Skeleton } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

// import { UilAngleRightB,UilAngleLeftB } from '@iconscout/react-unicons';
const contentStyle = {
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};

// from https://react-slick.neostack.com/docs/example/custom-arrows
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "1.5rem",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <RightCircleFilled
        style={{ color: "#EE2841", font: "bold", fontSize: "1.5rem" }}
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "1.5rem",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftCircleFilled
        style={{ color: "#EE2841", font: "bold", fontSize: "1.5rem" }}
      />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Secondcourisal = () => {
  const [dataLoading, setDataLoading] = useState(false);

  const ImageSkeleton = () => {
    return(
      <div className="flex justify-center gap-4">
        <Skeleton.Image className="w-full h-full" active />
        <Skeleton paragraph={{rows:2}} />
      </div>
    );
  };

  return (
    <div className="sliderNew" data-aos="zoom-in-down">
      <Carousel autoplay={true} draggable={true}>
        <div className=" flex justify-center items-center mt-[1.8rem]">
            { 
              !dataLoading ? 
              <img src="/assets/banner.svg" alt="Carousel-Product" className="w-[100%]" />
              : ImageSkeleton() 
            }
        </div>
        <div className=" flex justify-center items-center mt-[1.8rem]">
          { 
            !dataLoading ? 
            <img src="/assets/banner.svg" alt="Carousel-Product" className="w-[100%]" />
            : ImageSkeleton() 
          }
        </div>
      </Carousel>
      <style>{`
    
     
     .sliderNew > .ant-carousel .slick-dots li button {
      background: #ff4ef6;
      opacity: 0.4;
      }

      .sliderNew > .ant-carousel .slick-dots li.slick-active button {
              opacity: 1;
              background: #ff4ef6;
          }
          .sliderNew > .slick-arrow .slick-next::before {
              content: '';
          }
          .sliderNew > .slick-arrow .slick-prev::before { 
              content: '';
          }
          .sliderNew > .ant-carousel .slick-next::before {
          content: '';
      }

      .sliderNew > .ant-carousel .slick-prev::before {
        content: '';
    }
    .sliderNew > .ant-carousel .slick-dots-bottom {
        bottom: -4.125rem;
        gap:2.5rem;
        margin-bottom:1rem;
        padding-top:3.2rem;
      }
      .sliderNew > .ant-carousel .slick-dots li.slick-active button {
      opacity: 1;
      background: #FFFFFF;
      width: 3rem;
      height: 0.25rem;
      border-radius: 0.3rem;
      }
      .sliderNew > .ant-carousel .slick-dots li button {
      opacity: 1;
      background: #6F6F6F;
      width: 3rem;
      height: 0.25rem;
      border-radius: 0.3rem;
      }

      .sliderNew > .ant-carousel .slick-dots {
      position: absolute;
      }
      .sliderNew > .ant-carousel .slick-dots-bottom {
      bottom: 0px;
      }
    
      
      `}</style>
    </div>
  );
};

export default Secondcourisal;
