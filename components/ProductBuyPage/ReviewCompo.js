import React from "react";
import { Select, Collapse } from "antd";
import ReviewCard from "./ReviewCard";
const { Option } = Select;
const { Panel } = Collapse;

const ReviewCompo = () => {
  return (
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
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-[5rem] lg:gap-[7rem] md:gap-[5rem] gap-[4rem]  ">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
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
      `}</style>
    </div>
  );
};

export default ReviewCompo;
