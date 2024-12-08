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
import Fish from "./Fish.jsx";
import Leviathan from "./Leviathan.jsx";
import Floor from "./Floor.jsx";

const AcidificationSolutions = () => {
  document.body.style.overflow = "hidden";

  const refCamera = useRef();
  const lightRef = useRef();
  return (
    <>
      <Canvas
        ref={refCamera}
        shadows
        camera={{ position: [10, 0, 68], fov: 95 }}
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
          <Physics
            // debug
            gravity={[0, -9.8, 0]}
          >
            <OrbitControls
              minDistance={20}
              maxDistance={32}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
              enableDamping
              dampingFactor={0.2}
              target={[11, 0, 2]}
              mouseButtons={{
                RIGHT: null,
                LEFT: THREE.MOUSE.LEFT,
              }}
            />
            <directionalLight
              ref={lightRef}
              color={"#9c9535"}
              castShadow
              position={[12, 12, 15]}
              intensity={10}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={8192}
            >
              <OrthographicCamera
                attach="shadow-camera"
                args={[-30, 10, 10, -30]}
              />
            </directionalLight>

            {/* SEGUNDA ILUMINACIÓN */}
            <directionalLight
              ref={lightRef}
              color={"#004cdb"}
              castShadow
              position={[12, 12, 67]}
              intensity={10.8}
              shadow-mapSize-width={4096}
              shadow-mapSize-height={8192}
            >
              <OrthographicCamera
                attach="shadow-camera"
                args={[-30, 10, 10, -30]}
              />
            </directionalLight>

            <Sky
              sunPosition={[0, -0.1, 1]}
              inclination={0.5}
              azimuth={150}
              mieCoefficient={0.02}
              mieDirectionalG={0.8}
              rayleigh={6.5}
              turbidity={6}
              distance={1000000}
              // castShadow={true}
            />

            <group position={[-22, 19, 0]}>
              <Text3D
                font="/fonts/Sawer_Regular.json" // Ruta a tu archivo de fuente
                position={[0, 0, 0]} // Ajusta la posición
                size={4} // Tamaño del texto
                height={0.4} // Profundidad del texto
                curveSegments={12} // Suavidad
                bevelEnabled // Habilitar biselado
                bevelThickness={0.002} // Grosor del bisel
                bevelSize={0.02} // Tamaño del bisel
                bevelSegments={6} // Suavidad del bisel
              >
                <meshBasicMaterial attach="material" color="#0081b9" />{" "}
                SOLUCIONES A LA ACIDIFICACION
              </Text3D>
            </group>

            {/* FISH */}
            <group>
              <>
                <Fish position={[-16, 0, 10]} />
              </>{" "}
            </group>

            <group>
              <>
                <Fish position={[48, 0, 10]} rotation={[0, -Math.PI / 2, 6]} />
              </>{" "}
            </group>

            {/* Leviathan */}
            <group scale={30}>
              <Leviathan position={[-16, 15, -26]} />
            </group>

            <group scale={9} position={[-40, -120, -426]}>
              <Floor />
            </group>

            {/* FLOOR */}
            <group position={[0, -18, -4]}>
              <Floor />
            </group>

            {/* GRID 3X2 */}
            <Html transform>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas
                  gap: "3rem", // Espacio entre elementos
                  width: "100vw", // Ancho del contenedor
                  justifyItems: "center", // Centrar horizontalmente
                  alignItems: "center", // Centrar verticalmente
                  padding: "3rem",
                  marginTop: "10rem",
                  scale: "1.12",
                  // left: "50%",
                  transform: "translateX(15%)",
                }}
              >
                {/* Solución 1 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      padding: "10px",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Reducir emisiones de CO₂</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>· Usar energías renovables.</li>
                      <li>· Promover la reforestación.</li>
                      <li>· Mejorar la eficiencia energética.</li>
                    </ol>
                  </div>
                </div>

                {/* Solución 2 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      padding: "10px",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Proteger los ecosistemas marinos</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>· Restaurar arrecifes de coral.</li>
                      <li>· Conservar manglares y praderas marinas.</li>
                      <li>· Prevenir la contaminación.</li>
                    </ol>
                  </div>
                </div>

                {/* Solución 3 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      padding: "10px",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Pesca sostenible</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>
                        · Regular la pesca para mantener poblaciones saludables.
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Solución 4 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      padding: "10px",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Monitoreo e investigación</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>· Rastrear cambios en el pH.</li>
                      <li>
                        · Desarrollar tecnologías para equilibrar la química del
                        océano.
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Solución 5 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Soluciones basadas en la naturaleza</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>· Fomentar cultivos de algas.</li>
                      <li>· Proteger organismos calcificadores.</li>
                    </ol>
                  </div>
                </div>

                {/* Solución 6 */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "40vw",
                    textAlign: "center",
                    fontSize: "24px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    userSelect: "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4.2rem",
                      color: "white",
                      padding: "10px",
                      borderBottom: "0.3rem solid white",
                    }}
                  >
                    <h1>Colaboración global</h1>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "3rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <ol>
                      <li>· Promover acuerdos internacionales.</li>
                      <li>
                        · Implementar políticas integradas de manejo costero.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </Html>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};

export default AcidificationSolutions;
