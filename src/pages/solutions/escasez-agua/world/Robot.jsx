import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Robot(props) {
  const { nodes, materials } = useGLTF("/models-3d/Robot.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.model_Material_u1_v1}
          // rotation={[-Math.PI / 0, 0, 0]}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.model_Material_u1_v1}
          // rotation={[-Math.PI / 2, 0, 0]}a
       
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/Robot.glb");
