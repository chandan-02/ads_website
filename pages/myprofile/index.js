import React from "react";
import { UilEdit, UilEnvelopeAdd, UilLaptop } from "@iconscout/react-unicons";
import { RightOutlined } from "@ant-design/icons";
import { Input, Tabs } from "antd";
import PersonalDetails from "../../components/MyProfile/PersonalDetails";
const { TabPane } = Tabs;

export const Index = () => {
  return (
    <div className="flex flex-col items-center my-[2rem] gap-[15rem]">
      <div className="flex flex-col justify-start items-center bg-[#CACACA] h-[13.563rem] rounded-[10px] w-4/6">
        <div className="flex justify-end w-full">
          <UilEdit size="30" className="m-[1.25rem] cursor-pointer hover:text-black transition-all" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[16.375rem] h-[16.375rem] rounded-full">
            <img
              src="https://avatarfiles.alphacoders.com/297/297557.png"
              className="rounded-full w-full h-full object-cover border-4 border-white"
            />
          </div>
          <h1 className="text-[1.875rem] m-0">Elon Chusk</h1>
          <span className="text-[1.125rem]">@zenistu_th</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-4/6">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Details" key="1">
            <PersonalDetails />
          </TabPane>
          <TabPane tab="Address" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Reset Password" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="My Orders" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <div className="flex flex-col gap-[1.87rem] w-2/5">
          <div className="flex justify-between items-center mt-[1.2rem]">
            <span className="md:text-[1.125rem] text-[0.9rem] text-[#000000] font-bold">
              Latest Notifications
            </span>
            <div className="flex items-baseline">
              <span className="underline underline-offset-4 text-[#000000] font-bold md:text-[1.125rem] text-[0.9rem]">
                See More
              </span>
              <RightOutlined
                style={{ color: "#EE2841", font: "bold" }}
                className="md:text-[1.25rem] text-[0.9rem]"
              />
            </div>
          </div>
          <div className="border rounded-[10px] py-[1.56rem] px-[1.873rem] ">
            <div className="flex items-center gap-4">
              <div className="bg-[#EF9797] rounded-full inline-flex p-4"><UilLaptop size="31" color="#fff" /></div>
              <div>
                <h1 className="text-base text-black font-semibold m-0">Order Status Update</h1>
                <span className="text-[0.75rem]">
                  Your Order with id #ODRTX3080 will be delivered within next
                  two days.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#1E7E93] text-white w-full px-[4rem] py-[2.5rem] rounded-[10px] gap-3">
            <UilEnvelopeAdd size="40" />
            <h1 className="text-white text-[2.5rem] font-semibold m-0">
              Hooray !
            </h1>
            <span className="text-[1.125rem] text-center">
              You have already subscribed to our newsletter.
            </span>
            <span className="text-[1.125rem] underline underline-offset-2">
              Unsubscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
