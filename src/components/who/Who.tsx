import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";

const Who = () => {
  return (
    <div
      id="Projects"
      className="h-screen snap-center grid grid-cols-2 py-44 px-12"
    >
      {/* left side*/}
      <div className="">
        <Canvas camera={{ fov: 25, position: [3, 3, 3] }}>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={3} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </div>
      {/* right side*/}
      <div className="flex justify-center items-center ">
        <div className="  space-y-3">
          <h3 className="text-white text-5xl">
            Think outside the square space
          </h3>
          <span className=" text-base text-pink-500 flex items-center gap-1">
            <span className="text-4xl text-white">-</span>
            Who we are
          </span>
          <p className="text-white">
            a creative group of designers and developers with a passion for the
            arts
          </p>
          <button className="bg-pink-500 w-24 p-2 text-white  rounded-md">
            see our works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Who;
