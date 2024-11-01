import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Controls = () => {
  const cameraRef = useRef();

  return (
    <OrbitControls
      minDistance={12}
      maxDistance={16}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 3}
      maxAzimuthAngle={Math.PI / 3}
      target={[0, -5, 0]}
      enableDamping
      dampingFactor={0.1}
      // onChange={(e) => {
      //   console.log("Position:", e.target.object.position);
      //   console.log("Target:", e.target.target);
      // }}
      // onChange={(e) => {
      //   const position = e.target.object.position;

      //   // // Limita la posición X, Y, y Z de la cámara en el espacio
      //   // position.x = Math.max(-10, Math.min(10, position.x));
      //   // position.y = Math.max(-5, Math.min(5, position.y));
      //   // position.z = Math.max(-15, Math.min(15, position.z));

      //   // // Actualiza la cámara con la nueva posición
      //   // e.target.object.position.set(position.x, position.y, position.z);
      // }}
      ref={cameraRef}
    />
  );
};

export default Controls;
