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
    <div className="bg-white w-screen grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-6 uppercase justify-items-center">
      {category.map((each, id) => {
        return (
          <div key={id} className="md:flex md:flex-col md:gap-4 m-4">
            <div className="text-semibold text-[1.25rem]">
              <h1>{each.title}</h1>
            </div>
            <div className="text-[#202020] text-[1rem]">
              {each.content?.map((item, id) => {
                return (
                  <div key={id}>
                    <p className="transition hover:text-[#EE2841] cursor-pointer">{item}</p>
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
