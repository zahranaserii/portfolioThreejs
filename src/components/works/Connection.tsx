import { useState } from "react";
import "../../index.css";
import ProductDesign from "../ProductDesign";
import SocialMedia from "../SocialMedia";
import Github from "./components/Github";
import Linkdin from "./components/Linkdin";

const Connection = () => {
  //states
  const [work, setWork] = useState<string>("Linkdin");
  //constant
  const data: { name: string }[] = [{ name: "Linkdin" }, { name: "Github" }];

  return (
    <div
      id="Connection"
      className="h-screen py-6 md:py-32  flex-col snap-center px-12 md:grid grid-cols-2 "
    >
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

      <div className="flex w-full h-96  justify-center md:justify-start">
        {work === "Linkdin" ? (
          <Linkdin />
        ) : work === "Github" ? (
          <Github />
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

export default Connection;
