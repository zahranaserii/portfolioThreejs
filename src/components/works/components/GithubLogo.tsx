/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 githubLogo.gltf --transform 
Files: githubLogo.gltf [42KB] > C:\Users\zn\Desktop\githubLogo\githubLogo-transformed.glb [22.97KB] (45%)
Author: pissang (https://sketchfab.com/YiChen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/github-octocat-c8a4795ce3fe4b21a4c40895cb9cb6a5
Title: GitHub Octocat
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "react-three-fiber";
import {
  BufferGeometry,
  Material,
  NormalBufferAttributes,
  Object3D,
  Object3DEventMap,
} from "three";
interface ModelProps extends GroupProps {}
interface GithubLogoGLTFResult {
  nodes: {
    [key: string]: Object3D<Object3DEventMap> & {
      geometry: BufferGeometry<NormalBufferAttributes>;
    };
  };
  materials: {
    [key: string]: Material;
  };
}
const Model: React.FC<ModelProps> = (props) => {
  const { nodes, materials } = useGLTF(
    "/githubLogo-transformed.glb"
  ) as unknown as GithubLogoGLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0.004, 9.995, 0.636]}
        scale={0.03}
      />
    </group>
  );
};
export default Model;
useGLTF.preload("/githubLogo-transformed.glb");