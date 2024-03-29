import React,{useState} from "react";
// import ReviewStars from "./ReviewStars";
import { UilTimes } from "@iconscout/react-unicons";
import { Button, Dropdown, Space, Menu } from "antd";

// const menu = (
//   <Menu
//     // onClick={handleMenuClick}
//     items={[
//       {
//         label: "1",
//         key: "1",
//       },
//       {
//         label: "2",
//         key: "2",
//       },
//       {
//         label: "3",
//         key: "3",
//       },
//     ]}
//   />
// );


// const ProductSkeleton = () => {
//     return (
//       <div className="flex w-full gap-4">
//         <Skeleton.Image className="w-full h-full" active />
//         <div className="w-4/6">
//           <Skeleton paragraph={{ rows: 2 }} active />
//           <Skeleton.Button active />
//         </div>
//       </div>
//     );
//   };
const CartPopCard = () => {
  // const [dataLoading, setDataLoading] = useState(false);
 
  return (
    <div>
      <div className="my-[1rem]">
        <div className="flex gap-[0.5rem]">
          <div className="md:w-[9rem] md:h-[5rem] w-[12rem] h-[6rem]">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"
              className="rounded-[0.3rem] md:w-[100%] md:h-[100%]"
              alt="checkout-product"
            />
          </div>
          <div className="w-full flex flex-col  gap-[0rem]">
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
                <div className="flex  items-center">
                    <p className="m-0">Quantity:</p>
                    <p className="m-0">1</p>
                </div>
              {/* <div className="md:text-[1rem] text-[0.8rem] overflow-hidden text-ellipsis whitespace-nowrap">
                AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24
                Threads 70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series
                chipset (100-100000061WOF)
              </div> */}
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
      <hr className=""/>
    </div>
  );
};

export default CartPopCard;
