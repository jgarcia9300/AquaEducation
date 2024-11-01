import { useRef, useEffect, useState, useCallback } from "react";
import {
  useGLTF,
  OrbitControls,
  Text,
  Plane,
  Sky,
  Loader,
} from "@react-three/drei";
import { Texto3D } from "../text3d/Texto3D";
import { useFrame, useThree } from "@react-three/fiber";
import { AnimationMixer } from "three";
import * as THREE from "three";
import { Button3D } from "../button3d/Button3D";
import gsap from "gsap";

const IntroWater = () => {
  const { scene, animations } = useGLTF("/models-3d/WaterAnimation.glb");
  const mixer = useRef(new AnimationMixer(scene));
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const groupRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [buttonState, setButtonState] = useState("VEAMOS");

  useEffect(() => {
    if (animations && animations.length) {
      const action = mixer.current.clipAction(animations[0]);
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    }
    return () => {
      mixer.current.stopAllAction();
    };
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current.update(delta);
  });

  const animateCameraAndShowContent = () => {
    gsap.to(camera.position, {
      y: camera.position.y - 20,
      duration: 1,
      ease: "power1.out",
      onUpdate: () => {
        controlsRef.current.update();
      },
      onComplete: () => {
        setIsVisible(true);
        gsap.fromTo(
          groupRef.current.position,
          { y: -5 },
          { y: -5, duration: 1 }
        );
        gsap.fromTo(
          groupRef.current.children[0].material,
          { opacity: 0 },
          { opacity: 0.5, duration: 1 }
        );
        gsap.fromTo(
          groupRef.current.children[1].material,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      },
    });
  };

  const handleClick = useCallback(() => {
    if (!clickedOnce) {
      animateCameraAndShowContent();
      setClickedOnce(true);
      setButtonState("IR A EXPLORAR");
    } else {
      window.location.href = "/exploracion/contaminacion-del-agua";
    }
  }, [clickedOnce]);

  return (
    <>
      <Loader />
      <Sky
        sunPosition={[0, 1, -5]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.07}
        rayleigh={1}
        turbidity={2}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 7]} intensity={1} castShadow />
      <primitive object={scene} scale={5} position={[0, 0, 0]} />
      <OrbitControls
        ref={controlsRef}
        args={[camera, gl.domElement]}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        maxDistance={20}
      />
      <Texto3D text={`CONTAMINACIÓN \n       DEL AGUA`} />
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
          position={[0, -1.5, 0]}
          font="/public/fonts/Poppins-Light.otf"
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
          textAlign="justify"
          maxWidth={16}
          opacity={0}
        >
          La contaminación del agua es un grave problema ambiental que ocurre
          cuando sustancias nocivas, como productos químicos y desechos
          industriales, ingresan a cuerpos de agua. Este fenómeno no solo afecta
          la calidad del agua, sino que también pone en riesgo la salud de los
          ecosistemas acuáticos y de las comunidades que dependen de ellos.
          Abordar la contaminación del agua es crucial para proteger nuestros
          recursos hídricos y garantizar un ambiente saludable para todos.
          <meshStandardMaterial attach="material" color="white" />
        </Text>
      </group>
    </>
  );
};

export default IntroWater;
