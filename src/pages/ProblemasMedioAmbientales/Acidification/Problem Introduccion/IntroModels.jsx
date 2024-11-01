import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const IntroModels = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/Ocean.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 64, -64]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        {/* <mesh
          name="boat"
          castShadow
          receiveShadow
          geometry={nodes.Boat.geometry}
          material={materials.Main}
        /> */}
        <mesh
          name="water"
          castShadow
          receiveShadow
          geometry={nodes.Watter.geometry}
          material={materials.Ocean}
        />
        {/* <mesh
          name="diver"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Main}
        /> */}

        <mesh
          name="bubbles"
          castShadow
          receiveShadow
          geometry={nodes.Object_5_1.geometry}
          material={materials.Bubbles}
        />
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Main}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_1.geometry}
          material={materials["M_coral_02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_2.geometry}
          material={materials["M_coral_01.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_3.geometry}
          material={materials["M_coral_02.002"]}
        /> */}
        <mesh
          name="cosaConPinchos"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_4.geometry}
          material={materials["M_coral.001"]}
        />
        <mesh
          name="smallBrownCoral"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_5.geometry}
          material={materials["M_coral.002"]}
        />
        <mesh
          name="smallOrangeCoral"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_6.geometry}
          material={materials.M_coral}
        />
        <mesh
          name="greatRedCoral"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_7.geometry}
          material={materials.M_coral_01}
        />
        <mesh
          name="mushroom1"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_8.geometry}
          material={materials.M_coral_02}
        />
        <mesh
          name="mushroom2"
          castShadow
          receiveShadow
          geometry={nodes.Object_7_9.geometry}
          material={materials.M_coral_03}
        />
      </group>
    </group>
  );
};

export default IntroModels;

// useGLTF.preload("/models-3d/Ocean.glb");
