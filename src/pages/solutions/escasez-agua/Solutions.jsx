import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Loader, OrbitControls, PositionalAudio } from '@react-three/drei';
import React, { useCallback, useRef } from 'react'
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
import { Perf } from 'r3f-perf';
import Video from './world/Video';
import { RotationOps } from '@dimforge/rapier3d-compat';





const Solutions= () => {


  const map = useMovements();
  const characterURL = '/models-3d/Adventurer.glb'

  const customContainerStyles = {
    backgroundColor: 'lightblue', // Change this to your desired color
    // Add other styles if needed
  };

  const audioRef = useRef();

  const handleAudio = useCallback((e) => {
    audioRef.current.play();
    audioRef.current.setVolume(10);

  }, [])

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
      <Canvas  shadows onClick={handleAudio}
       >
        <Suspense fallback={null}>
        {/* <Perf /> */}
        {/* <OrbitControls/> */}
        <KeyImage/>
        <Lights />
        <Physics debug={false} >
    
        <Ecctrl 
        // mode="FixedCamera" 
        
        // debug
                            capsuleHalfHeight={0.5}
                            floatingDis={0.5}
                            camInitDis={-3}
                            camMaxDis={-4}
                            maxVelLimit={5} 
                            position={[0, 6.5, 10]}
                        >
               <SphereRobot scale={0.5}/>
             
        </Ecctrl>
        <Staging/>
        <Desert />
        {/* <Iguana position={[10, 0, 8]}/> */}
        </Physics>
        <Video
        name="screen" 
        position={[-20, 10, 10]}
        scale={10}
        rotation={[0, Math.PI/2, 0]} // Rotate 45 degrees around the x-axis
        />
        <group position={[-20, 10,10]}> 
         <PositionalAudio ref={audioRef} loop url="/sounds/desert-sound.mp3" distance={4}/ >
        </group>
        </Suspense>
      </Canvas>
      <Loader containerStyles={customContainerStyles} />
    </KeyboardControls>
  );

}

export default Solutions