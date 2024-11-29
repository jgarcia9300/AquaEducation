import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";

const Floor = () => {
  const TEXTURE_PATH =
    "/acidification/exploration/floorTextures/coast_line_01_";

  const floorTexture = useTexture({
    map: TEXTURE_PATH + "diff_2k.jpg",
    normalMap: TEXTURE_PATH + "nor_gl_2k.jpg",
  });

  // Configuración para repetir la textura
  floorTexture.map.wrapS = RepeatWrapping; // Repetir en horizontal
  floorTexture.map.wrapT = RepeatWrapping; // Repetir en vertical
  floorTexture.map.repeat.set(4, 4); // Cambia el 8,8 según lo necesario

  floorTexture.normalMap.wrapS = RepeatWrapping;
  floorTexture.normalMap.wrapT = RepeatWrapping;
  floorTexture.normalMap.repeat.set(4, 16);

  return (
    <>
      {/* <DebugAxes /> */}

      <RigidBody type="fixed" name="Floor">
        <mesh position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[128, 1.4, 128]} />
          <meshStandardMaterial
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            receiveShadow
            castShadow
          />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Floor;
