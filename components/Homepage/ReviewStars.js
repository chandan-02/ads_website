import React, { useState } from "react";
import { UisStar } from "@iconscout/react-unicons-solid";
import { UilStar } from "@iconscout/react-unicons";

const ReviewStars = ({stars}) => {
  // const [stars, setStars] = useState(5);
  const totalStars = [];
  const finalStar = () => {
    for (let i = 1; i <= stars; i++) {
      totalStars.push(<UisStar color="#FFCB45" />);
    }
    for (let i = 1; i <= 5 - stars; i++) {
      totalStars.push(<UilStar color="#FFCB45" />);
    }
  };
  finalStar();

  return (
    <div className="flex my-4">
      {totalStars.map((each) => {
        return each;
      })}
    </div>
  );
};

export default ReviewStars;
