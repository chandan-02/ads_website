import React, { useState } from "react";
import { Select, Collapse } from "antd";
import ReviewCard from "./ReviewCard";
const { Option } = Select;
const { Panel } = Collapse;
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
import { data } from "autoprefixer";
import UseDimension from "../Head/UseDimension";

const ReviewCompo = () => {
  const [visibal, setVisibal] = useState(false);
  const [width, height] = UseDimension();
  return (
    <div className="mt-[1rem] flex flex-col gap-[2rem]">
      <div className="mt-[1rem] flex flex-col gap-[2rem]">
        <div className="flex items-center sort border pl-3 w-[14rem] h-[2.5rem] rounded-md ">
          <h1 className="m-0">Sort By:</h1>
          <Select
            style={{
              width: 160,
              color: "#000",
            }}
          >
            <Option value="popularity">Popularity</Option>
            <Option value="lowtohigh">Price (Low to High)</Option>
            <Option value="hightolow">Price (High to Low)</Option>
            <Option value="relevance">Relevance</Option>
          </Select>
        </div>
        {width <= 1360 ? (
          <div className="flex flex-col gap-[5rem]">
            {/* {
             data.map(()=>{
 
             })
           } */}
            {!visibal && (
              <div className="flex flex-col gap-[5rem]">
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] gird">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
                <div className="grid 2xl:grid-cols-4  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] ">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>
            )}

            {!visibal && (
              <div className=" md:w-[110rem] md:h-[11rem] w-[21rem] h-[10rem] gradientclass"></div>
            )}

            {visibal && (
              <div className="grid 2xl:grid-cols-4  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] ">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-[5rem]">
            {!visibal && (
              <div className="flex flex-col gap-[5rem]">
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] gird">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
                <div className="grid 2xl:grid-cols-4  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] ">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>
            )}

            {!visibal && (
              <div className=" md:w-[110rem] md:h-[11rem] w-[21rem] h-[10rem] gradientclass"></div>
            )}

            {visibal && (
              <div className="grid 2xl:grid-cols-4  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem] ">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        {visibal ? (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={() => {
              setVisibal(false);
            }}
          >
            <p className="text-[#000000] text-[1.5rem] font-bold m-0 leading-none	F">
              see less
            </p>
            <UilAngleUp color="#FF0000" size={50} />
          </div>
        ) : (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={() => {
              setVisibal(true);
            }}
          >
            <p className="text-[#000000] text-[1.5rem] font-bold m-0 leading-none	">
              see more
            </p>
            <UilAngleDown color="#FF0000" size={45} />
          </div>
        )}
      </div>

      <style>{`
        .sort > .ant-select:not(.ant-select-customize-input) .ant-select-selector{
            border: none;
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
            border-color: none;
            box-shadow: none;
        }
        .collapse > .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box{
            padding: 0;
        }
        .collapse > .ant-collapse > .ant-collapse-item > .ant-collapse-header{
            padding: 0;
        }
        .checkbox > .ant-checkbox-wrapper + .ant-checkbox-wrapper{
            margin: 0;
        }
        @media screen and ( max-width: 767px ) {
          .checkbox > .ant-checkbox-wrapper{
            font-size: 0.7rem;
          }
          .checkbox > .ant-checkbox-wrapper + .ant-checkbox-wrapper{
            font-size: 0.7rem;
          }
        }
        .gradientclass{
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
          position: absolute;
          bottom: -36rem;
        }
        @media screen and ( max-width: 480px ) {
          .gradientclass{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
            position: absolute;
            bottom: -195rem;
            display:none;
          }
       }
       @media screen and ( max-width: 1360px ) {
        .gradientclass{
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
          position: absolute;
          bottom: -48rem;
        }
     }
       

        
      `}</style>
    </div>
  );
};

export default ReviewCompo;
