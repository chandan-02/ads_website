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
        <div>
            <p></p>
        </div>
    </div>
  );
};

export default OrderSummary;
