import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import RecomProductSlider from "./RecomProductSlider";

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
const KeyFeatures = () => {
  const data = [
    {
      title: "SERIES",
      content: "Ryzen 9",
    },
    {
      title: "CORES",
      content: "12 Cores",
    },
    {
      title: "THREADS",
      content: "24 Threads",
    },
    {
      title: "SOCKET",
      content: "AM4",
    },
    {
      title: "SPEED",
      content: "3.7 GHZ",
    },
    {
      title: "SPEED (TURBO)",
      content: "4.8 GHZ",
    },
  ];
  return (
    <div className="flex flex-col md:gap-[15rem] gap-[5rem]">
      <div>
        <div className="flex flex-col gap-[1.7rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <p className="m-0 md:text-[1.2rem] text-[1rem]">Features:</p>
            <p className="m-0 md:w-[31rem] md:text-[1rem]">
              AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24
              Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series
              chipset (100-100000061WOF)
            </p>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-3 items-start justify-items-start">
            {data.map((each, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center"
                >
                  <p className="m-0 text-[0.8rem]">{each.title}</p>
                  <p className="m-0 text-[1.1rem] font-bold">{each.content}</p>
                </div>
              );
            })}
          </div>
          <div>
            <p className="m-0 font-[500] md:text-[22rem] text-[10rem] flex items-center justify-center leading-[0rem] opacity-5 text-[#000000]">
              AMD
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-[5.313rem] gap-[1.2rem]">
        <div className="flex justify-center items-center md:text-[2.5rem] text-[1.5rem] font-bold text-[#000000]">
          <span>
            Recommended <span>Products</span>
          </span>
        </div>
        <div className="flex flex-col">
          <Carousel arrows {...settings} autoplay={false} draggable={true}>
            <RecomProductSlider/>
            <RecomProductSlider/>
            <RecomProductSlider/>
            <RecomProductSlider/>
            <RecomProductSlider/>
            <RecomProductSlider/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
