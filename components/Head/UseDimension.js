import { useState, useEffect } from "react";

const UseDimension = () => {
  const [dim, setDim] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (typeof window != undefined) {
      setDim({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return [dim.width, dim.height];
};

export default UseDimension;