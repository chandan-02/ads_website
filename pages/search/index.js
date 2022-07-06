import React from "react";
import { Select, Collapse, Checkbox, InputNumber } from "antd";
import { ProductCard } from "../../components/Search/ProductCard";
const { Option } = Select;
const { Panel } = Collapse;

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];

export const Index = () => {
  return (
    <div className="flex mx-[2rem] md:mx-[3.2rem] my-[3rem] xl:gap-[7rem] lg:gap-[5rem] md:gap-[3rem] gap-[1rem]">
      <div className="collapse flex flex-col gap-[2rem]">
        <h1 className="text-[1.5rem] font-bold m-0">Filters</h1>
        <Collapse ghost className="inline-block whitespace-nowrap">
          <Panel header="Price Range" className="text-[1.125rem] p-0">
            <InputNumber
              defaultValue={1000}
              formatter={(value) =>
                `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
            <span> - </span>
            <InputNumber
              defaultValue={10000}
              formatter={(value) =>
                `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Panel>
        </Collapse>
        <Collapse ghost className="inline-block whitespace-nowrap">
          <Panel header="Brand" className="text-[1.125rem] p-0">
            <Checkbox.Group>
              <div className="flex flex-col gap-2 checkbox">
                <Checkbox value="amd">AMD</Checkbox>
                <Checkbox value="intel">Intel</Checkbox>
                <Checkbox value="msi">MSI</Checkbox>
              </div>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <Collapse ghost className="inline-block whitespace-nowrap">
          <Panel header="RAM Size" className="text-[1.125rem] p-0">
            <Checkbox.Group>
              <div className="flex flex-col gap-2 checkbox">
                <Checkbox value="4gb">4 Gigabyte</Checkbox>
                <Checkbox value="8gb">8 Gigabyte</Checkbox>
                <Checkbox value="16gb">16 Gigabyte</Checkbox>
                <Checkbox value="32gb">32 Gigabyte</Checkbox>
              </div>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <Collapse ghost className="inline-block whitespace-nowrap">
          <Panel header="Storage Capacity" className="text-[1.125rem] p-0">
            <Checkbox.Group>
              <div className="flex flex-col gap-2 checkbox">
                <Checkbox value="128gb">128 Gigabyte</Checkbox>
                <Checkbox value="intel">256 Gigabyte</Checkbox>
                <Checkbox value="msi">512 Gigabyte</Checkbox>
                <Checkbox value="msi">1024 Gigabyte</Checkbox>
                <Checkbox value="msi">Greater than 1024 Gigabyte</Checkbox>
              </div>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </div>
      <div className="w-full">
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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        <div></div>
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
      `}</style>
    </div>
  );
};

export default Index;
