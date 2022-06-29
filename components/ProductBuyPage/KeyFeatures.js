import React from "react";

const KeyFeatures = () => {
    const data =[
        {
            title:"SERIES",
            content:"Ryzen 9"
        },
        {
            title:"CORES",
            content:"12 Cores"
        },
        {
            title:"THREADS",
            content:"24 Threads"
        },
        {
            title:"SOCKET",
            content:"AM4"
        },
        {
            title:"SPEED",
            content:"3.7 GHZ"
        },
        {
            title:"SPEED (TURBO)",
            content:"4.8 GHZ"
        },
    ]
  return (
    <div>
      <div className="relative">
        <div className="flex flex-col gap-[1rem]">
          <p className="m-0">Features:</p>
          <p className="m-0 w-[31rem]">
            AMD 5000 Series Ryzen 9 5900X Desktop Processor 12 Cores 24 Threads
            70 MB Cache 3.7 GHz up to 4.8 GHz AM4 Socket 500 Series chipset
            (100-100000061WOF)
          </p>
          <div className="flex items-center gap-[2.5rem]">
            {
                data.map((each,id)=>{
                    return(
                        <div key={id} className="flex flex-col justify-center items-center">
                        <p className="m-0">{each.title}</p>
                        <p className="m-0">{each.content}</p>
                        </div>
                    )
                })
            }
            
          </div>
        </div>
      </div>
      <div className="absolute">
        <p className="m-0">Amd</p>
      </div>
    </div>
  );
};

export default KeyFeatures;
