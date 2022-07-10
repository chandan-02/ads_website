import React from "react";
import { Button, Input, Tabs } from "antd";
const { TextArea } = Input;


export const PersonalDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
      <div className="md:col-span-2">
        <span className="text-[#404040] font-bold">Username</span>
        <Input />
      </div>
      <div className="">
        <span className="text-[#404040] font-bold">First Name</span>
        <Input />
      </div>
      <div>
        <span className="text-[#404040] font-bold">Last Name</span>
        <Input />
      </div>
      <div>
        <span className="text-[#404040] font-bold">Mobile</span>
        <Input />
      </div>
      <div>
        <span className="text-[#404040] font-bold">Email</span>
        <Input />
      </div>
      <div className="md:col-span-2">
        <span className="text-[#404040] font-bold">Address</span>
        <TextArea
          placeholder="Apt, Block, Street, Locality"
          autoSize={{
            minRows: 3,
            maxRows: 5,
          }}
          disabled
        />
      </div>
      <Button type="primary" size="large">Save Changes</Button>
    </div>
  );
};

export default PersonalDetails;
