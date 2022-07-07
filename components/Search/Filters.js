import React from "react";
import useDimension from "../Head/UseDimension";
import { Select, Collapse, Checkbox, InputNumber, Pagination } from "antd";
const { Panel } = Collapse;

export const Filters = () => {
  const [width, height] = useDimension();

  return (
    <div className="flex collapse flex-col gap-[2rem]">
      <h1 className="text-[1.5rem] font-bold m-0">Filters</h1>
      <Collapse ghost className="inline-block whitespace-nowrap">
        <Panel
          header="Price Range"
          className="lg:text-[1.125rem] md:text-[0.9rem] text-[0.8rem] p-0"
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
          className="lg:text-[1.125rem] md:text-[0.9rem] text-[0.8rem] p-0"
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
          className="lg:text-[1.125rem] md:text-[0.9rem] text-[0.8rem] p-0"
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
          className="lg:text-[1.125rem] md:text-[0.9rem] text-[0.8rem] p-0"
        >
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
  );
};

export default Filters;
