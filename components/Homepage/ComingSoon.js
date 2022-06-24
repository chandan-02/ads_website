import React from "react";

export const ComingSoon = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-12">
        <div className="flex md:gap-3 gap-1 md:text-[2.5rem] text-[1.5rem] items-center justify-center">
          <h1 className="">Coming</h1>
          <h1 className="text-[#EE2841]">Soon</h1>
        </div>
        <div className="flex justify-center items-center">
          <figure className="relative text-white">
            <img
              src="https://i.rtings.com/assets/products/9CkdxVbX/ducky-one-3/design-medium.jpg"
              className="w-[34.5rem] h-[27rem] object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 w-full h-3/6 bg-[rgba(0,0,0,0.69)] flex flex-col justify-end items-center">
              <p className="text-white text-[1.875rem]">Ducky One 3</p>
            </figcaption>
          </figure>
          <figure className="relative text-white">
            <img
              src="https://cdn1.dotesports.com/wp-content/uploads/2022/02/07202746/logitech-g-pro-x-superlight-pink-1.jpg"
              className="w-[34.5rem] h-[27rem] object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 w-full h-3/6 bg-[rgba(0,0,0,0.69)] flex flex-col gap-8 justify-end items-center">
              <div className="border-2 py-2 px-14 text-[1.875rem] rounded-[0.32rem] text-center"><p className="m-0">Enquire Now</p></div>  
              <p className="text-white text-[1.875rem]">G Pro X Superlight</p>
            </figcaption>
          </figure>
          <figure className="relative text-white">
            <img
              src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
              className="w-[34.5rem] h-[27rem]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 w-full h-3/6 bg-[rgba(0,0,0,0.69)] flex flex-col justify-end items-center">
              <p className="text-white text-[1.875rem]">Elon Musk</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
