/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";

const Bannergrid = () => {
  const [dataLoading, setDataLoading] = useState(true);

  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />;
  };

  return (
    <>
      {!dataLoading ? (
        <img
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="rounded-md"
          height={310}
          width={590}
          alt="img"
        />
      ) : (
        ImageSkeleton()
      )}
    </>
  );
};

export default Bannergrid;
