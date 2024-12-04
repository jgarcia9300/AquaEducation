import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef} from "react";

export default function SphereRobot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Robot.glb')
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.347}>
          <group
            name="68575daece7940fe81897ba2a4304376fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="DroneWeapon1" rotation={[-Math.PI / 2, 1.571, 0]} scale={226.969}>
                  <mesh
                    name="DroneWeapon1_M2Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneWeapon1_M2Robot_0.geometry}
                    material={materials.M2Robot}
                  />
                  <mesh
                    name="DroneWeapon1_M1Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneWeapon1_M1Robot_0.geometry}
                    material={materials.M1Robot}
                  />
                </group>
                <group
                  name="DroneHead"
                  rotation={[-Math.PI / 2, 1.571, 0]}
                  scale={[226.969, 234.186, 234.186]}>
                  <mesh
                    name="DroneHead_M1Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneHead_M1Robot_0.geometry}
                    material={materials.M1Robot}
                  />
                  <mesh
                    name="DroneHead_M2Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneHead_M2Robot_0.geometry}
                    material={materials.M2Robot}
                  />
                </group>
                <group name="DroneBase" rotation={[Math.PI / 4, 0, 0]} scale={100}>
                  <mesh
                    name="DroneBase_M2Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneBase_M2Robot_0.geometry}
                    material={materials.M2Robot}
                  />
                  <mesh
                    name="DroneBase_M1Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneBase_M1Robot_0.geometry}
                    material={materials.M1Robot}
                  />
                </group>
                <group name="DroneWeapon2" rotation={[-Math.PI / 2, 1.571, 0]} scale={226.969}>
                  <mesh
                    name="DroneWeapon2_M2Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneWeapon2_M2Robot_0.geometry}
                    material={materials.M2Robot}
                  />
                  <mesh
                    name="DroneWeapon2_M1Robot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.DroneWeapon2_M1Robot_0.geometry}
                    material={materials.M1Robot}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/Robot.glb')