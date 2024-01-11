import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "./Navbar";
const Hero = () => {
  //constants
  const gradientStyle = {
    background: "-webkit-linear-gradient(-45deg, #dbd7de, #9351c4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="h-screen snap-center pt-5">
      <Navbar />
      <div className="grid grid-cols-2  px-12 h-full ">
        <div className="text-white flex flex-col gap-3">
          <h3
            className="text-4xl font-bold cursor-pointer  "
            style={gradientStyle}
          >
            Welcome To My Portfolio
          </h3>
          <span className="text-lg cursor-pointer">
            Hi I'm zahra And I'm a FrontEnd Developer
          </span>
        </div>
        <div className="  md:relative -top-20 right-8 ">
          <Canvas className="hidden lg:block">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#3b105c"
                attach="material"
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src="../../public/img/Code review-amico.png"
            className="absolute top-0 left-0 right-0 bottom-0 object-contain animate m-auto h-[400px] w-[500px]
            "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
