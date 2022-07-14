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
const MyOrdersCard = () => {
  return (
    <div>
      <div className=" mainborder md:mt-[2rem] mt-[1rem] py-[0.8rem]">
        <div className="md:flex gap-3">
          <div className="md:w-[17rem] md:h-[9.2rem] object-none ">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
              className="rounded-[0.3rem] md:w-[100%] md:h-[100%]"
              alt="checkout-product"
            />
          </div>
          <div className="w-full flex flex-col  gap-[0rem] md:gap-[]">
            <div className="md:flex justify-between items-center">
              <span className="md:text-[1.125rem] text-[0.9rem] font-bold leading-6	text-black">
              Name : Mark Zubukbuk
              </span>

              <div className="flex items-center">
               <p className="m-0 md:text-[1.125rem] text-black">Order id : #ODRi4753nbjcasak</p>
              </div>
            </div>
            <div className="md:w-[12rem] 2xl:w-[27rem]">
              <div className="md:text-[1.1rem] text-[0.8rem] text-black">
              Products : Zotoc Gaming Rtx 3080, G Skill 8x2 3200mhz, MSI B450m pro vdh max ...
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p className="md:text-[1.1rem] text-[1rem] text-black m-[0rem]">
              Order Total  : ₹ 89,699.98
              </p>
              {/* <Dropdown overlay={menu}>
                <Button className=" w-[5rem] h-[2.5rem]">
                  <Space className="border-r-2 pr-1">1</Space>
                  <Space className="pl-1">Qty</Space>
                </Button>
              </Dropdown> */}
            </div>
            <div className="">
            <div className="flex">
            <Button  size="large" className="w-[7rem] rounded-2xl border-[#000]">Update</Button>
            <Button  type="link" size="large" className="w-[7rem] rounded-2xl">Cancel Order</Button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};

export default MyOrdersCard;
