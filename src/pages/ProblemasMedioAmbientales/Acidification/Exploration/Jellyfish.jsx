import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Jellyfish = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/jellyfish.glb");
  const { actions } = useAnimations(animations, group);

  const rigidBodyRef = useRef();

  // Función para aplicar un impulso en la dirección actual del modelo
  const applyImpulse = () => {
    const body = rigidBodyRef.current;
    if (body) {
      const quaternion = group.current.quaternion; // Rotación actual del grupo
      const forwardVector = new THREE.Vector3(0, 12, -14).applyQuaternion(
        quaternion
      ); // Dirección hacia adelante
      const impulse = forwardVector.multiplyScalar(4); // Aumenta la fuerza del impulso
      //console.log("Applying impulse:", impulse);
      body.applyImpulse(impulse, true); // Aplica el impulso
    } else {
      //console.log("RigidBody not available");
    }
  };

  // Chequear la posición en Z y ajustar si es necesario
  const checkPosition = () => {
    const body = rigidBodyRef.current;
    const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

    if (body) {
      const position = body.translation(); // Obtiene la posición actual
      if (position.z <= -100) {
        //console.log("Position exceeded -100, resetting to 34...");
        const randomY = getRandomInRange(-11, -8);
        const randomZ = getRandomInRange(32, 38);
        const randomX = getRandomInRange(-8, 8);
        body.setTranslation({ x: randomX, y: randomY, z: randomZ }, true); // Resetea Z a 34
        body.setLinvel({ x: 0, y: 0, z: 0 }, true); // Resetea la velocidad lineal
        body.setAngvel({ x: 0, y: 0, z: 0 }, true); // Resetea la velocidad angular
      }
    }
  };

  useEffect(() => {
    if (actions) {
      const defaultAnimation = Object.keys(actions)[0]; // Selecciona la primera animación
      if (defaultAnimation) {
        const action = actions[defaultAnimation];
        action.reset().fadeIn(0.5).play();

        // Configurar el bucle infinito
        action.loop = THREE.LoopRepeat;

        // Evento al final de cada ciclo de animación
        const handleLoop = () => {
          //console.log("Animation loop complete, applying impulse...");
          checkPosition(); // Verifica la posición de la medusa
          applyImpulse();
        };

        // Verifica en cada frame si la animación ha completado un ciclo
        let lastTime = 0;
        const interval = setInterval(() => {
          if (action.time < lastTime) {
            handleLoop(); // Se llama al completar un ciclo
          }
          lastTime = action.time; // Actualiza el tiempo actual
        }, 50); // Intervalo de 50 ms para precisión

        return () => {
          clearInterval(interval); // Limpia el intervalo al desmontar
          action.stop();
        };
      }
    }
  }, [actions]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      type="dynamic"
      colliders="hull" // Usa un colisionador optimizado
      {...props}
    >
      <group ref={group} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            position={[0.634, -0.001, -0.239]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <group name="Jellyfish_003abccleanermaterialmergergles">
              <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Object_3">
                  <group name="MorphMainGroup">
                    <mesh
                      name="Jellyfish_003Shape"
                      castShadow
                      receiveShadow
                      geometry={nodes.Jellyfish_003Shape.geometry}
                      material={materials.Jellyfish_003Shape}
                      morphTargetDictionary={
                        nodes.Jellyfish_003Shape.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Jellyfish_003Shape.morphTargetInfluences
                      }
                    />
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

export default Jellyfish;

useGLTF.preload("/models-3d/jellyfish.glb");
