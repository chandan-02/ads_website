import React from "react";
import OrderProduct from "./OrderProduct";

export const OrderSummary = () => {
  return (
    <div className="border rounded-[10px] h-max">
      <div className="lg:p-[1.563rem] py-[0.8rem] px-[0.8rem]">
        <h1 className="text-[1.5rem] text-[#595959] font-bold m-0">
          Order summary
        </h1>
        <p className="m-0 text-[0.75rem]">
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
      <hr />
        <OrderProduct/>
        <OrderProduct/>
        <div className="mx-[1.5rem]">
          <div className="flex justify-between items-center mt-[1.3rem]">
              <h1 className="text-[#6F6F6F] font-normal text-[1rem] md:text-[1.2rem]">Sub Total</h1>
              <h1 className="text-[1rem] md:text-[1.25rem] font-bold">₹ 57,097</h1>
          </div>
          <div className="flex justify-between items-center mb-[1.3rem]">
              <h1 className="text-[#6F6F6F] font-normal text-[1rem] md:text-[1.2rem]">Shipping</h1>
              <h1 className="text-[1rem] md:text-[1.25rem] font-bold">₹ 40</h1>
          </div>
          <hr/>
          <div className="flex justify-between items-start mt-[0.9rem] mb-[1.5rem] gap-0">
              <div>
                <h1 className="text-[1.15rem] md:text-[1.3rem] font-bold m-0">Total</h1>
                <p className="text-[0.75rem] md:text-[0.875rem] text-[#6F6F6F]">Estimated delivery day : 21 June 2022</p>
              </div>
              <h1 className="text-[1rem] md:text-[1.25rem] whitespace-nowrap font-bold">₹ 58,033</h1>
          </div>
        </div>
    </div>
  );
};

export default OrderSummary;
