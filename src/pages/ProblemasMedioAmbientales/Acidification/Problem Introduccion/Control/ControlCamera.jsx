import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

/**
 * Controls component that wraps the OrbitControls for a 3D scene.
 *
 * This component provides constraints for the orbiting camera, such as
 * minimum and maximum distances, polar angles, and azimuth angles. It also
 * enables damping for smoother transitions.
 *
 * @returns {JSX.Element} The OrbitControls element with specified constraints.
 */
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
      ref={cameraRef}
    />
  );
};

export default Controls;
