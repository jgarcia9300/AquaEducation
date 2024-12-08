import { useCallback, useEffect, useState } from "react";
import { ExploracionContaminacionModel } from "./ExploracionContaminacionModel";
import { Canvas } from "@react-three/fiber";
import { Html, Sky } from "@react-three/drei";
import Controls from "../controls/Controls";
import { Vector3 } from "three";
import { useAspectsStore } from "../../../stores/store-aspects-select";
import "./ExploracionContaminacion.css";

const texts = [
  {
    title: "Causas",
    content:
      "La contaminación del agua tiene múltiples causas, entre las principales se encuentran el vertido de aguas residuales sin tratar, el uso excesivo de fertilizantes y pesticidas en la agricultura, la deforestación que incrementa la erosión del suelo, y los derrames de petróleo. Además, la disposición incorrecta de plásticos y otros desechos sólidos contribuye al deterioro de la calidad del agua, afectando tanto a los ecosistemas acuáticos como a las fuentes de agua potable.",
  },
  {
    title: "Impactos",
    content:
      "Los impactos de la contaminación del agua son significativos y diversos. A nivel ambiental, provoca la destrucción de hábitats acuáticos, la pérdida de biodiversidad, y el desequilibrio de los ecosistemas. En el ámbito humano, la contaminación contribuye a la propagación de enfermedades transmitidas por el agua, como el cólera y la diarrea, afectando especialmente a comunidades vulnerables. También tiene consecuencias económicas, ya que limita el acceso a agua potable y encarece su tratamiento, impactando sectores como la pesca y la agricultura.",
  },
  {
    title: "Soluciones",
    content:
      "Para combatir la contaminación del agua, es esencial implementar soluciones integrales y sostenibles. Entre las medidas clave se incluyen el tratamiento adecuado de aguas residuales antes de su descarga, la promoción de prácticas agrícolas sostenibles que reduzcan el uso de químicos, y la conservación de los ecosistemas naturales como bosques y humedales. También es crucial fomentar la educación ambiental para concienciar sobre el uso responsable del agua, junto con políticas gubernamentales estrictas que regulen las actividades industriales y comerciales que puedan afectar la calidad del agua.",
  },
];


const cameraPositions = [
  new Vector3(0, 2, 4), // Cámara para "Causas"
  new Vector3(0.5, 1, 2.99),   // Cámara para "Impactos"
  new Vector3(1, 1, 2),  // Cámara para "Soluciones"
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
        [-5, 1, 0]
      );
    } else if (event.code === "Digit3") {
      setCurrentIndex(2); // Selecciona "Soluciones" con el número 3
      handleAspect(
        texts[2].title,
        cameraPositions[2],
        [-7, 1, 0]
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
        <h1 className="exploracion-header-title">Exploración Contaminación</h1>
        <p>
          Usa <strong>Espacio</strong> para cambiar entre las Secciones: Causas,
          Impactos y Soluciones. También puedes usar las teclas <strong>1(Causas)</strong>, <strong>2(Impactos)</strong> y <strong>3(Soluciones)</strong> para navegar directamente.
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

        <ExploracionContaminacionModel handleIndex={currentIndex} />

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
              Siguiente
            </button>
          </div>
        </Html>
      </Canvas>
    </>
  );
};
