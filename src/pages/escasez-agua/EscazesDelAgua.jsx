import { Canvas } from '@react-three/fiber';
import React from 'react'
import Desierto from './world/Desierto';
import Lights from './lights/Lights';
import Controls from './controls/Controls';
import Staging from './staging/Staging';
// import { Physics } from '@react-three/rapier';


const EscazesDelAgua = () => {
  const cameraSettings = {
    position: [0, 15, 16],
    fov: 100
  };

  return (
    // <KeyboardControls map={map}>
      <Canvas  shadows camera={cameraSettings}>
        <Controls />
        <Lights />
        {/* <Physics debug={true} > */}
        <Desierto />
        <Staging/>
        {/* </Physics> */}
      </Canvas>
    // </KeyboardControls>
  );

}

export default EscazesDelAgua