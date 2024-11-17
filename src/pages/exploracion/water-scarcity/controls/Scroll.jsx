import {useScroll} from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { useState } from 'react';
// import "../River.css"

const Scroll = () => {

    const scroll = useScroll()

    const [text, setText] =  useState('inicio')
  
      useFrame((state, delta) => {
      const offset = scroll.offset; // Valor entre 0 y 1 basado en el desplazamiento
      console.log(offset)
  
      // Cambia la posición de la cámara
      state.camera.position.set(
        Math.sin(offset * Math.PI * 3) * 50, // Movimiento horizontal
        Math.cos(offset * Math.PI * 0.4) * 100,  // Movimiento vertical
        100 - offset * 60 // Movimiento en profundidad
      );
  
    //   Haz que la cámara apunte al modelo
      state.camera.lookAt(80, -70, 100);
      

      if (offset < 0.66) {
        setText("Sección 1: Introducción");
      } else {
        setText("Sección 3: Final");
      }
    });

    return (
        <>
          <Html position={[0, 10, 0]}>
          <div className='.exploracion-header'> Hola </div>
         
            <div style={{ color: "white", fontSize: "24px", textAlign: "center" }}>
              {text}
            </div>
          </Html>
        </>
      );


}

export default Scroll