import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
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

export const OrderProduct = () => {
  return (
    <div>
      <div className="2xl:p-[1.5rem] md:p-[1.5rem] xl:p-[1.5rem] py-[0.8rem] px-[0.8rem] mainborder">
        <div className="flex gap-3">
          <div className="w-[9.813rem] h-[6.563rem]">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
              className="rounded-[0.3rem] h-full w-full"
              alt="checkout-product"
            />
          </div>
          <div className="w-full flex flex-col gap-[0.8rem]">
            <div className="flex justify-between items-center w-full">
              <span className="md:text-[1.125rem] text-[1rem] font-bold leading-6	text-black">
                Ryzen 9 5900x
              </span>
              <UilTimes
                className="cursor-pointer"
                style={{ fontSize: "1.5rem" }}
              />
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
              <Dropdown overlay={menu}>
                <Button>
                  <Space className="border-r-2 pr-1">1</Space>
                  <Space className="pl-1">Qty</Space>
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-[1.5rem] "/>
    </div>
  );
};

export default OrderProduct;
