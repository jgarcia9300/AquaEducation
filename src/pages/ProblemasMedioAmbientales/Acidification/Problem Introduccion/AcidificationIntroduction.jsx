/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState } from "react";
import { Box, Loader, Plane, Sky, Text3D, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Texto3D } from "../../../../components/models/text3d/Texto3D";
import IntroModels from "./IntroModels.jsx";
import Controls from "./Control/ControlCamera.jsx";
import Lights from "./Lights/Lights.jsx";

useGLTF.preload("/models-3d/Ocean.glb");
/**
 * Wrap a given text in lines of a given maximum character length.
 * @param {string} text The text to wrap.
 * @param {number} [maxCharsPerLine=62] The maximum characters per line.
 * @returns {string} The wrapped text.
 */
function WrapText(text, maxCharsPerLine = 62) {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  words.forEach((word) => {
    if ((line + word).length > maxCharsPerLine) {
      lines.push(line.trim());
      line = "";
    }
    line += `${word} `;
  });
  lines.push(line.trim());
  return lines.join("\n");
}

const AcidificationIntroduction = () => {
  const { nodes, materials } = useGLTF("/models-3d/WaterAnimation.glb");
  const textGroupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  let text =
    "Los océanos brindan sustento económico a más de 3000 millones de personas, generan gran parte del aire que respiramos y absorben gases de efecto invernadero. Lamentablemente, las actividades humanas han alterado profundamente la composición química de sus aguas. Desde finales de la década de 1980, el 95 % de las aguas superficiales a mar abierto se han vuelto más ácidas, tras absorber una cantidad considerable de dióxido de carbono (CO2). Este fenómeno se ha intensificado debido a que la cantidad de CO2 en la atmósfera ha alcanzado un volumen un 50 % superior al que existía antes de la revolución industrial.";
  const formattedText = WrapText(text, 62);

  const handleButtonClick = () => {
    setClicked(true);
    alert("Acción en Construcción");
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, -10, 19], fov: 80 }}
      className="canvas-background"
    >
      <Suspense fallback={<Loader />}>
        <Controls />
        <Lights />
        <IntroModels />
        <Sky
          sunPosition={[0, 12, 26]}
          inclination={0.2}
          azimuth={180}
          mieCoefficient={0.005}
          mieDirectionalG={0.07}
          rayleigh={1}
          turbidity={2}
        />
        <Texto3D
          text={`  ACIDIFICACIÓN   \nDE LOS OCÉANOS`}
          bevelEnabled={true}
          bevelThickness={0.1}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={5}
        />
        <group ref={textGroupRef} visible={true}>
          <Plane args={[26, 16]} position={[0, -6, -0.1]}>
            <meshStandardMaterial attach="material" opacity={0.4} transparent />
          </Plane>

          <Text3D
            font="/fonts/Poppins-Bold.json"
            size={0.5}
            height={0.05}
            position={[-12, 0, 0]}
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.005}
          >
            {formattedText}
            <meshPhysicalMaterial
              color="black"
              reflectivity={0.8}
              clearcoat={1}
              clearcoatRoughness={1}
            />
          </Text3D>
        </group>
        <group position={[0, 0, 0]}>
          <Box
            args={[2, 1, 0.2]}
            position={[9, -12, 1]}
            onClick={handleButtonClick}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(true);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false);
              document.body.style.cursor = "default";
            }}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial color={hovered ? "#0291d9" : "#00aaff"} />
            <Text3D
              font="/fonts/Poppins-Bold.json"
              position={[-0.9, -0.15, 0]}
              size={0.3}
              color={"#white"}
              height={0.1}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.005}
            >
              Ver más
            </Text3D>
          </Box>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default AcidificationIntroduction;
