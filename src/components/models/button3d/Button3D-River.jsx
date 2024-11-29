import { Text, Box } from "@react-three/drei";
import { useState } from "react";

export const Button3D = ({ text, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <group position={[0, 7, 10]}
    //  rotation={[-Math.PI /1, 0.7, -3]}
    //  rotation={[-Math.PI /1, 0.7, -3]}
     rotation={[-Math.PI /1, 0, -3.1]}
     >
      <Box
        args={[4, 1, 0.5]} // Tamaño del botón
        onClick={onClick} // Llama a la función al hacer clic
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true); // Cambia el estado a hovered
          document.body.style.cursor = "pointer"; // Cambia el cursor a pointer
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false); // Vuelve el estado a no hovered
          document.body.style.cursor = "default"; // Cambia el cursor al default
        }}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          attach="material"
          color={hovered ? "#5086c1" : "#6a9eda"}
          // color={hovered ? "#55C0E0" : "#db9926"}
          transparent: true
        />
      </Box>
      <Text
        position={[0, 0, 0.3]} // Ajusta la posición del texto sobre el botón
        font="/fonts/Poppin-Bold.otf"
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};
