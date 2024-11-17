import {useScroll} from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { useState } from 'react';
import "../2d-elements/Text.css"

const Scroll = () => {

    const scroll = useScroll()

    const [text, setText] =  useState('inicio')

    
  
      useFrame((state, delta) => {
      const offset = scroll.offset; // Valor entre 0 y 1 basado en el desplazamiento
      // console.log(offset)
  
      // Cambia la posición de la cámara
      state.camera.position.set(

        Math.sin(offset * Math.PI * 3) * 50, // Movimiento horizontal
        Math.cos(offset * Math.PI * 0.4) * 100,  // Movimiento vertical
        100 - offset * 60 // Movimiento en profundidad
      );
  
    //   Haz que la cámara apunte al modelo
      state.camera.lookAt(80, -70, 100);
      console.log( state.camera.position)
      

      if (offset < 0.4) {
        setText("Causas de la Escasez: La escasez de agua es causada principalmente por el aumento de la demanda debido al crecimiento poblacional y la expansión de actividades agrícolas e industriales. El cambio climatico tambien influye en dicha escasez");
      } else if (offset > 0.49 && offset < 0.88) {
        setText("Soluciones: mejorar la gestión de recursos hídricos mediante políticas sostenibles y eficientes. La reutilización de agua, asi como la difusion de campañas educativas y los cambios en los hábitos de consumo es crucial para mitigiar la problematica.");
      } else if (offset >= 0.89) {
        setText("Soluciones");
      }
    });

    return (
        <>
          <Html position={[0, 0, 0]} center>        
            <div className = "river-text">
              {text}
            </div>
          </Html>
        </>
      );


}

export default Scroll