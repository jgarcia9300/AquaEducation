import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import { AnimationMixer, LoopRepeat } from 'three';
import { useFrame } from '@react-three/fiber';

export function SeaFishesModel(props) {
  const group = useRef();
  const mixer = useRef(); // Mixer independiente para este modelo
  const { scene, animations } = useGLTF('/models-3d/SeaFishes.glb');
  const clonedScene = clone(scene);

  useEffect(() => {
    mixer.current = new AnimationMixer(clonedScene); // Mixer para esta instancia
    const action = mixer.current.clipAction(animations[0]); // Animación específica
    action.setLoop(LoopRepeat, Infinity); // Configuramos el bucle
    action.play();

    return () => {
      mixer.current.stopAllAction(); // Detenemos todas las acciones al desmontar
      mixer.current.uncacheRoot(clonedScene);
    };
  }, [clonedScene, animations]);

  useFrame((_, delta) => {
    mixer.current?.update(delta); // Actualizamos el mixer solo de este modelo
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clonedScene} dispose={null} />
    </group>
  );
}

useGLTF.preload('/models-3d/SeaFishes.glb');
