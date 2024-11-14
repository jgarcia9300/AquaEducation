import { Canvas } from '@react-three/fiber';
import Lights from '../water-scarcity/lights/Lights';
import Controls from '../water-scarcity/controls/Controls';
import Staging from '../water-scarcity/staging/Staging';
import WetLand from './world/WetLand';
// import { Physics } from '@react-three/rapier';


const River= () => {
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
        <WetLand />
        <Staging/>
        {/* </Physics> */}
      </Canvas>
    // </KeyboardControls>
  );

}

export default River