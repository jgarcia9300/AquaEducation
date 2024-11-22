import React, { act, useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

const Iguana = (props) => {
  const rigidBodyRef = useRef(); // Referencia al cuerpo rígido
  const iguanaRef = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Iguana.glb");
  const { actions } = useAnimations(animations, iguanaRef);
  const [isMoving, setIsMoving] = useState(true); // Estado para controlar si se mueve o no

  const speed = 0.5; // Velocidad de desplazamiento
  const direction = useRef({ x: 1, z: 0 }); // Dirección inicial (moviéndose en el eje X)

  useEffect( () => {
      Object.keys(actions).forEach((key) => {
        actions[key].play();
      });
    }, [actions]
  );

  // useEffect(() => {
  //   // Si `isMoving` cambia a false, detener la animación
  //   if (!isMoving) {
  //     Object.keys(actions).forEach((key) => {
  //       actions[key].stop(); // Detiene todas las animaciones
  //     });
  //   }
  // }, [isMoving, actions]);

  // Lógica de movimiento
  useFrame((_, delta) => {
    if (!rigidBodyRef.current) return;

    // Obtén la posición actual
    const translation = rigidBodyRef.current.translation();

    // Ajusta la dirección para moverse hacia adelante (Z negativo)
    const directionZ = 1; // Hacia adelante en el eje Z

    // Calcula la nueva posición
    const newZ = translation.z + directionZ * speed * delta;

    // Establece la nueva posición manteniendo los otros ejes iguales
    rigidBodyRef.current.setTranslation(
      { x: translation.x, y: translation.y, z: newZ },
      true
    );

    // if (newZ > 1) {
    //   setIsMoving(false); // Detener el movimiento
    //   return; // Salir de la función
    // }
  });

  return (
    <RigidBody type="fixed" ref={rigidBodyRef}>
      <group
        ref={iguanaRef}
        {...props}
        dispose={null} /*onClick={handleIguana}*/
      >
        <group name="Scene">
          <group
            name="metarig"
            position={[-0.588, 0, 0.154]}
            rotation={[0, 0.02, 0]}
          >
            <skinnedMesh
              castShadow
              name="Retopo_Iguana"
              geometry={nodes.Retopo_Iguana.geometry}
              material={materials["Normal3072.001"]}
              skeleton={nodes.Retopo_Iguana.skeleton}
              morphTargetDictionary={nodes.Retopo_Iguana.morphTargetDictionary}
              morphTargetInfluences={nodes.Retopo_Iguana.morphTargetInfluences}
            />
            <primitive object={nodes.spine004} />
            <primitive object={nodes.Blik_targetl} />
            <primitive object={nodes.Bl_Ik_Targetr} />
            <primitive object={nodes.Fl_Ik_Targetl} />
            <primitive object={nodes.Fl_Ik_Targetr} />
            <primitive object={nodes.FL_IK_polel} />
            <primitive object={nodes.FL_IK_poler} />
            <primitive object={nodes.BL_IKPOLEl} />
            <primitive object={nodes.BL_IKPOLEr} />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Iguana;

useGLTF.preload("/models-3d/Iguana.glb");
