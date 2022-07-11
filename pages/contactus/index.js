import React, { useState } from "react";
import Maps from "../../components/ContactUs/Maps";
import {
  Radio,
  Input,
  Select,
  Checkbox,
  Button,
  Dropdown,
  Menu,
  Space,
} from "antd";
const { TextArea } = Input;
const { Option } = Select;

function Index() {
  const [radio, setRadio] = useState(1);
  const [address, setAddress] = useState("");
  return (
    <div className="flex flex-col gap-[4rem]">
      <div className="flex justify-center items-center mt-[2rem]">
        <p className="m-0 p-0 text-[2rem] font-bold text-[#000]">Know More About Us</p>
      </div>

      <div className=" md:flex md:items-center md:flex-row flex flex-col-reverse  md:mx-[7rem] md:gap-[4rem]  md:w-[100%] mx-[1rem] gap-[2rem]">
        <div className="relative flex flex-col h-full md:w-[50%]">
          <div className="flex h-min gap-6 items-start overflow-clip md:w-[70%]">
            <img
              className="object-contain md:w-[50%] w-[12rem]"
              src="../assets/red-circles.webp"
              alt="red-circles"
            />
            <img
              className="lg:mt-[8rem] md:w-[50%] w-[13rem]"
              src="../../assets/gray-circles.webp"
              alt="gray-circles"
            />
          </div>

          {/* <span className="block">Subscribe</span> to our newsletter & recieve latest offers in your <span className="text-[#EE2841]">inbox.</span> */}
          <p className="lg:text-[1.5rem] md:text-[1rem] text-[0.8rem] font-semibold absolute md:inset-0 leading-tight m-0 p-[1rem] lg:w-[46rem] text-[#000]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[1.5rem] md:w-[13rem] md:h-[3.5rem] rounded-md font-bold  text-[1.1rem]  w-[8rem] h-[2.7rem] md:mt-0 mt-[1rem] ">
            Shop Now
          </button>
        </div>

        <div className="md:w-[50%]">
          <img
            alt="bannner"
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="md:w-[70%] mr-2"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-[2rem]">
        <p className="m-0 p-0 md:text-[2rem] text-[1.5rem] font-bold text-[#000]">
          Contact & Visit Us
        </p>
        <p className="m-0 p-0 md:text-[2rem] font-bold text-[#000]">
          One morning, when Gregor Samsa woke{" "}
        </p>
      </div>
      <div className="md:flex md:flex-row md:mb-[10rem] mb-[5rem] md:mx-[7rem]  md:w-[100%] flex flex-col gap-3 mx-[1rem]">
        <Maps />
        <div className="md:w-[50%]">
          <div className="grid grid-cols-2 gap-[2rem] md:w-[50%]">
            <div>
              <span className="text-[#000]">First Name</span>
              <Input />
            </div>
            <div>
              <span className="text-[#000]">Last Name</span>
              <Input />
            </div>
            <div>
              <span className="text-[#000]">Mobile</span>
              <Input />
            </div>
            <div>
              <span className="text-[#000]">Email</span>
              <Input />
            </div>
            <div className="col-span-2">
              <span className="text-[#000]">Message</span>
              <TextArea
                value={address}
                onChange={(e) => setAddress(e?.target?.value)}
                placeholder="Apt, Block, Street, Locality"
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
                
              />
             
            </div>
            <div>
              <button className="bg-[#EE2841] hover:bg-[#ffff] hover:text-[#EE2841] hover:border-[#EE2841] hover:border-2 text-[#FFFFFF] md:text-[1.1rem] md:w-[10rem] md:h-[3rem] rounded-md font-bold  text-[1.1rem]  w-[8rem] h-[2.7rem] md:mt-0 mt-[1rem] ">
              Submit
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
