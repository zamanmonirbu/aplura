import { useEffect, useState } from "react";
import plant from "../images/potato1.png";
import harvest from "../images/potato2.png";
import peel from "../images/potato3.png";
import slice from "../images/potato1.png";
import fry from "../images/potato3.png";
import chips from "../images/potato2.png";
import './PotatoChipsAnimation2.css'

const PotatoChipsAnimation2 = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    { text: "Potato Plant", img: plant },
    { text: "Harvest Potato", img: harvest },
    { text: "Peel Potato", img: peel },
    { text: "Slice Potato", img: slice },
    { text: "Fry Potato", img: fry },
    { text: "Potato Chips", img: chips },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage + 1) % stages.length);
    }, 2000); // Switch stages every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">{stages[stage].text}</h1>
      <div className="relative w-64 h-64">
        <img
          src={stages[stage].img}
          alt={stages[stage].text}
          className={`w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out transform ${
            stage === 5 ? "rotate-180 scale-110" : "scale-100"
          } rotate-fade`}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="h-2 w-10 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`h-full bg-green-400 transition-all duration-700 ease-in-out ${
              stage >= 0 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        <div className="h-2 w-10 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`h-full bg-yellow-400 transition-all duration-700 ease-in-out ${
              stage >= 1 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        <div className="h-2 w-10 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`h-full bg-red-400 transition-all duration-700 ease-in-out ${
              stage >= 2 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PotatoChipsAnimation2;
