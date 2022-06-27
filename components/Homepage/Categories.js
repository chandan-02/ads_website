import React from "react";

const Categories = () => {
  const category = [
    {
      title: "ESSENTIALS",
      content: [
        "Processor",
        "Motherboard",
        "GRAPHIC CARD",
        "POWER SUPPLY",
        "MONITOR",
      ],
    },
    {
      title: "STORAGE",
      content: ["RAM", "SSD", "HDD"],
    },
    {
      title: "Peripherals",
      content: [
        "KEYBOARD",
        "MOUSE",
        "MOUSE PAD",
        "HEADSETS",
        "PC CASES",
        "GAMING  CHAIR",
      ],
    },
    {
      title: "COOLING SYSTEM",
      content: ["AIR COOLER", "AIO’s"],
    },
    {
      title: "OTHERS",
      content: ["WIRELESS ROUTERS", "MIC", "SPEAKERS"],
    },
  ];

  return (
    <div className="bg-white w-screen grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:p-6 p-0 uppercase justify-center lg:gap-[5rem] md:gap-12">
      {category.map((each) => {
        return (
          <div className="md:flex md:flex-col md:gap-4 m-4">
            <div className="text-semibold text-[1.25rem] mx-6">
              <h1 key={each}>{each.title}</h1>
            </div>
            <div className="text-[#202020] text-[1rem] mx-6">
              {each.content?.map((item, i) => {
                return (
                  <div>
                    <p className="transition hover:text-[#EE2841] cursor-pointer" key={item}>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
