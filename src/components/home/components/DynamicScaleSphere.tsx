import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import { Mesh } from "three";

const DynamicScaleSphere = () => {
  const sphereRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  //effects
  useEffect(() => {
    let scale;

    if (viewport.width <= 2.9) {
      scale = 1.2;
    } else if (viewport.width <= 3) {
      // For mobile screens, decrease the scale
      scale = 1.3;
    } else if (viewport.width >= 3 && viewport.width <= 4) {
      // For tablets, a bit larger scale than mobile
      scale = 1.4;
    } else if (viewport.width >= 4 && viewport.width <= 4.7) {
      scale = 1.7;
    } else if (viewport.width >= 4.7 && viewport.width <= 5) {
      scale = 2.1;
    } else if (viewport.width >= 5 && viewport.width <= 6) {
      // For larger screens, adjust as needed
      scale = 2.2;
    } else if (viewport.width >= 6 && viewport.width <= 8) {
      scale = 2.3;
    } else {
      scale = 2.5;
    }
    sphereRef.current?.scale.set(scale, scale, scale);
  }, [viewport.width]);

  return (
    <Sphere args={[1, 100, 200]} ref={sphereRef}>
      <MeshDistortMaterial color="#3b105c" attach="material" speed={2} />
    </Sphere>
  );
};

export default DynamicScaleSphere;
