import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import LinkdinLogo from "./LinkdinLogo";
const Linkdin = () => {
  return (
    <div className="flex flex-col items-center px-16 ">
      <Canvas>
        <OrbitControls autoRotate={true} rotateSpeed={2} enableZoom={false} />
        <ambientLight />
        <Stage environment="city">
          <LinkdinLogo />
        </Stage>
      </Canvas>
      <a
        className="text-white hover:text-pink-500 relative"
        href="https://www.linkedin.com/in/zahra-naseri-276467222"
        target="_blank"
        rel="noopener noreferrer"
      >
        click here to see my Linkdin
      </a>
    </div>
  );
};

export default Linkdin;
