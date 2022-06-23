/* eslint-disable @next/next/no-img-element */
import React from "react";

// import "./index.css";
import { Carousel } from "antd";
import { LeftOutlined, RightCircleFilled} from "@ant-design/icons";
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
  
      
      <RightCircleFilled style={{color:"#EE2841",font:"bold",fontSize: "1.5rem"}} />
      
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{color:"#EE2841",font:"bold",fontSize: "1.5rem"}}/>
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Secondcourisal = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
<>
<Carousel afterChange={onChange} arrows {...settings}   >
<div className=" flex justify-center items-center mt-[3.2rem]">
      <img src="/assets/banner.svg" className="w-[100%]" />
    </div>
    <div className=" flex justify-center items-center mt-[3.2rem]">
      <img src="/assets/banner.svg" className="w-[100%]" />
    </div>
    </Carousel>
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
     .ant-carousel .slick-next::before {
      content: '';
  }

  .ant-carousel .slick-prev::before {
    content: '';
}
.ant-carousel .slick-dots-bottom {
   bottom: -4.125rem;
  gap:2.5rem;
   margin-bottom:1rem;
  padding-top:3.2rem;
}
.ant-carousel .slick-dots li.slick-active button {
opacity: 1;
background: #FFFFFF;
width: 3rem;
height: 0.25rem;
border-radius: 0.3rem;
}
.ant-carousel .slick-dots li button {
opacity: 1;
background: #6F6F6F;
width: 3rem;
height: 0.25rem;
border-radius: 0.3rem;
}

.ant-carousel .slick-dots {
position: absolute;
}
.ant-carousel .slick-dots-bottom {
 bottom: 0px;
}
    
      
      `}</style>
    </>
    
   
    
  );
};

export default Secondcourisal;
