import { Text, Plane } from "@react-three/drei";
import { Texto3D } from "../../../../components/models/text3d/Texto3D-Desierto";
import { Button3D } from "../../../../components/models/button3d/Button3D-Desierto";
import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DesertElements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [buttonState, setButtonState] = useState("PRESIONA AQUÍ");

  const handleClick = useCallback(() => {
    if (!clickedOnce) {
      setClickedOnce(true);
      setButtonState("CERRAR");
      setIsVisible(true);
    } else {
      setClickedOnce(false);
      setIsVisible(false);
      setButtonState("PRESIONA AQUÍ");
    }
  }, [clickedOnce]);

  const groupRef = useRef();
  return (
    <>
      <Texto3D text={`SOLUCIONES`} />
      <Button3D text={buttonState} onClick={handleClick} />
      <group ref={groupRef} visible={isVisible}>
        <Plane args={[20, 8]} position={[0, -1.5, -0.1]}>
          <meshStandardMaterial
            attach="material"
            color="white"
            opacity={0}
            transparent
          />
        </Plane>
        <Text
          position={[0, 12, 0]}
          font="/fonts/Poppin-Bold.otf"
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          textAlign="justify"
          maxWidth={16}
        >
   Para abordar la escasez de agua, es crucial implementar una combinación de estrategias sostenibles que incluyan la mejora en la gestión de los recursos hídricos y el fomento del uso eficiente en los sectores doméstico, agrícola e industrial. La reforestación y conservación de cuencas hidrográficas ayudan a preservar fuentes de agua dulce. Además, la educación y sensibilización pública son clave para promover hábitos responsables y garantizar un acceso equitativo a este recurso vital.
          <meshStandardMaterial attach="material" color="white" />
        </Text>
      </group>
    </>
  );
};

export default DesertElements;
