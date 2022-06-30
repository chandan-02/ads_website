import React, { useState } from "react";

const ProductSlider = () => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="md:flex md:flex-row	 md:items-center md:gap-[2rem] flex flex-col-reverse gap-[1rem]">
      <div className="md:flex md:flex-col md:gap-[2rem] flex gap-[0.5rem] ">
        <div
          className="w-full rounded-md cursor-pointer broder border-2 hover:border-[#EE2841] hover:border-2  "
          onMouseOver={() => {
            setSlide(0);
          }}
        >
          <img
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="md:w-[9rem] h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
        <div
          className="w-full rounded-md cursor-pointer  broder border-2 hover:border-[#EE2841] hover:border-2 "
          onMouseOver={() => {
            setSlide(1);
          }}
        >
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/AMD-Ryzen-9-3900-X-1-e1568034698259.jpg"
            className="md:w-[9rem] h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
        <div
          className="w-full rounded-md cursor-pointer  broder border-2 hover:border-[#EE2841] hover:border-2 "
          onMouseOver={() => {
            setSlide(2);
          }}
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fa1cee16d7931ddd4054622/0x0.jpg?format=jpg&crop=3639,2426,x223,y172,safe&width=1200"
            className="md:w-[9rem] h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
      </div>

      <div className="w-full">
        {slide == 0 && (
          <div className="w-full h-full cursor-pointer	">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="md:w-[50rem] h-full rounded-md"
              alt="productimage"
            />
          </div>
        )}
        {slide == 1 && (
          <div className="w-full h-full cursor-pointer	">
            <img
              src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/AMD-Ryzen-9-3900-X-1-e1568034698259.jpg"
              className="md:w-[50rem] h-full rounded-md"
              alt="productimage"
            />
          </div>
        )}
        {slide == 2 && (
          <div className="w-full h-full cursor-pointer	">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fa1cee16d7931ddd4054622/0x0.jpg?format=jpg&crop=3639,2426,x223,y172,safe&width=1200"
              alt="productimage "
              className="md:w-[50rem] h-full rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
