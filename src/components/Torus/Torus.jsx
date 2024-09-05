import { React, useRef, useState } from "react";
import styles from "./Torus.module.css";
import { useFrame } from "@react-three/fiber";

const Torus = () => {
  // Create a reference to the torus mesh
  const torusRef = useRef();

  // Initial position of the torus in the 3D world
  const torusPosition = [0, 0, 0];

  // State to track if the torus has moved to a specific position
  const [moved, setMoved] = useState(false);

  // State to control the direction of movement (1 = forward, -1 = backward)
  const [direction, setDirection] = useState(1);

  // Use the `useFrame` hook to animate the torus on each frame
  useFrame((state, delta) => {
    const speedFactor = 0.6; // Controls the speed of the movement

    // Limit the `delta` value to avoid large jumps when switching windows
    const limitedDelta = Math.min(delta, 0.1); // Max delta is set to 0.1 seconds

    // Function to handle forward movement along the X-axis
    const forwardAnimation = () => {
      torusRef.current.position.x += direction * 5 * limitedDelta * speedFactor;
    };

    // Function for backward movement, although currently unused
    const backwardAnimation = () => {
      torusRef.current.position.x -=
        direction * 40 * limitedDelta * speedFactor;
    };

    // Function to apply cosine-based movement on the Y-axis
    const cosAnimation = () => {
      torusRef.current.position.y +=
        Math.cos(torusRef.current.position.x) *
        direction *
        40 *
        limitedDelta *
        speedFactor;
    };

    // Check if the torus has reached the specific position (x >= 0) and hasn't moved before
    if (torusRef.current.position.x >= 0 && moved === false) {
      console.log("Moved to Needed Position");
      setMoved(!moved); // Mark the torus as moved
      torusRef.current.position.x = -32; // Reset the position to -32
    }

    // Reverse the direction when the torus reaches the boundaries (x >= 33 or x <= -33)
    if (torusRef.current.position.x >= 33) {
      setDirection(-1); // Change direction to backward
    } else if (torusRef.current.position.x <= -33) {
      setDirection(1); // Change direction to forward
    }

    // Execute the animations
    forwardAnimation();
    cosAnimation();
    console.log(torusRef.current.position); // Log the torus position for debugging
  });

  return (
    <>
      {/* Main torus mesh placed at the initial position */}
      <group ref={torusRef} name="torus-san">
        <mesh position={torusPosition}>
          <torusGeometry args={[1, 0.5, 16, 32]} />
          <meshPhongMaterial color={"red"} />
        </mesh>
      </group>

      {/* Left limit indicator for the movement boundaries */}
      <group name="left-limit">
        <mesh position={[-35, 0, 0]}>
          <boxGeometry args={[2, 100, 2]} />
          <meshLambertMaterial color={"red"} />
        </mesh>
      </group>

      {/* Right limit indicator for the movement boundaries */}
      <group name="right-limit">
        <mesh position={[35, 0, 0]}>
          <boxGeometry args={[2, 100, 2]} />
          <meshLambertMaterial color={"red"} />
        </mesh>
      </group>
    </>
  );
};

export default Torus;
