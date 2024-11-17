import { Canvas } from '@react-three/fiber';
import React from 'react'
import Desert from './world/Desert';
import Lights from './lights/Lights';
import Controls from './controls/Controls';
import Staging from './staging/Staging';
// import { Physics } from '@react-three/rapier';


const WaterScarcity= () => {
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
        <Desert />
        <Staging/>
        {/* </Physics> */}
      </Canvas>
    // </KeyboardControls>
  );

}

export default WaterScarcity