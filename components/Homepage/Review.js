import React, { useEffect, useState } from "react";
import ReviewStars from "./ReviewStars";
import useDimension from '../Head/UseDimension.js'
import { Carousel, Skeleton } from 'antd';

const Review = () => {
  const [width,height] = useDimension()
  const [dataLoading, setDataLoading] = useState(false);
  const ImageSkeleton = () => {
    return <Skeleton.Image className="w-full h-full" active />;
  };

  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex md:flex-row md:gap-3 md:text-[2.5rem] text-[1.5rem] flex-col items-center justify-center">
        <h1 className="">See what our</h1>
        <h1 className="text-[#EE2841]">customers have to say.</h1>
      </div>
      {
        width <= 639 ? 
        <Carousel autoplay={true} draggable={true} dots={false}>
          {!dataLoading ?
            <figure className="relative text-white">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="md:w-[36.5rem] md:h-[29rem] w-full h-[25rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={5} />
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="md:text-[1.25rem] text-base text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
          {!dataLoading ?
            <figure className="relative text-white">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="md:w-[36.5rem] md:h-[29rem] w-full h-[25rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={3}/>
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="md:text-[1.25rem] text-base text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
          {!dataLoading ?
            <figure className="relative text-white">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="md:w-[36.5rem] md:h-[29rem] w-full h-[25rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={4}/>
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="md:text-[1.25rem] text-base text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
        </Carousel>
        :
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-2 justify-items-center items-center">
          {!dataLoading ?
            <figure className="relative text-white ">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="md:w-[36.5rem] md:h-[29rem] w-[30.5rem] h-[25rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={5} />
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="md:text-[1.25rem] text-base text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
          {!dataLoading ?
            <figure className="relative text-white">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="md:w-[36.5rem] md:h-[29rem] w-[30.5rem] h-[25rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={3}/>
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="md:text-[1.25rem] text-base text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
          {!dataLoading ?
            <figure className="relative text-white hidden lg:inline-block">
              <img
                src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
                className="w-[36.5rem] h-[29rem] object-cover"
                alt="Customer-Review"
              />
              <figcaption className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.69)] flex flex-col justify-center items-center">
                <ReviewStars stars={4}/>
                <h1 className="text-white text-[2.5rem]">Elon Musk</h1>
                <p className="text-[1.25rem] text-center w-10/12">
                  Lorem Ipsum is simply dummy text industry's text ever since the
                  1500s, when an unknown printer took a galley of type and
                </p>
              </figcaption>
            </figure>
            : ImageSkeleton()
          }
        </div>
      }
    </div>
  );
};

export default Review;
