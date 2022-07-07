import React from "react";
import { Select, Collapse, Pagination } from "antd";
import { ProductCard } from "../../components/Search/ProductCard";
import Filters from "../../components/Search/Filters";
import { UilArrowRight } from '@iconscout/react-unicons'
const { Option } = Select;
const { Panel } = Collapse;

export const Index = () => {
  return (
    <div className="flex flex-col md:flex-row mx-[1.5rem] md:mx-[2rem] lg:mx-[3.2rem] xl:gap-[7rem] lg:gap-[5rem] md:gap-[3rem] gap-[1rem]">
      <div className="flex md:hidden items-center gap-1 cursor-pointer">
        <h1 className="text-[1.5rem] font-bold m-0">Filters</h1><UilArrowRight/>
      </div>
      <div className="hidden md:block">
        <Filters/>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="m-0">30 products</h1>
          <div className="flex items-center sort border pl-3">
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
        </div>
        <div className="grid 2xl:lg:grid-cols-5 xl:lg:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[1.625rem]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
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

export default Index;
