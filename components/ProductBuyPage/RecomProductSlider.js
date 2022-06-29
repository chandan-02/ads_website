import React, { useState } from 'react'
import { HeartOutlined, HeartFilled } from "@ant-design/icons";


const RecomProductSlider = () => {
    const [click, setClick] = useState(1);
  return (
    <div>
        <div className="w-[80%] relative">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded-md"
              alt="Gaming-Rigs"
            />
           
            {click == 0 ? (
              <div
                className="bg-[#FFFFFF] absolute cursor-pointer m-[0.7rem] top-0 right-0  rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
                onClick={() => {
                  setClick(1);
                }}
              >
                <HeartFilled
                  className=""
                  style={{ fontSize: "1.5rem", color: "red" }}
                />
              </div>
            ) : (
              <div
                className="bg-[#FFFFFF] cursor-pointer absolute top-0 right-0  m-[0.7rem] rounded-full p-[0.5rem] flex justify-center items-center borderofheart"
                onClick={() => {
                  setClick(0);
                }}
              >
                <HeartOutlined
                  className=""
                  style={{ fontSize: "1.5rem", color: "red" }}
                />
              </div>
            )}
          </div>
    </div>
  )
}

export default RecomProductSlider