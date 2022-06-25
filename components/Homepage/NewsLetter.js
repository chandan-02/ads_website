import React from "react";
import { Input, Button, Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const NewsLetter = () => {
  return (
    <div className="lg:flex justify-center items-center gap-4 my-[5rem] w-full h-full">
      <div className="relative w-3/6 h-full">
        <div className="flex h-min gap-6">
          <img className="object-contain" src="../assets/red-circles.webp" />
          <img className="lg:mt-[14rem]" src="../../assets/gray-circles.webp" />
        </div>
        <p className="lg:text-[4rem] md:text-[3rem] font-semibold absolute inset-0 leading-tight m-0">
          <span className="block">Subscribe</span> to our newsletter & recieve latest offers in your <span className="text-[#EE2841]">inbox.</span>
        </p>
      </div>
      <div className="w-2/6 flex flex-col gap-4">
        <Input placeholder="example@mail.com"/>
        <div className="text-[]">
          <Checkbox onChange={onChange}>
            I accept terms and conditions.
          </Checkbox>
        </div>
        <Button type="primary">Subscribe</Button>
      </div>
      <style>{`
        .ant-input{
            font-size: 1.625rem;
            padding: 1rem 2.188rem;
            border-radius: 0.625rem;
        }
        .ant-btn-primary{
            background: #EE2841;
            border: #EE2841;
            border-radius: 0.313rem;
            width: 100%;
            height: max-content;
            font-size: 1.625rem;
        }
        .ant-btn-primary:hover, .ant-btn-primary:focus{
            background: #EE2841;
            border: #EE2841;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
            background: #EE2841;
            border: #EE2841;
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;
