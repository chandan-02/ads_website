import React from "react";
import { Pagination } from "antd";
import WishListCard from "../../components/WishList/WishListCard";

function Index() {
  return (
    <div className="flex justify-center items-center md:mb-[2rem] mx-[2rem] my-[1rem]">
      <div>
        <div className="flex flex-col">
          <p className="m-0 text-[1.5rem] text-[#EE2841] font-bold">
            My Wish List
          </p>
          <p className="m-0 text-[1rem] text-[#595959]">
            Price can change depending on shipping method and taxes of your
            state.
          </p>
        </div>
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <div className="flex justify-end mt-[2rem]">
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>
      <style>
        {`
          .anticon svg{
            display: flex;
          }
          `}
      </style>
    </div>
  );
}

export default Index;
