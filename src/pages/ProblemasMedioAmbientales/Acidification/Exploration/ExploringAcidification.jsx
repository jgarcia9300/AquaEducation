import * as THREE from "three";
import {
  Html,
  OrbitControls,
  OrthographicCamera,
  Sky,
  Text,
  Text3D,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Staging from "../Problem Introduccion/Staging/Staging";
import { AxesHelper, CameraHelper, RepeatWrapping } from "three";
import {
  MeshCollider,
  Physics,
  RigidBody,
  TrimeshCollider,
} from "@react-three/rapier";
import { useNavigate } from "react-router-dom";

import { useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Jellyfish from "./Jellyfish.jsx";

const Floor = () => {
  const TEXTURE_PATH =
    "/acidification/exploration/floorTextures/coast_line_01_";

  const floorTexture = useTexture({
    map: TEXTURE_PATH + "diff_2k.jpg",
    normalMap: TEXTURE_PATH + "nor_gl_2k.jpg",
  });

  // Configuración para repetir la textura
  floorTexture.map.wrapS = RepeatWrapping; // Repetir en horizontal
  floorTexture.map.wrapT = RepeatWrapping; // Repetir en vertical
  floorTexture.map.repeat.set(2, 2); // Cambia el 8,8 según lo necesario

  floorTexture.normalMap.wrapS = RepeatWrapping;
  floorTexture.normalMap.wrapT = RepeatWrapping;
  floorTexture.normalMap.repeat.set(1, 8);

  return (
    <>
      {/* <DebugAxes /> */}

      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[64, 1, 64]} />
        <meshStandardMaterial
          map={floorTexture.map}
          normalMap={floorTexture.normalMap}
          receiveShadow
          castShadow
        />
      </mesh>
    </>
  );
};

const DebugAxes = () => {
  return (
    <>
      {/* Agrega el AxesHelper directamente al JSX */}
      <primitive object={new AxesHelper(60)} />
    </>
  );
};

const ExploringAcidification = () => {
  document.body.style.overflow = "hidden";
  const lightRef = useRef();
  const axesRef = useRef();
  const [coralModels, setCoralModels] = useState([]);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const addCoral = (direction) => {
    const newModel = {
      position: [Math.random() * 60 - 30, 0, Math.random() * 60 - 30], // Más lejos del centro
      scale: 0.2,
    };

    setCoralModels((prevModels) => {
      if (direction === "up") {
        if (prevModels.length < 5) {
          return [...prevModels, newModel];
        } else {
          return prevModels;
        }
      } else {
        return prevModels.length > 0 ? prevModels.slice(0, -1) : prevModels; // Eliminar el último modelo
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault(); // Evita el desplazamiento de la ventana

        if (event.key === "ArrowUp") {
          addCoral("up");
        } else if (event.key === "ArrowDown") {
          addCoral("down");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Limpieza del evento
    };
  }, []);

  useEffect(() => {
    if (lightRef.current) {
      const helper = new CameraHelper(lightRef.current.shadow.camera);
      lightRef.current.parent.add(helper);
      // return () => lightRef.current.parent.remove(helper);
    }
  }, []);

  let C =
    "La acidificación disminuye la concentración de iones de carbonato (CO32-), un compuesto que algunos organismos, como las ostras, los cangrejos, los erizos de mar, las langostas y los corales, necesitan para conformar y regenerar sus conchas y esqueletos, que además se desgastan más fácilmente a medida que el pH disminuye.";

  const { nodes, materials } = useGLTF("/models-3d/Shoal.glb");

  const [rotation, setRotation] = useState([0, 0, 0]);

  let textInformation =
    "La acidificación disminuye la concentración de iones de carbonato (CO32-), un compuesto que algunos organismos, como las ostras, los cangrejos, los erizos de mar, las langostas y los corales, necesitan para conformar y regenerar sus conchas y esqueletos.";

  let textQuestion =
    "¿Sabías que muchas especies marinas pequeñas dependen de los corales para su protección?\n" +
    "\nMantener el equilibrio en los océanos es crucial para garantizar su supervivencia.";

  let textConclusion =
    "Prueba a interactuar con las tecla de flecha arriba para agregar o flecha abajo para quitar corales del ecosistema marino; inclusive, puedes interactuar con Coco, nuestro pequeño tiburón.";
  const [textInfo, setTextInfo] = useState("");

  useEffect(() => {
    setTextInfo(textInformation);
  }, []);

  useEffect(() => {
    if (coralModels.length > 4) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [coralModels]);

  const onClickChangeText = () => {
    // //console.log(textInfo);
    switch (textInfo) {
      case textInformation:
        setTextInfo(textQuestion);
        break;
      case textQuestion:
        setTextInfo(textConclusion);
        break;
      case textConclusion:
        setTextInfo(textInformation);
        break;
      default:
        setTextInfo(textInformation);
        break;
    }
  };

  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material;
      if (material && material.color) {
        const currentColor = material.color;
        material.color.set(currentColor.clone().multiplyScalar(6.1)); // Aumentar la intensidad del color
      }
    }
  }, [meshRef.current]);

  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Texto fijo en la pantalla */}
        <div
          id="firstTextScreen"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "1rem",
            borderRadius: "8px",
            fontSize: "1.2rem",
            maxWidth: "30vw",
            maxHeight: "90vh",
            zIndex: 1,
            userSelect: "none",
          }}
        >
          <div
            id="firstTextScreenTittle"
            style={{
              borderBottom: "1px solid white",
              marginBottom: "0.5rem",
              paddingBottom: "0.5rem",
              textAlign: "center",
              marginLeft: "0.5rem",
              paddingLeft: "0.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
              }}
            >
              ¿Cómo afecta a la vida maritima?
            </h3>
          </div>
          <div
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "2rem",
              lineHeight: "1.9rem",
              fontSize: "1.2rem",
            }}
          >
            <p>{textInfo}</p>
          </div>
          <div
            id="ButonNextText"
            style={{
              display: "flex",
              justifyContent: "right",
              marginTop: "1rem",
              marginRight: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer",
                // position: "absolute",
                fontSize: "3rem",
              }}
              onClick={() => onClickChangeText()}
            >
              <p>&gt;</p>
            </button>
          </div>
        </div>
        <Canvas
          shadows
          camera={{ position: [-42, 24, 46], fov: 95 }}
          className="canvas-background"
          style={{
            width: "100vw",
            height: "100vh",
          }}
          contextMenu="none"
          width="100vw"
          height="100vh"
        >
          <Suspense fallback={null}>
            {/* Luz Direccional */}
            <directionalLight
              // ref={lightRef}
              color={"#cffef8"}
              castShadow
              position={[-26, 22, 32]}
              intensity={6}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={8192}
            >
              <OrthographicCamera
                attach="shadow-camera"
                args={[-20, 20, 20, -20]}
              />
            </directionalLight>

            {/* Camara */}
            <OrbitControls
              minDistance={18}
              maxDistance={28}
              maxPolarAngle={Math.PI / 2}
              enableDamping
              dampingFactor={0.2}
              target={[-6, -18, -6]}
              mouseButtons={{
                RIGHT: null, // Deshabilita el clic derecho
                LEFT: THREE.MOUSE.LEFT, // Asegúrate de no interferir con el clic del medio
              }}
            />

            {/* Cielo */}
            <Sky
              sunPosition={[0, 12, 12]}
              inclination={0.2}
              azimuth={180}
              mieCoefficient={0.005}
              mieDirectionalG={0.07}
              rayleigh={1}
              turbidity={2}
            />

            {/* shoal of fish  */}
            <Physics gravity={[0, -0.8, 0]}>
              <group position={[0, -20, 0]} ref={axesRef}>
                {/* Agrega el piso como componente hijo */}
                <RigidBody type="fixed">
                  <Floor />
                </RigidBody>

                <mesh
                  ref={meshRef}
                  castShadow
                  receiveShadow
                  geometry={nodes["10010_Coral_v1_L3"].geometry}
                  material={materials["10010_Coral_v1"]}
                  position={[-4.007, 0, -10]}
                  scale={0.2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["10010_Coral_v1_L3001"].geometry}
                  material={materials["10010_Coral_v1"]}
                  position={[-18.164, 0, -10]}
                  scale={0.2}
                />
                {coralModels.length < 5 ? (
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.carp001.geometry}
                    material={materials["Material.001"]}
                    position={[-6.052, 7.081, 7.572]}
                    rotation={[-1.824, -0.496, -0.429]}
                    scale={0.8}
                  />
                ) : (
                  <>{null}</>
                )}
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.carp002.geometry}
                  material={materials["Material.001"]}
                  position={[-10.555, 1.899, -4.641]}
                  rotation={[1.186, 1.158, -2.723]}
                  scale={0.8}
                />
                <group
                  position={[-6.063, 3.594, 3.988]}
                  rotation={[-0.201, -1.025, -0.576]}
                  scale={0.415}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  position={[-11.227, 7.673, 7.279]}
                  rotation={[0.095, -0.009, -0.211]}
                  scale={0.415}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  position={[-12.606, 1.858, -10.611]}
                  rotation={[0, 1.523, 0]}
                  scale={0.415}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_1.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_2.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  position={[-10.621, 3.043, -11.543]}
                  rotation={[0, 1.523, 0]}
                  scale={0.415}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_2.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  position={[-10.04, 4.91, 5.323]}
                  rotation={[0.089, 0.003, -0.194]}
                  scale={0.415}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005_1.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <RigidBody
                  type="fixed"
                  colliders={"trimesh"}
                  // position={[0, 0, 0]}
                >
                  <group
                    name="Coco"
                    position={[0.559, 8, 8.987]}
                    rotation={[-0.109, -0.42, -0.001]}
                    scale={7}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_1.geometry}
                      material={materials["Material.004"]}
                      onClick={() => setShowText((prev) => !prev)}
                      onPointerEnter={() =>
                        (document.body.style.cursor = "pointer")
                      }
                      onPointerLeave={() =>
                        (document.body.style.cursor = "default")
                      }
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_2.geometry}
                      material={materials["Material.005"]}
                      onClick={() => setShowText((prev) => !prev)}
                      onPointerEnter={() =>
                        (document.body.style.cursor = "pointer")
                      }
                      onPointerLeave={() =>
                        (document.body.style.cursor = "default")
                      }
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_3.geometry}
                      material={materials["Material.006"]}
                      onClick={() => setShowText((prev) => !prev)}
                      onPointerEnter={() =>
                        (document.body.style.cursor = "pointer")
                      }
                      onPointerLeave={() =>
                        (document.body.style.cursor = "default")
                      }
                    />
                    {showText && (
                      <>
                        {coralModels.length < 5 ? (
                          <>
                            <Text3D
                              font="/fonts/Sawer_Regular.json" // Ruta a tu archivo de fuente
                              position={[-7, 1, -22]} // Ajusta la posición
                              size={1} // Tamaño del texto
                              height={0.002} // Profundidad del texto
                              curveSegments={12} // Suavidad
                              bevelEnabled // Habilitar biselado
                              bevelThickness={0.002} // Grosor del bisel
                              bevelSize={0.02} // Tamaño del bisel
                              bevelSegments={6} // Suavidad del bisel
                            >
                              Gracias a la falta de arrecifes de coral,
                              <meshStandardMaterial color="white" />
                            </Text3D>

                            <Text3D
                              font="/fonts/Sawer_Regular.json" // Ruta a tu archivo de fuente
                              position={[-3, -0.4, -16]} // Ajusta la posición
                              size={1} // Tamaño del texto
                              height={0.002} // Profundidad del texto
                              curveSegments={12} // Suavidad
                              bevelEnabled // Habilitar biselado
                              bevelThickness={0.002} // Grosor del bisel
                              bevelSize={0.02} // Tamaño del bisel
                              bevelSegments={6} // Suavidad del bisel
                            >
                              Coco se pudo alimentar!
                              <meshStandardMaterial color="white" />
                            </Text3D>
                          </>
                        ) : (
                          <>
                            <Text3D
                              font="/fonts/Sawer_Regular.json" // Ruta a tu archivo de fuente
                              position={[-7, 1, -22]} // Ajusta la posición
                              size={1} // Tamaño del texto
                              height={0.002} // Profundidad del texto
                              curveSegments={12} // Suavidad
                              bevelEnabled // Habilitar biselado
                              bevelThickness={0.002} // Grosor del bisel
                              bevelSize={0.02} // Tamaño del bisel
                              bevelSegments={6} // Suavidad del bisel
                            >
                              Son demasiados corales,
                              <meshStandardMaterial color="white" />
                            </Text3D>

                            <Text3D
                              font="/fonts/Sawer_Regular.json" // Ruta a tu archivo de fuente
                              position={[-3, -0.4, -16]} // Ajusta la posición
                              size={1} // Tamaño del texto
                              height={0.002} // Profundidad del texto
                              curveSegments={12} // Suavidad
                              bevelEnabled // Habilitar biselado
                              bevelThickness={0.002} // Grosor del bisel
                              bevelSize={0.02} // Tamaño del bisel
                              bevelSegments={6} // Suavidad del bisel
                            >
                              Coco no se puede alimentar!
                              <meshStandardMaterial color="white" />
                            </Text3D>
                          </>
                        )}
                      </>
                    )}
                  </group>
                </RigidBody>
                {/* jellyfish */}
                <group position={[20, 14, -90]}>
                  <Jellyfish />
                </group>

                <group position={[0, 16, 0]}>
                  <Jellyfish />
                </group>

                <group position={[-4, 14, 32]}>
                  <Jellyfish />
                </group>
                {/* nuevos modelos
                 */}
                <group>
                  {coralModels.map((coral, index) => (
                    <mesh
                      key={index}
                      castShadow
                      receiveShadow
                      geometry={nodes["10010_Coral_v1_L3"].geometry}
                      material={materials["10010_Coral_v1"]}
                      position={coral.position}
                      scale={coral.scale}
                    />
                  ))}
                </group>
              </group>
            </Physics>
            <Staging />
            {/* <Html>
              <button>Soluciones</button>
            </Html> */}
          </Suspense>
        </Canvas>
        <div>
          {showButton && (
            <button
              style={{
                position: "absolute",
                top: "80vh",
                left: "80vw",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer",
                fontSize: "2.6rem",
                fontFamily: "Sawer",
              }}
              onClick={() =>
                navigate("/soluciones/acidificacion-de-los-oceanos")
              }
            >
              Soluciones
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploringAcidification;

useGLTF.preload("/models-3d/Shoal.glb");
