import { useRef, useEffect, useState, useCallback } from "react";
import {useGLTF,
  Text,
  Plane,
  Sky,
  useAnimations} from '@react-three/drei'
import { Texto3D } from "../../../components/models/text3d/Texto3D-Desierto";
import { Button3D } from "../../../components/models/button3d/Button3D-Desierto";

const Desierto = (props) => {
  const group = useRef();
  const groupRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/Desierto.glb')

  const { actions } = useAnimations(animations, group) 

  const [isVisible, setIsVisible] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [buttonState, setButtonState] = useState("A QUE SE REFIERE?");

  const handleClick = useCallback(() => {
    if (!clickedOnce) {
      setClickedOnce(true);
      setButtonState("EXPLOREMOS JUNTOS");
      setIsVisible(true)
    } else {
      window.alert("En construccion") ;
    }
  }, [clickedOnce]);


  return (
    <>
        <Sky
        sunPosition={[12, 0.2, -6]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.05}
        rayleigh={0.6}
        turbidity={1}
      />
        <Texto3D text={`ESCASEZ  DEL AGUA`} />
      <Button3D text={buttonState} onClick={handleClick}/>
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
          position={[0, 12, 0]}
          font="/public/fonts/Poppins-Light.otf"
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
          textAlign="justify"
          maxWidth={16}
          opacity={0}
        >
            La escasez de agua es un problema crítico que afecta a millones de personas en todo el mundo, resultado de factores como el crecimiento poblacional, la contaminación, el cambio climático y el uso insostenible de los recursos hídricos. La falta de agua potable no solo impacta la salud y el bienestar humano, sino que también pone en riesgo la agricultura, la biodiversidad y el desarrollo económico. Abordar esta problemática es fundamental para garantizar un futuro sostenible, al ser el agua un recurso esencial para la vida y el equilibrio de los ecosistemas.
          <meshStandardMaterial attach="material" color="white" />
        </Text>
        </group>
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="House"
          position={[-1.966, 0.21, -0.834]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.7}>
          <mesh
            name="Tree_Leave_Plane238"
            castShadow
            receiveShadow
            geometry={nodes.Tree_Leave_Plane238.geometry}
            material={materials.Props}
          />
          <mesh
            name="Tree_Leave_Plane238_1"
            castShadow
            receiveShadow
            geometry={nodes.Tree_Leave_Plane238_1.geometry}
            material={materials.Wood}
          />
          <mesh
            name="Tree_Leave_Plane238_2"
            castShadow
            receiveShadow
            geometry={nodes.Tree_Leave_Plane238_2.geometry}
            material={materials.House}
          />
        </group>
        <group
          name="Desert"
          position={[1.829, 0.726, 2.179]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.261}>
          <mesh
            name="Roca_3003"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Roca_3003_1"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_1.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Roca_3003_2"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_2.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Roca_3003_3"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_3.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Roca_3003_4"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_4.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Roca_3003_5"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_5.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Roca_3003_6"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_6.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Roca_3003_7"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3003_7.geometry}
            material={materials.VRayMtl1SG}
          />
        </group>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Desert Material']}
        />
        <group name="Plane_Plane005" position={[9.98, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Plane_Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Plane_Plane005_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane_Plane005_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_3.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane_Plane005_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_4.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Plane_Plane005_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_5.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Plane_Plane005_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_6.geometry}
            material={materials['Material.007']}
          />
          <mesh
            name="Plane_Plane005_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_7.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Plane_Plane005_8"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_8.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Plane_Plane005_9"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_9.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Plane_Plane005_10"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_10.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Plane_Plane005_11"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_11.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Plane_Plane005_12"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_12.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Plane_Plane005_13"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_13.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Plane_Plane005_14"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_14.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="Plane_Plane005_15"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_15.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="Plane_Plane005_16"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_16.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Plane_Plane005_17"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_17.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Plane_Plane005_18"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_18.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Plane_Plane005_19"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_19.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Plane_Plane005_20"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_20.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Plane_Plane005_21"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_21.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Plane_Plane005_22"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_22.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Plane_Plane005_23"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_23.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Plane_Plane005_24"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_24.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Plane_Plane005_25"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_25.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Plane_Plane005_26"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_26.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Plane_Plane005_27"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_27.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Plane_Plane005_28"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_28.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Plane_Plane005_29"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_29.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Plane_Plane005_30"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_30.geometry}
            material={materials['Material.019']}
          />
          <mesh
            name="Plane_Plane005_31"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_31.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Plane_Plane005_32"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane005_32.geometry}
            material={materials['Material.017']}
          />
        </group>
        <group name="Plane_Plane001" position={[-11.012, 0, 10.044]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Plane_Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Plane_Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane_Plane001_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_3.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane_Plane001_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_4.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Plane_Plane001_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_5.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Plane_Plane001_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_6.geometry}
            material={materials['Material.007']}
          />
          <mesh
            name="Plane_Plane001_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_7.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Plane_Plane001_8"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_8.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Plane_Plane001_9"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_9.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Plane_Plane001_10"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_10.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Plane_Plane001_11"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_11.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Plane_Plane001_12"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_12.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Plane_Plane001_13"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_13.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Plane_Plane001_14"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_14.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="Plane_Plane001_15"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_15.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="Plane_Plane001_16"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_16.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Plane_Plane001_17"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_17.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Plane_Plane001_18"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_18.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Plane_Plane001_19"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_19.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Plane_Plane001_20"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_20.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Plane_Plane001_21"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_21.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Plane_Plane001_22"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_22.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Plane_Plane001_23"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_23.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Plane_Plane001_24"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_24.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Plane_Plane001_25"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_25.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Plane_Plane001_26"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_26.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Plane_Plane001_27"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_27.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Plane_Plane001_28"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_28.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Plane_Plane001_29"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_29.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Plane_Plane001_30"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_30.geometry}
            material={materials['Material.019']}
          />
          <mesh
            name="Plane_Plane001_31"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_31.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Plane_Plane001_32"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane001_32.geometry}
            material={materials['Material.017']}
          />
        </group>
        <group
          name="Plane_Plane002"
          position={[-3.014, 0.113, 8.94]}
          rotation={[1.511, -0.147, -2.551]}>
          <mesh
            name="Plane_Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Plane_Plane002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane_Plane002_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_3.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane_Plane002_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_4.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Plane_Plane002_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_5.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Plane_Plane002_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_6.geometry}
            material={materials['Material.007']}
          />
          <mesh
            name="Plane_Plane002_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_7.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Plane_Plane002_8"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_8.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Plane_Plane002_9"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_9.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Plane_Plane002_10"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_10.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Plane_Plane002_11"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_11.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Plane_Plane002_12"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_12.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Plane_Plane002_13"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_13.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Plane_Plane002_14"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_14.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="Plane_Plane002_15"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_15.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="Plane_Plane002_16"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_16.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Plane_Plane002_17"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_17.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Plane_Plane002_18"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_18.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Plane_Plane002_19"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_19.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Plane_Plane002_20"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_20.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Plane_Plane002_21"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_21.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Plane_Plane002_22"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_22.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Plane_Plane002_23"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_23.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Plane_Plane002_24"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_24.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Plane_Plane002_25"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_25.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Plane_Plane002_26"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_26.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Plane_Plane002_27"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_27.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Plane_Plane002_28"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_28.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Plane_Plane002_29"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_29.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Plane_Plane002_30"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_30.geometry}
            material={materials['Material.019']}
          />
          <mesh
            name="Plane_Plane002_31"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_31.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Plane_Plane002_32"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Plane002_32.geometry}
            material={materials['Material.017']}
          />
        </group>
        <group
          name="Desert001"
          position={[13.984, 0.65, 23.841]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.261}>
          <mesh
            name="Roca_3001"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3001.geometry}
            material={materials['Material.041']}
          />
          <mesh
            name="Roca_3001_1"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3001_1.geometry}
            material={materials['VRayMtl1SG.001']}
          />
        </group>
        <group
          name="Desert002"
          position={[-6.073, 0.399, 23.526]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.261}>
          <mesh
            name="Roca_3002"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3002.geometry}
            material={materials['Material.041']}
          />
          <mesh
            name="Roca_3002_1"
            castShadow
            receiveShadow
            geometry={nodes.Roca_3002_1.geometry}
            material={materials['VRayMtl1SG.001']}
          />
        </group>
      </group>
    </group>
    </>
    
  )
}

export default Desierto;

useGLTF.preload('/models-3d/Desierto.glb')
