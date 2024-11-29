import { Text3D, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useCallback, useState } from "react";
import "../2d-elements/Text.css";
import { Button3D } from "../../../../components/models/button3d/Button3D-River";
import { useNavigate } from "react-router-dom";

const Scroll = () => {
  const scroll = useScroll();

  const [text, setText] = useState("inicio");
  const [showButton, setShowButton] = useState(false); // Estado para mostrar el botón
  const navigate = useNavigate();

  useFrame((state, delta) => {
    const offset = scroll.offset; // Valor entre 0 y 1 basado en el desplazamiento

    // Cambia la posición de la cámara
    state.camera.position.set(
      Math.sin(offset * Math.PI * 3) * 50, // Movimiento horizontal
      Math.cos(offset * Math.PI * 0.4) * 100, // Movimiento vertical
      100 - offset * 60 // Movimiento en profundidad
    );

    // Haz que la cámara apunte al modelo
    state.camera.lookAt(80, -70, 100);

    // Actualiza el texto según el desplazamiento
    if (offset < 0.4) {
      setText(
        "Causas: La escasez de agua es causada principalmente por el aumento de la demanda debido al crecimiento poblacional y la expansión de actividades agrícolas e industriales. Ademas, el cambio climatico ha tomado un papel protagonico y se espera que empeore la situación en el futuro si no se toman decisiones a tiempo."
      );
    } else if (offset > 0.49 && offset < 0.88) {
      setText(
        "Impactos: La escasez de agua tiene profundos impactos ambientales, económicos y sociales. En el ámbito ambiental, reduce la disponibilidad de ecosistemas acuáticos y amenaza la biodiversidad. Económicamente, afecta la agricultura, la industria y el suministro de energía, aumentando los costos y reduciendo la productividad. A nivel social, provoca conflictos por el acceso al recurso, incrementa la inseguridad alimentaria y afecta gravemente la salud pública al limitar el acceso a agua potable y saneamiento, especialmente en comunidades vulnerables. Miremos algunas soluciones para enfrentar este problema."
      );
    } else if (offset >= 0.89) {
      setShowButton(true); // Mostrar el botón al final
    } else {
      setShowButton(false); // Ocultar el botón si no estamos al final
    }
  });

  // Función para manejar clics en el botón
  const handleClick = () => {
    navigate("/soluciones/escasez-del-agua")
  };



  return (
    <>
      <Html position={[0, 0, 20]} center>
        <div className="river-text">{text}</div>
      </Html>

      {showButton && (
        <mesh
          position={[-2, 22, 35]}
          onClick={handleClick}
          rotation={[0, 0.4, 0]}
        >
        <Button3D text="SOLUCIONES" />
          </mesh>
      )}
    </>
  );
};

export default Scroll;
