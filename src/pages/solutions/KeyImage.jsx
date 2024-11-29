import { Billboard, Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const KeyImage = () => {
  return (
    <Billboard
      position={[0, 4, 8]} // Posición en el espacio 3D
      follow={false} // Asegura que siempre mire a la cámara
      lockX={false} // Permite que rote en X si es necesario
      lockY={false} // Permite que rote en Y si es necesario
      lockZ={false} // Permite que rote en Z si es necesario
    >
      <Image
        url="/images/keyControls.png" // Ruta de la imagen
        scale={[6, 1]} // Tamaño (ancho, alto)
        // radius={5}
        transparent
        color={"white"} // Color de la imagen
      />
    </Billboard>
  );
};

export default KeyImage;
