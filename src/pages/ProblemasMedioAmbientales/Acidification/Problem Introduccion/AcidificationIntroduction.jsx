/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState } from "react";
import {
  Box,
  Environment,
  Html,
  Loader,
  Plane,
  Sky,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { extend, Canvas } from "@react-three/fiber";
import { Texto3D } from "../../../../components/models/text3d/Texto3D";
import IntroModels from "./IntroModels.jsx";
import Controls from "./Control/ControlCamera.jsx";
import Lights from "./Lights/Lights.jsx";
import Staging from "./Staging/Staging.jsx";
import { useNavigate } from "react-router-dom";

extend({ Box, Plane });

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
  const textInfo = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [goToExplore, setGoToExplore] = useState(false);

  const navigate = useNavigate();

  // let text =
  // "Los océanos brindan sustento económico a más de 3000 millones de personas, generan gran parte del aire que respiramos y absorben gases de efecto invernadero. Lamentablemente, las actividades humanas han alterado profundamente la composición química de sus aguas. Desde finales de la década de 1980, el 95 % de las aguas superficiales a mar abierto se han vuelto más ácidas, tras absorber una cantidad considerable de dióxido de carbono (CO2). Este fenómeno se ha intensificado debido a que la cantidad de CO2 en la atmósfera ha alcanzado un volumen un 50 % superior al que existía antes de la revolución industrial.";

  let text =
    "Los océanos sustentan a más de 3000 millones de personas, producen gran parte del oxígeno y absorben gases de efecto invernadero. Sin embargo, la actividad humana ha alterado su química, y desde la década de 1980, el 95 % de las aguas superficiales se han vuelto más ácidas por absorber grandes cantidades de CO2. Esto se debe a que el CO2 en la atmósfera es ahora un 50 % mayor que antes de la revolución industrial.";

  // let <textarea name="" id="" cols="30" rows="10"></textarea>
  let textConsecuences =
    "¿Cuáles son las consecuencias de la acidificación de los océanos?" +
    "\n" +
    "La acidificación de los océanos es perjudicial para los ecosistemas marinos y las personas que " +
    "\ndependen de ellos para su sustento o alimentación. \nLa acidificación disminuye la concentración" +
    "\n de iones de carbonato (CO32-), un compuesto que algunos organismos, como las ostras, los cangrejos, " +
    "los erizos de mar, las langostas y los corales, necesitan para conformar y regenerar sus conchas" +
    " y esqueletos, que además se desgastan más fácilmente a medida que el pH disminuye.";
  let A =
    "Este proceso amenaza la vida marina, ya que afecta a organismos como corales, moluscos y plancton, que dependen del carbonato para formar sus estructuras. Si no reducimos las emisiones de CO₂, la biodiversidad marina y los ecosistemas que sustentan millones de vidas humanas estarán en grave peligro.";
  let B =
    "La acidificación de los océanos es perjudicial para los ecosistemas marinos y las personas que dependen de ellos para su sustento o alimentación";

  let tittle2 =
    "¿Cuáles son las consecuencias de la acidificación de los océanos?";

  const formattedText = WrapText(text, 62);

  const handleButtonClick = (e) => {
    console.log(e);
    setClicked(!clicked);
    // alert("Acción en Construcción");
    // textGroupRef.current.visible = !textGroupRef.current.visible;
    console.log(textInfo.current);
    if (goToExplore) {
      navigate("/exploracion/acidificacion-de-los-oceanos");
    } else {
      goToExplore ? setGoToExplore(false) : setGoToExplore(true);
    }
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, -10, 19], fov: 80 }}
      className="canvas-background"
    >
      <Suspense fallback={null}>
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
          <Plane args={[25, 12]} position={[-0.6, -4.6, -0.1]}>
            <meshStandardMaterial attach="material" opacity={0.4} transparent />
          </Plane>

          <Text3D
            ref={textInfo}
            font="/fonts/Poppins-Bold.json"
            size={0.5}
            height={0.05}
            position={[-12, 0, 0]}
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.005}
          >
            {clicked ? (
              <>
                <Html
                  position={[11.4, -1.3, 0]} // Posición en el espacio 3D
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "40vw",
                      textAlign: "center",
                      fontSize: "24px",
                      color: "white",
                      background: "rgba(0, 0, 0, 0.5)",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <h1
                      style={{
                        color: "white",
                        fontSize: "32px",
                        textAlign: "center",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "10px",
                        borderRadius: "5px",
                        userSelect: "none",
                      }}
                    >
                      {tittle2}
                    </h1>
                  </div>
                </Html>
                <Html
                  //  position = {[X Y Z]}
                  position={[11.4, -5.6, 0]} // Posición en el espacio 3D
                  transform // Hace que el HTML siga la escala, rotación y posición del objeto 3D
                  occlude // Opcional: oculta el elemento si algo está frente a él
                >
                  <div
                    style={{
                      width: "50vw",
                      textAlign: "justify",
                      fontSize: "28px",
                      color: "white",
                      background: "rgba(0, 0, 0, 0.5)",
                      padding: "10px",
                      borderRadius: "5px",
                      userSelect: "none",
                    }}
                  >
                    {B}
                  </div>
                </Html>
              </>
            ) : (
              formattedText
            )}
            <meshPhysicalMaterial
              color="black"
              reflectivity={0.8}
              clearcoat={1}
              clearcoatRoughness={1}
            />
          </Text3D>
        </group>
        <group position={[-1, 3.2, 0]}>
          <Box
            args={[4, 1, 0.2]}
            position={[9, -12, 1]}
            onClick={() => handleButtonClick()}
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
              {clicked ? "Explorar" : "Leer más"}
            </Text3D>
          </Box>
        </group>

        <Staging />
      </Suspense>
    </Canvas>
  );
};

export default AcidificationIntroduction;
