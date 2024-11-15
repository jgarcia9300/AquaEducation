import { Canvas } from '@react-three/fiber';
import Lights from '../water-scarcity/lights/Lights';
import Controls from '../water-scarcity/controls/Controls';
import Staging from '../water-scarcity/staging/Staging';
import WetLand from './world/WetLand';
import { ScrollControls } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';


const River= () => {
  const cameraSettings = {
    position: [0, 15, 16],
    fov: 100
  };

  return (
    // <KeyboardControls map={map}>

      <Canvas  shadows camera={cameraSettings}>
        {/* <Controls /> */}
        <Lights />
        <Staging/>
        {/* <Physics debug={true} > */}
        <ScrollControls pages={2} damping={0.1}> 
        <WetLand />
        </ScrollControls>
        {/* </Physics> */}
      </Canvas>
    /* // </KeyboardControls> */

  );

}

export default River