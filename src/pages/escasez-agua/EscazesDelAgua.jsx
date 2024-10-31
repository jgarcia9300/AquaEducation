import { Canvas } from '@react-three/fiber';
import React from 'react'
import Desierto from './world/Desierto';
import Lights from './lights/Lights';
import Controls from './controls/Controls';


const EscazesDelAgua = () => {
  const cameraSettings = {
    position: [0, 5, 10],
  };

  return (
    // <KeyboardControls map={map}>
      <Canvas camera={cameraSettings}>
        <Controls />
        <Lights />
        <Desierto />
      </Canvas>
    // </KeyboardControls>
  );

}

export default EscazesDelAgua