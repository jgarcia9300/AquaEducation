/**
 * 3D Asset made by UnknownWorlds, devs of Subnautica Below Zero
 * Downloaded from Sketchfab: https://sketchfab.com/3d-models/shadow-leviathan-d983093d9ffa439785bde176c6650e6b
 * Upload by: gavinpgamer1
 *
 */

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Leviathan = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models-3d/shadow_leviathan.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  //console.log(names);
  useEffect(() => {
    // Reproduce la animación inicial
    actions["attacking_swimU"].reset().fadeIn(0.5).play();
    // actions["patrol_swimR"].play();
  }, [actions]);

  // Función para manejar colisiones
  const handleCollisionEnter = (event) => {
    const { other } = event;

    // Cambia la animación si el collider con el que colisionó se llama "Floor"
    if (other.rigidBodyObject?.name === "Floor") {
      actions["attacking_swimU"].fadeOut(0.5); // Detiene la animación actual
      actions["patrol_swimR"].reset().fadeIn(0.5).play(); // Cambia a la nueva animación
    }
  };

  return (
    <RigidBody
      //   debug
      type="dynamic"
      scale={1}
      onCollisionEnter={handleCollisionEnter} // Detectar colisiones
    >
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="Shadow_Leviathan_animfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="ShadowLeviathan">
                    <group name="Shadow_Leviathan_anim" position={[0, 0, -5]}>
                      <group name="Object_6">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_9"
                          geometry={nodes.Object_9.geometry}
                          material={materials.Shadow_Leviathan_01}
                          skeleton={nodes.Object_9.skeleton}
                        />
                        <skinnedMesh
                          name="Object_10"
                          geometry={nodes.Object_10.geometry}
                          material={materials.Shadow_Leviathan_01_eyes}
                          skeleton={nodes.Object_10.skeleton}
                        />
                        <skinnedMesh
                          name="Object_11"
                          geometry={nodes.Object_11.geometry}
                          material={materials.Shadow_Leviathan_02}
                          skeleton={nodes.Object_11.skeleton}
                        />
                        <mesh position={[0, 0, 0]}>
                          <boxGeometry args={[10, 18, 30]} />{" "}
                          {/* Ajusta dimensiones */}
                          <meshBasicMaterial
                            wireframe
                            color="purple"
                            visible={false}
                          />
                        </mesh>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Leviathan;
useGLTF.preload("/models-3d/shadow_leviathan.glb");
