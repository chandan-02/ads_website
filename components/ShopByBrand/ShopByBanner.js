import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";

const ShopByBanner = () => {
  const [dataLoading, setDataLoading] = useState(false);

  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />
  };

  return (
    <div className=" flex justify-center items-center md:mt-[3.2rem]">
      {
        !dataLoading ? 
        <img src="/assets/banner.svg" alt="big banner" className="w-[100%]" /> :
        ImageSkeleton()
      }
    </div>
  )
}

export default ShopByBanner;
