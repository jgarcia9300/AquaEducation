/* eslint-disable react/no-unknown-property */
import { DirectionalLightHelper } from "three";
import { OrthographicCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 1);

  return (
    <directionalLight
      castShadow
      position={[6, 12, 26]}
      shadow-mapSize={[2048, 2048]}
      color={"#fff7de"}
      intensity={2}
    >
      <OrthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
    </directionalLight>
  );
};

export default Lights;
