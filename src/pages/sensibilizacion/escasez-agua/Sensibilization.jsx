import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import React from 'react'
import Desert from './world/Desert';
import Lights from './lights/Lights';
import Controls from './controls/Controls';
import Staging from './staging/Staging';
import { Physics } from "@react-three/rapier";
import Adventurer from './world/Adventurer';
import useMovements from './controls/key-movements';



const Sensibilization= () => {
  const cameraSettings = {
    position: [0, 1, 0],
    fov: 100
  };

  const map = useMovements();

  return (
    <KeyboardControls map={map}>
      <Canvas  shadows camera={cameraSettings}>
        <Controls />
        <Lights />
        <Physics debug={false}>
        <Desert />
        <Adventurer position={[0, 0, 8]} />
        {/* <Staging/> */}
        </Physics>
      </Canvas>
    </KeyboardControls>
  );

}

export default Sensibilization