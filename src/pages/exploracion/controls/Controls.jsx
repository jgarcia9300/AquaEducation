import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useAspectsStore } from "../../../stores/store-aspects-select";

/**
 * Controls component
 *
 * This component manages camera controls using OrbitControls and updates the camera position
 * based on the current aspect's position stored in the store.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Controls() {
  const orbitControlsRef = useRef();
  const { aspect } = useAspectsStore();
  const epsilon = useMemo(() => 0.001, []);

  useFrame(({ camera }) => {
    // Check if camera is close enough to aspect's position, then set it directly
    if (
      Math.abs(camera.position.x - aspect.positionCamera.x) < epsilon &&
      Math.abs(camera.position.y - aspect.positionCamera.y) < epsilon &&
      Math.abs(camera.position.z - aspect.positionCamera.z) < epsilon
    ) {
      camera.position.set(
        aspect.positionCamera.x,
        aspect.positionCamera.y,
        aspect.positionCamera.z
      );
      return;
    }

    const step = 0.02;

    // Interpolate camera position towards aspect's position
    const newPosX = MathUtils.lerp(
      camera.position.x,
      aspect.positionCamera.x,
      step
    );
    const newPosY = MathUtils.lerp(
      camera.position.y,
      aspect.positionCamera.y,
      step
    );
    const newPosZ = MathUtils.lerp(
      camera.position.z,
      aspect.positionCamera.z,
      step
    );

    camera.position.set(newPosX, newPosY, newPosZ);
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      target={[0, 0.5, 0]}
      maxPolarAngle={1.75}
      enableZoom={false}
      enablePan={false}
    />
  );
}