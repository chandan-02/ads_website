import React from "react";
import { Button, Input, Tabs } from "antd";
const { TextArea } = Input;

const ResetPass = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] my-2 btn">
      <div className="md:col-span-2 form">
        <span className="text-[#404040] font-bold">Old Password</span>
        <Input placeholder="************" />
      </div>
      <div className="form">
        <span className="text-[#404040] font-bold">New Password</span>
        <Input placeholder="********"  />
      </div>
      <div className="form">
        <span className="text-[#404040] font-bold">Confirm Password</span>
        <Input placeholder="********"  />
      </div>

      <Button type="primary"  size="large" className="w-[7rem] rounded-2xl">Update</Button>
      <style>{`
      .form > .ant-input{
        margin-top: 0.4rem;
      }
      .btn > .ant-btn-primary{
        border-color: #2a2a2a;
        background: #000000;
      }
      `}</style>
    </div>
  )
}

export default ResetPass