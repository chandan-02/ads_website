import React from "react";
import useDimension from "../Head/UseDimension";
import { Select, Collapse, Checkbox, InputNumber, Pagination } from "antd";
import { UilArrowLeft } from "@iconscout/react-unicons";
const { Panel } = Collapse;

export const Filters = ({collapsed,setCollapsed}) => {
  const [width, height] = useDimension();

  return (
    <div className="flex collapse flex-col gap-[2rem] collapse">
      <div
        className="inline-flex md:hidden items-center gap-1 cursor-pointer justify-between"
      >
        <h1 className="text-[1.5rem] font-bold m-0">Filters</h1>
        <UilArrowLeft onClick={() => setCollapsed(!collapsed)} />
      </div>
      <Collapse ghost className="inline-block whitespace-nowrap">
        <Panel
          header="Price Range"
          className="lg:text-[1.125rem] text-[0.9rem] p-0"
        >
          <InputNumber
            defaultValue={1000}
            formatter={(value) =>
              `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            className="w-max"
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
        <Panel
          header="Brand"
          className="lg:text-[1.125rem] text-[0.9rem] p-0"
        >
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
        <Panel
          header="RAM Size"
          className="lg:text-[1.125rem] text-[0.9rem] p-0"
        >
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
        <Panel
          header="Storage Capacity"
          className="lg:text-[1.125rem] text-[0.9rem] p-0"
        >
          <Checkbox.Group>
            <div className="flex flex-col gap-2 checkbox">
              <Checkbox value="128gb">128 Gigabyte</Checkbox>
              <Checkbox value="256gb">256 Gigabyte</Checkbox>
              <Checkbox value="512gb">512 Gigabyte</Checkbox>
              <Checkbox value="1024gb">1024 Gigabyte</Checkbox>
              <Checkbox value="1025gb">Greater than 1024 Gigabyte</Checkbox>
            </div>
          </Checkbox.Group>
        </Panel>
      </Collapse>
      <style>{`
    
        .collapse > .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box{
            padding: 0;
        }
        .collapse > .ant-collapse > .ant-collapse-item > .ant-collapse-header{
          padding: 0;
          display : flex;
          align-items : center;
          color : #000;
        }

        .collapse > .ant-collapse-expand-icon{
          display : flex;
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

export default Filters;
