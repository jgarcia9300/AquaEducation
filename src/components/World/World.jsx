import React from "react";
import { Canvas } from "@react-three/fiber";
import { FlyControls, MapControls, OrbitControls } from "@react-three/drei";
import styles from "./World.module.css";
import Torus from "../Torus/Torus";

const World = () => {
  const cameraSettings = {
    position: [2, 0, 5],
    fov: 75,
  };
  return (
    <Canvas camera={cameraSettings}>
      <MapControls/>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[0, 10, 10]} intensity={5} />
      <Torus/>
    </Canvas>
  );
};
export default World;
