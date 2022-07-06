import React from "react";
import { UilTimes, UilShoppingCart } from "@iconscout/react-unicons";
import { Button, Dropdown, Space, Menu } from "antd";

const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: "1",
        key: "1",
      },
      {
        label: "2",
        key: "2",
      },
      {
        label: "3",
        key: "3",
      },
    ]}
  />
);
const WishListCard = () => {
  return (
    <div>
      <div className=" mainborder md:mt-[2rem] mt-[1rem] py-[0.8rem]">
        <div className="flex gap-3 md:w-[50rem]">
          <div className="md:w-[12rem] md:h-[6.1rem] w-[12rem] h-[6rem]">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
              className="rounded-[0.3rem] md:w-[100%] md:h-[100%]"
              alt="checkout-product"
            />
          </div>
          <div className="w-full flex flex-col  gap-[0rem] md:gap-[0.6rem]">
            <div className="flex justify-between items-center">
              <span className="md:text-[1.125rem] text-[1rem] font-bold leading-6	text-black">
                Ryzen 9 5900x
              </span>

              <div className="flex items-center">
                <UilShoppingCart
                  className="cursor-pointer"
                  style={{ fontSize: "1.5rem" }}
                />
                <UilTimes
                  className="cursor-pointer"
                  style={{ fontSize: "1.5rem" }}
                />
              </div>
            </div>
            <div className="md:w-[12rem] 2xl:w-[18rem] w-[6rem]">
              <div className="md:text-[1rem] text-[0.8rem] overflow-hidden text-ellipsis whitespace-nowrap">
                AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24
                Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series
                chipset (100-100000061WOF)
              </div>
            </div>
            <div className="flex justify-between">
              <p className="md:text-[1.125rem] text-[1rem] text-black font-bold m-[0rem]">
                ₹ 36,000
              </p>
              {/* <Dropdown overlay={menu}>
                <Button className=" w-[5rem] h-[2.5rem]">
                  <Space className="border-r-2 pr-1">1</Space>
                  <Space className="pl-1">Qty</Space>
                </Button>
              </Dropdown> */}
            </div>
          </div>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};

export default WishListCard;
