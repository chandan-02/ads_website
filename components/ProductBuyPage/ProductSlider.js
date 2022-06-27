import React, { useState } from "react";

const ProductSlider = () => {
    const [slide,setSlide]=useState(0)
  return (
    <div className="flex items-center gap-[2rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="w-[6rem]" onClick={()=>{setSlide(0)}}>
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="w-[6rem]"  onClick={()=>{setSlide(1)}}>
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="w-[6rem]"  onClick={()=>{setSlide(2)}}>
          <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>

      <div>
        {
            slide==0&&<img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-[]"/>
        }
        {
            slide==1&&<img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        }
        {
            slide==2&&<img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        }
        {/* <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
      </div>
    </div>
  );
};

export default ProductSlider;
