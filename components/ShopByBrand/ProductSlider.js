import React from "react";
import { Input, Carousel } from "antd";
import ShopByBrandSlider from "./ShopByBrandSlider";

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
      <RightOutlined
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
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined
        style={{ color: "#EE2841", font: "bold", fontSize: "1.5rem" }}
      />
    </div>
  );
};

const settings = {
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
const ProductSlider = () => {
  return (
    <div className="flex flex-col m-[1rem] md:m-[0rem]">
      <Carousel arrows {...settings} autoplay={true} draggable={true}>
        <ShopByBrandSlider />
        <ShopByBrandSlider />
        <ShopByBrandSlider />
        <ShopByBrandSlider />
        <ShopByBrandSlider />
        <ShopByBrandSlider />
        <ShopByBrandSlider />
      </Carousel>
    </div>
  );
};

export default ProductSlider;
