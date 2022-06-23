/* eslint-disable @next/next/no-img-element */
import React from "react";
// import "./index.css";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Courisal from "./Courisal";
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
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <RightOutlined style={{ color: "#EE2841", font: "bold", fontSize: "1.5rem" }} />
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
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ color: "#EE2841", font: "bold", fontSize: "1.5rem" }} />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel afterChange={onChange} arrows {...settings}>
        <Courisal img={"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} title={"AMD Ryzen 9 5950x"} desc={"AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Serieschipset (100-100000061WOF)"} price={19000} />
        <Courisal img={"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} title={"AMD Ryzen 9 5950x"} desc={"AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Serieschipset (100-100000061WOF)"} price={19000} />
        <Courisal img={"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} title={"AMD Ryzen 9 5950x"} desc={"AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Serieschipset (100-100000061WOF)"} price={19000} />
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
      content: "";
    }
    .slick-arrow .slick-prev::before {
      content: "";
    }
    .ant-carousel .slick-next::before {
      content: "";
    }
    
    .ant-carousel .slick-prev::before {
      content: "";
    }
    .ant-carousel .slick-dots-bottom {
      /* bottom: -4.125rem; */
      gap: 2.5rem;
      /* margin-bottom:1rem; */
      padding-top: 3.2rem;
    }
    .ant-carousel .slick-dots li.slick-active button {
      opacity: 1;
      background: #ee2841;
      width: 3rem;
      height: 0.25rem;
      border-radius: 0.3rem;
    }
    .ant-carousel .slick-dots li button {
      opacity: 1;
      background: #6f6f6f;
      width: 3rem;
      height: 0.25rem;
      border-radius: 0.3rem;
    }
    
    .ant-carousel .slick-dots {
      position: unset;
    }
    
      
      `}</style>
      </Carousel>
    </>
  );
};

export default App;
