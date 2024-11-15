import { useFrame } from "@react-three/fiber";
import { useRef} from "react";
import {useGLTF, useAnimations, useScroll} from '@react-three/drei'
import DesertElements from "../3d-elements/DesertElements";
import Scroll from "../controls/Scroll";


const WetLand = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/Wetland.glb')
  const { actions } = useAnimations(animations, group) 

  return (
    <>
    <Scroll />
    {/* <DesertElements /> */}
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['20240909_RC_035_LOD1_u0_v0']}
        />
      </group>
    </group>
    </>
    
  )
}

export default WetLand;

useGLTF.preload('/models-3d/Desierto.glb')
