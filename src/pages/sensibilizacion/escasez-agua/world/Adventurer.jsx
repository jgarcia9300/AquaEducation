
import React, { act, useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from "@react-three/rapier";

const Adventurer = (props) => {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Adventurer.glb')
  const { actions } = useAnimations(animations, group)

  useEffect( () => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  }, [actions]
);

  return (
    <RigidBody type="fixed">
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            castShadow
            name="model_LOD1002"
            geometry={nodes.model_LOD1002.geometry}
            material={materials['Material.002']}
            skeleton={nodes.model_LOD1002.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
    </RigidBody>
  )

}

export default Adventurer

useGLTF.preload('/models-3d/Adventurer.glb')