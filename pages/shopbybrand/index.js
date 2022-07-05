import React from "react";
import { Tabs } from "antd";
import { Input, Carousel } from "antd";
import Bannergrid from "../../components/Homepage/Bannergrid";
import {
  UilSearch,
  UilBars,
  UilShoppingCart,
  UilHeart,
  UilBell,
} from "@iconscout/react-unicons";

import ShopByBanner from "../../components/ShopByBrand/ShopByBanner";
import RecomProductSlider from "../../components/ProductBuyPage/RecomProductSlider";
import ShopByBrandSlider from "../../components/ShopByBrand/ShopByBrandSlider";
import ProductSlider from "../../components/ShopByBrand/ProductSlider";

const { TabPane } = Tabs;

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

const Index = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex  items-start md:my-[2rem] md:mx-[3rem] my-[2rem]">
      <div className="mainclass md:w-[65rem] 2xl:w-[100rem] w-[100%]">
        <Tabs defaultActiveKey="1" onChange={onChange} className="">
          <TabPane tab="ASUS" key="1">
            <div className=" flex flex-col md:gap-[3rem] gap-[2rem]">
              <ShopByBanner />
              <div>
                <div className="flex justify-between items-center md:mb-[3rem] ml-[2.1rem] mb-[2rem] ">
                  <p className="m-[0] md:text-[2.2rem] text-[#000000] text-[1rem] text-bold ">
                    Motherboards
                  </p>
                  <span className="underline underline-offset-4 text-[#EE2841] font-bold md:text-[1rem] md:text-2xl">
                    View All
                  </span>
                </div>
                <div className="flex flex-col m-[1rem] md:m-[0rem]">
                  <Carousel
                    arrows
                    {...settings}
                    autoplay={true}
                    draggable={true}
                  >
                    <RecomProductSlider />
                    <RecomProductSlider />
                    <RecomProductSlider />
                    <RecomProductSlider />
                    <RecomProductSlider />
                    <RecomProductSlider />
                  </Carousel>
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 justify-items-center justify-evenly gap-[1.8rem] md:mt-[1.8rem] grid grid-cols-2">
                <Bannergrid />
                <Bannergrid />
                <div className="col-span-2 md:col-span-1">
                  <Bannergrid />
                </div>
              </div>
              <div className="flex justify-between items-center  ml-[2.1rem]">
                <p className="m-[0] md:text-[2.2rem] text-[#000000] text-[1rem] text-bold ">
                  Graphic Cards
                </p>
                <span className="underline underline-offset-4 text-[#EE2841] font-bold md:text-[1rem] md:text-2xl">
                  View All
                </span>
              </div>
              <ProductSlider />
              <ShopByBanner />
              <div>
                {/* <p className="m-0 font-[500] md:text-[22rem] text-[10rem] flex items-center justify-center leading-[0rem] opacity-5 text-[#000000]">
                  AMD
                </p> */}
              </div>
            </div>
          </TabPane>
          <TabPane tab="COOLER MASTER" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="COOLER MASTER" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="COOLER MASTER" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="COOLER MASTER" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="COOLER MASTER" key="6">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="COOLER MASTER" key="7">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <style>
          {`
            .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                color: #EE2841;
                display: flex;
                background: rgba(238, 40, 65, 0.18);
                justify-content: center;
                align-items: center;
                font-weight: 400;
                font-size: 1.35rem;
                line-height: 1.5rem;
                border-radius: 50px;
                padding: 1rem 3rem
            }
            .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar
            {
                height: 0px;
            }
            .ant-tabs-tab{
                padding:0px;
            }
           .ant-tabs-tab-btn{
                transition:none
            }
            .ant-tabs-tab-btn{
                color: #EE2841;
                font-weight: 400;
                font-size: 1.35rem;
                line-height: 1.5rem;
                // padding:1rem;
                padding: 1rem 3rem
            }

            .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before{
                border-bottom: 0px solid #f0f0f0;
                content: '';
            }

            @media screen and ( max-width: 480px ) {
               .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                color:#EE2841;
                display: flex;
                background: rgba(238, 40, 65, 0.18);
                justify-content: center;
                align-items: center;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.5rem;
                border-radius: 50px;
                padding: 1rem 2rem
            }

            .ant-tabs-tab-btn{
              color: #EE2841;
              font-weight: 400;
              font-size: 1rem;
              line-height: 1.5rem;
              // padding:1rem;
              padding: 1rem 2rem
          }
          .ant-tabs-tab + .ant-tabs-tab{
             margin: 0;
          }
          }
            
            }

           
            `}
        </style>
      </div>

      <div className="md:w-[20rem] ">
        <Input
          style={{ borderRadius: 5, height: 50 }}
          placeholder="Search Product ..."
          suffix={<UilSearch size="18" color="#6F6F6F" />}
        />
      </div>
    </div>
  );
};

export default Index;
