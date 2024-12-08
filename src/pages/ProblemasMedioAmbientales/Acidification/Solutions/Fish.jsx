import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fish = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/koi_fish.glb");
  const { actions, names } = useAnimations(animations, group);
  //console.log(names);

  useEffect(() => {
    actions["MorphBake"].play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="koifish_0"
                position={[-0.268, 0, 0]}
                rotation={[Math.PI, 1, Math.PI]}
              >
                <mesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Fish;

useGLTF.preload("/models-3d/koi_fish.glb");
