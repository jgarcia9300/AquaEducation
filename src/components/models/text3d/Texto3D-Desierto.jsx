import { Text3D } from "@react-three/drei";

export const Texto3D = ({text}) => {
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
        position={[-4, 16, 0]}
      >
        {text}
        <meshStandardMaterial attach="material" color="#db9926" />
    </Text3D>
  )
}


