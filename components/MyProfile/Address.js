import React from "react";
import { Button, Input, Tabs } from "antd";
import { UilPen, UilPlus } from "@iconscout/react-unicons";
const { TextArea } = Input;

const Address = () => {
  return (
    <div className="btn flex flex-col gap-4 w-4/5">
      <div className="flex w-full gap-2">
        <div className="">
          <h1 className="text-black text-[1.125rem]">Steve kalam.</h1>
          <div className="bg-[#F8D9AC] h-40 flex py-2 px-3 rounded-[5px]">
            <span className="text-black text-[1rem]">
              401 / 21 RSA Complex, Malad, Mumbai-95. 401 / 21 RSA Complex,
              Malad, Mumbai-95.
            </span>
            <div className="h-min w-2/3 flex justify-end">
              <span className="bg-black rounded-full p-2 cursor-pointer">
                <UilPen size="18" color="white" />
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-black text-[1.125rem]">Mark Zunubuk.</h1>
          <div className="border h-40 flex py-2 px-3 rounded-[5px]">
            <span className="text-black text-[1rem]">
              401 / 21 RSA Complex, Malad, Mumbai-95. 401 / 21 RSA Complex,
              Malad, Mumbai-95.
            </span>
            <div className="h-min w-2/3 flex justify-end">
              <span className="bg-black rounded-full p-2 cursor-pointer">
                <UilPen size="18" color="white" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center text-[1.25rem] text-black font-bold gap-2">
          <span className="bg-black rounded-full p-2 cursor-pointer"><UilPlus color="white"/></span>
          <span>Add new Address</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="box">
            <span className="text-[#404040] font-semibold text-[1rem]">Full Name</span>
            <Input />
          </div>
          <div className="box">
            <span className="text-[#404040] font-semibold text-[1rem]">New Address</span>
            <TextArea
              autoSize={{
                minRows: 5,
                maxRows: 5,
              }}
            />
          </div>
        </div>
      </div>
      <Button type="primary" size="large" className="w-[7rem] rounded-2xl">
        Add Address
      </Button>
      <style>{`
        .box > .ant-input{
          font-size: 1.125rem;
          padding: 0.5rem 1rem;
        }
        .box > .textarea.ant-input{
          font-size: 1.125rem;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default Address;
