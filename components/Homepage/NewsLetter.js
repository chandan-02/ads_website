import React from "react";
import { Input, Button, Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const NewsLetter = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col justify-center md:items-center gap-4 my-[5rem] w-full h-full">
      <div className="relative flex md:w-3/6 h-full">
        <div className="flex h-min gap-6 items-start overflow-clip">
          <img className="object-contain" src="../assets/red-circles.webp" alt="red-circles" />
          <img className="lg:mt-[8rem]" src="../../assets/gray-circles.webp" alt="gray-circles" />
        </div>
        <p className="lg:text-[4rem] md:text-[3rem] text-[2rem] text-black font-semibold absolute md:inset-0 leading-tight m-0">
          <span className="block">Subscribe</span> to our newsletter & recieve latest offers in your <span className="text-[#EE2841]">inbox.</span>
        </p>
      </div>
      <div className="md:w-2/6 flex flex-col gap-4 newsinput">
        <Input placeholder="example@mail.com"/>
        <div className="text-[]">
          <Checkbox onChange={onChange}>
            I accept <u>terms and conditions.</u>
          </Checkbox>
        </div>
        <Button type="primary">Subscribe</Button>
      </div>
      <style>{`
        .newsinput > .ant-input{
            font-size: 1.625rem;
            padding: 1rem 1.5rem;
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
        @media screen and (max-width: 1080px) {
          .newsinput > .ant-input {
            font-size: 1.3rem;
            padding: 0.8rem 1.25rem;
            border-radius: 0.625rem;
        }
        @media screen and (max-width: 480px) {
          .newsinput > .ant-input {
            font-size: 1rem;
            padding: 0.725rem 1.25rem;
            border-radius: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;
