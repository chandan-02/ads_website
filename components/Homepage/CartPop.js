import React from "react";
import CartPopCard from "./CartPopCard";

const CartPop = () => {
  return (
    <div className="bg-[#FFFF] flex flex-col gap-2 h-[40rem] w-[30rem] shadow-sm rounded">
      <div className="m-[2rem]">
        <p className="m-0 font-bold text-[1rem] text-[#000000]">Cart (3)</p>
        <div className="h-[22rem] overflow-y-auto	">
          <div className="flex flex-col  h-[35rem]">
            <CartPopCard />
            <CartPopCard />
            <CartPopCard />
            <CartPopCard />
            <CartPopCard />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between items-center">
            <p className="m-0 font-bold text-[1rem] text-[#000000]">Sub Total:</p>
            <p className="m-0 font-bold text-[1.5rem] text-[#000000]"> ₹ 1,36,000 </p>
          </div>
          <p className="m-0 w-[18rem] text-[#717171]">
            Product prices are inclusive GST, there might be addition delivery
            charges based on your location.
          </p>
          <div className="w-[100%] flex flex-col justify-center items-center">
          <button className="bg-[#000000] hover:bg-[#ffff] hover:text-[#000000] hover:border-[#000000] hover:border-2 text-[#FFFFFF] md:text-[1rem] rounded-md font-medium w-[100%]  h-[2.7rem]">
          Checkout
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartPop;
