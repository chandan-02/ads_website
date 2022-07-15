import React from "react";
import Link from "next/link";
import { Button, Input } from "antd";

const Index = () => {
  return (
    <div
      id="signup"
      className="flex items-center justify-center h-screen gap-[2rem] overflow-hidden"
    >
      <div className="flex flex-col items-center w-[90%] gap-[1.5rem] md:w-[28rem]">
        <h1 className="text-black m-0 text-[2.5rem]">
          Sign<span className="text-[#EE2841]"> Up</span>
        </h1>
        <div className="button flex flex-col gap-4 w-full">
          <div className="form w-full">
            <span className="text-black">Email</span>
            <Input />
          </div>
          <div className="form w-full">
            <span className="text-black">Username</span>
            <Input />
          </div>
          <div className="form w-full">
            <span className="text-black">Password</span>
            <Input.Password className="" />
          </div>
          <button className="flex gap-2 items-center justify-center border font-semibold text-[1rem] text-[#047BBD] rounded-[5px] border-[#047BBD] w-full py-[0.5rem] my-2">
            <img
              className="h-6"
              src="https://img.icons8.com/color/344/google-logo.png"
            />
            Sign up with Google
          </button>
          <Button type="primary" className="w-full" onClick={functionenable}>
            Sign Up
          </Button>
          <span className="text-black font-semibold">
            Already have an account?{" "}
            <Link href="/signin#signin">
              <a className="underline hover:text-[#EE2841] text-[#EE2841]">
                Sign In
              </a>
            </Link>
          </span>
        </div>
        <style>{`
        .form > .ant-input{
          border-radius: 5px;
          font-size: 1rem;
          padding: 0.5rem 0.7rem;
        }
        .form > .ant-input-affix-wrapper.ant-input-password{
          border-radius: 5px;
          font-size: 1rem;
          padding: 0.5rem 0.7rem;
        }
        .button > .ant-btn{
          border-radius: 5px;
          font-size: 1rem;
          height: 2.5rem;
        }
        `}</style>
      </div>
    </div>
  );
};

export default Index;
