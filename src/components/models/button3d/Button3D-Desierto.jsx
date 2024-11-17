import { Text, Box } from "@react-three/drei";
import { useState } from "react";


export const Button3D = ({text, onClick}) => {

  const [hovered, setHovered] = useState(false);
  return (
    <group position={[0, 7, 1]}>
      <Box
        args={[6, 1, 0.5]} // Tamaño del botón
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
          color={hovered ? "#b48704" : "#f9ba04"} 
          // color={hovered ? "#55C0E0" : "#db9926"} 
        />
      </Box>
      <Text
        position={[0, 0, 0.3]} // Ajusta la posición del texto sobre el botón
        font="/fonts/Poppins-Light.otf"
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
