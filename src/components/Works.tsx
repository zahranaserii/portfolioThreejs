import { useState } from "react";
import "../index.css";
import Development from "./Development";
import Illustration from "./Illustration";
import ProductDesign from "./ProductDesign";
import SocialMedia from "./SocialMedia";
import WebDesign from "./WebDesign";

const Works = () => {
  //states
  const [work, setWork] = useState<string>("Web Design");
  //constant
  const data: { name: string }[] = [
    { name: "Web Design" },
    { name: "Development" },
    { name: "Illustration" },
    { name: "Product Design" },
    { name: "Social Media" },
  ];

  return (
    <div className="h-screen snap-center py-44 px-12 grid grid-cols-2 ">
      {/*left side */}
      <div className="flex justify-center ">
        <div className="flex flex-col w-fit gap-2  relative ">
          {data.map((item) => (
            <span
              key={item.name}
              className="text-transparent text-[40px] relative cursor-pointer hover:text-pink-500 after:absolute after:top-0 after:left-0 after:content-[attr(data-name)]  after:overflow-hidden  textStroke moving  "
              data-name={item.name}
              onClick={() => setWork(item.name)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/*right side */}

      <div className="flex w-full justify-start">
        {work === "Web Design" ? (
          <WebDesign />
        ) : work === "Development" ? (
          <Development />
        ) : work === "Illustration" ? (
          <Illustration />
        ) : work === "Product Design" ? (
          <ProductDesign />
        ) : work === "Social Media" ? (
          <SocialMedia />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Works;
