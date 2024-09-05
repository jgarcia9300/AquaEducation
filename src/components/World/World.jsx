import React from "react";
import { Canvas } from "@react-three/fiber";
import { FlyControls, MapControls, OrbitControls } from "@react-three/drei";
import styles from "./World.module.css";
import Torus from "../Torus/Torus";

const World = () => {
  const cameraSettings = {
    position: [2, 0, 5],
    fov: 120,
  };
  return (
    <Canvas camera={cameraSettings}>
      <MapControls
        enableDamping={true}
        dampingFactor={0.4}
        screenSpacePanning={false}
        minDistance={9}
        maxDistance={15}
        
      />
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 10, 10]} intensity={5} />
      <Torus />
    </Canvas>
  );
};
export default World;
