import { Text3D } from "@react-three/drei";

export const Texto3D = ({text, position=[-6, 16, 0]}) => {
  return (
    <Text3D
        font="/fonts/Poppins-Bold.json"
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.01}
        height={0.5}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={0.9}
        castShadow
        receiveShadow
        position={position}
      >
        {text}
        <meshStandardMaterial attach="material" color="#db9926" />
    </Text3D>
  )
}


