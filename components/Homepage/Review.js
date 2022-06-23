import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex md:flex-row md:gap-3 md:text-[2.5rem] text-[1.5rem] flex-col items-center justify-center">
        <h1 className="">See what our</h1>
        <h1 className="text-[#EE2841]">customers have to say.</h1>
      </div>
      <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
        <figure className="relative text-white">
            <img src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg" className="w-[36.5rem] h-[29rem]"/>
            <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <h1>*****</h1><h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="text-[1.25rem] text-center w-10/12">Lorem Ipsum is simply dummy text industry's text ever since the 1500s, when an unknown printer took a galley of type and </p>
            </figcaption>
        </figure>
        <figure className="relative text-white">
            <img src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg" className="w-[36.5rem] h-[29rem]"/>
            <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <h1>*****</h1><h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="text-[1.25rem] text-center w-10/12">Lorem Ipsum is simply dummy text industry's text ever since the 1500s, when an unknown printer took a galley of type and </p>
            </figcaption>
        </figure>
        <figure className="relative text-white">
            <img src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg" className="w-[36.5rem] h-[29rem]"/>
            <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <h1>*****</h1><h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="text-[1.25rem] text-center w-10/12">Lorem Ipsum is simply dummy text industry's text ever since the 1500s, when an unknown printer took a galley of type and </p>
            </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Review;
