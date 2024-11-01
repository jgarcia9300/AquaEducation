import { DirectionalLightHelper, PointLightHelper } from "three";
import { OrthographicCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
  const lightRef = useRef();

  // Selecciona el helper adecuado para el tipo de luz que estás usando.
  useHelper(lightRef, DirectionalLightHelper, 1); // Para luces direccionales
  // useHelper(lightRef, PointLightHelper, 1); // Para luces puntuales

  return (
    // <directionalLight
    //   ref={lightRef}
    //   position={[0, 3, 20]}
    //   intensity={2}
    //   color={"#fee698 "}
    //   shadow-mapSize-width={2048}
    //   shadow-mapSize-height={2048}
    //   shadow-camera-far={50}
    //   shadow-camera-left={-10}
    //   shadow-camera-right={10}
    //   shadow-camera-top={10}
    //   shadow-camera-bottom={-10}
    //   castShadow
    // />

    <directionalLight
    //   ref={lightRef}
      castShadow
      position={[6, 12, 26]}
      shadow-mapSize={[2048, 2048]}
      color={"#fff7de"}
      intensity={2}
    >
      <OrthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
    </directionalLight>
  );
};

export default Lights;
