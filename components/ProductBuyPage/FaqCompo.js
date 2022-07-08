import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FaqCompo = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="">
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel  className="md:text-[1.5rem] m-0 	" header="What product you buy?" key="1">
          <p className="md:w-[55rem] md:text-[1.1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled i
          </p>
        </Panel>
        <Panel className="md:text-[1.5rem] m-0 " header="What product you buy?" key="2">
          <p className="md:w-[55rem] md:text-[1.1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled i
          </p>
        </Panel>
        <Panel className="md:text-[1.5rem] m-0" header="What product you buy?" key="3">
          <p className="md:w-[55rem] md:text-[1.1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled i
          </p>
        </Panel>
      </Collapse>
      <style>
        {
            `
            .ant-collapse-expand-icon{
                line-height: 1;
            }
            `
        }
      </style>
    </div>
  );
};

export default FaqCompo;
