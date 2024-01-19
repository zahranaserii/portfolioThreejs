import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import GithubLogo from "./GithubLogo";
const Github = () => {
  return (
    <div className="flex flex-col items-center">
      <Canvas>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={2} />
        <Stage>
          <GithubLogo />
        </Stage>
      </Canvas>

      <a
        className="text-white hover:text-pink-500 relative"
        href="https://github.com/zahranaserii"
        target="_blank"
        rel="noopener noreferrer"
      >
        click here to see my Github
      </a>
    </div>
  );
};

export default Github;
