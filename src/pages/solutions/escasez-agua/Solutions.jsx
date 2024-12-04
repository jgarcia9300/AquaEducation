import { Canvas } from '@react-three/fiber';
import { KeyboardControls, OrbitControls } from '@react-three/drei';
import React from 'react'
import Desert from './world/Desert';
import Lights from './lights/Lights';
import Controls from './controls/Controls';
import Staging from './staging/Staging';
import { Physics } from "@react-three/rapier";
import Adventurer from './world/Adventurer';
import useMovements from './controls/key-movements';
import Ecctrl, { EcctrlAnimation } from 'ecctrl';
import { Suspense } from "react";
import CharacterModel from './world/CharacterModel';
import Robot from './world/Robot';
import SphereRobot from './world/SphereRobot';
import KeyImage from '../KeyImage';
import Iguana from '../../escasez-agua/world/Iguana';





const Solutions= () => {


  const map = useMovements();
  const characterURL = '/models-3d/Adventurer.glb'

  // const animationSet = {
  //   idle: 'CharacterArmature|Idle',
  //   walk: 'CharacterArmature|Walk',
  //   run: 'CharacterArmature|Run',
  //   jump: 'CharacterArmature|Jump',
  //   jumpIdle: 'CharacterArmature|Jump_Idle',
  //   jumpLand: 'CharacterArmature|Jump_Land',
  //   fall: 'CharacterArmature|Duck', // This is for falling from high sky
  //   action1: 'CharacterArmature|Wave',
  //   action2: 'CharacterArmature|Death',
  //   action3: 'CharacterArmature|HitReact',
  //   action4: 'CharacterArmature|Punch'
  // }

  return (
    
    <KeyboardControls map={map}>
      <Canvas  shadows
       >
        {/* <OrbitControls/> */}
        <KeyImage/>
        <Lights />
        <Physics debug={false} >
    
        <Ecctrl 
        // mode="FixedCamera" 
        
        // debug
                            capsuleHalfHeight={1}
                            floatingDis={2}
                            camInitDis={-3}
                            camMaxDis={-4}
                            maxVelLimit={5} 
                            position={[0, 4, 10]}
                        >
               <SphereRobot/>
             
        </Ecctrl>
        <Staging/>
        <Desert />
        <Iguana position={[10, 0, 8]}/>
        </Physics>
      </Canvas>
    </KeyboardControls>
  );

}

export default Solutions