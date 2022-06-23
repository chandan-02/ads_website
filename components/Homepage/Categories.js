import React from "react";

const Categories = () => {
  const category = [{
        title:"ESSENTIALS",
        content:["Processor","Motherboard","GRAPHIC CARD","POWER SUPPLY","MONITOR"]
    },
    {
        title:"STORAGE",
        content:["RAM","SSD","HDD"]
    },
    {
        title:"Peripherals",
        content:["KEYBOARD","MOUSE","MOUSE PAD","HEADSETS","PC CASES","GAMING  CHAIR"]
    },
    {
        title:"COOLING SYSTEM",
        content:["AIR COOLER","AIO’s"]
    },
    {
        title:"OTHERS",
        content:["WIRELESS ROUTERS","MIC","SPEAKERS"]
    }
  ];

  return (
    <div className="bg-white w-full">
      {
        category.map((each,i)=>{
        console.log(each.content);
        return (
            <div className="">
                <div className="text-semibold text-[1.25rem] flex">
                    <h1 key={each}>{each.title}</h1>;
                </div>
                <div className="text-[#202020] text-[1rem] flex flex-col">
                    <div className="flex"><h1 key={each}>{each.content.map()}</h1></div>;
                </div>
            </div>
        );
        })
      }
    </div>
  );
};

export default Categories;
