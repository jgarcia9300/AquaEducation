
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Adventurer(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Adventurer.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="7a27cda089f84492add8d11978a5edcdfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.012']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" position={[-478.053, 958.428, -1.058]} scale={100} />
                  <group name="model_LOD1002" position={[-478.053, 958.428, -1.058]} scale={100} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/Adventurer.glb')