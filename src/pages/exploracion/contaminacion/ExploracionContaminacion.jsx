import { useCallback, useEffect, useState } from "react";
import { ExploracionContaminacionModel } from "./ExploracionContaminacionModel";
import { Canvas } from "@react-three/fiber";
import { Html, Sky } from "@react-three/drei";
import Controls from "../controls/controls";
import { Vector3 } from "three";
import { useAspectsStore } from "../../../stores/store-aspects-select";
import "./ExploracionContaminacion.css";

const texts = [
  {
    title: "Causas",
    content: "La contaminación del agua afecta la calidad de nuestros recursos hídricos, poniendo en riesgo la salud de ecosistemas acuáticos y de las comunidades que dependen de ellos.",
  },
  {
    title: "Impactos",
    content: "El impacto de la contaminación incluye la pérdida de biodiversidad, enfermedades humanas y la degradación de los ecosistemas acuáticos.",
  },
  {
    title: "Soluciones",
    content: "Fomentar el reciclaje, el tratamiento adecuado de aguas residuales y la educación ambiental son claves para reducir la contaminación del agua.",
  },
];

const cameraPositions = [
  new Vector3(0.3, 0.75, 2.99), // Cámara para "Causas"
  new Vector3(0.3, 1.5, 3.5),   // Cámara para "Impactos"
  new Vector3(-0.3, 1.2, 3.0),  // Cámara para "Soluciones"
];

export const ExploracionContaminacion = () => {
  const { setAspect } = useAspectsStore();
  const [ubication, setUbication] = useState([-5, 1, 0]);
  const [currentIndex, setCurrentIndex] = useState(0); // Controla el índice del texto actual

  const handleAspect = useCallback(
    (name, position, ubicationHtml) => {
      setAspect({
        name: name,
        positionCamera: position,
      });
      setUbication(ubicationHtml);
    },
    [setAspect]
  );

  const changeText = (index) => {
    setCurrentIndex(index % texts.length);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % texts.length;
    changeText(newIndex);
    handleAspect(
      texts[newIndex].title,
      cameraPositions[newIndex],
      [-5, 1, 0]
    );
  };

  const handleKeydown = (event) => {
    if (event.code === "Space") {
      handleNext();
    } else if (event.code === "Digit1") {
      setCurrentIndex(0); // Selecciona "Causas" con el número 1
      handleAspect(
        texts[0].title,
        cameraPositions[0],
        [-5, 1, 0]
      );
    } else if (event.code === "Digit2") {
      setCurrentIndex(1); // Selecciona "Impactos" con el número 2
      handleAspect(
        texts[1].title,
        cameraPositions[1],
        [0, 2, 0]
      );
    } else if (event.code === "Digit3") {
      setCurrentIndex(2); // Selecciona "Soluciones" con el número 3
      handleAspect(
        texts[2].title,
        cameraPositions[2],
        [5, 1, 0]
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="exploracion-header">
        <h1>Exploración Contaminación</h1>
        <p>
          Usa <strong>Espacio</strong> para cambiar entre textos: Causas,
          Impactos y Soluciones. También puedes usar los números <strong>1</strong>, <strong>2</strong> y <strong>3</strong> para navegar directamente.
        </p>
      </div>
      <Canvas camera={{ position: [0, 10, 4], fov: 100 }} shadows>
        <Sky
          sunPosition={[0, 0.2, -5]}
          inclination={0.2}
          azimuth={180}
          mieCoefficient={0.005}
          mieDirectionalG={0.07}
          rayleigh={1}
          turbidity={2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[0, 3, 7]}
          intensity={3}
          castShadow
          shadow-mapSize-width={4000}
          shadow-mapSize-height={1024}
        />
        <Controls />

        <ExploracionContaminacionModel />

        <Html position={ubication} center>
          <div className="exploracion-html-container">
            <h1 className="exploracion-html-title">{texts[currentIndex].title}</h1>
            <p className="exploracion-html-paragraph">{texts[currentIndex].content}</p>
            <button
              className="exploracion-html-button"
              onClick={() =>
                handleNext()
              }
            >
              Leer más
            </button>
          </div>
        </Html>
      </Canvas>
    </>
  );
};
