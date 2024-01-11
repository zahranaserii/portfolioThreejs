import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";
const WebDesign = () => {
  return (
    <div className="flex w-full">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={3} />
        <Stage environment="city" intensity={0.6}>
          <ReactLogo />
        </Stage>
      </Canvas>
    </div>
  );
};

export default WebDesign;
