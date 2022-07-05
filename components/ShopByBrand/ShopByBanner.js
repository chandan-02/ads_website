import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";

const ShopByBanner = () => {
  const [dataLoading, setDataLoading] = useState(true);

  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />
  };

  return (
    <div className=" flex justify-center items-center mt-[3.2rem]">
      {
        !dataLoading ? 
        <img src="/assets/banner.svg" alt="big banner" className="w-[100%]" /> :
        ImageSkeleton()
      }
    </div>
  )
}

export default ShopByBanner;
