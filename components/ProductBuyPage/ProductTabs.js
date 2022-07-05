import React from "react";
import { Tabs } from "antd";
import KeyFeatures from "./KeyFeatures";
import RecommendedProducts from "./KeyFeatures";

const { TabPane } = Tabs;

const ProductTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="md:w-full md:mx-[3rem] md:mb-[3rem] mainclass">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Key Features" key="1">
          <div>
          <KeyFeatures />
          {/* <RecommendedProducts/> */}
          </div>
        </TabPane>
        <TabPane tab="Reviews (0)" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="FAQ" key="3">
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
                padding: 1rem 1rem
            }
            
            }

           
            `}
      </style>
    </div>
  );
};

export default ProductTabs;
