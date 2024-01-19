import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Object3D } from "three";

const Cube = () => {
  const textRef = useRef<Object3D>();

  useFrame(
    (state) =>
      (textRef.current!.position.x = Math.sin(state.clock.elapsedTime) * 1.2)
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#8e6acc"]} />
          <Text ref={textRef} fontSize={1.5} color="#fff">
            React
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
