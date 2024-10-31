import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Desierto = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/desierto.glb')

  return (
    <group {...props} dispose={null}>
      <group position={[0.011, 0.393, 0.445]} rotation={[Math.PI / 2, 0, 0]} scale={0.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Leave_Plane238.geometry}
          material={materials.Props}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Leave_Plane238_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Leave_Plane238_2.geometry}
          material={materials.House}
        />
      </group>
      <group position={[0.662, 0.481, 0.961]} rotation={[Math.PI / 2, 0, 0]} scale={0.045}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_3.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_4.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_5.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_6.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roca_3003_7.geometry}
          material={materials.VRayMtl1SG}
        />
      </group>
    </group>
  )
}

export default Desierto;

useGLTF.preload('/models-3d/desierto.glb')
