import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";
const FrameWork = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0} />
        <Stage environment="city">
          <ReactLogo />
        </Stage>
      </Canvas>
    </div>
  );
};

export default FrameWork;
