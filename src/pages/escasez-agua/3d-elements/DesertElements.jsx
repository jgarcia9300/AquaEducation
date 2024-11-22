import {Text, Plane} from '@react-three/drei'
import { Texto3D } from "../../../components/models/text3d/Texto3D-Desierto";
import { Button3D } from "../../../components/models/button3d/Button3D-Desierto";
import { useRef, useState, useCallback, } from "react";
import { useNavigate } from "react-router-dom";


const DesertElements = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [clickedOnce, setClickedOnce] = useState(false);
    const [buttonState, setButtonState] = useState("A QUE SE REFIERE?");
    const navigate = useNavigate();
  
    const handleClick = useCallback(() => {
      if (!clickedOnce) {
        setClickedOnce(true);
        setButtonState("EXPLOREMOS JUNTOS");
        setIsVisible(true)
      } else {
        navigate("/exploracion/escasez-del-agua");
      }
    }, [clickedOnce]);
  
    const groupRef = useRef();
  return (
    <>
      <Texto3D text={`ESCASEZ  DEL AGUA`} />
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
          La escasez de agua es un problema crítico que afecta a millones de
          personas en todo el mundo, resultado de factores como el crecimiento
          poblacional, la contaminación, el cambio climático y el uso
          insostenible de los recursos hídricos. La falta de agua potable no
          solo impacta la salud y el bienestar humano, sino que también pone en
          riesgo la agricultura, la biodiversidad y el desarrollo económico.
          Abordar esta problemática es fundamental para garantizar un futuro
          sostenible, al ser el agua un recurso esencial para la vida y el
          equilibrio de los ecosistemas.
          <meshStandardMaterial attach="material" color="white" />
        </Text>
      </group>
    </>
  );
};

export default DesertElements;
