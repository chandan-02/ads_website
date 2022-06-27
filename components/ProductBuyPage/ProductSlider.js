import React from "react";

const ProductSlider = () => {
  return (
    <div className="flex items-center gap-[2rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="w-[6rem]">
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="w-[6rem]">
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="w-[6rem]">
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>

      <div>
        <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
    </div>
  );
};

export default ProductSlider;
