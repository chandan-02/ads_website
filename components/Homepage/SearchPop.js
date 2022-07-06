import React from "react";
import { SearchPopCard } from "./SearchPopCard";


export const SearchPop = () => {
  return (
   <div className="mx-[10rem] my-[2rem] h-[50rem] bg-[#FFFFFF] flex flex-col gap-[2rem] shadow-sm rounded	">
    <SearchPopCard/>
    <SearchPopCard/>
   </div>
  );
};
