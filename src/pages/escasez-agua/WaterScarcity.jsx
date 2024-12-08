import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import Desert from "./world/Desert";
import Lights from "./lights/Lights";
import Controls from "./controls/Controls";
import Staging from "./staging/Staging";
import Iguana from "./world/Iguana";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useCallback, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import { useState } from "react";

const WaterScarcity = () => {
  const cameraSettings = {
    position: [0, 15, 16],
    fov: 100,
  };

  const audioRef = useRef(null);

  const activeSound = useCallback(() => {

        audioRef.current.play();
        audioRef.current.setVolume(10);

  }, []);

  return (
    // <KeyboardControls map={map}>
    <Canvas shadows camera={cameraSettings} onClick={activeSound}>
      {/* <Perf/> */}
      <Controls />
      <Lights />
      <Physics debug={false}>
        <Desert />
        <Iguana position={[0, 0, 8]} />
        <Staging />
      </Physics>
      <group position={[0, 0, 0]}>
        <PositionalAudio
          ref={audioRef}
          loop
          url="/sounds/desert-sound.mp3"
          distance={4}
        />
      </group>
    </Canvas>
    // </KeyboardControls>
  );
};

export default WaterScarcity;
