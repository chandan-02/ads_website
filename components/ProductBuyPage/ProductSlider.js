import React, { useState } from "react";

const ProductSlider = () => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="flex items-center gap-[2rem]">
      <div className="flex flex-col gap-[2rem]">
        <div
          className="w-[9rem]"
          onClick={() => {
            setSlide(0);
          }}
        >
          <img
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="w-full h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
        <div
          className="w-[9rem]"
          onClick={() => {
            setSlide(1);
          }}
        >
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/AMD-Ryzen-9-3900-X-1-e1568034698259.jpg"
            className="w-full h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
        <div
          className="w-[9rem]"
          onClick={() => {
            setSlide(2);
          }}
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fa1cee16d7931ddd4054622/0x0.jpg?format=jpg&crop=3639,2426,x223,y172,safe&width=1200"
            className="w-full h-full rounded-md"
            alt="Slider-Product"
          />
        </div>
      </div>

      <div>
        {slide == 0 && (
          <div className="w-[50rem] h-full">
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="w-full h-full rounded-md"
              alt="productimage"
            />
          </div>
        )}
        {slide == 1 && (
          <div className="w-[50rem] h-full">
            <img
              src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/AMD-Ryzen-9-3900-X-1-e1568034698259.jpg"
              className="w-full h-full rounded-md"
              alt="productimage"
            />
          </div>
        )}
        {slide == 2 && (
          <div className="w-[50rem] h-full">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fa1cee16d7931ddd4054622/0x0.jpg?format=jpg&crop=3639,2426,x223,y172,safe&width=1200"
              alt="productimage "
              className="w-full h-full rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
