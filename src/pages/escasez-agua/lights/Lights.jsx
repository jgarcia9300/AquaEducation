import { DirectionalLightHelper } from "three";
import { OrthographicCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 0]} intensity={3}
      castShadow
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-camera-far={50}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-normalBias={0.2}
      />

    </>
  );
};

// const Lights = () => {
//   const lightRef = useRef();
//   useHelper(lightRef, DirectionalLightHelper, 1);

//   return (

//     <directionalLight

//       castShadow
//       position={[6, 30, 26]}
//       shadow-mapSize={[1024, 1024]}
//       color={"#fff7de"}
//       intensity={5}
//     >

//       <OrthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
//     </directionalLight>

//   );
// };


export default Lights;
