import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { animated, useTransition } from "react-spring";
import DynamicScaleSphere from "./components/DynamicScaleSphere";
import Navbar from "./components/Navbar";

const Hero = () => {
  const welcome = " Welcome To My Portfolio";

  //hooks
  const transition = useTransition(welcome, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50pX)" },
    config: { duration: 800 },
  });

  return (
    <div
      id="About"
      className="h-screen flex flex-col gap-4 snap-center px-2 md:px-12 pt-5"
    >
      <Navbar />
      <div className=" md:grid md:grid-cols-3 md:justify-between  h-full px-12 ">
        <div className="text-white md:col-span-1  flex flex-col gap-3 ">
          {transition((styles, item) => (
            <animated.h3
              style={styles}
              className="text-4xl font-bold cursor-pointer bg-gradient-to-r  from-orange-200  to-pink-600  text-transparent bg-clip-text  "
            >
              {item}
            </animated.h3>
          ))}
          <div className="flex items-center gap-2 ">
            <span className="text-lg cursor-pointer">I'm</span>
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-200  to-pink-600 inline-block text-transparent bg-clip-text">
                Z
              </h1>
              <span>ahra </span>
            </div>
          </div>
          <span className="text-lg">FrontEnd Developer</span>
        </div>
        <div className=" relative mt-3 md:col-span-2 -top-20 max-w-full   ">
          <Canvas className="">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[3, 2, 1]} />
            <DynamicScaleSphere />
          </Canvas>
          <img
            src="../../../public/img/header-img.svg"
            className="absolute top-0 left-0 right-0 bottom-0 object-contain animate m-auto  sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 max-xs:w-60 max-sm:h-60
            "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
