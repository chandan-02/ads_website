import React from "react";
import ProductRightSection from "../../components/ProductBuyPage/ProductRightSection";
import ProductSlider from "../../components/ProductBuyPage/ProductSlider";
import ProductTabs from "../../components/ProductBuyPage/ProductTabs";
import { Carousel } from "antd";
import RecomProductSlider from "../../components/ProductBuyPage/RecomProductSlider";

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
   
    </div>
  );
};

const settings = {
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="flex flex-col gap-[2rem] md:gap-[6rem] md:p-16 p-6">
      <div className="md:flex md:gap-[3.063rem] flex flex-col gap-[1rem] md:flex-row">
        <ProductSlider />
        <ProductRightSection />
      </div>
      <div className="flex flex-col gap-[6rem] md:gap-[10rem]">
        <ProductTabs />
        <div className="flex flex-col md:gap-[5.313rem] gap-[1.2rem]">
          <div className="flex justify-center items-center md:text-[2.5rem] text-[1.5rem] font-bold text-[#000000]">
            <span>
              Recommended <span>Products</span>
            </span>
          </div>
          <div className="flex flex-col m-[1rem] md:m-[0rem]">
            <Carousel arrows {...settings} autoplay={false} draggable={true}>
              <RecomProductSlider />
              <RecomProductSlider />
              <RecomProductSlider />
              <RecomProductSlider />
              <RecomProductSlider />
              <RecomProductSlider />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
