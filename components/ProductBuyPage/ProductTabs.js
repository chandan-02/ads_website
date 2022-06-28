import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const ProductTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="w-full my-[6rem] mx-[3rem]">
         <Tabs defaultActiveKey="1" onChange={onChange} >
      <TabPane tab="Key Features" key="1" className="mainclass">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Reviews (0)" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="FAQ" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    <style>
        {
            `
            .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                color: #EE2841;
                // background:red;
                display: flex;
                // padding:1rem;
                // width: 199px;
                // height: 65px;
                background: rgba(238, 40, 65, 0.18);
                justify-content: center;
                align-items: center;
                font-weight: 400;
                font-size: 21px;
                line-height: 24px;
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
                font-size: 21px;
                line-height: 24px;
                padding:1rem;
            }
            `
        }
    </style>
    </div>
   
  );
};

export default ProductTabs;
