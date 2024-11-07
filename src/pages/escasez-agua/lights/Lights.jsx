import { DirectionalLightHelper } from "three";
import { OrthographicCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";

// const Lights = () => {
//   return (
//     <>
//       <ambientLight intensity={1.5} />
//       <directionalLight position={[10, 10, 0]} intensity={2} 
//       castShadow />
//     </>
//   );
// };

const Lights = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 1);

  return (

    <directionalLight

      castShadow
      position={[6, 30, 26]}
      shadow-mapSize={[1024, 1024]}
      color={"#fff7de"}
      intensity={5}
    >

      <OrthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
    </directionalLight>

  );
};


export default Lights;
